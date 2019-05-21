'use strict';
module.exports = (sequelize, DataTypes) => {
  const SniperRifle = sequelize.define('SniperRifle', {
    name: DataTypes.STRING,
    ammoType: DataTypes.STRING,
    capacity: DataTypes.INTEGER,
    GunId: DataTypes.INTEGER
  }, {});
  SniperRifle.associate = function(models) {
    // associations can be defined here
  };
  return SniperRifle;
};