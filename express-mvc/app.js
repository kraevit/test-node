const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const blogRoutes = require('./routes/blogRoutes');

// Init Express App
const app = express();

// Connect to MongoDB
const dbURI = 'connection string from the mongodb website';
mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then((result) => { 
    // console.log('Connected to db') 
    app.listen(3000) // MOVED HERE
  })
  .catch((err) => console.log(err));

// Set View Engine
app.set('view engine', 'ejs');

// Listen for Requests on Port 3000
// app.listen(3000);  
// WE HAVE TO LISTEN FOR REQUEST ONLY AFTER CONNECTION TO THE DB IS COMPLETED
// MOVE app.listen() to the .then() Block Above


// Middleware & Static Files
app.use(express.static('public'));
app.use(express.urlencoded({extended: true})); // allows accepting form data !!!!!!!!
app.use(morgan('dev'));

// Basic Routing

// Home Page Route Handler
app.get('/', (req, res) => {
  res.redirect('/blogs');
});

// About Page Route Handler
app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

// Blog Routes
app.use('/blogs', blogRoutes);

// 404 Route Handler
app.use((req, res) => {
  res
    .status(404)
    .render('404', { title: '404' });
});
