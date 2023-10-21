const { Post } = require("../models");

exports.createPost = async (req, res) => {
  try {
    const { title, description, category } = req.body;
    const newPost = new Post({ title, description, category });
    const savedPost = await newPost.save();
    res.json(savedPost);
  } catch (_) {
    res.send("There is the error");
  }
};
