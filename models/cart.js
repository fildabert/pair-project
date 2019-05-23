'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define('Cart', {
    UserId: DataTypes.INTEGER,
    GunId: DataTypes.INTEGER,
    id:{
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    }
  }, {});
  Cart.associate = function(models) {
    Cart.belongsTo(models.Gun)
    Cart.belongsTo(models.User)
    // associations can be defined here
  };
  return Cart;
};