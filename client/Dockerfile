# Node.js frontend Dockerfile

FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy config files
COPY vite.config.ts tsconfig*.json ./
COPY postcss.config.js tailwind.config.js ./
COPY index.html ./

# Copy source code
COPY src ./src/
COPY public ./public/

# Expose Vite port
EXPOSE 5173

# Development mode with hot reload
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
