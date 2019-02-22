FROM node:10.14.2-alpine
VOLUME /tmp
ADD . /app/
WORKDIR /app
ENV NODE_ENV="production"
ENTRYPOINT [ "sh", "-c", "node server.js" ]
EXPOSE 8080
