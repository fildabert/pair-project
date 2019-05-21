'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
<<<<<<< HEAD:migrations/20190521115946-add_constraint_conjuction.js
   return queryInterface.addConstraint("GunUsers", ["UserId"],{
     type: "foreign key",
     references:{
       table: "Users",
       field: "id"
     },
     onDelete: "set null",
     onUpdate: "cascade"
   })
||||||| merged common ancestors:migrations/20190521115946-add_constraint_conjuction.js
=======
      return queryInterface.addColumn('Guns', 'Type', Sequelize.STRING)
>>>>>>> f43860cc3cd2be344f73a6378caae342fad1a001:migrations/20190521130833-add_column_gunType.js
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
<<<<<<< HEAD:migrations/20190521115946-add_constraint_conjuction.js
   return queryInterface.removeConstraint("GunUsers", ["UserId"])
||||||| merged common ancestors:migrations/20190521115946-add_constraint_conjuction.js
=======
   return queryInterface.removeColumn('Guns','Type')
>>>>>>> f43860cc3cd2be344f73a6378caae342fad1a001:migrations/20190521130833-add_column_gunType.js
  }
};
