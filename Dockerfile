# Use official Node.js LTS image as base
FROM node:18-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package files first (for layer caching)
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of your source code
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Command to start the app
CMD ["node", "index.js"]