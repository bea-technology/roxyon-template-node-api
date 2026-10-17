# Roxyon template: Node.js API (Fastify)

A Fastify 5 API in ESM on Node.js 20, with a health check, a sample resource and tests. Roxyon installs dependencies, runs it as a managed process behind HTTPS and restarts it if it crashes.

## Deploy to Roxyon in 3 steps

**From the terminal**

1. Install the CLI and sign in:
   `npm i -g @roxyon/cli && roxyon login`
2. Set `host` in `roxyon.json` to a host on your Roxyon account: one of your domains, a subdomain of
   one, or a free `<name>.roxyon.com` (add it in the [console](https://console.roxyon.com) first, or
   ask your AI agent to add it).
3. Deploy:
   `roxyon deploy`

**With your AI agent**

1. Open this folder in an agent that supports MCP (Claude Code, Cursor, VS Code, ...). `.mcp.json`
   connects it to the Roxyon MCP server at `https://mcp.roxyon.com/mcp`; sign in with your Roxyon
   account when it asks.
2. Say: **"Deploy this to Roxyon at <name>.roxyon.com"**.
3. The agent adds the host if needed, deploys, and gives you the URL. Static files go up through the
   Roxyon MCP server; a server app is deployed with `roxyon deploy` (the CLI above) or the
   `roxyon_deploy` tool of the local MCP server (`npx -y @roxyon/mcp`), since both read this
   folder from your machine.

## Run it locally

```bash
npm install
npm run dev     # http://127.0.0.1:3000
npm test
```

## Files

- `roxyon.json`: how Roxyon builds and serves this project (`host`, `runtime`, `kind`, ...).
  `application` is added on the first deploy of a server app; commit it so later deploys update the
  same app.
- `.mcp.json`: the Roxyon MCP server for AI agents.

Docs for AI assistants: https://roxyon.com/llms.txt · Status: https://roxyon.com/status

## License

MIT
