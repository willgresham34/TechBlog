const router = require("express").Router();
const { Post } = require("../../models");
const { withAuth } = require("../../utils/withAuth");

// Creates new post
router.post("/homepage", withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      content: req.body.content,
      user_id: req.session.userId,
    });
    console.log("newpost ", newPost);
    res.json(newPost);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
