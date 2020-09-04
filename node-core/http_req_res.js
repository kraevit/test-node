// require http module
const http = require('http');

// create the server
const server = http.createServer((req, res) => {
  
  // The Request Object
  console.log(req.url, req.method);

  // The Response Object:

  // 1. Set Header Content-Type
  // res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Type', 'text/html');

  // 2. Send HTML Back to the Browser
  res.write('<head><link rel="stylesheet" type="text/css" href="#"></head>');
  res.write('<p>hello, minjas</p>');
  res.write('hello again, minjas');
  res.end();

});

// listen for requests on port 3000
server.listen(3000, () => {
  console.log('listening for requests on port 3000');
});
