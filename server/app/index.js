import http from "http";
import app from "./app.js";


const server = http.createServer(app);


const port = 3001;

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});