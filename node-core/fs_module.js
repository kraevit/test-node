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
