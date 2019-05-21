'use strict';
module.exports = (sequelize, DataTypes) => {
  const Handgun = sequelize.define('Handgun', {
    name: DataTypes.STRING,
    ammoType: DataTypes.STRING,
    capacity: DataTypes.INTEGER,
    GunId: DataTypes.INTEGER
  }, {});
  Handgun.associate = function(models) {
    Handgun.belongsTo(models.Gun)
    // associations can be defined here
  };
  return Handgun;
};