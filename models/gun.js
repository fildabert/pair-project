'use strict';
module.exports = (sequelize, DataTypes) => {
  const Gun = sequelize.define('Gun', {
    name: DataTypes.STRING,
    ammoType: DataTypes.STRING,
    capacity: DataTypes.INTEGER
  }, {});
  Gun.associate = function(models) {
    // associations can be defined here
  };
  return Gun;
};