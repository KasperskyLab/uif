function PubSub () {
  const Emitter = require('tiny-emitter')
  const emitter = new Emitter()
  const scopes = new Map()
  const foreverTrigger = new Map()

  function on (eventName, scope, cb) {
    let callback = cb
    if (arguments.length === 3) {
      if (!scopes.has(scope)) {
        scopes.set(scope, [])
      }
      const scopeCtr = scopes.get(scope)
      scopeCtr.push({ eventName, cb })
    }
    if (arguments.length === 2) {
      callback = scope
    }

    if (!callback || typeof callback !== 'function') {
      throw new Error(`Attempt to register event ${eventName} with no callback.`)
    }
    emitter.on(eventName, callback)
    if (foreverTrigger.has(eventName)) {
      foreverTrigger.get(eventName).forEach(({ scopes, args }) => {
        if (arguments.length === 3) {
          if (scopes.includes(scope)) return
          scopes.push(scope)
        }

        callback(...args) // eslint-disable-line node/no-callback-literal
      })
    }
  }

  function trigger () {
    emitter.emit(...arguments)
  }
  /**
     * Sending an event that will be received by both
     * an already registered tag and a newly created one
     * @param {string} eventName - event name
     * @param {array} args - event payload
     */
  function triggerDelayed (eventName, ...args) {
    const collectedEventFires = foreverTrigger.get(eventName) || []
    collectedEventFires.push({
      scopes: [],
      args
    })
    foreverTrigger.set(eventName, collectedEventFires)
    emitter.emit(...arguments)
  }

  function offFor (scope) {
    if (!scopes.has(scope)) return
    scopes.get(scope).forEach(({ eventName, cb }) => {
      emitter.off(eventName, cb)
    })
    scopes.delete(scope)
  }

  function off () {
    emitter.off(...arguments)
  }

  function one (eventName, scope, cb) {
    if (arguments.length === 2) {
      cb = scope
      scope = null
    }
    if (scope) {
      if (!scopes.has(scope)) scopes.set(scope, [])
      const scopeCtr = scopes.get(scope)
      scopeCtr.push({ eventName, cb })
    }
    emitter.once(eventName, cb)
  }

  return {
    on,
    one,
    once: one,
    off,
    offFor,
    trigger,
    emit: trigger,
    triggerDelayed,
    emitDelayed: triggerDelayed
  }
}

module.exports = PubSub
