const express = require('express');

// express app
const app = express();

// setup view engine
// npm install ejs
// register view engine
app.set('view engine', 'ejs'); // this defaults to 'views' folder
// app.set('views', 'myviews'); setup a different folder

// listen for requests
app.listen(3000);

// Routing & HTML
app.get('/', (req, res) => {
  // res.send('<p>home page</p>');
  // res.sendFile('./views/index.html', { root: __dirname });
  ///////////////////////////////////////////////////////////
  // instead of sending a file
  // render a view
  res.render('index');
});

app.get('/about', (req, res) => {
  // res.send('<p>about page</p>');
  // res.sendFile('./views/about.html', { root: __dirname });
  res.render('about');
});

app.get('/blogs/create', (req, res) => {
  res.render('create');
});

// redirects
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
    .render('404');
});
