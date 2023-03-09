FROM --platform=linux/amd64 node:18-alpine
COPY . /
RUN npm ci
RUN npm run build
RUN npm run lint
CMD node /dist/index.js