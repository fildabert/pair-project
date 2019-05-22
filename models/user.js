'use strict';
const encrypt = require("../helpers/encrypt")
module.exports = (sequelize, DataTypes) => {
  let Op = sequelize.Sequelize.Op;
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      validate: {
        isUnique(value) {
          return User.findOne({
            where: {
              username: value
            }
          })
          .then((found) => {
            if(found) {
              throw new Error(`username cannot be the same!`)
            } 
          })
        }
      }
    },
    password: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'must be in email format'
        },
        isFound(value) {
          return User.findOne({
            where: {
              email: value,
            }
          })
          .then((found) => {
            if(found) {
              throw new Error(`email must not be the same`)
            }
          })
        }
      }
    },
    balance: DataTypes.INTEGER
  }, {});

  User.addHook("beforeCreate", (user, option) =>{
    user.password = encrypt(user.password)
  })
  User.associate = function(models) {
    User.belongsToMany(models.Gun, {through:models.GunUser})
    // associations can be defined here
  };
  return User;
};