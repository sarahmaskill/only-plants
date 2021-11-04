const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection.js');

class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password)
  }
}

User.init(
  {

    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },

    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: {
          msg: 'Please enter a valid UserName'
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },

    password: {
      type: DataTypes.STRING(64),
      is: /^[0-9a-f]{64}$/i,
      validate: {
        len: [5]
      },
    },
  }, 
  {
    hooks: {
      beforeBulkCreate: async (newUsers) => {
          const users = []
          for (const user of newUsers){
            user.password = await bcrypt.hash(user.password, 5);
            users.push(user);
          }
          return users
      },
      beforeCreate: async (newUserData) => {
          newUserData.password = await bcrypt.hash(newUserData.password, 5);
          console.log(newUserData)
          return newUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: false,
    modelName: 'user',
  }
)

module.exports = User;