const Blog = require("../models/Blog");

exports.createBlog = async (req, res) => {
  const { title, content } = req.body;
  const author = req.user.id;

  const newPost = new Blog({
    title: title,
    content: content,
    author: author,
  });

  try {
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    res.status(500).json({ error: "Error creating post" });
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Blog.find().populate("author", "username");
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: "Error fetching posts" });
  }
};
