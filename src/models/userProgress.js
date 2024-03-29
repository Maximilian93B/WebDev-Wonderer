
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
        references: {
          model: 'users',
          key: 'id',
        },    
        allowNull: false,  
      },
      username: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
      },
      pointsBar: {
        type: DataTypes.INTEGER,
        allowNull: true, 
        defaultValue: 0
      },
      challenge_id: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      completed_challenges: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
        allowNull: true,
        defaultValue: [],
      },      
      status: {
        type: DataTypes.ENUM('Incomplete', 'Complete'),
        allowNull: true
      },
      hash_received: {
        type: DataTypes.TEXT
      }
    }, {
      modelName:'UserProgress',
      tableName: 'user_progress',
      timestamps: true,
      underscored: true,
    });

    return UserProgress;
  };
  