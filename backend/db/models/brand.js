'use strict';
module.exports = (sequelize, DataTypes) => {
  const Brand = sequelize.define('Brand', {
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      }
    },
    description: DataTypes.TEXT,
    website: DataTypes.STRING,
    image: DataTypes.STRING
  }, {});
  Brand.associate = function(models) {
    // associations can be defined here
    Brand.hasMany(models.Sneaker, {foreignKey: "brandId"})
  };
  return Brand;
};
