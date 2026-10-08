#!/usr/bin/env node
'use strict';

function countLetter(text, letter = 't') {
  const target = letter.toLowerCase();
  let count = 0;
  for (const char of String(text).toLowerCase()) {
    if (char === target) count += 1;
  }
  return count;
}

function countT(text) {
  return countLetter(text, 't');
}

function parseArgs(argv) {
  let letter = 't';
  const words = [];
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--letter' || arg === '-l') {
      if (i + 1 >= argv.length) throw new Error(`${arg} requires a value`);
      letter = argv[i + 1];
      i += 1;
    } else if (arg.startsWith('--letter=')) {
      letter = arg.slice('--letter='.length);
    } else {
      words.push(arg);
    }
  }
  if ([...letter].length !== 1) {
    throw new Error(`--letter must be exactly one character, got ${JSON.stringify(letter)}`);
  }
  return { letter, words };
}

function main() {
  let options;
  try {
    options = parseArgs(process.argv.slice(2));
  } catch (error) {
    process.stderr.write(`count-t: ${error.message}\n`);
    process.exitCode = 1;
    return;
  }
  const { letter, words } = options;
  if (words.length > 0) {
    process.stdout.write(`${countLetter(words.join(' '), letter)}\n`);
    return;
  }
  let input = '';
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', (chunk) => { input += chunk; });
  process.stdin.on('end', () => process.stdout.write(`${countLetter(input, letter)}\n`));
}

if (require.main === module) main();

module.exports = { countLetter, countT, parseArgs };
