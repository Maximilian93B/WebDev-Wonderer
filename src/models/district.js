
module.exports = (sequelize, DataTypes) => {
    const District = sequelize.define('District', {
        id: {
            type: DataTypes.INTEGER, 
            primaryKey: true, 
            autoIncrement: true,
            allowNull: false
        },
        territory_id:{
            type: DataTypes.INTEGER,
            allowNull: false, 
            references: {
                model: 'territories',
                key: 'id',
            },
        },  
        name: {
            type: DataTypes.TEXT, 
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        }, {
            tableName: 'districts',
            timestamps: false,
            underscored: true,
        });

    return District;
}





/*
-- Districts Table
CREATE TABLE districts (
    id SERIAL PRIMARY KEY,
    territory_id INT NOT NULL,
    name TEXT,
    description TEXT,
    FOREIGN KEY (territory_id) REFERENCES territories (id)
);

*/