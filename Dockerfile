# Stage 1 - Build Angular Application

FROM node:21 AS build

# Set working directory
WORKDIR /app

# Copy package files first for better layer caching
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy application source
COPY . .

# Build Angular application
RUN npm run build

# Stage 2 - Nginx Server

FROM nginx:1.27-alpine

# Copy Angular build output
COPY --from=build /app/dist/angular-ui/browser /usr/share/nginx/html

# Remove default nginx configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom nginx configuration
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Expose HTTP port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]