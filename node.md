### Global Object

```javascript
console.log(global);
console.log(__dirname);
console.log(__filename);
```

```javascript
setTimeout(() => {
  console.log('in a moment');
  clearInterval(interval);
}, 3000);

const interval = setInterval(() => {
  console.log('in the interval');
}, 1000);
```

### Built in Modules:

```javascript
// os - operating system
const os = require('os');
console.log(os);
console.log(os.platform());
console.log(os.homedir());
```

```javascript
// fs - file system
const fs = require('fs');

// read file

// fs.readFile('filepath', callback(err, data) => {});

fs.readFile('./docs/post-1.txt', (err, data) => {
  if (err) {
    console.log(err)
  }
  console.log(data); // <Buffer>
  console.log(data.toString());

// write in file (replace the content)

// fs.writeFile('filepath', 'text to be written in the file', () => console.log('file was written'));

fs.writeFile('./docs/blog1.txt', 'the text to be written in the file', () => {
  console.log('file was written');
});

// creates file if doesn't exists

fs.writeFile('./docs/post-2.txt', 'lorem ipsum dolor', () => {
  console.log('file was written');
});

// directories

if ( !fs.existsSync('./assets') ) { // create new folder if not exists
  fs.mkdir('./assets', err => {
    if (err) {
      console.log(err) 
    }
    console.log('folder created.');
  });
} else {
  fs.rmdir('./assets', err => { // delete the folder if exists
    if (err) {
      console.log(err);
    }
    console.log('folder deleted');
  });
}

// delete files (unlink)
if (fs.existsSync('./docs/deleteme.txt')) {
  fs.unlink('./docs/deleteme.txt', err => {
    if (err) {
      console.log(err);
    }
    console.log('file deleted');
  });
}
```

### File Streams & Buffers

```javascript
// read and write data to a BIG FILE
// streams? - start using data, before it has finished loading 

const fs = require('fs');

const readStream = fs.createReadStream('./docs/post-3.txt', {encoding: 'utf-8'});
const writeStream = fs.writeStream('./docs/post-4.txt');

// readStream.on('data', chunk => {
//   console.log('---NEW CHUNK---');
//   console.log(chunk);
//   writeStream.write('\nNEW CHUNK\n');
//   writeStream.write(chunk);
// });

// SHORTCUT for the above commented code:
readStream.pipe(writeStream); // one line :)
```

### Custom Modules

```javascript

// example file 'people.js' >>
// content of the 'people.js' file:
const people = ['pesho', 'pisho'];
const ages = [10,12];

// Export Module
module.exports = people; // single export
module.exports = { people: people, ages: ages }; // multi export
module.exports = { people, ages } // shortcut

// Import Module

const people = require('./people'); // single import
const { people, ages } = require('./people'); // multi import using destructuring
```

### HTTP

```javascript

// require http module
const http = require('http');

// create server object
const server = http.createServer((req, res) => {
  console.log('request made');
});

const port = 3000;
const hostname = 'localhost';

// listen for requests
server.listen(port, hostname, () => {
  console.log(`listening for requests on port ${port}`);
});

```
