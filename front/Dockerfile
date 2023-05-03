
FROM node:18-alpine

ADD ./package.json /tmp/package.json
RUN mkdir /src && cd /tmp && npm install
RUN mv /tmp/node_modules /src/node_modules

ADD . /src
WORKDIR /src


FROM node:12-alpine
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --production
COPY . .
CMD ["node", "/app/src/index.js"]