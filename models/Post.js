const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            primaryKey:true,
            autoIncrement: true
        },

        body: {
            type: DataTypes.STRING,
            allowNull: false
            
        },
        dateCreated: {
            type: DataTypes.DATEONLY,
            defaultValue: Sequelize.NOW 
        },
        likes: {
            type: DataTypes.INTEGER,

        }
    },
        {
        sequelize,
            timestamps: false,
            freezeTableName: true,
            underscored: true,
            modelName: 'post',
    
        }
    )
    
module.exports = Post