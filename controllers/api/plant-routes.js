const router = require('express').Router();
const { Plant, User, Post } = require('../../models');
const withAuth = require('../../utils/auth');

//Get 1 User Plant
//  router.get('/:id',(req, res) => {
//   Plant.findOne({
//     where:{
//         id: req.params.id
//     },
//     attributes:[
//         'name',
//         'id',
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
      
//       const plants = dbPlantData.map(plant => plant.get({ plain:true }));
//       console.log(plants)
    
//       res.render('userPlantProfile', {plants, loggedIn: true});
//   })
//   .catch(err => {
//       console.log(err);
//       res.status(500).json(err)
//   });
//  });



//add new plant
router.post('/', async (req, res) => {
  try {
    const newPlant = await Plant.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPlant);
  } catch (err) {
    res.status(400).json(err);
  }
});

//delete plant
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const plantData = await Plant.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!projectData) {
      res.status(404).json({ message: 'No plant found with this id!' });
      return;
    }

    res.status(200).json(plantData);
  } catch (err) {
    res.status(500).json(err);
  }
});


 module.exports = router;