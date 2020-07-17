import { promises as fs } from 'fs';
import rimraf from 'rimraf';
import fetch from 'node-fetch';
import path from 'path';
import { exec } from 'child_process';
import { once } from 'events';
import { EOL } from 'os';
import { promisify } from 'util';

const files = [
  'JavaParser.g4',
  'JavaLexer.g4'
];

const main = () =>
  withLog(
    'Checking if head is stale... ',
    getIsStale(),
    isStale => isStale ? 'Stale' : 'Up-to date'
  )
  .then(isStale => isStale || process.argv.includes('--force'))
  .then(shouldBuild =>
    !shouldBuild
      ? (console.log('Exiting, use --force to build anyway'), Promise.reject(terminationSignal))
      : Promise.resolve()
  )
  .then(() => withLog('Fetching files from upstream... ', getFiles()))
  .then(files => withLog('Writing files... ', writeFiles(files)))
  .then(() => withLog('Updating head.json... ', updateHead()))
  .then(() => withLog('Generating parser...\n', writeParser()))
  .then(() => withLog('Generating contexts... ', writeParserContexts()))
  .then(() => withLog('Compiling typescript files... ', writeJavascript()))
  .then(() => console.log('Build successful!'))
  .catch(payload =>
    payload === terminationSignal
      ? Promise.resolve()
      : Promise.reject(payload)
  )

const getIsStale = () => 
  Promise.all([getHead(), getUpstreamHead()])
  .then(([head, upstreamHead]) =>
    files.some(file => head[file] !== upstreamHead[file])
  )

const getHead = () =>
  fs.readFile(path.join(__dirname, 'src/head.json'), 'utf-8')
  .then(JSON.parse) as Promise<{ [file: string]: string }>

let upstreamHeadCache: { [file: string]: string } | undefined;
const getUpstreamHead = () =>
  upstreamHeadCache ? Promise.resolve(upstreamHeadCache) :
  Promise.all(
    files.map(file =>
      fetch(`https://api.github.com/repos/antlr/grammars-v4/commits?path=java/java/${file}`)
      .then(res => res.json())
      .then(commits => ({ [file]: commits[0].sha as string }))
    )
  )
  .then(mergeAll)
  .then(upstreamHead => {
    upstreamHeadCache = upstreamHead;
    return Promise.resolve(upstreamHead);
  });
  
const getFiles = () =>
  Promise.all(
    files.map(
      file => 
      fetch(`https://raw.githubusercontent.com/antlr/grammars-v4/master/java/java/${file}`)
      .then(res => res.text())
      .then(data => ({ [file]: data }))
    )
  )
  .then(mergeAll)

const writeFiles = (files: { [file: string]: string }) =>
  Promise.all(
    Object.entries(files)
    .map(([file, data]) =>
      fs.writeFile(path.join(__dirname, 'src/parser/', file), data)
    )
  )

const updateHead = () =>
  getUpstreamHead()
  .then(head =>
    fs.writeFile(
      path.join(__dirname, 'src/head.json'),
      JSON.stringify(head, null, '  ')
    )
  )

const writeParser = () =>
  execCommand(`${prependBinDir('antlr4ts')} -visitor -o src/parser -Xexact-output-dir src/parser/JavaLexer.g4 src/parser/JavaParser.g4`)

const writeParserContexts = () =>
  fs.readFile(path.join(__dirname, '/src/parser/JavaParserListener.ts'), 'utf-8')
  .then(listenerSource =>
    listenerSource
    .split(EOL)
    .map((l) => {
      let matches = l.match(/import\s*\{\s*(.*Context)\s*\}.*/);
      if (matches === null) return null;
      return matches[1];
    })
    .filter((c) => c !== null)
  )
  .then(contexts => contexts.reduce((list, context) => list + `  ${context},${EOL}`, ''))
  .then(exportList => `export {${EOL}${exportList}} from './JavaParser';`)
  .then(contextsSource => fs.writeFile(path.join(__dirname, '/src/parser/JavaContexts.ts'), contextsSource));

const writeJavascript = () => 
  promisify(rimraf)(path.join(__dirname, "/dist"))
  .then(() => execCommand(prependBinDir('tsc')));

const withLog = <T>(
  label: string,
  promise: Promise<T>,
  fulfilMessage: ((value: T) => string) = () => 'Done'
) => {
  process.stdout.write(label);
  return promise
  .then(value => {
    process.stdout.write(fulfilMessage(value) + '\n')
    return Promise.resolve(value);
  })
  .catch(error => {
    process.stdout.write('Something went wrong\n');
    return Promise.reject(error);
  })
}

const terminationSignal = Symbol('terminationSignal');

const execCommand = (command: string) => {
  let childProcess = exec(command, { cwd: __dirname })
  childProcess.stdout.pipe(process.stdout);
  childProcess.stderr.pipe(process.stderr);

  return (
    once(childProcess, 'exit')
    .then(([code]: [number]) => code === 0 ? Promise.resolve() : Promise.reject())
  )
}

const prependBinDir = (p: string) =>
  path.join(__dirname, "/node_modules/.bin/", p);

type MergeAll = <T extends object[]>(xs: T) => UnionToIntersection<T[number]>;
const mergeAll: MergeAll = xs => xs.reduce((m, x) => ({ ...m, ...x }), {}) as any;
  
type UnionToIntersection<U> = 
  (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never

main();