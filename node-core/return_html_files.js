// require http module
const http = require('http');
// require file system module
const fs = require('fs');

// create the server
const server = http.createServer((req, res) => {

  // set the content type
  res.setHeader('Content-Type', 'text/html');

  // send an html file
  fs.readFile('./views/index.html', (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      // res.write(data); // used for sending multiple things
      res.end(data); // instead if send only 1 thing send to the .end
    }
  });
});

server.listen(3000, () => {
  console.log('Listening for requests on port 3000');
});