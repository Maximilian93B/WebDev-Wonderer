require('dotenv').config({path: '../../../../.env'});
const sequelize = require('../../../config/sequelize');


// Import Seed Functions
const seedTerritories = require('./territorySeeds');
const seedUserTA = require('./userTerriotryAccessSeeds');
const seedUsers = require('./userSeeds');



const seedAll = async () => {
    try {
        await sequelize.sync({force:false});
        console.log('Db Synced');

        // Seed Users
        console.log('Starting User seed....')
        await seedUsers();


        // Seed Territory
        console.log('Starting Territory seed....')
        await seedTerritories();

        // Seed User TA 

        console.log('Starting User TA seeding....')
        await seedUserTA();

        process.exit(0);
    } catch (error) {
        console.error('Seeding Failed:', error);
        process.exit(1);
    }
};

seedAll(); // Run Seeds 