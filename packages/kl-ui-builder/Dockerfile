FROM node:16-alpine as BUILD_CONTAINER

ENV NO_PROXY="localhost,127.0.0.1"

USER 1001

RUN mkdir -p /tmp/src/app
WORKDIR /tmp/src/app
COPY --chown=1001 . .

# config yarn
RUN yarn config set --silent registry https://registry.npmjs.org/ && \
    yarn config set strict-ssl false --silent

# install development dependencies
RUN yarn install

# build
RUN yarn gulp

# install production dependencies
RUN cp ./package.json ./lib && \
    cp ./yarn.lock ./lib && \
    cd ./lib && \
    yarn --production && \
    rm -rf ./package.json && \
    rm -rf ./yarn.lock

# build final image
FROM node:16-alpine as FINAL_IMAGE
USER 1001
WORKDIR /opt/app
COPY --chown=1001:1001 --from=BUILD_CONTAINER /tmp/src/app/lib .

ENV NODE_ENV=production

EXPOSE 7000

CMD ["node", "/opt/app/ui-builder.js"]
