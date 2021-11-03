const sequelize = require('../config/connection')
const seedUser= require('./seedUser')
const seedPlant = require('./seedPlant')
const seedPost = require('./seedPost')


const seedAll = async () => {
  try{
  
    await sequelize.sync({ force: true });
      console.log('\n----- DATABASE SYNCED -----\n');
  
      await seedUser();
      console.log('\n----- User SEEDED -----\n');
  
      await seedPlant();
      console.log('\n----- Plant SEEDED -----\n');

      await seedPost();
      console.log('\n----- Post SEEDED -----\n');

     
      process.exit(0);
  } catch (e) {
    console.log(e)
  }  
  };

  seedAll();