const {User , Plant, Post} = require('../models')
const router = require('express').Router();


//pull posts for front page
router.get('/', async (req, res) => {
  try {
      const dbPostData = await Post.findAll({
          
          attributes: ['body', 'roots', 'postedBy'],
          
        });
        const posts =  dbPostData.map((posts) =>{
        return posts.get({ plain: true })
        });
        
        console.log(posts)
        res.render('homepage', {
          post: posts,
         
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

router.get('/userGarden', (req, res) => {
  res.render('userGarden')
})

module.exports = router;
