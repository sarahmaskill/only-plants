const router = require('express').Router();
const { Plant, User, Post } = require('../../models');
const withAuth = require('../../utils/auth');



//add new plant
router.post('/', async (req, res) => {
  try {
    
    const newPlant = await Plant.create({
      
      // outsidePlant:false,
      // lastWatered: 0,
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

    if (!plantData) {
      res.status(404).json({ message: 'No plant found with this id!' });
      return;
    }

    res.status(200).json(plantData);
  } catch (err) {
    res.status(500).json(err);
  }
});


 module.exports = router;