import { Server } from "socket.io";
import http from "http";

const configureSocket = (server: http.Server): Server => {
  const io = new Server(server, {
    cors: {
      origin: "*",
    },
  });

  io.on("connection", (socket) => {
    console.log(`New client connected: ${socket.id}`);

    socket.on("joinRoom", (room: string) => {
      socket.join(room);
      console.log(`User joined room: ${room}`);
    });

    socket.on("message", (data) => {
      io.to(data.room).emit("message", data);
    });

    socket.on("disconnect", () => {
      console.log(`Client disconnected: ${socket.id}`);
    });
  });

  return io;
};

export default configureSocket;
