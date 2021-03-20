#build
FROM node:14.15-alpine as dist
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

#run
FROM nginx:stable-alpine
COPY --from=dist /app/dist /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]