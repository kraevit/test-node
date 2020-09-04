const express = require('express');

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs'); // this defaults to 'views' folder
// app.set('views', 'myviews'); setup a different folder

// listen for requests
app.listen(3000);

// ROUTING

// HOME PAGE ROUTE
app.get('/', (req, res) => {
  // res.send('<p>home page</p>');
  // res.sendFile('./views/index.html', { root: __dirname });

  // INSTEAD OF SENDING A FILE //
  
  // RENDER A VIEW
  // res.render('index');

  // PASSING DATA from APP TO VIEWS
  // res.render('index', { title: 'Home'});

  // PASSING ARRAY OF BLOGS
  const blogs = [
    {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum'},
    {title: 'Mario finds stars', snippet: 'Lorem ipsum'},
    {title: 'How to defeat browser', snippet: 'Lorem ipsum'}
  ];
  // res.render('index', { title: 'Home', blogs: blogs });
  res.render('index', { title: 'Home', blogs }); // SHORTCUT
});

// ABOUT PAGE ROUTE
app.get('/about', (req, res) => {
  // res.send('<p>about page</p>');
  // res.sendFile('./views/about.html', { root: __dirname });
  res.render('about', { title: 'About' });
});

// NEW BLOG PAGE ROUTE
app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
});

// REDIRECTS

// app.get('/about-us', (req, res) => {
//   res.redirect('/about');
// });

// THIS MUST COME AT THE END BECAUSE WHEN EXPRESS MATCHES A ROUTE IT SEND'S THE REQUEST
// AND STOPS THERE
// 404 PAGE
app.use((req, res) => {
  res
    .status(404)
    // .sendFile('./views/404.html', { root: __dirname });
    .render('404', { title: '404' });
});
