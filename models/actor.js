'use strict';
module.exports = (sequelize, DataTypes) => {
  const Actor = sequelize.define('Actor', {
    pelicula: DataTypes.STRING,
    actor: DataTypes.STRING
  }, {});
  Actor.associate = function(models) {
    // associations can be defined here
  };
  return Actor;
};