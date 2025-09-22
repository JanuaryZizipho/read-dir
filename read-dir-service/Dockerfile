FROM node:20-alpine

WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy all source files
COPY . .

# Expose backend port
EXPOSE 3000

# Start backend
CMD ["node", "src/index.js"]

