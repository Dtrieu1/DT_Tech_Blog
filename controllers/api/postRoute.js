const router = require('express').Router();
const { Post } = require('../../models/');

//create post 
router.post("/", async (req, res) => {
    try {
      const newPost = await Post.create({
        ...req.body,
        user_id: req.session.user_id,
      });
      res.status(200).json(newPost);
    } catch (err) {
      res.status(400).json(err);
    }
  });

// delete post

module.exports = router;