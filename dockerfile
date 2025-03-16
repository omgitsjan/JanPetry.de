# Build stage
FROM node:20.14.0-slim AS build
WORKDIR /app

# Enable pnpm
RUN corepack enable

# Copy package.json and pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install

# Copy the rest of the application
COPY . .

# Build the application
RUN pnpm run build

# Production stage
FROM node:20.14.0-slim
WORKDIR /app

# Copy the build output from the build stage
COPY --from=build /app/.output ./

# Expose port
EXPOSE 3000

# Start the application
CMD ["node", "server/index.mjs"]
