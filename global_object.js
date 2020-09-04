// Global Object

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
