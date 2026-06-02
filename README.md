# Artifact4

A minimal Node.js + Express server exposing two plain-text HTTP `GET` endpoints.

## Prerequisites

- Node.js **>= 18** — matches the `engines.node` field in `package.json` and the Express 5 engine floor. Verified on the Node.js 20.x LTS line.

## Installation

Install the dependencies (Express) from the project root:

```bash
npm install
```

## Running the server

Start the server:

```bash
npm start
```

By default the server listens on http://localhost:3000. The listening port is configurable via the `PORT` environment variable (the server uses `process.env.PORT || 3000`):

```bash
PORT=8080 npm start
```

## Endpoints

The server exposes two static `GET` endpoints, each returning a plain-text body. `GET /` is the baseline endpoint and `GET /good-evening` is the additional endpoint.

| Method | Path | Response (body) |
| ------ | --------------- | --------------- |
| `GET` | `/` | `Hello world` |
| `GET` | `/good-evening` | `Good evening` |

Example requests (with the server running):

```bash
curl localhost:3000/
# Hello world

curl localhost:3000/good-evening
# Good evening
```
