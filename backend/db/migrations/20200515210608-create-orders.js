'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
        allowNull:false
      },
      arrayIds: {
        type: Sequelize.STRING,
        allowNull: false
      },
      shippingDetails: {
        type: Sequelize.STRING,
        allowNull: false
      },
      paymentDetails: {
        type: Sequelize.STRING,
        allowNull: false
      },
      itemsPrice: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      shippingPrice: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      taxPrice: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      totalPrice: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Orders');
  }
};
