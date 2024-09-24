FROM node:16

COPY . /app

WORKDIR /app

RUN npm install

expose 9001

CMD ["node", "index.js"]