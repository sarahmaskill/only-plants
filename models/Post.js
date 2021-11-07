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
        roots: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,

        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model:'user',
                key: "id"
            },
        }
    },
    
        {
        sequelize,
            timestamps: false,
            freezeTableName: true,
            underscored: false,
            modelName: 'post',
    
        }
    )
    
module.exports = Post