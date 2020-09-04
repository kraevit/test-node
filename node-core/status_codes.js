// STATUS CODES

// Status codes describe the type of response sent to the browser

// 200 - OK
// 301 - Redirect
// 404 - Not Found
// 500 - Internal server error

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

  // set header content type
  res.setHeader('Content-Type', 'text/html');

  // basic ROUTING
  let path = './views/';
  switch(req.url) {
    case '/':
      path += 'index.html';
      res.statusCode = 200;
      break;
    case '/about':
      path += 'about.html';
      res.statusCode = 200;
      break;
      // 301 REDIRECT
      case 'about-me':
        res.statusCode = 301;
        res.setHeader('Location', '/about');
        res.end();
        break;
    default:
      path += '404.html';
      res.statusCode = 404;
      break;
  }

  // send an html file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.end(data);
    }
  });
});

server.listen(3000, () => {
  console.log('Listening for requests on port 3000');
});
