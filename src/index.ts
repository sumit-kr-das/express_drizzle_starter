import "dotenv/config";
import http from "http";
import app from "./app";

const PORT = Number(process.env.PORT) || 3000;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});

// Graceful shutdown (optional)
const shutdown = (signal: string) => {
  console.log(`\nReceived ${signal}. Closing server...`);
  server.close(() => {
    console.log("Server closed.");
    process.exit(0);
  });
};

["SIGINT", "SIGTERM"].forEach(sig => {
  process.on(sig as NodeJS.Signals, () => shutdown(sig));
});
