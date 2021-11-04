const router = require('express').Router();
const { Plant, User, Post } = require('../../models');
const withAuth = require('../../utils/auth');

//Get 1 User Plant
 router.get('/userPlantProfile/:id', withAuth, (req, res) => {
  Plant.findOne({
    where:{
        id: req.params.id
    },
    attributes:[
        'name',
        'species',
        'waterSchedule',
        'outsidePlant',
        'lastWatered',
        'ownerId'
    ],
    include: [{
        model: User,
        attributes: ['userName']
    }]
  })
  .then(dbPlantData => {
      const plants = dbPlantData.map(plant => plant.get({ plain:true }));
      res.render('userPlantProfile', {plants, loggedIn: true});
  })
  .catch(err => {
      console.log(err);
      res.status(500).json(err)
  });
 });
//Get User Garden
router.get('/userGarden', withAuth, (req, res) => {
    Plant.findAll({
      where:{
          user_id: req.session.user_id,
      },
      attributes:[
          'name',
          'species',
          'waterSchedule',
          'outsidePlant',
          'lastWatered',
          'ownerId'
      ],
      include: [{
          model: User,
          attributes: ['userName']
      }]
    })
    .then(dbPlantData => {
        const garden = dbPlantData.map(plant => plant.get({ plain:true }));
        res.render('userGarden', {garden, loggedIn: true});
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    });
   });
