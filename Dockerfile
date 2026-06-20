# ==========================
# Stage 1 - Build Angular App
# ==========================

FROM node:22-alpine AS build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy source code
COPY . .

# Increase memory for Angular build
ENV NODE_OPTIONS=--max-old-space-size=4096

# Build Angular application
RUN npm run build

# Debug (remove after successful build)
RUN ls -R /app/dist

# ==========================
# Stage 2 - Nginx
# ==========================

FROM nginx:1.27-alpine

# Remove default nginx config
RUN rm -f /etc/nginx/conf.d/default.conf

# Copy custom nginx config
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# IMPORTANT:
# Replace "angular-ui" with your actual dist folder name
COPY --from=build /app/dist/Angular-UI /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]