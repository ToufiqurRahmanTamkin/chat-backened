# Use Node.js LTS image
FROM node:16

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the source code
COPY . .

# Build TypeScript files
RUN npm run build

# Expose the application port
EXPOSE 5000

# Start the application
CMD ["npm", "run", "start"]
