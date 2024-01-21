ARG nodejs=node:20-alpine


FROM ${nodejs} AS deps

WORKDIR /app
COPY package.json ./

RUN yarn install 


FROM ${nodejs} AS builder

WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules

RUN yarn build


FROM nginx:alpine

WORKDIR /app
COPY --from=builder /app/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/LICENSE ./LICENSE

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
