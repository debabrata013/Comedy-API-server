FROM node:18-alpine AS deps

WORKDIR /app

COPY package.json package-lock.json* ./

RUN npm install

# stage 2

FROM node:18-alpine AS builder 

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

COPY . .

EXPOSE 3100

CMd ["npm", "start"]
