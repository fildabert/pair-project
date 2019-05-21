'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('Guns', [{
    name: 'Thompson',
    ammoType: '.45 ACP',
    capacity: 20,
    Type: 'Smg',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'AK47',
    ammoType: '7.62mm',
    capacity: 30,
    Type: 'Assault Rifle',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'M4A4',
    ammoType: '5.56mm',
    capacity: 30,
    Type: 'Assault Rifle',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'M4A1-S',
    ammoType: '5.56mm',
    capacity: 30,
    Type: 'Assault Rifle',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'UMP',
    ammoType: '.45 ACP',
    capacity: 30,
    Type: 'Smg',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Desert Deagle',
    ammoType: '.44 Magnum',
    capacity: 7,
    Type: 'Handgun',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'AWP',
    ammoType: '0.300 Winchester Magnum',
    capacity: 10,
    Type: 'Sniper',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Scout',
    ammoType: '.308 Winchester',
    capacity: 15,
    Type: 'Sniper',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'P90',
    ammoType: '5.7mm',
    capacity: 50,
    Type: 'Smg',
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    name: 'Scout',
    ammoType: '.308 Winchester ',
    capacity: 15,
    Type: 'Sniper',
    createdAt: new Date(),
    updatedAt: new Date()
  }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
      return queryInterface.bulkDelete('Guns',null,{});
  }
};
