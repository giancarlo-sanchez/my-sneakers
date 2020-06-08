'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sneaker = sequelize.define('Sneaker', {
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    sneakerTypeId: DataTypes.INTEGER,
    brandId: DataTypes.INTEGER,
    imageLarge: DataTypes.STRING,
    imageMedium: DataTypes.STRING,
    imageSmall: DataTypes.STRING,
  }, {});
   Sneaker.associate = function(models) {
    // associations can be defined here
    Sneaker.hasMany(models.Order, {foreignKey: "sneakerId"});
    Sneaker.belongsTo(models.Brand, {foreignKey: "brandId"});
    Sneaker.belongsTo(models.SneakerType, {foreignKey: "sneakerTypeId"});
    const UsersColumnMapping = {
      through: "Order",
      otherKey: 'userId',
      foreignKey: 'sneakerId'
    }
    Sneaker.belongsToMany(models.User, UsersColumnMapping);
  };
  return Sneaker;
};
