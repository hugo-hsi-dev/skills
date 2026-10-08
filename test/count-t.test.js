'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const { execFileSync } = require('node:child_process');
const path = require('node:path');
const { countT } = require('../bin/count-t.js');

const cli = path.join(__dirname, '..', 'bin', 'count-t.js');

test('counts lowercase and uppercase t', () => {
  assert.equal(countT('The tattered tent'), 6);
});

test('returns 0 when there is no t', () => {
  assert.equal(countT(''), 0);
  assert.equal(countT('hello world'), 0);
});

test('CLI counts the argument and prints only the number', () => {
  assert.equal(execFileSync('node', [cli, 'Tic Tac Toe'], { encoding: 'utf8' }), '3\n');
});

test('CLI joins multiple arguments', () => {
  assert.equal(execFileSync('node', [cli, 'tt', 'TT'], { encoding: 'utf8' }), '4\n');
});

test('CLI reads stdin when no argument is given', () => {
  assert.equal(execFileSync('node', [cli], { input: 'Totally tiny\n', encoding: 'utf8' }), '3\n');
});

test('countLetter counts any character case-insensitively', () => {
  const { countLetter } = require('../bin/count-t.js');
  assert.equal(countLetter('Banana Bread', 'b'), 2);
  assert.equal(countLetter('Banana Bread', 'A'), 4);
});

test('CLI --letter, -l and --letter= pick the character', () => {
  const run = (args) => execFileSync('node', [cli, ...args], { encoding: 'utf8' });
  assert.equal(run(['--letter', 'a', 'Banana Bread']), '4\n');
  assert.equal(run(['-l', 'B', 'Banana Bread']), '2\n');
  assert.equal(run(['--letter=e', 'Banana Bread']), '1\n');
});

test('CLI --letter works with stdin', () => {
  const out = execFileSync('node', [cli, '-l', 'o'], { input: 'Foo Bar\n', encoding: 'utf8' });
  assert.equal(out, '2\n');
});

test('CLI rejects a --letter value that is not exactly one character', () => {
  const { spawnSync } = require('node:child_process');
  for (const args of [['--letter', 'ab', 'text'], ['--letter=', 'text'], ['-l']]) {
    const result = spawnSync('node', [cli, ...args], { input: '', encoding: 'utf8' });
    assert.equal(result.status, 1, `exit code for ${args.join(' ')}`);
    assert.equal(result.stdout, '');
    assert.match(result.stderr, /^count-t: /);
  }
});
