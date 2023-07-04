# Standalone usage

1. docker build .
2. docker-compose up

# How to use in project

```javascript
let path = require("path");
let uiBuilder = require("./server");

uiBuilder.setup({
  paths: {
    forms: path.join(__dirname, "forms"),
    projectRoot: path.resolve(__dirname)
  },
  pluginId: ""
});
uiBuilder.on("form:changed", function(formId, form) {
  // handle event
});

uiBuilder.start();
```