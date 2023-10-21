const router = require("express").Router();
const categoryRouter = require("./CategoryRouter");
const userRouter = require("./UserRouter");
const postsRouter = require("./PostsRouter")

router.use("/category", categoryRouter);
router.use("/user", userRouter);
router.user("/posts", postsRouter);
module.exports = router;
