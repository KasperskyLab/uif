const version = process.version
let NODE_OPTIONS = ''

if (version > 'v15') {
  NODE_OPTIONS = '--openssl-legacy-provider'

  if (version < 'v23') {
    NODE_OPTIONS += ' --no-experimental-fetch'
  }
}

module.exports = {
  NODE_OPTIONS
}
