'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('LikedSneaker', [
        {userId: 1, sneakerId: 3, createdAt: new Date(), updatedAt: new Date()},
        {userId: 2, sneakerId: 6,  createdAt: new Date(), updatedAt: new Date()},
        {userId: 3, sneakerId: 9, createdAt: new Date(), updatedAt: new Date()},
        {userId: 1, sneakerId: 12, createdAt: new Date(), updatedAt: new Date()},
        {userId: 2, sneakerId: 15, createdAt: new Date(), updatedAt: new Date()},
        {userId: 3, sneakerId: 18, createdAt: new Date(), updatedAt: new Date()},
        {userId: 1, sneakerId: 21, createdAt: new Date(), updatedAt: new Date()},
        {userId: 2, sneakerId: 25, createdAt: new Date(), updatedAt: new Date()},
        {userId: 3, sneakerId: 28, createdAt: new Date(), updatedAt: new Date()},
        {userId: 1, sneakerId: 32, createdAt: new Date(), updatedAt: new Date()},
        {userId: 2, sneakerId: 36, createdAt: new Date(), updatedAt: new Date()},
        {userId: 3, sneakerId: 40, createdAt: new Date(), updatedAt: new Date()},
        {userId: 1, sneakerId: 45, createdAt: new Date(), updatedAt: new Date()},
        {userId: 2, sneakerId: 50, createdAt: new Date(), updatedAt: new Date()},
        {userId: 3, sneakerId: 55, createdAt: new Date(), updatedAt: new Date()},
    ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Checkins', null, {});

  }
};
