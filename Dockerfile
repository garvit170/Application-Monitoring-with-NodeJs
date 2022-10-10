FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# ENV PORT=4500

EXPOSE 4500

CMD [ "node" , "index.js" ]