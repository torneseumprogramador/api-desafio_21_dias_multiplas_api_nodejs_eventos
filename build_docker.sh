docker stop desafio_multiplasapis_nodejs_eventos
docker rm desafio_multiplasapis_nodejs_eventos

export USER='root'
export PASSWORD='root'
export DATABASE='eventos_desafio_multiplas_apis'
export HOST='127.0.0.1'

docker build -t didox/desafio_multiplasapis_nodejs_eventos -f Dockerfile .

docker run -d -e USER -e PASSWORD -e DATABASE -e HOST -p 3000:3000 --name desafio_multiplasapis_nodejs_eventos didox/desafio_multiplasapis_nodejs_eventos

docker logs desafio_multiplasapis_nodejs_eventos -f --tail 100
