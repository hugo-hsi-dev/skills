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
