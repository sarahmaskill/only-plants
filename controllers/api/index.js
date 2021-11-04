const router = require('express').Router();

const userRoutes = require('./user-routes');
const plantRoutes = require('./plant-routes');
const postRoutes = require('./post-routes')

router.use('/users', userRoutes);
router.use('/plant', plantRoutes);
router.use ('/post', postRoutes);

module.exports = router;
