FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the fronend directory
COPY fronend/ ./fronend/

# Change to fronend directory, install dependencies
WORKDIR /app/fronend
RUN npm install

EXPOSE 5173

# Start the application from the fronend directory
CMD ["npm", "run", "dev", "--", "--port", "5173", "--host", "0.0.0.0"]
