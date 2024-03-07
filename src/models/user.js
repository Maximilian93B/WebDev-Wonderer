
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      username: {
        type: DataTypes.STRING,
        allowNull: false, // Corrected typo here
        unique: true
      },
      email: { // Corrected field name typo
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      sign_up_date: {
        type: DataTypes.DATE
      },
      last_login: {
        type: DataTypes.DATE
      },
      // Other attributes
    }, {
      sequelize,
      modelName: 'User',
      tableName: 'users',
      timestamps: false,
      underscored: true,
    });
  
    return User;
  };
  