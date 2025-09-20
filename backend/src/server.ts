import http from "http";
import { Server as SocketServer } from "socket.io";
import mongoose from "mongoose";
import app from "./app";
import { MONGO_URI } from "./config";

const server = http.createServer(app);
const io = new SocketServer(server, {
  cors: { origin: "*" }
});

mongoose.connect(MONGO_URI)
  .then(() => {
    server.listen(5000, () => console.log("Server running on port 5000"));
  });

io.on("connection", (socket) => {
  console.log("Socket connected:", socket.id);
  // handle real-time events (itinerary, voting, notifications, etc)
});