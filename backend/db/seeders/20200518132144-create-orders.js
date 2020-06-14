'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Orders', [
        {
          userId: 1,
          arrayIds: "1,3",
          shippingDetails:"Alla en Colombia" ,
          paymentDetails:"paypal" ,
          itemsPrice: 265,
          shippingPrice: 0,
          taxPrice: 39.75,
          totalPrice: 304.75,
          createdAt: new Date(),
          updatedAt: new Date()},
        {
          userId: 2,
          arrayIds: "2,4",
          shippingDetails: "1000 S Boulevard, NYC,NY",
          paymentDetails:"paypal" ,
          itemsPrice: 195,
          shippingPrice: 0,
          taxPrice: 29.25,
          totalPrice: 224.25,
          createdAt: new Date(),
          updatedAt: new Date()},
        {
          userId: 3,
          arrayIds: "3,5",
          shippingDetails: "5000 S Edmond ave, OKC,OK",
          paymentDetails:"paypal" ,
          itemsPrice: 195,
          shippingPrice: 0,
          taxPrice: 29.25,
          totalPrice: 224.25,
          createdAt: new Date(),
          updatedAt: new Date()},
    ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Orders', null, {});

  }
};
