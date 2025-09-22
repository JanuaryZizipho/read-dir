# Stage 1: Build Angular App
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Build browser and server bundles
RUN npm run build:ssr

# Stage 2: Serve with Node
FROM node:20-alpine

WORKDIR /app

# Copy production build
COPY --from=build /app/dist/read-dir-client /app/dist
COPY package*.json ./
RUN npm install --omit=dev

EXPOSE 4000
CMD ["node", "dist/server/main.js"]
