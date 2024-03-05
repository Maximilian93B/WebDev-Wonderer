module.exports = (sequelize, DataTypes) => {
    const UserProgress = sequelize.define('UserProgress', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      challenge_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      status: {
        type: DataTypes.ENUM('Incomplete', 'Complete'),
        allowNull: false
      },
      hash_received: {
        type: DataTypes.TEXT
      }
    }, {
      tableName: 'user_progress',
      timestamps: false,
      underscored: true,
    });
  
    return UserProgress;
  };
  