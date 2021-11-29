const Evento = require('../models/evento')
const sequelize = require("../config/database")

module.exports = class EventosController{
  static async index(req, res, next) {
    res.status(200).send([
      new Evento(),
      new Evento(),
      new Evento(),
      new Evento(),
      new Evento()
    ]);
  }
}

