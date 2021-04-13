const router = require("express").Router();
const { User, Posts } = require("../../models");


// Get home page with blog posts
router.get("/", async (req, res) => {
    try {
        const blogData = await Posts.findAll({
            include: { model: User }
        });

        const posts = blogData.map(blog => blog.get({ plain: true }));

        res.status(200).render("home", {
            posts,
            loggedIn: req.session.loggedIn
        });
    } catch (e) {
        res.status(500).send(e);
    }
});

// Get login page
router.get("/login", (req, res) => {
    res.render("login", {
        loggedIn: req.session.loggedIn,
    });
});

// Sign up page
router.get("/signup", (req, res) => {
    res.render("signup", {
        loggedIn: req.session.loggedIn,
    });
});

module.exports = router