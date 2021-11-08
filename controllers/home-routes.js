const { User, Plant, Post } = require('../models')
const router = require('express').Router();
const withAuth = require('../utils/auth');

//pull posts for front page.
//This Generates all the posts for the front page as well as text at the top that indicates if the user is signed in or not!
router.get('/', async (req, res) => {
  try {
    const dbPostData = await Post.findAll({

      attributes: ['body', 'roots', 'user_id'],
      include: [{
        model: User,
        attributes: ['userName']
      }]


    });
    const posts = dbPostData.map((posts) => {
      return posts.get({ plain: true })
      
    });
    if (req.session.loggedIn){
      console.log('We should be seeing my name')
      res.render('homepage', {
        post: posts,
        loggedIn: true,
        userName: posts[0].user.userName
        
  
      })

    }else {
      res.render('homepage',{
        post:posts,
      })
    }

  } catch (err) {
    
    res.status(500).json(err);
  }
});



router.get('/login', (req, res) => {

  res.render('login');
});

//Get User Garden
router.get('/userGarden', withAuth, async (req, res) => {
  try {
    const plantData = await Plant.findAll({
      where: {
        user_id: 1,
      },
      include: [
        {
          model: User,
          attributes: ['userName'],
        },
      ],
    });

    const plants = plantData.map((plant) =>
      plant.get({ plain: true }));

    res.render('userGarden', {
      plants,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  };
});

// router.get('/userGarden', (req, res) => {
//   res.render('userGarden')
// })

module.exports = router;
