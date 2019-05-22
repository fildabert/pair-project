'use strict';
const encrypt = require("../helpers/encrypt")
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
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