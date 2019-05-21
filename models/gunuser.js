'use strict';
module.exports = (sequelize, DataTypes) => {
  const GunUser = sequelize.define('GunUser', {
    UserId: DataTypes.INTEGER,
    GunId: DataTypes.INTEGER
  }, {});
  GunUser.associate = function(models) {
    GunsUser.belongsTo(models.Gun)
    GunsUser.belongsTo(models.User)
    // associations can be defined here
  };
  return GunUser;
};