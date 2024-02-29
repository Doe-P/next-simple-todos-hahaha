FROM node:20-alpine3.18 as builder

WORKDIR /app

COPY . .

RUN npm install -g pnpm && pnpm install && pnpm build

CMD ["pnpm","run", "start"]