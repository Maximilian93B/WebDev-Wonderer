
const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');


// Import all Models 
const User = require('./user')(sequelize, Sequelize.DataTypes);
const UserProgress = require('./userProgress')(sequelize, Sequelize.DataTypes);
const Territory = require('./territory')(sequelize, Sequelize.DataTypes);
const District = require('./district')(sequelize, Sequelize.DataTypes);
const Cell = require('./cells')(sequelize, Sequelize.DataTypes);
const Challenge = require('./challenge')(sequelize, Sequelize.DataTypes);

// Set assoiciations

//User assoications 
User.hasMany(UserProgress, { foreignKey: 'user_id' });
UserProgress.belongsTo(User, { foreignKey: 'user_id' });


//Territory assoiciations
Territory.hasMany(District, { foreignKey: 'territory_id' });
District.belongsTo(Territory, { foreignKey: 'territory_id' });


//District assoications 
District.hasMany(Cell, { foreignKey: 'district_id' });
Cell.belongsTo(District, { foreignKey: 'district_id' });


// Cell associations 
Cell.hasMany(Challenge, { foreignKey: 'cell_id' });
Challenge.belongsTo(Cell, { foreignKey: 'cell_id' });

// Challenge assoiciations 
Challenge.hasMany(UserProgress, { foreignKey: 'challenge_id' });
UserProgress.belongsTo(Challenge, { foreignKey: 'challenge_id' });

// Define hooks here using the sequelize instance
User.afterCreate(async (user, options) => {
    console.log(`Creating UserProgress for user: ${user.id} ${user.username}`);
    try {
        await UserProgress.create({
            user_id: user.id,  // Ensure this matches the column name in your UserProgress model.
            username: user.username,// Add other fields as necessary, like default values for pointsBar, status, etc.
        });
        console.log(`UserProgress created for user ${user.username}`);
    } catch (error) {
        console.error('Error creating UserProgress:', error);
    }
});



module.exports = {
    sequelize,
    Sequelize,
    User,
    UserProgress,
    Territory,
    District,
    Cell,
    Challenge, 
};
