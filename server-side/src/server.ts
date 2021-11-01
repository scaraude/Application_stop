/* eslint-disable no-undef */
require("dotenv").config({ path: '/Users/ludovic/Application_stop/.env' });
import http from "http";
import { app } from "./app";
import { logger } from "./utils/logger";

const normalizePort = (portAsString: string): string | number | boolean => {
  const port = parseInt(portAsString, 10);

  if (isNaN(port)) {
    return portAsString;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};
const port = normalizePort(process.env.PORT || "8080");
app.set("port", port);

const errorHandler = (error: { syscall: string; code: string }) => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const address = server.address();
  const bind =
    typeof address === "string" ? "pipe " + address : "port: " + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges.");
      process.exit(1);
    case "EADDRINUSE":
      console.error(bind + " is already in use.");
      process.exit(1);
    default:
      throw error;
  }
};

const server = http.createServer(app);

server.on("error", errorHandler);
server.on("listening", () => {
  const address = server.address();
  const bind = typeof address === "string" ? "pipe " + address : "port " + port;
  logger.info("Listening on " + bind);
});

server.listen(port);
