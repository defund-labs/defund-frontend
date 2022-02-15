# build environment
FROM node:lts-alpine3.13 as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json .
COPY package-lock.json .
RUN npm ci --silent
COPY . ./

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/src /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]