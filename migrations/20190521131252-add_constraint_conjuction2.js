'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
   return queryInterface.addConstraint("GunUsers", ["GunId"],{
     type: "foreign key",
     references:{
       table: "Guns",
       field: "id"
     },
     onDelete: "set null",
     onUpdate: "cascade"
   })
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
   return queryInterface.addConstraint("GunUsers", ["GunId"])
  }
};
