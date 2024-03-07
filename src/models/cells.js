
module.exports = (sequelize, DataTypes) => {
    const Cell = sequelize.define('Cell', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false ,
        },
        district_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'districts',
                key: 'id',
            },
            name: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
        }
    }, {
        tableName: 'cells',
        timestamps: false,
        underscored: true,
    });

    return Cell;
};