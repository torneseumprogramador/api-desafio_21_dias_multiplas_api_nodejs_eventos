module.exports = class Evento {
  constructor(){
    this.id = 0;
    this.idUsuario = 0;
    this.titulo = "";
    this.descricao = "";
    this.dataInicio = new Date();
    this.dataFim = new Date();
    this.dataCriacao = new Date();
    this.dataAtualizacao = new Date();
  }

}