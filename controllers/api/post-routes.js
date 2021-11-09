const router = require('express').Router();
const { Post, User } = require('../../models');
const withAuth = require('../../utils/auth');
//view users posts

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
          // user_id: req.session.user_id,
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

  router.put('/', async (req, res) => {
    try {
      

      
    }catch (e){
      res.status(500).json(e)
    }
  })

  module.exports = router;
