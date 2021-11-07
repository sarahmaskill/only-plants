const router = require('express').Router();
const { User } = require('../../models');
const withAuth = require('../../utils/auth');

//Getting one user for weather app display
router.get('/', withAuth, async (req, res) => {
  console.log('Get one user profile hit')
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
    });
    
    const user = userData.get({ plain: true });
    console.log(user)

    // res.render('profile', {
    //   ...user,
    //   logged_in: true
    // });
    
    res.json(user)
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE new user
router.post('/', withAuth, async (req, res) => {
  
  if(withAuth){
    try {
      const dbUserData = await User.create({
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
        state: req.body.state,
        city: req.body.city
      });
      console.log(dbUserData)
  
      req.session.save(() => {
        req.session.loggedIn = true;
        req.session.dbUserData = id
  
        res.status(200).json(dbUserData);
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }else {
    alert('Please Sign in')
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        userName: req.body.userName,
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: 'Incorrect username. Please try again!' });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect password. Please try again!' });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;
      //dbUserData is person that just signed in
      req.session.user_id = dbUserData.id

      res
        .status(200)
        .json({ user: dbUserData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
router.post('/logout', (req, res) => {
  console.log(req.session.loggedIn)
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

//Get User Profile
router.get('/profile', withAuth, async (req, res) => {
  console.log('Profile Route Hit')
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
    });
    
    const user = userData.get({ plain: true });
    console.log(user)

    // res.render('profile', {
    //   ...user,
    //   logged_in: true
    // });
    
    res.json(user)
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
