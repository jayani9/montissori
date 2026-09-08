# Node Image
FROM node:22-alpine

# Working Directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install packages
RUN npm install

# Copy all files
COPY . .

# Expose port
EXPOSE 5173

# Run Vite
CMD ["npm","run","dev","--","--host"]