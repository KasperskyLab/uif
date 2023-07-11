const self = this

function onRenderManuals (content) {
  self.refs.markdown.render(content)
}

runtime.on('component-manual:render', onRenderManuals)
