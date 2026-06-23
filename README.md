# Basic Node.js HTTP Server

A minimal HTTP server built using Node.js's built-in `http` module — no frameworks, no dependencies.

## What it does

- Creates an HTTP server using the native `http` module
- Logs every incoming request to the console
- Responds with a `200 OK` status and a plain text message to the browser

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine

### Run the server

```bash
node index.js
```

You should see this in your terminal:

```
http server is up and running on port 8000
```

### Test it

Open your browser and visit:

```
http://localhost:8000
```

You'll see `THANKS FOR VISITING MY SERVER` in the browser, and your terminal will log `I got an incoming request` on every hit.

## How it works

| Part | Description |
|------|-------------|
| `http.createServer()` | Creates the server; callback runs on every request |
| `res.writeHead(200)` | Sets HTTP status to `200 OK` |
| `res.end()` | Sends the response body and closes the connection |
| `server.listen(8000)` | Starts the server on port `8000` |

## Notes

- No `npm install` needed — pure Node.js built-ins
- Stop the server with `Ctrl + C`
- Change `8000` in `server.js` if the port is taken
