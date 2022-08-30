import test from 'node:test';
import assert from 'node:assert';
import * as bdi from '../src/bdi.js';

test('returns total dependencies', () => {
  const actual = bdi.totalDependencies();
  const expected = 51;
  assert.equal(actual, expected);
});
test('returns total devdependencies', () => {
  const actual = bdi.totalDevDependencies();
  const expected = 37;
  assert.equal(actual, expected);
});
