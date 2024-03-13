const bcrypt = require('bcryptjs');
const sequelize = require('../../../config/sequelize');
const { User } = require('../../../models/index');

const seedUsers = async() => {
    await sequelize.sync({force: false});
     
    const userData = [
        {
            username: "adminUser",
            email: "admin@example.com",
            password: await bcrypt.hash("password123", 10),
            isAdmin: true
          },
          {
            username: "testUser1",
            email: "user1@example.com",
            password: await bcrypt.hash("password456", 10),
            isAdmin: false
          },
          {
            username: "testUser2",
            email: "user2@example.com",
            password: await bcrypt.hash("password789", 10),
            isAdmin: false
          },
          // Add more users as needed
        ];
    try {
        await User.bulkCreate(userData);
        console.log('Users seeded successfully.');
    } catch (error) {
        console.error('Error seeding users:', error);
    }
};

module.exports = seedUsers;
