'use strict';
module.exports = (sequelize, DataTypes) => {
  const AssaultRifle = sequelize.define('AssaultRifle', {
    name: DataTypes.STRING,
    ammoType: DataTypes.STRING,
    capacity: DataTypes.INTEGER,
    GunId: DataTypes.INTEGER,
    price: DataTypes.INTEGER
  }, {});
  AssaultRifle.associate = function(models) {
    AssaultRifle.belongsTo(models.Gun)
    // associations can be defined here
  };
  return AssaultRifle;
};