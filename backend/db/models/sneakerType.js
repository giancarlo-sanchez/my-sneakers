'use strict';
module.exports = (sequelize, DataTypes) => {
  const SneakerType = sequelize.define('SneakerType', {
    sneakerType: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      }
    },
    description: {
      type: DataTypes.STRING,
    },
  }, {});
  SneakerType.associate = function(models) {
    // associations can be defined here
    SneakerType.hasMany(models.Sneaker, {foreignKey: 'sneakerTypeId'});
  };
  return SneakerType;
};
