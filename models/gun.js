'use strict';
module.exports = (sequelize, DataTypes) => {
  const Gun = sequelize.define('Gun', {
    name: DataTypes.STRING,
    ammoType: DataTypes.STRING,
    capacity: DataTypes.INTEGER,
    Type: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {});
  Gun.associate = function(models) {
    Gun.belongsToMany(models.User, {through:models.GunUser})
    Gun.hasMany(models.Handgun)
    Gun.hasMany(models.AssaultRifle)
    Gun.hasMany(models.SniperRifle)
    Gun.hasMany(models.Smg)
    // associations can be defined here
  };
  return Gun;
};