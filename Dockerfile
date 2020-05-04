FROM node:10

# Core

WORKDIR /app/core

COPY core/package*.json ./

RUN yarn

COPY core .

RUN yarn link

# UI

WORKDIR /app/ui

COPY ui/package*.json ./

RUN yarn

COPY ui .

RUN yarn link "@getup/core"

# Start the app

EXPOSE 3000

CMD ["yarn", "start"]
