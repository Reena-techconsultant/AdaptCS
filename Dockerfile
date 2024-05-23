FROM node:18 as builder
LABEL maintainer="Sumbono <sumbono@adapta.earth>"

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build
RUN npm run export

FROM node:18
LABEL maintainer="Sumbono <sumbono@adapta.earth>"

WORKDIR /app

COPY --from=builder /app ./

EXPOSE 3000

CMD ["npx", "serve@latest", "out"]
