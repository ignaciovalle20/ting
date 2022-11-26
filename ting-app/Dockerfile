FROM node:16.10-alpine AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
RUN npm install -g @angular/cli@14.2.4
COPY . .
RUN npm run build


FROM nginx:1.23-alpine
#COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/ting-app /usr/share/nginx/html