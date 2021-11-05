const Post = require('../models/Post')


const postData = [
    {
        body: 'Man imagine naming a plant after your first name #weirdo',
        roots: 1,
        postedBy: 'Alex'
    },
    {  
        body: 'My plant Matilda is doing great and loving the extra sun shes has been getting lately',
        roots: 5,
        postedBy: 'Sarah'    
    },
    {
        body: 'I am going to start selling my additional plants that my single plant currently generates. #entrepenuerer',
        roots: 3,
        postedBy: 'Miguel'
    }
]

const seedPost = () => Post.bulkCreate(postData)

module.exports = seedPost