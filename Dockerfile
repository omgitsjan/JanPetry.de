# Build stage
FROM node:22-slim AS build
WORKDIR /app

# Install build dependencies for native modules (better-sqlite3)
RUN apt-get update && apt-get install -y \
    python3 \
    make \
    g++ \
    && rm -rf /var/lib/apt/lists/*

# Install pnpm
RUN npm install -g pnpm@10.20.0

# Set environment variables for public site URL
ARG NUXT_PUBLIC_SITE_URL
ENV NUXT_PUBLIC_SITE_URL=$NUXT_PUBLIC_SITE_URL

# Copy package.json and pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Install dependencies (scripts will be ignored initially)
RUN pnpm install --ignore-scripts

# Find and build better-sqlite3 manually with node-gyp
# Install node-gyp globally if not available, then build better-sqlite3
RUN npm install -g node-gyp || true && \
    find node_modules -name "better-sqlite3" -type d -path "*/node_modules/better-sqlite3" | head -1 | xargs -I {} sh -c 'cd {} && npm run build-release || node-gyp rebuild || npm install'

# Copy the rest of the application
COPY . .

# Reinstall to ensure all dependencies are properly set up (better-sqlite3 is already built)
# This will skip better-sqlite3 build since it's already built, but will install missing deps like tailwindcss
RUN pnpm install --force || pnpm install

# Build the application
RUN pnpm run build

# Production stage
FROM node:22-slim
WORKDIR /app

# Copy the build output from the build stage
COPY --from=build /app/.output ./

# Expose port
EXPOSE 3000

# Start the application
CMD ["node", "server/index.mjs"]

