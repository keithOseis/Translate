FROM node
RUN apt-get update && apt-get install -y wget
WORKDIR /usr/local/bin
RUN wget git.io/trans
RUN chmod +x ./trans

WORKDIR /code

RUN mkdir routes

COPY app.js app.js
COPY package.json package.json
COPY routes/rotues.js routes/routes.js

RUN npm install
RUN npm install -g nodemon
VOLUME /code

CMD ["nodemon", "app.js"]
