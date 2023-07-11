function StateStore () {
  const states = {}
  const buildResult = {}

  function setState (componentId, state) {
    states[componentId] = state
    runtime.trigger('state-refresh#' + componentId, state)
  }

  function setFieldJSON (componentId, jsonObj) {
    buildResult[componentId] = buildResult[componentId] || {}
    _.extend(buildResult[componentId], jsonObj)
  }

  function getState (componentId) {
    return states[componentId] || {}
  }

  function getBuildResult () {
    const res = {
      elements: []
    }
    Object.keys(buildResult).forEach(function (key) {
      const jsonObj = buildResult[key]
      res.elements.push(jsonObj)
    })
    return res
  }

  const api = {
    setState: setState,
    getState: getState,
    setFieldJSON: setFieldJSON,
    getBuildResult: getBuildResult
  }

  return api
}

module.exports = StateStore
