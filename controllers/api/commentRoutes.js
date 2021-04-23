const { Comment } = require("../../models");
const { authCheck } = require("../../utils/auth");
const router = require("express").Router();

router.post("/", authCheck, (req, res) => {
    try {

        const comment = await Comment.create({
            comment_text: req.body.comment_text,
            user_id: req.session.user_id,
            posts_id: req.body.posts_id
        });

        res.status(201).json(comment);
    } catch (e) {
        res.status(500).json(e);
    }
})

router.delete("/:id", authCheck, (req, res) => {
    try {
        const commentDelete = await Comment.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(201).json(commentDelete);
    } catch (e) {
        res.status(500).json(e);
    }
});

module.exports = router