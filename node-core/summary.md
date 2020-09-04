### global_object.js

```javascript
console.log(global);
console.log(__dirname);
console.log(__filename);

setTimeout(() => {
  console.log('in the moment');
  clearInterval(interval);
}, 3000);

const interval = setInterval(() => {
  console.log('in the interval');
}, 1000);
```

### os_module.js

```javascript
const os = require('os');

console.log(os);
console.log(os.platform());
console.log(os.homedir());
```

### fs_module.js

```javascript
const fs = require('fs');

// READ FILES
// fs.readFile('pat-to-the-file', (err, data) => {});

fs.readFile('./docs/blog1.txt', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data) // <Buffer>
    console.log(data.toString()) // String
  }
});

// WRITING FILES
// fs.writeFile('path-to-the-file', 'what-to-write', () => {});

// REPLACE CONTENT

fs.writeFile('./docs/blog1.txt', 'hello world', () => {
  console.log('file was written');
});

// CREATING FILES (IF NOT EXISTS)

fs.writeFile('./docs/blog2.txt', 'hello world', () => {
  console.log('file was written');
});

// DIRECTORIES

if (!fs.existsSync('./assets')) {
  fs.mkdir('./assets', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('folder created');
  });
} else {
  fs.rmdir('./assets', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('folder deleted');
  });
}

// DELETING FILES
// fs.unlink('path-to-the-file', (err) => {});

if (fs.existsSync('./docs/deleteme.txt')) {
  fs.unlink('./docs/deleteme.txt', (err) => {
    console.log(err);
  })
  console.log('file deleted');
}
```

### File Streams & Buffers

```javascript
// READ AND WRITE DATA - LARGE FILES
// STREAMS - START USING DATA, BEFORE IT HAS FINISHED LOADING
const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf-8'});
const writeStream = fs.writeStream('./docs/blog4.txt');

// Read Streams - Chunk of data in <Buffers>

// readStream.on('data', (chunk) => {
//   console.log('--------NEW CHUNK ------');
//   console.log(chunk);
//   // Write Streams
//   writeStream.write('\nNEW CHUNK\n');
//   writeStream.write(chunk);
// });

// Piping ( shortcut for the above code )
readStream.pipe(writeStream);
```

### Custom Modules

```javascript
// EXAMPLE FILE: (((people.js)))

const people = ['yoshi', 'pesho', 'rijo', 'mario'];
const ages = [20, 25, 30, 35, 40];

// SINGLE EXPORT
module.exports = people;

// MULTIPLE
module.exports = {
  people: people,
  ages: ages
};

// SHORTCUT
module.exports = { 
  people, 
  ages 
};

// IMPORT people.js module IN ANOTHER FILE

// SINGLE IMPORT
const people = require('./people');

// MULTIPLE IMPORTS 
// USING DESTRUCTURING ASSIGNMENT
const { people, ages } = require('./people');
console.log(people);
console.log(ages);
```

### HTTP Module / http_server.js
```javascript
// EXAMPLE FILE: (((people.js)))

const people = ['yoshi', 'pesho', 'rijo', 'mario'];
const ages = [20, 25, 30, 35, 40];

// SINGLE EXPORT
module.exports = people;

// MULTIPLE
module.exports = {
  people: people,
  ages: ages
};

// SHORTCUT
module.exports = { 
  people, 
  ages 
};

// IMPORT people.js module IN ANOTHER FILE

// SINGLE IMPORT
const people = require('./people');

// MULTIPLE IMPORTS 
// USING DESTRUCTURING ASSIGNMENT
const { people, ages } = require('./people');
console.log(people);
console.log(ages);
```

### HTTP Module - http_server.js

```javascript
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
```

### HTTP Module - http_req_res.js

```javascript
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
```

### Returning HTML Files

```javascript
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
```

### Basic Routing

```javascript
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

  // set header content type
  res.setHeader('Content-Type', 'text/html');

  // basic ROUTING
  let path = './views';
  switch(req.url) {
    case '/':
      path += 'index.html';
      break;
    case '/about':
      path += 'about.html';
      break;
    default:
      path += '404.html';
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
```

### Status Codes

```javascript
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
  let path = './views';
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
        res.setHeader('Localtion', '/about');
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
```