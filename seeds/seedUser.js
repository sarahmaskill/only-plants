const User = require('../models/User')


const userData = [
   {
       userName: 'Alex',
       password: 'SecretPassword124',
       email: 'Alexander.L@yahoo.com',
       state: 'Michigan'
       
   },

   {
        userName: 'Sarah',
        password: 'SecretPassword1324',
        email: 'Sarah.M@yahoo.com',
        state: 'Michigan'
    
    },

    {
        userName: 'Miguel',
        password: 'SecretPassword1324',
        email: 'Miguel.G@yahoo.com',
        state: 'Michigan'
    },
    {
        userName: 'Frank',
        password: 'wouldntYouLikeToKnow',
        email: 'FranksEmail@gmail.com',
        state: 'Kentucky'
    }

]

const seedUser = () => User.bulkCreate(userData)

module.exports = seedUser