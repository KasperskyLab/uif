const map = {}
const moduleWaitersMap = {}
function register (key, obj) {
  if (key in map) {
    throw new Error('Object with key "' + key + '" is already registered.')
  } else {
    map[key] = obj
  }
}
function get (key) {
  return map[key]
}

function ensureModuleSubscriptionContext (moduleName) {
  moduleWaitersMap[moduleName] = moduleWaitersMap[moduleName] || {}
  return moduleWaitersMap[moduleName]
}

const di = {
  register: register,
  get: get,
  whenReady: function (moduleName) {
    const ctx = ensureModuleSubscriptionContext(moduleName)
    if (map[moduleName]) {
      return Promise.resolve(map[moduleName])
    } else {
      const promise = new Promise(function (resolve, reject) {
        resolve(map[moduleName])
      })
      ctx.push(promise)
      return promise
    }
  }
}

di.register('services', {})
