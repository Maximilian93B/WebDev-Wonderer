
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false, // Corrected typo here
        unique: true
      },
      email: { // Corrected field name typo
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true, // Validates the email format
        },
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
      timestamps: true,
      underscored: true,
    });

    User.beforeCreate(async (user, options) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      user.password = hashedPassword;
  });

    return User;
  };
  