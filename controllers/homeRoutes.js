//connections
const router = requrie("express").Router();
const {User, Post} = require("../models");

router.get("/", async(req, res) => {
    try {
        res.render("homepage", {
            logged_in: req.session.logged_in 
        })
    }catch (err) {
        res.status(500).json(err);
      }
})

router.get("/signup", async(req, res) => {
    try {
        res.render("signup", {
            logged_in: req.session.logged_in 
        })
    }catch (err) {
        res.status(500).json(err);
      }
})

router.get("/posts", async(req, res) => {
    try {
        res.render("posts", {
            logged_in: req.session.logged_in 
        })
    }catch (err) {
        res.status(500).json(err);
      }
})
