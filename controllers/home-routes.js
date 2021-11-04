const router = require('express').Router();
router.get('/', (req,res) => {
  res.render('homepage')
})

//pull posts for front page
router.get('/', async (req, res) => {
  try {
      const dbPostData = await Post.findAll({
          attributes: ['body', 'likes']
      });
      const posts = dbPostData.map((posts) =>
          posts.get({ plain: true })
      );

      res.render('homepage', {
          posts
      })
  } catch (err) {
      console.log(err);
      res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});


module.exports = router;
