const self = this

self.on('mount', function () {
  // self.refs.editor._tag.setValue(JSON.stringify(ctx))
  self.refs.editor.root._tag.setCodePatchFunction(codePatch)
  self.refs.editor.root._tag.setValidationType('json')
  runtime.trigger('context:ready')
  self.refs.editor.onBlur(function () {
    runtime.trigger('context:update', self.refs.editor.root._tag.getCode())
  })
})

let ctx
runtime.on('context:get', function (cb) {
  ctx = self.refs.editor.root._tag.getCode()
  cb(ctx)
})

runtime.on('context:raw:get', function (cb) {
  cb(self.refs.editor.root._tag.getRawCode())
})

runtime.on('context:raw:update', function () {
  runtime.trigger('form:get-active', form => {
    form.js.context = self.refs.editor.root._tag.getRawCode()
  })
})

runtime.on('context:raw:set', function (ctx) {
  self.refs.editor.root._tag.setValue(ctx)
})

function codePatch (code) {
  return code.replace(/(\s*?{\s*?|\s*?,\s*?)(['"])?([a-zA-Z0-9]+)(['"])?:/g, '$1"$3":')
}

self.on('updated', function (eventName) {
  self.refs.editor.root._tag.refresh()
})
