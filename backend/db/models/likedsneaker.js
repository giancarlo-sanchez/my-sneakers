'use strict';
module.exports = (sequelize, DataTypes) => {
  const LikedSneaker = sequelize.define('LikedSneaker', {
    userId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true,
      }
    },
    sneakerId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true,
      }
    }
  }, {});
  LikedSneaker.associate = function(models) {
    LikedSneaker.belongsTo(models.User, {foreignKey: "userId"});
    LikedSneaker.belongsTo(models.Sneaker, {foreignKey: "sneakerId"});
  };
  return LikedSneaker;
};
