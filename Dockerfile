FROM ubuntu:latest as build-stage
RUN apt-get update && apt-get upgrade -y
RUN apt-get install -y nodejs npm libgl1-mesa-dev
# ENV NODE_OPTIONS=--openssl-legacy-provider
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY . .
RUN npm i --force
RUN npm run build
FROM nginx:stable-alpine
COPY --from=build-stage /app/build/ /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
