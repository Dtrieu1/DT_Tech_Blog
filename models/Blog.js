const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Blog extends Model{}

Blog.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        post_title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        post_description: {
            type: DataTypes.TEXT,
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true, 
        modelName: 'blog',
    }
)

module.exports = Blog;