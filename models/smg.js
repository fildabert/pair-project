'use strict';
module.exports = (sequelize, DataTypes) => {
  const Smg = sequelize.define('Smg', {
    name: DataTypes.STRING,
    ammoType: DataTypes.STRING,
    capacity: DataTypes.INTEGER,
    GunId: DataTypes.INTEGER,
    price: DataTypes.INTEGER
  }, {});
  Smg.associate = function(models) {
    Smg.belongsTo(models.Gun)
    // associations can be defined here
  };
  return Smg;
};