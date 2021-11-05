const User = require('../models/User')


const userData = [
   {
       userName: 'Alex',
       password: 'SecretPassword124',
       email: 'Alexander.L@yahoo.com',
       state: 'Michigan',
       city: 'Kalamazoo'
       
   },

   {
        userName: 'Sarah',
        password: 'SecretPassword1324',
        email: 'Sarah.M@yahoo.com',
        state: 'Michigan',
        city: 'Warren'
    
    },

    {
        userName: 'Miguel',
        password: 'SecretPassword1324',
        email: 'Miguel.G@yahoo.com',
        state: 'Michigan',
        city: 'Grand Rapids'
    },
    {
        userName: 'Frank',
        password: 'wouldntYouLikeToKnow',
        email: 'FranksEmail@gmail.com',
        state: 'Kentucky',
        city: 'Louisville'
    }

]

const seedUser = () => User.bulkCreate(userData)

module.exports = seedUser