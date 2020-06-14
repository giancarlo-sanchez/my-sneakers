'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    "Order",
    {
      userId: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: true,
        },
      },
      arrayIds: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
      },
      shippingDetails: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          notEmpty: true,
        },
      },
      paymentDetails: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          notEmpty: true,
        },
      },
      itemsPrice: {
        allowNull: false,
        type: DataTypes.FLOAT,
      },
      shippingPrice: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      taxPrice: {
        allowNull: false,
        type: DataTypes.FLOAT(2),
      },
      totalPrice: {
        allowNull: false,
        type: DataTypes.FLOAT(2),
      },

    },
    {}
  );
  Order.associate = function(models) {
    // associations can be defined here
    Order.belongsTo(models.User, {foreignKey: "userId"});


  };
  return Order;
};
