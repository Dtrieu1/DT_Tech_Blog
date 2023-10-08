const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model{}

User.init(
    {
        username: {
            type: DataTypes.STRING,
            autoNull: false,
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                
            }
        }
    }
)