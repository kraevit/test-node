const express = require('express');
const morgan = require('morgan'); // 3rd Party Middleware (Logger)

// Init Express App
const app = express();

// Set View Engine
app.set('view engine', 'ejs');  // Default Folder is 'views'
// app.set('views', 'myviews'); // Setup a Custom Folder 

// Listen for Requests on Port 3000
app.listen(3000);

// Middleware
// Using next() 
// app.use((req, res, next) => {
//   console.log('new request made:');
//   console.log('host:' , req.hostname);
//   console.log('path: ', req.path);
//   console.log('method: ', req.method);
//   next();
// });

// Middleware & Static Files
app.use(express.static('public'));
app.use(morgan('dev'));

// Basic Routing

// Home Page Route Handler
app.get('/', (req, res) => {

  // Send HTML Code
  // res.send('<p>home page</p>');
  
  // Send HTML File
  // res.sendFile('./views/index.html', { root: __dirname });
  
  // Render Views
  // res.render('index');

  // Pass Data from app.js to 'views'
  // res.render('index', { title: 'Home'});

  // Pass Array from app.js to 'views'
  const blogs = [
    {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum'},
    {title: 'Mario finds stars', snippet: 'Lorem ipsum'},
    {title: 'How to defeat browser', snippet: 'Lorem ipsum'}
  ];
  // res.render('index', { title: 'Home', blogs: blogs });
  res.render('index', { title: 'Home', blogs }); // Shortcut blogs: blogs to just blog
});

// About Page Route Handler
app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

// Create Page Route Handler
app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
});

// 301 Redirect
app.get('/about-us', (req, res) => {
  res.redirect('/about');
});

// 404 - Must Be Always at the Bottom !
app.use((req, res) => {
  res
    .status(404)
    .render('404', { title: '404' });
});
