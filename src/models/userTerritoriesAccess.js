module.exports = (sequelize, DataTypes) => {
    const UserTerritoryAccess = sequelize.define('UserTerritoryAccess', {
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'users', 
                key: 'id',
            }
        },
        territory_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'territories', 
                key: 'id',
            }
        },
        access_token: { 
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
    }, {
        sequelize,
        modelName: 'UserTerritoryAccess',
        tableName: 'user_territory_access',
        timestamps: true, 
        underscored: true,
    });

    return UserTerritoryAccess;
};





