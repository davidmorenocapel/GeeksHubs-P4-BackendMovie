'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cine = sequelize.define('Cine', {
    provincia: DataTypes.STRING,
    nombre: DataTypes.STRING,
    peliculaId: DataTypes.INTEGER
  }, {});
  Cine.associate = function(models) {
    // associations can be defined here
  };
  return Cine;
};