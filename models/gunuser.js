'use strict';
module.exports = (sequelize, DataTypes) => {
  const GunUser = sequelize.define('GunUser', {
    UserId: DataTypes.INTEGER,
    GunId: DataTypes.INTEGER
  }, {});
  GunUser.associate = function(models) {
    // associations can be defined here
  };
  return GunUser;
};