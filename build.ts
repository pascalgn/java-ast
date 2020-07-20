// tslint:disable:no-console

import { promises as fs } from 'fs';
import rimraf from 'rimraf';
import fetch from 'node-fetch';
import path from 'path';
import { exec } from 'child_process';
import { once } from 'events';
import { EOL } from 'os';
import { promisify } from 'util';

export const grammerFiles = ['JavaParser.g4', 'JavaLexer.g4'];
export const grammerRoot = 'src/parser';

export const main = async () => {
  const heads = await withLog('Reading head.json ', getHead());
  const files = await withLog('Fetching files from upstream... ', getFiles(heads));
  await withLog('Writing files... ', writeFiles(files));
  await withLog('Generating parser...\n', writeParser());
  await withLog('Generating contexts... ', writeParserContexts());
  await withLog('Compiling typescript files... ', writeJavascript());
  console.log('Build successful!');
};

export const getHead = async () =>
  JSON.parse(await fs.readFile(path.join(__dirname, 'src/head.json'), 'utf-8')) as {
    [file: string]: string;
  };

const getFiles = async (heads: { [key: string]: string }) =>
  mergeAll(
    await Promise.all(
      grammerFiles.map(async (file) => {
        const res = await fetch(
          `https://raw.githubusercontent.com/antlr/grammars-v4/${heads[file]}/java/java/${file}`,
        );
        const data = await res.text();
        return { [file]: data };
      }),
    ),
  );

const writeFiles = (files: { [file: string]: string }) =>
  Promise.all(
    Object.entries(files).map(([file, data]) =>
      fs.writeFile(path.join(__dirname, grammerRoot, file), data),
    ),
  );

const writeParser = () => {
  const binary = prependBinDir('antlr4ts');
  return execCommand(
    `${binary} -visitor -o ${grammerRoot} -Xexact-output-dir ${grammerRoot}/JavaLexer.g4 ${grammerRoot}/JavaParser.g4`,
  );
};

const writeParserContexts = async () => {
  const listenerSource = await fs.readFile(
    path.join(__dirname, grammerRoot, 'JavaParserListener.ts'),
    'utf-8',
  );

  const exportList = listenerSource
    .split(EOL)
    .map((l) => {
      const matches = l.match(/import\s*\{\s*(.*Context)\s*\}.*/);
      if (matches === null) return null;
      return matches[1];
    })
    .filter((c) => c !== null)
    .reduce((list, context) => list + `  ${context},${EOL}`, '');

  await fs.writeFile(
    path.join(__dirname, grammerRoot, 'JavaContexts.ts'),
    `export {${EOL}${exportList}} from './JavaParser';`,
  );
};

const writeJavascript = async () => {
  await promisify(rimraf)(path.join(__dirname, '/dist'));
  await execCommand(prependBinDir('tsc'));
};

export const withLog = async <T>(
  label: string,
  promise: Promise<T>,
  fulfilMessage: (value: T) => string = () => 'Done',
) => {
  process.stdout.write(label);
  try {
    const value = await promise;
    process.stdout.write(fulfilMessage(value) + '\n');
    return value;
  } catch (error) {
    process.stdout.write('Something went wrong\n');
    throw error;
  }
};

const execCommand = async (command: string) => {
  const childProcess = exec(command, { cwd: __dirname });
  childProcess.stdout.pipe(process.stdout);
  childProcess.stderr.pipe(process.stderr);

  const [code] = (await once(childProcess, 'exit')) as [number];
  if (code !== 0) throw undefined;
};

const prependBinDir = (p: string) => path.join(__dirname, '/node_modules/.bin/', p);

export type MergeAll = <T extends object[]>(xs: T) => UnionToIntersection<T[number]>;
export const mergeAll: MergeAll = (xs) => xs.reduce((m, x) => ({ ...m, ...x }), {}) as any;

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void
  ? I
  : never;

if (require.main === module) {
  main();
}
