# Use a lightweight Node.js image as the base
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy only package.json and package-lock.json
COPY frontend/package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose port 80 for incoming requests
EXPOSE 80

# Start the application
CMD ["npm", "run", "dev", "-p", "80", "-a", "0.0.0.0"]
