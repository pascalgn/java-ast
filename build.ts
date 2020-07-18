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

const main = async () => {
  let isStale = await withLog(
    'Checking if head is stale... ',
    getIsStale(),
    isStale => isStale ? 'Stale' : 'Up-to date'
  )
  if (!isStale && !process.argv.includes('--force')) {
    console.log('Exiting, use --force to build anyway');
    return;
  }
  let files = await withLog('Fetching files from upstream... ', getFiles());
  await withLog('Writing files... ', writeFiles(files));
  await withLog('Updating head.json... ', updateHead());
  await withLog('Generating parser...\n', writeParser());
  await withLog('Generating contexts... ', writeParserContexts());
  await withLog('Compiling typescript files... ', writeJavascript());
  console.log('Build successful!');
}

const getIsStale = async () => {
  let [head, upstreamHead] = await Promise.all([getHead(), getUpstreamHead()]);
  return files.some(file => head[file] !== upstreamHead[file]);
}

const getHead = async () =>
  JSON.parse(
    await fs.readFile(path.join(__dirname, 'src/head.json'), 'utf-8')
  ) as { [file: string]: string };

let upstreamHeadCache: { [file: string]: string } | undefined;
const getUpstreamHead = async () => {
  if (upstreamHeadCache) return upstreamHeadCache;

  let upstreamHead = mergeAll(
    await Promise.all(
      files.map(async file => {
        let res = await fetch(`https://api.github.com/repos/antlr/grammars-v4/commits?path=java/java/${file}`);
        let commits = await res.json();
        return { [file]: commits[0].sha as string };
      })
    )
  )
  upstreamHeadCache = upstreamHead;
  return upstreamHead;
}
  
const getFiles = async () =>
  mergeAll(await Promise.all(
    files.map(async file => {
      let res = await fetch(`https://raw.githubusercontent.com/antlr/grammars-v4/master/java/java/${file}`)
      let data = await res.text();
      return { [file]: data };
    })
  ))

const writeFiles = (files: { [file: string]: string }) =>
  Promise.all(
    Object.entries(files)
    .map(([file, data]) =>
      fs.writeFile(path.join(__dirname, 'src/parser/', file), data)
    )
  )

const updateHead = async () =>
  fs.writeFile(
    path.join(__dirname, 'src/head.json'),
    JSON.stringify(await getUpstreamHead(), null, '  ')
  )

const writeParser = () =>
  execCommand(`${prependBinDir('antlr4ts')} -visitor -o src/parser -Xexact-output-dir src/parser/JavaLexer.g4 src/parser/JavaParser.g4`)

const writeParserContexts = async () => {
  let listenerSource = await fs.readFile(path.join(__dirname, '/src/parser/JavaParserListener.ts'), 'utf-8');

  let exportList = 
    listenerSource
    .split(EOL)
    .map((l) => {
      let matches = l.match(/import\s*\{\s*(.*Context)\s*\}.*/);
      if (matches === null) return null;
      return matches[1];
    })
    .filter((c) => c !== null)
    .reduce((list, context) => list + `  ${context},${EOL}`, '');

  await fs.writeFile(
    path.join(__dirname, '/src/parser/JavaContexts.ts'),
    `export {${EOL}${exportList}} from './JavaParser';`
  );
}

const writeJavascript = async () => {
  await promisify(rimraf)(path.join(__dirname, "/dist"))
  await execCommand(prependBinDir('tsc'))
}

const withLog = async <T>(
  label: string,
  promise: Promise<T>,
  fulfilMessage: ((value: T) => string) = () => 'Done'
) => {
  process.stdout.write(label);
  try {
    let value = await promise;
    process.stdout.write(fulfilMessage(value) + '\n')
    return value;
  } catch (error) {
    process.stdout.write('Something went wrong\n');
    throw error;
  }
}

const execCommand = async (command: string) => {
  let childProcess = exec(command, { cwd: __dirname })
  childProcess.stdout.pipe(process.stdout);
  childProcess.stderr.pipe(process.stderr);

  let [code] = await once(childProcess, 'exit') as [number];
  if (code !== 0) throw undefined;
}

const prependBinDir = (p: string) =>
  path.join(__dirname, "/node_modules/.bin/", p);

type MergeAll = <T extends object[]>(xs: T) => UnionToIntersection<T[number]>;
const mergeAll: MergeAll = xs => xs.reduce((m, x) => ({ ...m, ...x }), {}) as any;
  
type UnionToIntersection<U> = 
  (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never

main();