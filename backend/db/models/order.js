'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    "Order",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      userId: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: true,
        },
      },
      sneakerId: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: true,
        },
      },

    },
    {}
  );
  Order.associate = function(models) {
    // associations can be defined here
    Order.belongsTo(models.User, {foreignKey: "userId"});
    Order.belongsTo(models.Sneaker, {foreignKey: "sneakerId"});

  };
  return Order;
};
