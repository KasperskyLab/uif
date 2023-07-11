module.exports = {
  jsonPatcher: require('./json-patcher'),
  buildUi: require('./build-ui'),
  initFeatureRegistry: require('./feature-registry'),
  setUiComponentAliases: require('./json-patchers/set-ui-aliases'),
  setUiComponentV6lib: require('./json-patchers/set-ui-component-v6-lib'),
  replaceCssClassesWithOffsets: require('./json-patchers/replace-cssclasses-with-offsets')
}
