import Fastify from 'fastify';

// Build the app without listening, so tests can call it with app.inject().
export function buildApp(opts = {}) {
  const app = Fastify(opts);

  // Roxyon's health check and your uptime monitor can both use this.
  app.get('/health', async () => ({ ok: true }));

  app.get('/', async () => ({
    hello: 'from Roxyon',
    docs: 'https://roxyon.com/llms.txt',
  }));

  // A small example resource. Replace with your own routes.
  const notes = [];
  app.get('/notes', async () => notes);
  app.post('/notes', {
    schema: {
      body: {
        type: 'object',
        required: ['text'],
        properties: { text: { type: 'string', minLength: 1, maxLength: 500 } },
      },
    },
  }, async (req, reply) => {
    const note = { id: notes.length + 1, text: req.body.text, at: new Date().toISOString() };
    notes.push(note);
    return reply.code(201).send(note);
  });

  return app;
}
