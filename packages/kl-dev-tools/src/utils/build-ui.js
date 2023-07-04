/**
 * Processes raw forms data produced by UI Builder to application consumable forms map
 * @param { object } props
 * @param { { [formId: string]: object } } props.forms - Raw forms map produced by UI Builder
 * @param { { [formId: string]: object } } props.helpTopics - FormID to help-data mapping
 * @param { string[] } props.buildTypes - Build types allowed to pass form processing
 * @param { boolean } props.devMode - If true, additional data is passed to forms
 * @returns { { [formId: string]: object } } Application consumable forms map
 */
function buildUi ({ forms, helpTopics = null, buildTypes = [], devMode = false }) {
  const processedForms = {}
  const allowedBuildTypes = ['any', ...buildTypes]

  for (const formId in forms) {
    const parsedJson = forms[formId]
    const {
      id,
      customFields: {
        buildType: formBuildType = 'any'
      } = {}
    } = parsedJson
    if (!allowedBuildTypes.includes(formBuildType)) continue

    const form = {
      id,
      name: parsedJson.name,
      elements: prepareElements({
        elements: parsedJson.json.elements,
        allowedBuildTypes
      }),
      dataSource: parsedJson.dataSource,
      dataSaveAction: parsedJson.dataSaveAction,
      section: parsedJson.section,
      init: parsedJson.init,
      onRendered: parsedJson.onRendered,
      onDispose: parsedJson.onDispose,
      objectType: parsedJson.objectType,
      objectId: parsedJson.objectId,
      rootForm: parsedJson.json.rootForm,
      ignoreDomainValidation: parsedJson.json.ignoreDomainValidation,
      domain: parsedJson.json.domain,
      useCache: parsedJson.useCache,
      mode: parsedJson.mode,
      title: parsedJson.title,
      navigationTitle: parsedJson.navigationTitle,
      navigationGroup: parsedJson.navigationGroup,
      customButtonsGetter: parsedJson.customButtonsGetter,
      isInSilentChangeMode: parsedJson.isInSilentChangeMode,
      modelTrackerIsOff: parsedJson.modelTrackerIsOff,
      isParentEntity: parsedJson.isParentEntity,
      actionBarAssistantBootstrapper: parsedJson.actionBarAssistantBootstrapper,
      ignoreFormCloseOnDomainSave: parsedJson.ignoreFormCloseOnDomainSave,
      topicId: parsedJson.topicId,
      customFields: parsedJson.customFields,
      parentElementId: parsedJson.parentElementId,
      parentFormId: parsedJson.parentFormId,
      version: parsedJson.version,
      dataModelName: parsedJson.dataModelName
    }

    if (helpTopics && helpTopics[id]) {
      applyHelpTopics({
        element: form,
        helpData: helpTopics[id]
      })
    }

    if (devMode) {
      form.author = parsedJson.author
    }

    processedForms[id] = form
  }

  return processedForms
}

/**
 * Recursively filters elements by build type
 * @param { object } props
 * @param { object[] } props.elements - Form elements or element subelements (as function is called recursively)
 * @param { string[] } props.allowedBuildTypes - Build types allowed to pass form processing
 * @returns { object[] } Filtered elements
 */
function prepareElements ({ elements, allowedBuildTypes }) {
  return elements.filter(elem => {
    const { buildType = 'any' } = elem
    if (!allowedBuildTypes.includes(buildType)) {
      return false
    }

    if (elem.elements && Array.isArray(elem.elements)) {
      elem.elements = prepareElements({ elements: elem.elements, allowedBuildTypes })
    }
    return true
  })
}

/**
 * Recursively applies help topic ids to form and its elements. Mutable!
 * @param { object } props
 * @param { object } props.element - Entry to process, either form or its element
 * @param { { topicId?: number, elements?: { [id: string]: object } } } props.helpData - Help data for current entry
 */
function applyHelpTopics ({ element, helpData: { topicId = null, elements = {}, ...rest } = {} }) {
  if (topicId !== null) {
    element.topicId = topicId
  }
  if (rest.windows && rest.linux) {
    element.topicId = {
      windows: rest.windows.topicId,
      linux: rest.linux.topicId
    }
  }
  if (!Array.isArray(element.elements)) return
  element.elements.forEach(element => {
    applyHelpTopics({ element, helpData: elements[element.id] })
  })
}

module.exports = buildUi
