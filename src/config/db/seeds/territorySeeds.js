
const { Territory } = require('../../../models/index'); // Adjust the path as needed
const sequelize = require('../../../config/sequelize');


const seedTerritories = async() => {
 await sequelize.sync({force: false })
  
    const territoryData = [
        {
    name: 'HTML/CSS Territory',
    description: 'The basics of web development, focusing on HTML and CSS.',
    // other fields as necessary
    },
  // Add more territories as needed
    ];

  try {
    await Territory.bulkCreate(territoryData)
    console.log('Territory Seeded')
    }catch (error) {
    console.error('Error Seeding Territory', error);
    }

};

module.exports = seedTerritories;
