const version = process.version
let NODE_OPTIONS = ''

if (version > 'v17') {
  NODE_OPTIONS = '--openssl-legacy-provider --no-experimental-fetch'
}

module.exports = {
  NODE_OPTIONS
}
