const Post = require('../models/Post')


const postData = [
    {
        body: 'Hello only Plants',
        likes: 1,
        ownerId: 1,
    }
]

const seedPost = () => Post.bulkCreate(postData)

module.exports = seedPost