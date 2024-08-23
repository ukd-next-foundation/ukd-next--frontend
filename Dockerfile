FROM node:20-alpine AS builder

WORKDIR /app
COPY . .

RUN yarn install 
RUN yarn build


FROM alpine:latest

WORKDIR /static
COPY --from=builder /app/dist ./

CMD ["sleep", "infinity"]
