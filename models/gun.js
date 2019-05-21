'use strict';
module.exports = (sequelize, DataTypes) => {
  const Gun = sequelize.define('Gun', {
    name: DataTypes.STRING,
    ammoType: DataTypes.STRING,
    capacity: DataTypes.INTEGER,
    Type: DataTypes.STRING
  }, {});
  Gun.associate = function(models) {
    Gun.belongsToMany(models.User, {through:models.GunUser})
    Guns.hasMany(models.Handgun)
    Guns.hasMany(models.AssaultRifle)
    Guns.hasMany(models.SniperRifle)
    Guns.hasMany(models.Smg)
    // associations can be defined here
  };
  return Gun;
};