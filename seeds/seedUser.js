const {User} = require('../models/User')


const userData = [
   {
       userName: 'Alex',
       password: 'SecretPassword124'
   },

   {
    userName: 'Sarah',
    password: 'SecretPassword1324'
    
    },

    {
        userName: 'Sarah',
        password: 'SecretPassword1324'
    },

]

const seedUser = () => User.bulkCreate(userData)

module.exports = seedUser