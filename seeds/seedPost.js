const Post = require('../models/Post')


const postData = [
    {
        body: 'Hello only Plants',
        upVotes: 1,
        postedBy: 'Alex'
    },
    {  
        body: 'The future of the plant',
        upVotes: 5,
        postedBy: 'Sarah'    
    },
    {
        body: 'Plants versus Us',
        upVotes: 3,
        postedBy: 'Miguel'
    }
]

const seedPost = () => Post.bulkCreate(postData)

module.exports = seedPost