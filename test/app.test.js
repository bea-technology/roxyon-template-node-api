import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildApp } from '../src/app.js';

test('health', async () => {
  const app = buildApp();
  const res = await app.inject({ url: '/health' });
  assert.equal(res.statusCode, 200);
  assert.deepEqual(res.json(), { ok: true });
});

test('create a note', async () => {
  const app = buildApp();
  const res = await app.inject({ method: 'POST', url: '/notes', payload: { text: 'hi' } });
  assert.equal(res.statusCode, 201);
  assert.equal(res.json().text, 'hi');
  const bad = await app.inject({ method: 'POST', url: '/notes', payload: {} });
  assert.equal(bad.statusCode, 400);
});
