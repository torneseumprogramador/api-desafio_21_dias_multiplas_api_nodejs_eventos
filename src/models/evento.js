'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Evento extends Model {
    static associate(models) { }
  };
  Evento.init({
    idUsuario: DataTypes.INTEGER,
    titulo: DataTypes.STRING,
    descricao: DataTypes.STRING,
    dataInicio: DataTypes.DATE,
    dataFim: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Evento',
  });
  return Evento;
};