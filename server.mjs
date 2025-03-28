import dotenv from "dotenv"
dotenv.config()
import { createServer } from "http";
import { parse } from "url";
import next from "next";
import { Server } from "socket.io"; // Import Socket.IO server
import logger, { ClearLogs } from "./logger.mjs";

const port = parseInt(process.env.PORT);
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev, turbo: dev });
const handle = app.getRequestHandler();

console.log(`Starting up nextjs server at port: ${port}...`)

let io;

app.prepare().then(() => {

  // Clear previous logs
  ClearLogs()

  // Create HTTP server
  const server = createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  });

  // Attach Socket.IO to the server
  io = new Server(server, {
    cors: {
      origin: "*", // Allow all origins (adjust for production)
      methods: ["GET", "POST"],
    },
  });

  // Handle Socket.IO connections
  io.on("connection", (socket) => {
    console.info("A user connected via WebSocket");

    // Example: Handle a custom event
    socket.on("send_message", (data) => {
      logger.info("Message received: " + JSON.stringify(data));
      // Broadcast to all connected clients
      io.emit("receive_message", data);
    });

    // Handle disconnection
    socket.on("disconnect", () => {
      logger.info("A user disconnected");
    });

    global.io = io
  });

  // Start the server
  server.listen(port, () => {
    logger.info(
      `> Server listening at http://localhost:${port} as ${
        dev ? "development" : process.env.NODE_ENV
      }`
    );

    logger.info("Cleared previous logger data");
    logger.info("Server started");
    logger.info("Using Database: " + process.env.DATABASE_URL);

    const id = "20241218-903510";
    const url = `${process.env.LOCAL_ADDRESS}/api/v1/articles/${id}`;
    logger.info("URL=" + url);
  });
});

export const GetIO = () => io