'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require("../config/sequilize_config")

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

module.exports = Evento;