FROM node:22-bookworm-slim

WORKDIR /app

# The project pins pnpm in package.json; keep the lockfile, workspace policy,
# and patched dependency available before the reproducible installation.
RUN corepack enable
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY patches ./patches
RUN pnpm --version && pnpm install --frozen-lockfile

# Build the client bundle, SSR bundle, and production server from the checkpoint.
COPY . .
RUN pnpm build

ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000

# The app only needs read access to its baked assets at runtime.
USER node
CMD ["node", "dist/index.js"]
