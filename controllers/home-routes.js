const {User , Plant, Post} = require('../models')
const router = require('express').Router();
const withAuth = require('../utils/auth');

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

  res.render('login');
});

// //Get User Garden
// router.get('/userGarden', withAuth, (req, res) => {
//   Plant.findAll({
//     where:{
//         user_id: req.session.user_id,
//     },
//     attributes:[
//         'name',
//         'species',
//         'waterSchedule',
//         'outsidePlant',
//         'lastWatered',
//         'plantedBy'
//     ],
//     include: [{
//         model: User,
//         attributes: ['userName']
//     }]
//   })
//   .then(dbPlantData => {
//       const garden = dbPlantData.map(plant => plant.get({ plain:true }));
//       res.render('userGarden', {garden, loggedIn: true});
//   })
//   .catch(err => {
//       console.log(err);
//       res.status(500).json(err)
//   });
//  });

router.get('/userGarden', (req, res) => {
  res.render('userGarden')
})

module.exports = router;
