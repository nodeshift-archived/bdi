import test from 'node:test';
import assert from 'node:assert';
import FakeServer from './fake-server.js';
import * as fetcher from '../src/fetcher.js';

test('fetcher', async _ => {
  const server = FakeServer.create();
  const response = await fetcher.fetchAll();
  assert.strictEqual(response.length,3);
  server.close();
});