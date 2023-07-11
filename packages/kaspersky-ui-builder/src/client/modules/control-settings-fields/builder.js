const builder = {
  build: function (tagName, opts) {
    const el = document.createElement(tagName)
    const tags = riot.mount(el, tagName, opts)
    return tags[0]
  }
}

module.exports = builder
