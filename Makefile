all: run release

run:
	docker stop get-charts & \
	docker rm get-charts & \
	docker run --name get-charts -p 4000:8080 -it get-charts:latest /bin/bash

release:
	docker stop get-charts & \
	docker rm get-charts & \
	docker rmi get-charts & \
  yarn build && \
  mkdir -pv ./dist/app && mv ./dist/*.* ./dist/app && cp -a server.js ./dist && \
  cd ./dist && \
  yarn init -yp && \
	yarn add koa koa-static2 && \
	node-prune && \
	cd .. && \
	docker build -f .docker/Dockerfile -t get-charts ./dist
