import http from "http";
import app from "./app";
import connectDB from "./config/dbConfig";
import configureSocket from "./config/socketConfig";

const PORT = process.env.PORT || 5000;

// Start the server
const server = http.createServer(app);
const io = configureSocket(server);

connectDB().then(() => {
  server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
