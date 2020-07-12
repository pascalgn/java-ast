// @ts-check

const fs = require('fs').promises;
const path = require('path');
const { EOL } = require('os');

const listenerFilePath = path.join(__dirname, '/src/parser/JavaParserListener.ts');
const contextsFilePath = path.join(__dirname, '/src/parser/JavaContexts.ts');

const main = () =>
  fs
    .stat(listenerFilePath)
    .catch(
      () => 'src/parser/JavaParserListener.ts not found use generate:parser script to generate it',
    )
    .then(() => fs.readFile(listenerFilePath, 'utf-8'))
    .then((listenerSource) =>
      listenerSource
        .split(EOL)
        .map((l) => {
          let matches = l.match(/import\s*\{\s*(.*Context)\s*\}.*/);
          if (matches === null) return null;
          return matches[1];
        })
        .filter((c) => c !== null),
    )
    .then((contexts) => contexts.reduce((list, context) => list + `  ${context},${EOL}`, ''))
    .then((exportList) => `export {${EOL}${exportList}} from './JavaParser';`)
    .then((contextsSource) => fs.writeFile(contextsFilePath, contextsSource));

main().catch((error) => {
  if (typeof error !== 'string') throw error;
  console.log('Failure: ' + error);
  process.exit(1);
});
