const emitter = require('tiny-emitter/instance')

const server = require('./server')

const api = {
  on: emitter.on.bind(emitter),
  setup: config => server.setup(config),
  start: () => server.start(),
  stop: () => server.stop()
}

module.exports = api
