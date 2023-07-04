const VariableStore = require('./variable')
const PubSub = require('./pubsub')
let idCtr = 0

function Domain (name, { id: pluginId } = {}) {
  let unscopedChanges = { }
  let scopedChanges = { }
  let onChangeCallback
  let onSaveCallback
  let onRevertCallback
  let onInitCallback
  let initialized = false
  const pubSub = new PubSub()
  const id = idCtr++
  const variableStore = new VariableStore(pubSub)

  function getChanges () {
    return {
      unscopedChanges,
      scopedChanges
    }
  }

  function setChanges ({
    scopedChanges: scoped = {},
    unscopedChanges: unscoped = {}
  } = {}) {
    scopedChanges = scoped
    unscopedChanges = unscoped
  }

  function change (key, val, scope) {
    if (scope) {
      scopedChanges[scope] = scopedChanges[scope] || {}
      scopedChanges[scope][key] = val
    } else {
      unscopedChanges[key] = val
    }
    if (onChangeCallback) onChangeCallback(key, val, scope)
  }

  async function save (additionalChanges) {
    if (!onSaveCallback) {
      throw new Error(`No save function is found for domain "${name}"`)
    }

    const data = await onSaveCallback({
      ...unscopedChanges,
      ...additionalChanges
    }, { ...scopedChanges })

    console.log(`Changes in domain "${name}" are successfully saved.`) // eslint-disable-line no-console
    flushChanges()
    return data
  }

  /**
   * Revert domain changes
   * Also call custom revert callback if needed
   */
  async function revert () {
    try {
      if (typeof onRevertCallback === 'function') {
        await onRevertCallback()
      }
    } catch (error) {
      console.error(error) // eslint-disable-line no-console
    } finally {
      flushChanges()
    }
  }

  function on (evtName, cb) {
    pubSub.on(evtName, id, cb)
  }

  function offScope (evtName, cb) {
    pubSub.off(evtName, cb)
  }

  /**
   * Flush all stored domain changes
   */
  function flushChanges () {
    scopedChanges = {}
    unscopedChanges = {}
  }

  function clearState () {
    flushChanges()
    pubSub.offFor(id)
    variableStore.clearAll()
  }

  function dispose () {
    clearState()
  }

  function initialize () {
    return new Promise((resolve, reject) => {
      if (initialized || !onInitCallback) return resolve()
      initialized = true
      Promise.resolve(onInitCallback())
        .then(resolve)
        .catch(reject)
    })
  }

  const api = {
    name,
    pluginId,
    set onChange (cb) {
      onChangeCallback = cb
    },
    get onChange () {
      return onChangeCallback
    },
    set onSave (cb) {
      onSaveCallback = cb
    },
    get onSave () {
      return onSaveCallback
    },
    set onInit (cb) {
      onInitCallback = cb
    },
    get onInit () {
      return onInitCallback
    },
    set onRevert (cb) {
      onRevertCallback = cb
    },
    get onRevert () {
      return onRevertCallback
    },
    get initialized () {
      return initialized
    },
    getChanges,
    setChanges,
    clearState,
    change,
    save,
    revert,
    dispose,
    on: on,
    off: pubSub.off,
    offScope: offScope,
    trigger: pubSub.trigger,
    variable: variableStore,
    initialize
  }

  return api
}

module.exports = Domain
