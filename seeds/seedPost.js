const Post = require('../models/Post')


const postData = [
    {
        body: 'Hello only Plants',
        likes: 1,
        ownerId: 1,
    },
    {  
            body: 'The future of the plant',
            likes: 5,
            ownerId: 1,    
    },
    {
        body: 'Plants versus Us',
        likes: 3,
        ownerId: 2
    }
]

const seedPost = () => Post.bulkCreate(postData)

module.exports = seedPost