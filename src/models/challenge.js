/*
-- Challenges Table
CREATE TABLE challenges (
    id SERIAL PRIMARY KEY,
    cell_id INT NOT NULL,
    title TEXT,
    description TEXT,
    solution_hash TEXT,
    FOREIGN KEY (cell_id) REFERENCES cells (id)
);
*/

const sequelize = require("../config/sequelize");

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