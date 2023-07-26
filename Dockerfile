FROM node:17-alpine
WORKDIR /ng-app
COPY package* /ng-app/
COPY . .
RUN npm install -g @angular/cli
EXPOSE 4200
CMD npm run start
