import test from 'node:test';
import assert from 'node:assert';
import * as bdi from '../src/bdi.js';

test('returns total dependencies', () => {
  const actual = bdi.totalDependencies();
  const expected = 4;
  assert.equal(actual, expected);
});
test('returns total devdependencies', () => {
  const actual = bdi.totalDevDependencies();
  const expected = 3;
  assert.equal(actual, expected);
});
