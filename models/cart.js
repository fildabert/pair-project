'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define('Cart', {
    UserId: DataTypes.INTEGER,
    GunId: DataTypes.INTEGER,
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true
    }
  }, {});
  Cart.associate = function(models) {
    Cart.belongsTo(models.Gun)
    Cart.belongsTo(models.User)
    // associations can be defined here
  };
  return Cart;
};