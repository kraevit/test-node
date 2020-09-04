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
