FROM node:17-alpine
WORKDIR /ng-app
COPY package* /ng-app/
COPY . .
EXPOSE 4200
CMD npm run start