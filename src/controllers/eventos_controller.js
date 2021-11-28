const Evento = require('../models/evento')

module.exports = class EventosController{
  static index(req, res, next) {
    res.status(200).send([
      new Evento(),
      new Evento(),
      new Evento(),
      new Evento(),
      new Evento()
    ]);
  }
}

