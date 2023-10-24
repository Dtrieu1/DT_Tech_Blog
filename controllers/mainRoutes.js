//connections
const router = require ("express").Router();
const {User, Post} = require("../models");

router.get("/", async(req, res) => {
    try {
        res.render("login", {
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
            logged_in: req.session.logged_in
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
                    attributes: ['username']
                }
            ]
        });
        
        res.render("posts", {
          layout: 'main',
          postData,
          logged_in: req.session.logged_in              
        })
     }catch (err) {
        res.status(500).json(err);
       }
}
)

router.get("/submit", async(req, res) => {
     try {
        res.render("submit", {
            layout: 'main',
            logged_in: req.session.logged_in
        })
    }catch (err) {
        res.status(500).json(err);
      }
})

module.exports = router;
