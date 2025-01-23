# 1. Dependencies
FROM node:21-alpine3.19 AS deps

WORKDIR /app

# Copy only the package files to optimize Docker cache
COPY package*.json ./

# Install only production dependencies
RUN npm install --production

# 2. Build
FROM node:21-alpine3.19 AS build

WORKDIR /app

# Copy dependencies from the previous stage
COPY --from=deps /app/node_modules ./node_modules

# Copy the remaining application files
COPY . .

# 3. Production
FROM node:21-alpine3.19 AS prod

WORKDIR /app

# Copy only the necessary files from the build stage
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app ./

# Set environment variable for production
ENV NODE_ENV=production

# Use non-root user for security
USER node

# Expose the application port
EXPOSE 8080

# Run the application
CMD ["node", "index.js"]