# Node.js backend Dockerfile

FROM node:20-alpine

WORKDIR /app

# Install dependencies for Prisma
RUN apk add --no-cache openssl

# Copy package files
COPY package*.json ./
COPY tsconfig.json ./

# Install dependencies
RUN npm ci

# Copy prisma schema
COPY prisma ./prisma/

# Copy source code
COPY src ./src/

# Generate Prisma client
RUN npx prisma generate

# Expose port
EXPOSE 5000

# Development mode - will be overridden by docker-compose command
CMD ["npm", "run", "dev"]
