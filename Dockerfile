# syntax=docker/dockerfile:1

ARG NODE_VERSION=22

FROM node:${NODE_VERSION}-slim AS base
WORKDIR /usr/src/app

FROM base AS deps
COPY package.json package-lock.json ./
RUN npm ci

FROM deps AS build
COPY . .
ARG APP_NAME=uber-services
RUN npm run build -- ${APP_NAME}

FROM base AS production
WORKDIR /usr/src/app
ENV NODE_ENV=production

COPY package.json package-lock.json ./
RUN npm ci --omit=dev

COPY --from=build /usr/src/app/dist ./dist

USER node

ARG APP_NAME=uber-services
CMD ["sh", "-c", "node dist/apps/${APP_NAME}/main"]