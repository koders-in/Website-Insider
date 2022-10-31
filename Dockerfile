FROM ubuntu:latest as build-stage
RUN apt-get update 
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get update 
RUN apt-get install -y nodejs libgl1-mesa-dev
# ENV NODE_OPTIONS=--openssl-legacy-provider
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY . .
RUN npm install
RUN npm run build
FROM nginx:stable-alpine
COPY --from=build-stage /app/.next/ /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
