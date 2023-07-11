# UI Builder

UI Builder — is a WYSIWYG editor for managed HTML forms.

## How to use in project

```javascript
let path = require('path')
let uiBuilder = require('@kaspersky/ui-builder')

uiBuilder.setup({
  paths: {
    forms: path.join(__dirname, "forms"),
    projectRoot: path.resolve(__dirname)
  },
  pluginId: ""
})

uiBuilder.on("form:changed", function(formId, form) {
  // handle event
})

uiBuilder.start()
```