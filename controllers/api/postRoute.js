const router = require('express').Router();
const { Post } = require('../../models/');
const withAuth = require('../../utils/auth');


//create post 
router.post("/", withAuth, async (req, res) => {
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
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: 'PS - You can only delete your own posts' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;