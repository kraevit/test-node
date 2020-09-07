const express = require('express');
const morgan = require('morgan');
const mongoose = require ('mongoose');

const Blog = require('./models/blog');

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
app.use(morgan('dev'));

// Mongoose and Mongo Sandbox Routes

// Create a New Blog in DB Collection
// app.get('/add-blog', (req, res) => {
//   const blog = new Blog({
//     title: 'new blog',
//     snippert: 'about my new blog,
//     body: 'more about my new blog'
//   });

//   blog.save()
//     .then((result) => {
//       res.send(result)
//     })
//     .catch((err) => console.log(err))
// });

// // Retrieve All the Blogs from the DB Collection
// app.get('/all-blogs' , (req, res) => {
//   Blog.find()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err)
//     });
// });

// // Retrieve Single Blog from DB Collection
// app.get('/single-blog', (req, res) => {
//   Blog.findById('blogID')
//     .then((result) => {
//       res.send(result)
//     })
//     .catch((err) => {
//       console.log(err)
//     });
// });

// APLLY THE ABOVE LOGIC (Mongoose and Mongo Sandbox Routes)
// TO THE CURRENT ROUTES WE HAVE BELOW

// Basic Routing

// Home Page Route Handler
app.get('/', (req, res) => {
  // const blogs = [
  //   {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum'},
  //   {title: 'Mario finds stars', snippet: 'Lorem ipsum'},
  //   {title: 'How to defeat browser', snippet: 'Lorem ipsum'}
  // ];
  // res.render('index', { title: 'Home', blogs });
  res.redirect('/blogs');
});

// About Page Route Handler
app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

// Blog Routes
app.get('/blogs', (req, res) => {
  Blog.find().sort({createdAt: -1})
    .then((result) => {
      res.render('index', {title: 'All Blogs', blogs: result});
    })
    .catch((err) => {
      console.log(err);
    });
});

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
