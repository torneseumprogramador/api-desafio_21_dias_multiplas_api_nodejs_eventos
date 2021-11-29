
cd src

npx sequelize-cli model:generate --name Evento --attributes idUsuario:integer,titulo:string,descricao:text,dataInicio:date,dataFim:date --force

npx sequelize-cli db:migrate
