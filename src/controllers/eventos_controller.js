const Evento = require('../models/evento');

module.exports = class EventosController{
  static async index(req, res, next) {
    let eventos = await Evento.findAll();
    res.status(200).send(eventos);
  }
}

