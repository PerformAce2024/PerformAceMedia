FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy everything
COPY . .

# Change to frontend directory, install dependencies
WORKDIR /app/frontend
RUN npm install

EXPOSE 5173

# Start the application from the frontend directory
CMD ["npm", "run", "dev", "--", "--port", "5173", "--host", "0.0.0.0"]
