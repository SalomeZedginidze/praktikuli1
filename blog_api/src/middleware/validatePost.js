const validatePost = (req, res, next) => {
  const { title, description, category } = req.body;

  if (!title || !description || !category) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  next();
};

module.exports = validatePost;
