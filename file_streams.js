// Streams & Buffers
// read and write data to a LARGE files

// Streams - start using data, before it has finished loading
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