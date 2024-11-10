FROM node:22-alpine AS builder

ARG ENVIRONMENT

WORKDIR /app
COPY . .

RUN yarn install 
RUN yarn build --mode ${ENVIRONMENT}


FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
