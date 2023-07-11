const base = require('./base')
const security = require('./security')
const tags = require('./tags')
const typescript = require('./typescript')
const storybook = require('./storybook')
const react = require('./react')

module.exports = {
  eslint: {
    base,
    security,
    typescript,
    tags,
    react,
    storybook
  }
}
