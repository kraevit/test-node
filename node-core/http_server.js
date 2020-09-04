// Create a Local Server using Node.js

const http = require('http');

const server = http.createServer((req, res) => {
  console.log('request made');
});

const port = 3000;
const hostname = '127.0.0.1';
server.listen(port, hostname, () => {
  console.log('listening for requests on port 3000');
});
