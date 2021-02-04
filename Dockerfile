FROM node
RUN apt-get update && apt-get install -y wget gawk bsdmainutils
WORKDIR /usr/local/bin
RUN wget git.io/trans
RUN chmod +x ./trans

WORKDIR /code

RUN mkdir routes

ADD . /code

RUN npm install
RUN npm install -g nodemon
VOLUME /code

CMD ["nodemon", "app.js"]
