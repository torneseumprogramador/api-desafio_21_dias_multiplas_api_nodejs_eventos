const Evento = require('../models/evento')

module.exports = class EventosController{
  static async index(req, res, next) {
    res.status(200).send([]);
  }
}

