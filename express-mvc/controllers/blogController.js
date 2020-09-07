const Blog = require('./models/blog');

// blog_index, blog_details, blog_create_get, blog_create_post, blog_deletes
const blog_index = (req, res) => {
  Blog.find().sort({createdAt: -1})
    .then((result) => {
      res.render('index', {title: 'All Blogs', blogs: result});
    })
    .catch((err) => {
      console.log(err);
    });
}

const blog_details = (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      res.render('details', {title: 'Blog Details', blog: result});
    })
    .catch((err) => {
      console.log(err);
    });
}

const blog_create_get = (req, res) => {
  res.render('create', { title: 'Create a new blog' });
}

const blog_create_post = (req, res) => {
  const blog = new Blog(req.body); // req.body == {} from webform allowed from this middleware app.use(express.urlencoded({extended: true}));" line: 34
  blog.save()
    .then((result) => {
      res.redirect('/blogs'); // 301
    })
    .catch((err) => {
      console.log(err);
    });
}

const blog_delete = (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    then((result) => {
      res.json({ redirect: '/blogs' });
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = {
  blog_index,
  blog_details,
  blog_create_get,
  blog_create_post,
  blog_delete
};

