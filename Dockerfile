FROM node:lts-slim AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install -g @angular/cli
COPY . .
RUN npm run build-prod
EXPOSE 4200
CMD npm run serve-prod