const router = require('express').Router();
const { Post } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const dbPostData = await Post.findAll({
            attributes: ['body', 'likes']
        });
        const posts = dbPostData.map((posts) =>
        posts.get({ plain: true})
        );

        res.render('homepage', {
            posts
        })
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
});

module.exports = router;