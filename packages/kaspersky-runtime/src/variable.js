module.exports = function (feed) {
  const map = new Map()
  const subscriptions = []
  const Emitter = require('tiny-emitter')
  const emitter = new Emitter()
  const scopes = new Map()

  function set (name, value, isReadonly) {
    const exVal = map.get(name)
    if (exVal != null && exVal.readOnly) {
      console.warn(`Cannot overwrite readonly variable! Attempted to set variable "${name}"`) // eslint-disable-line no-console
      return
    }
    map.set(name, { value, readOnly: isReadonly })
    feed.trigger('runtime -> variable:changed', name, value)
    emitter.emit('variable-change:' + name, value)
  }

  function get (name) {
    const variable = map.get(name)
    if (variable) {
      return variable.value
    } else {
      return undefined
    }
  }

  function remove (name) {
    map.delete(name)
  }

  function onChange (name, scope, callback) {
    if (arguments.length === 3) {
      !scopes.has(scope) && scopes.set(scope, [])
      scopes.get(scope).push({ name, callback })
    } else {
      callback = scope
    }

    subscriptions.push(name)
    emitter.on(name, callback)
    emitter.on('variable-change:' + name, callback)
  }

  function unsubscribe (name, callback) {
    const evtName = 'variable-change:' + name
    if (callback) {
      emitter.off(evtName, callback)
    } else {
      emitter.off(evtName)
    }
  }

  function clear (name) {
    if (name) return map.delete(name)
  }

  function clearAll () {
    map.clear()
    subscriptions.forEach(function (evtName) {
      emitter.off(evtName)
    })
  }

  function offFor (scope) {
    if (!scopes.has(scope)) return
    scopes.get(scope).forEach(({ name, callback }) => {
      emitter.off('variable-change:' + name, callback)
    })
    scopes.delete(scope)
  }

  return {
    set: set,
    get: get,
    offFor: offFor,
    remove: remove,
    clear: clear,
    clearAll: clearAll,
    onChange: onChange,
    unsubscribe: unsubscribe
  }
}
