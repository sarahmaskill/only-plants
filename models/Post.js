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
        upVotes: {
            type: DataTypes.INTEGER,

        },
        postedBy: {
            type: DataTypes.STRING,
            references: {
                model:'user',
                key: "userName"
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