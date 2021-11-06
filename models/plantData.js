const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/connection');

class Plant extends Model {}

Plant.init( {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    species: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    dateAdded: {
        type: DataTypes.DATEONLY,
        defaultValue: Sequelize.NOW,
    },
    waterSchedule: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    outsidePlant: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    lastWatered: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model:'user',
            key: "id"
        }
    }

}, {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: false,
        modelName: 'Plant',
})

module.exports = Plant