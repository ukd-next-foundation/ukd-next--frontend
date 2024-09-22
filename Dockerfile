
ARG ENVIRONMENT=development


FROM node:22-alpine AS builder

WORKDIR /app
COPY . .

RUN yarn install 
RUN yarn build --mode $ENVIRONMENT


FROM alpine:latest

WORKDIR /static
COPY --from=builder /app/dist ./

CMD ["sleep", "infinity"]
