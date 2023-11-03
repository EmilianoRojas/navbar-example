# ---- Build Stage ----
FROM node:12.2.0-alpine as build

# Set working directory
WORKDIR /app

# Adjust the PATH to include node_modules binaries
ENV PATH /app/node_modules/.bin:$PATH

# Copy package.json and install dependencies
COPY package.json /app/package.json
RUN npm install --silent

# Copy project files
COPY . /app

# Build the project
RUN npm run build

# ---- Production Stage ----
FROM nginx:1.16.0-alpine

# Remove default nginx config and add custom config
RUN rm -v /etc/nginx/conf.d/default.conf
COPY default.conf /etc/nginx/conf.d/

# Copy built assets from the build stage to nginx html directory
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 8080
# Command to run Nginx
CMD ["nginx", "-g", "daemon off;"]
