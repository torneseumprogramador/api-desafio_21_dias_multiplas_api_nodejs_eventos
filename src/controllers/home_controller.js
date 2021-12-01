module.exports = class HomeController{
  static index(req, res, next) {
    res.status(200).send({ 
      mensagem: 'Bem vindo a api de eventos em node.js do desafio 21 dias multiplas APIs',
      doc: "/api-docs"
    });
  }
}

