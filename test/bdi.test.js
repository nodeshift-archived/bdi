import test from 'node:test';
import assert from 'node:assert';
import * as bdi from '../src/bdi.js';

test('returns total dependencies', () => {
  const actual = bdi.totalDependencies();
  const expected = 1;
  assert.equal(actual, expected);
});
