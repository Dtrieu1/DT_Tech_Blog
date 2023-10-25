//connections
const router = require ("express").Router();
const {User, Post} = require("../models");

router.get("/", async(req, res) => {
    try {
        res.render("blank", {
            layout: 'main',
            logged_in: req.session.logged_in 
        })
    }catch (err) {
        res.status(500).json(err);
      }
})

router.get("/login", async(req, res) => {
    try {
        res.render("login", {
            layout: 'main',
            logged_in: req.session.logged_in        
        })
    }catch (err) {
        res.status(500).json(err);
      }
})

router.get("/signup", async(req, res) => {
    try {
        res.render("signup", {
            layout: 'main',
            logged_in: req.session.logged_in,
            
        })
    }catch (err) {
        res.status(500).json(err);
      }
})

router.get("/posts", async(req, res) => {
    try {
        const postData = await Post.findAll({
             include: [
                 {
                     model: User,
                     attribute: ["username"]
                 }
             ]
         });
  
        const post = postData.map((post) => post.get({ plain: true }));
        console.log(post);
        res.render("posts", {
          layout: 'main',
          post,
          logged_in: req.session.logged_in              
        })
     }catch (err) {
        res.status(500).json(err);
       }
}
)

router.get("/submit", async(req, res) => {
     try {
        const userData = await User.findOne({ where: { id: req.session.user_id } });
        const user = userData.get({ plain: true });
        console.log(user);
        res.render("submit", {
            user,
            layout: 'main',
            logged_in: req.session.logged_in,
            username: req.session.username
        })
    }catch (err) {
        res.status(500).json(err);
      }
})

module.exports = router;
