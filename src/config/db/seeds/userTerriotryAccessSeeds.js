
const { UserTerritoryAccess } = require('../../../models/index'); // Adjust the path as needed
const sequelize = require('../../../config/sequelize');

const seedUserTerritoryAccess = async() => {
    await sequelize.sync({force: false })
     
       const userTAData = [
        {
            user_id: 1, // Assuming user with ID 1 exists
            territory_id: 1, // Assuming territory with ID 1 exists
            access_token: 'HTMLCSS-ACCESS-TOKEN-123',
          },
     // Add more territories as needed
       ];
   
     try {
       await UserTerritoryAccess.bulkCreate(userTAData)
       console.log('User TA Seeded')
       }catch (error) {
       console.error('Error Seeding User TA', error);
       }
   
   };
   
   module.exports = seedUserTerritoryAccess;