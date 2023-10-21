const router = require("express").Router();
const PostsController = require("../controllers/PostsController");
const validatePost = require("../middleware/validatePost");

router.route("/").get().post([validatePost], PostsController.createPost);

module.exports = router;