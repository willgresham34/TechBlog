const router = require("express").Router();
const { Post } = require("../../models");

// Creates new post
router.post("/homepage", async (req, res) => {
  console.log(req.body);
  try {
    const newPost = await Post.create({
      content: req.body.content,
      title: req.body.title,
    });
    console.log("newPost", newPost);
    res.json(newPost);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
