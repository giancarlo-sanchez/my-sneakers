'use strict';
const bcrypt = require('bcryptjs');



module.exports = {
  up: (queryInterface, Sequelize) => {

   return queryInterface.bulkInsert('Users', [
     {
      email:'user@one.io',
      username: 'one',
      hashedPassword: '$2a$10$fgwqZaa5nxKewvKag70FM.PrQzHqhtbWIHM5XXKGcffThOwfevZa.', //unhashed = 'abc123'
      firstName: 'First',
      lastName: 'User',
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
       email: 'user@two.io',
       username: 'two',
       hashedPassword: '$2a$10$avZ..4Y7zqdc1E6Gi3fIC.miULFZY08sbKvkusd9HHZKTdD8XhaVm', //unhashed = 'abc123'
       firstName: 'Second',
       lastName: 'User',
       createdAt: new Date(),
       updatedAt: new Date(),
     },
     {
       email: 'user@three.io',
       username: 'three',
       hashedPassword: '$2a$10$B1lGK5iOk0s5M77DVsATuuXBetRGInG.fp2uRZlQI/2x27GeFVs82', //unhashed = 'abc123'
       firstName: 'Third',
       lastName: 'User',
       createdAt: new Date(),
       updatedAt: new Date(),
     },
  ], {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Users', null, {});

  }
};
