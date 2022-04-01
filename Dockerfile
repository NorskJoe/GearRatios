FROM node:14.17.5 as node
WORKDIR /app
COPY . .
RUN npm i && npm run build --prod

FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=node /app/dist/gear-ratios /usr/share/nginx/html
EXPOSE 8080
ENV NGINX_PORT 8080