FROM node:6.4

WORKDIR /code/

COPY npm-shrinkwrap.json .

RUN npm install nodemon -g
RUN npm install

COPY . .

EXPOSE 8002

CMD ["npm", "run", "start"]
