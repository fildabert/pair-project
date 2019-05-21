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
    price: 1200,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'AK47',
    ammoType: '7.62mm',
    capacity: 30,
    Type: 'Assault Rifle',
    price: 2600,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'M4A4',
    ammoType: '5.56mm',
    capacity: 26,
    Type: 'Assault Rifle',
    price: 3000,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'M4A1-S',
    ammoType: '5.56mm',
    capacity: 30,
    Type: 'Assault Rifle',
    price: 3300,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'UMP',
    ammoType: '.45 ACP',
    capacity: 30,
    Type: 'Smg',
    price: 1600,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Desert Deagle',
    ammoType: '.44 Magnum',
    capacity: 7,
    Type: 'Handgun',
    price: 900,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'AWP',
    ammoType: '0.300 Winchester Magnum',
    capacity: 10,
    Type: 'Sniper',
    price: 6000,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Scout',
    ammoType: '.308 Winchester',
    capacity: 15,
    Type: 'Sniper',
    price: 3800,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'P90',
    ammoType: '5.7mm',
    capacity: 50,
    Type: 'Smg',
    price: 1800,
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    name: 'Uzi',
    ammoType: '9mm',
    capacity: 15,
    Type: 'Smg',
    price: 1000,
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
