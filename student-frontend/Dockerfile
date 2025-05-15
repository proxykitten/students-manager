# Use official Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Copy dependency definitions
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all other files
COPY . .

# Expose Vite's dev server port
EXPOSE 5173

# Default command to start Vite with host and port
CMD ["npx", "vite", "--host", "0.0.0.0", "--port", "5173"]
