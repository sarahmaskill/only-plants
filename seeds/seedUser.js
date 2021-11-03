const User = require('../models/User')


const userData = [
   {
       userName: 'Alex',
       password: 'SecretPassword124',
       email: 'Alexander.L@yahoo.com'
       
   },

   {
        userName: 'Sarah',
        password: 'SecretPassword1324',
        email: 'Sarah.M@yahoo.com'
    
    },

    {
        userName: 'Miguel',
        password: 'SecretPassword1324',
        email: 'Miguel.G@yahoo.com',
    },

]

const seedUser = () => User.bulkCreate(userData)

module.exports = seedUser