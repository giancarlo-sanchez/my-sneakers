'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Orders', [
        {userId: 1, sneakerId: 1, createdAt: new Date(), updatedAt: new Date()},
        {userId: 2, sneakerId: 5,  createdAt: new Date(), updatedAt: new Date()},
        {userId: 3, sneakerId: 23, createdAt: new Date(), updatedAt: new Date()},
        {userId: 1, sneakerId: 30, createdAt: new Date(), updatedAt: new Date()},
        {userId: 2, sneakerId: 33, createdAt: new Date(), updatedAt: new Date()},
        {userId: 3, sneakerId: 40, createdAt: new Date(), updatedAt: new Date()},
        {userId: 1, sneakerId: 45, createdAt: new Date(), updatedAt: new Date()},
        {userId: 2, sneakerId: 49, createdAt: new Date(), updatedAt: new Date()},
        {userId: 3, sneakerId: 52, createdAt: new Date(), updatedAt: new Date()},
        {userId: 1, sneakerId: 56, createdAt: new Date(), updatedAt: new Date()},
        {userId: 2, sneakerId: 60, createdAt: new Date(), updatedAt: new Date()},
        {userId: 3, sneakerId: 64, createdAt: new Date(), updatedAt: new Date()},
        {userId: 1, sneakerId: 68, createdAt: new Date(), updatedAt: new Date()},
        {userId: 2, sneakerId: 72, createdAt: new Date(), updatedAt: new Date()},
        {userId: 3, sneakerId: 77, createdAt: new Date(), updatedAt: new Date()},
    ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Orders', null, {});

  }
};
