// tslint:disable:no-console
import { promises as fs } from 'fs';
import fetch from 'node-fetch';
import path from 'path';
import { getHead, grammerFiles, main as buildMain, mergeAll, withLog } from './build';

const main = async () => {
  const isStale = await withLog('Checking if head is stale... ', getIsStale(), (isStaleValue) =>
    isStaleValue ? 'Stale' : 'Up-to date',
  );
  if (!isStale && !process.argv.includes('--force')) {
    console.log('Exiting, use --force to build anyway');
    return;
  }
  await withLog('Updating head.json... ', updateHead());
  await buildMain();
};

const getIsStale = async () => {
  const [head, upstreamHead] = await Promise.all([getHead(), getUpstreamHead()]);
  return grammerFiles.some((file) => head[file] !== upstreamHead[file]);
};

let upstreamHeadCache: { [file: string]: string } | undefined;
const getUpstreamHead = async () => {
  if (upstreamHeadCache) return upstreamHeadCache;

  const upstreamHead = mergeAll(
    await Promise.all(
      grammerFiles.map(async (file) => {
        const res = await fetch(
          `https://api.github.com/repos/antlr/grammars-v4/commits?path=java/java/${file}`,
        );
        const commits = await res.json();
        return { [file]: commits[0].sha as string };
      }),
    ),
  );
  upstreamHeadCache = upstreamHead;
  return upstreamHead;
};

const updateHead = async () =>
  fs.writeFile(
    path.join(__dirname, 'src/head.json'),
    JSON.stringify(await getUpstreamHead(), null, '  '),
  );

main();
