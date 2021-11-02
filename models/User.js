const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection.js');

class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(login, this.password)
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: {
          msg: 'Please enter a valid UserName'
        }
      },
      hashedPassword: {
        type: DataTypes.STRING(64),
        is: /^[0-9a-f]{64}$/i,
        validate: {
          len: [5]
        },
      },
    },
  }, 
  {
    hooks: {
      beforeCreate: async (newUserData) => {
          newUserData.password = await bcrypt.hash(newUserData.password, 5);
          return newUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
)

module.exports = User;