#!/usr/bin/env node
'use strict';

function countT(text) {
  return (String(text).match(/t/gi) || []).length;
}

function main() {
  const args = process.argv.slice(2);
  if (args.length > 0) {
    process.stdout.write(`${countT(args.join(' '))}\n`);
    return;
  }
  let input = '';
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', (chunk) => { input += chunk; });
  process.stdin.on('end', () => process.stdout.write(`${countT(input)}\n`));
}

if (require.main === module) main();

module.exports = { countT };
