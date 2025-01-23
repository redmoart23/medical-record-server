# 1. Dependencies
FROM node:21-alpine3.19 as deps

WORKDIR /app

COPY package*.json ./

RUN npm install

# 2. Build
FROM node:21-alpine3.19 as build

WORKDIR /app

#copy node modules
COPY --from=deps /app/node_modules ./node_modules   

COPY . .

RUN npm ci -f --only=production && npm cache clean --force

# 3. Production
FROM node:21-alpine3.19 as prod

WORKDIR /app

COPY --from=build /app/node_modules ./node_modules   

ENV NODE_ENV=production

USER node

EXPOSE 8080

CMD ["node", "index.js"]