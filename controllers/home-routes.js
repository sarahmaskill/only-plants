const { User, Plant, Post } = require('../models')
const router = require('express').Router();
const withAuth = require('../utils/auth');

//pull posts for front page
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
    if (req.session.loggedIn) {
      let currentLoggedInUser = await User.findByPk(req.session.user_id)
      currentLoggedInUser = currentLoggedInUser.get({ plain: true })

      res.render('homepage', {
        post: posts,
        loggedIn: true,
        userName: currentLoggedInUser.userName
      })
    } else {
      res.render('homepage', {
        post: posts,
      })
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//load login page
router.get('/login', (req, res) => {
  res.render('login');
});

//Get User Garden
router.get('/userGarden', withAuth, async (req, res) => {
  try {
    const plantData = await Plant.findAll({
      where: {
        user_id: req.session.user_id,
      },
      include: [
        {
          model: User,
          attributes: ['userName'],
        },
      ]
    });

    const plants = plantData.map((plant) =>
      plant.get({ plain: true }));

      let currentLoggedInUser = await User.findByPk(req.session.user_id)
      currentLoggedInUser = currentLoggedInUser.get({ plain: true })
      
    res.render('userGarden', {
      plants,
      logged_in: true,
      userName: currentLoggedInUser.userName
    });
  } catch (err) {
    res.status(500).json(err);
  };
});

// Get 1 User Plant
router.get('/plant/:id', async (req, res) => {
  try {
    const plantData = await Plant.findByPk(req.params.id, {
    include: [
      {
        model: User,
        attributes: ['userName']
      },
   ],
  });
  const plant = plantData.get({ plain: true });

  res.render('plantProfile', {
    plant,
    logged_in: req.session.logged_in
  });
  } catch (err) {
    res.status(500).json(err);
  }
 });


module.exports = router;
