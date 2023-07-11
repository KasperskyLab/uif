FROM buildkite/puppeteer:latest
RUN mkdir /app
WORKDIR /app
COPY ./package.json ./package-lock.json ./
RUN npm config set strict-ssl false
RUN npm config set registry https://registry.npmjs.org/
RUN npm install
RUN npm install react-is
COPY . .
CMD ["npm", "run", "test:screenshots"]
