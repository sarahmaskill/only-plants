const Post = require('../models/Post')


const postData = [
    {
        body: 'Hello only Plants',
        likes: 1,
        postedBy: 'Alex'
    },
    {  
        body: 'The future of the plant',
        likes: 5,
        postedBy: 'Sarah'    
    },
    {
        body: 'Plants versus Us',
        likes: 3,
        postedBy: 'Miguel'
    }
]

const seedPost = () => Post.bulkCreate(postData)

module.exports = seedPost