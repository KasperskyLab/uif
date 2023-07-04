function requireAll (requireContext) {
  return requireContext.keys().map(requireContext)
}
window.riot = riot
window.runtime = runtime
requireAll(require.context('./src/client/components', true))
requireAll(require.context('./src/client/custom-settings', true))
requireAll(require.context('./src/client/custom-modules', true))
require('./src/client/app')
runtime.join('services.plugin', {
  getPlugin: () => null
})
runtime.join('services.validation', {})
const tagsEventNamesGenerator = {
  addToForm: tagId => `tags:added-to-form:${tagId}`,
  disableValidation: tagId => `tag:validation-disable:${tagId}`,
  enableValidation: tagId => `tag:validation-enable:${tagId}`,
  disableTag: tagId => `tag:disable-tag:${tagId}`,
  enableTag: tagId => `tag:enable-tag:${tagId}`
}
runtime.member('constants.event-names.tags', tagsEventNamesGenerator).join()
