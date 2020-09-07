const mongoose = require('mongoose');
const Schema = mongoose.Schema; // Wrapper Around a Model

// SCHEMA - Defines the structure of our document
const blogSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  snipper: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  }
}, { timestamps: true });

// MODEL - Surrounds the SCHEMA and provides us with an interface by which to comunicate
// with the DB Collection for that Document
// Model name should be singular of the collection name eg: .model('Blog') looks up for a collection
// with the name 'blogs' / plural /

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;