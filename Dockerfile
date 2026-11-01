FROM node:22-alpine AS base

WORKDIR /app

RUN corepack enable

FROM base AS deps

RUN apk add --no-cache libc6-compat

COPY .yarnrc.yml ./
COPY package.json ./
COPY yarn.lock ./

COPY .yarn ./.yarn

RUN yarn install --immutable

FROM base AS builder

COPY --from=deps /app/node_modules ./node_modules

COPY . .

RUN yarn run build

FROM base AS runner

ENV NODE_ENV=production

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]

