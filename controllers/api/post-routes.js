const router = require('express').Router();
const { Post, User } = require('../../models');
const withAuth = require('../../utils/auth');

//view all user posts
router.get('/', async (req, res) => {

  try {
    const dbPostData = await Post.findAll({
      
      attributes: ['body', 'roots', 'user_id', 'id'],
      include: [{
        model: User,
        attributes: ['userName'],
        
      }],
      
    });
    res.json(dbPostData)
    
  } catch (err) {
    res.status(500).json(err);
  }
});
//Getting one post
//Getting one post
router.put('/:id', async (req, res) => {

  try {
    const postToUpdate = await Post.findByPk(req.params.id);
    const updatedRoot = await postToUpdate.increment('roots', {by: 1});
    res.json(updatedRoot)
    
  } catch (err) {
    res.status(500).json(err);
  }
 
})



//create new post 
router.post('/', withAuth, async (req, res) => {
  try {
      const newPost = await Post.create({
        user_id: req.session.user_id,
        body: req.body.newPostInput,
      });
     
  
      res.status(200).json(newPost);
    } catch (err) {
      
      res.status(500).json(err);
    }
  });

//delete posts //withAuth
router.delete('/:id', async (req, res) => {
    try {
      const postData = await Post.destroy({
        where: {
          id: req.params.id,
         
        },
      });
  
      if (!postData) {
        res.status(404).json({ message: 'No post found with this id!' });
        return;
      }
  
      res.status(200).json(postData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.put(`/:id`,  async (req, res) => { 
  try {
    const updatedRoot = await Post.increment('roots', {by: 1},
      
      {
        where: {
          id: req.params.id
        },
        attributes: ['body', 'roots', 'id'],
        include: [{
          model: User,
          attributes: ['userName']
        }]
      });
      res.json(updatedRoot)
      }catch (err) {
    res.status(500).json(err);
  }
});
  module.exports = router;
