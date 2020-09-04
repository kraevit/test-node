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