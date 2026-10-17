import { buildApp } from './app.js';

// Roxyon sets PORT and HOST for the app (nginx in front, TLS included). Never hard-code them.
const port = Number(process.env.PORT) || 3000;
const host = process.env.HOST || '127.0.0.1';

const app = buildApp({ logger: true });

try {
  await app.listen({ port, host });
} catch (err) {
  app.log.error(err);
  process.exit(1);
}

for (const sig of ['SIGTERM', 'SIGINT']) {
  process.on(sig, () => app.close().then(() => process.exit(0)));
}
