/**
 * server.js — Artifact4 Express application entrypoint.
 *
 * A minimal Node.js HTTP server built on Express 5. It exposes two static
 * `GET` endpoints and starts an HTTP listener:
 *
 *   - GET /              -> responds with the plain-text body "Hello world"
 *   - GET /good-evening  -> responds with the plain-text body "Good evening"
 *
 * Any other path falls through to Express's built-in 404 handler, so routing
 * is selective rather than catch-all.
 *
 * Conventions (greenfield project):
 *   - CommonJS module format (`require`, not ESM `import`).
 *   - Single entrypoint file referenced by package.json `main` and the
 *     `start` script (`node server.js`).
 *   - Configurable listen port via `process.env.PORT`, defaulting to 3000.
 *
 * Run with `npm start` (equivalently `node server.js`).
 */

'use strict';

// Express is the only dependency; it is declared in package.json
// ("express": "^5.2.1") and installed into node_modules/ via `npm install`.
const express = require('express');

// Create the Express application instance.
const app = express();

// Listen port: honor the PORT environment variable when provided (e.g. for
// container/platform-assigned ports), otherwise fall back to 3000 for local
// development.
const PORT = process.env.PORT || 3000;

// Baseline endpoint (R2): the originally described "Hello world" behavior,
// mapped to the root path so it remains reachable.
app.get('/', (req, res) => res.send('Hello world'));

// New endpoint (R3): returns the "Good evening" greeting.
app.get('/good-evening', (req, res) => res.send('Good evening'));

// Bind the HTTP listener and log the URL once on startup. The callback keeps
// developer ergonomics simple: a single, clear "where am I listening?" line.
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
