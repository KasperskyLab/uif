const self = this
require('../control-settings-components/value-field-mapper/escodegen-browser.js')

self.on('mount', function () {
  self.refs.editor.root._tag.setValidationType('js')
})
self.on('updated', function (eventName) {
  self.refs.editor.root._tag.refresh()
})

function getFunctionsList () {
  const prs = self.refs.editor.root._tag.getParseResult()
  let res
  if (prs) { res = _.map(_.filter(prs.body, { type: 'FunctionDeclaration' }), 'id.name') }
  return res
}

runtime.on('code:raw:get', function (cb) {
  cb(self.refs.editor.root._tag.getRawCode())
})

runtime.on('code:raw:set', function (code) {
  self.refs.editor.root._tag.setValue(code)
})

runtime.on('javascript:functions:get:names', function (cb) {
  cb(getFunctionsList())
})

runtime.on('updated', function (eventName) {
  self.refs.editor.root._tag.refresh()
})
