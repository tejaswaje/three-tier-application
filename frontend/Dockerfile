
FROM node:10-alpine

RUN mkdir /app

WORKDIR /app

COPY package.json /app

RUN npm install

# add app
COPY . ./

# start app
CMD ["npm", "start"]    