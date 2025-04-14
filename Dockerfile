FROM node:18-alpine AS build

# Set the working directory in the container
WORKDIR /app

# Copy package files first for better caching
COPY ./frontend/package.json ./frontend/package-lock.json* ./frontend/
WORKDIR /app/frontend
RUN npm ci

# Copy the rest of the frontend code
COPY ./frontend .

# Build the app for production
RUN npm run build

# Production image
FROM nginx:alpine

# Copy the built app from the build stage
COPY --from=build /app/frontend/dist /usr/share/nginx/html

# Copy a custom nginx configuration
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]