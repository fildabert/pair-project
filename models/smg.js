'use strict';
module.exports = (sequelize, DataTypes) => {
  const Smg = sequelize.define('Smg', {
    name: DataTypes.STRING,
    ammoType: DataTypes.STRING,
    capacity: DataTypes.INTEGER,
    GunId: DataTypes.INTEGER
  }, {});
  Smg.associate = function(models) {
    // associations can be defined here
  };
  return Smg;
};