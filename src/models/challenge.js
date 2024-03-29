
module.exports = (sequelize, DataTypes) => {
    const Challenge = sequelize.define('Challenge', {
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true ,
            allowNull: false, 
        },
        cell_id: {
            type:DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'cells',
                key: 'id',
            },
        },
        title: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        solution_hash: {
            type:DataTypes.TEXT,
            allowNull: true,
        },
    }, {
        tableName: 'challenges',
        timestapms: false,
        underscored: true,
    });

    return Challenge;
};