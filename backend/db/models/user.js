'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          notEmpty: true,
          isEmail: true,
        },
      },
      username: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          notEmpty: true,
        },
      },
      hashedPassword: {
        type: DataTypes.STRING.BINARY,
        validate: {
          notEmpty: true,
        },
      },
      photo: DataTypes.STRING,
      firstName: {
        type: DataTypes.STRING.BINARY,
        validate: {
          notEmpty: true,
        },
      },
      lastName: {
        type: DataTypes.STRING.BINARY,
        validate: {
          notEmpty: true,
        },
      },
    },
    {}
  );
  User.associate = function(models) {

    User.hasMany(models.Order, {foreignKey: "userId"});
  };
  return User;
};
