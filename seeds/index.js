const sequelize = require('../config/connection')
const seedUser= require('./seedUser')
const seedPlant = require('./seedPlant')

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedUser();
    console.log('\n----- User SEEDED -----\n');

    await seedPlant();
    console.log('\n----- Plant SEEDED -----\n');

    process.exit(0);
  };

  seedAll();