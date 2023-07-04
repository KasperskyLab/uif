const Runtime = function (apiBase) {
  const eventSubscriptions = {}
  let members = {}
  let waitList = {}
  const dictionary = new Dictionary()
  let runtimeDisabled = false
  const membersNameRegistry = []

  function joinNewMember (member, isOverwritable) {
    if (members[member.name] && !isOverwritable) { throw new Error('Member with this name is already registered') }
    _.set(members, member.name, member)
    if (membersNameRegistry.indexOf(member.name) === -1) {
      membersNameRegistry.push(member.name)
    }
    notifySubscribers(member.name)
  }

  function notifySubscribers (memberName) {
    if (waitList[memberName]) {
      waitList[memberName].forEach(function (readyCallback) {
        readyCallback()
      })
      delete waitList[memberName]
    }
  }

  function waitForJoin (memberName) {
    return new Promise(function (resolve, reject) {
      waitList[memberName] = waitList[memberName] || []
      waitList[memberName].push(function () {
        resolve(_.get(members, memberName))
      })
    })
  }

  function getMemberAsync (memberName) {
    const res = _.get(members, memberName, null)
    if (res) {
      return Promise.resolve(res)
    } else {
      return new Promise(function (resolve, reject) {
        waitForJoin(memberName)
          .then(function (member) {
            resolve(member)
          })
      })
    }
  }

  function on (evtName, cb) {
    if (!cb || typeof cb !== 'function') {
      throw new Error('Attempt to register event ' + evtName + ' with no callback.')
    }
    eventSubscriptions[evtName] = eventSubscriptions[evtName] || []
    if (eventSubscriptions[evtName].indexOf(cb) !== -1) return
    eventSubscriptions[evtName].push({
      callback: cb
    })
    if (delayedTriggerMap[evtName]) {
      delayedTriggerMap[evtName].forEach(function (args) {
        trigger.apply(this, [evtName].concat(args))
      })
      delete delayedTriggerMap[evtName]
    }
  }

  function off (evtName, func) {
    if (func && Array.isArray(eventSubscriptions[evtName])) {
      eventSubscriptions[evtName] = eventSubscriptions[evtName].filter(function (evt) {
        return evt.callback !== func
      })
    } else {
      eventSubscriptions[evtName] = []
    }
  }

  function one (evtName, cb) {
    if (!cb || typeof cb !== 'function') {
      throw new Error('Attempt to register event ' + evtName + ' with no callback.')
    }
    eventSubscriptions[evtName] = eventSubscriptions[evtName] || []
    eventSubscriptions[evtName].push({
      callback: cb,
      oneTime: true
    })
  }

  var delayedTriggerMap = {}

  function trigger (evtName, ...args) {
    if (eventSubscriptions[evtName]) {
      eventSubscriptions[evtName].forEach(function (subscription, i) {
        subscription.callback.apply(null, args)
        if (subscription.oneTime) {
          eventSubscriptions[evtName].splice(i, 1)
        }
      })
    }
  }

  /**
    * Send event to be received
    * both already registered tag and newly created one
     * @param {string} evtName - Event name
     * @param {array} args - payload
     */
  function triggerDelayed (evtName, ...args) {
    trigger.apply(this, [evtName].concat(args))
    delayedTriggerMap[evtName] = delayedTriggerMap[evtName] || []
    delayedTriggerMap[evtName].push(args)
  }

  /**
     * A variant of the get method that returns the results as a single object.
     * Perhaps this implementation will be final for get. While for testing.
     */
  function getCombined (...args) {
    const returnMemberAsIs = args[args.length - 1] === true

    args.push(true)
    return new Promise(function (resolve, reject) {
      get.apply(this, Array.prototype.slice.call(args, 0))
        .then(function (...args) {
          const res = {}
          args.forEach(function (member) {
            const names = member.name.split('.')
            res[names[names.length - 1]] = returnMemberAsIs ? member : member.instance
          })
          resolve(res)
        })
    })
  }

  function get (...args) {
    const returnMemberAsIs = args[args.length - 1] === true
    const isCallbackSyntaxUsed = typeof args[args.length - 1] === 'function'
    let successCallback = isCallbackSyntaxUsed
      ? args[arguments.length - 1]
      : function () { }
    const cutLastArgument = returnMemberAsIs || isCallbackSyntaxUsed

    const subscriptions = (cutLastArgument)
      ? args.slice(0, args.length - 1)
      : args
    const argPromises = []
    const result = {}

    function processSubscription (scope, subText, resultStore) {
      let names = subText.split(' ')
      scope = scope ? scope + '.' : ''
      names = names.filter(function (val) {
        return val !== ''
      })
      names.forEach(function (name, i) {
        if (name === '') return
        argPromises.push(new Promise(function (resolve, reject) {
          getMemberAsync(scope + name)
            .then(function (member) {
              resultStore[i] = returnMemberAsIs ? member : member.instance ? member.instance : member
              resolve()
            })
        }))
      })
    }

    subscriptions.forEach(function (arg, i) {
      arg = arg.trim()
      const path = arg.split(':')
      const scopeResult = result[i] = []
      if (path.length > 1) {
        processSubscription(path[0], path[1], scopeResult)
      } else {
        // var scopeResult = [];
        processSubscription('', arg, scopeResult)
      }
    })
    Promise.all(argPromises)
      .then(function () {
        let res = []
        Object.keys(result)
          .forEach(function (key) {
            res = res.concat(result[key])
          })

        if (typeof successCallback === 'function') {
          successCallback(...res)
        }
      })

    return {
      then: function (cb) {
        successCallback = cb
      }
    }
  }

  function getSync (memberName, returnMemberAsIs) {
    const res = _.get(members, memberName, null)
    const returnInstances = function (res) {
      if (res.instance) {
        return res.instance
      } else {
        const instances = {}
        Object.keys(res)
          .forEach(function (memberName) {
            instances[memberName] = res[memberName].instance
          })
        return instances
      }
    }
    return res ? (returnMemberAsIs ? res : returnInstances(res)) : null
  }

  function Post () {
    const messageList = {}

    function messageFor (msg, recipient) {
      messageList[recipient] = messageList[recipient] || []
      messageList[recipient].push(msg)
    }

    function getMessageFor (recipient) {
      let result = null
      if (messageList[recipient]) {
        result = messageList[recipient]
        delete messageList[recipient]
      }
      return result
    }

    const api = {
      for: messageFor,
      get: getMessageFor
    }

    return api
  }

  function Dictionary () {
    const store = {}

    return {
      set: function (key, val) {
        store[key] = val
      },
      get: function (key) {
        return store[key]
      },
      remove: function (key) {
        delete store[key]
      }
    }
  }

  function clear () {
    members = {}
    waitList = {}
  }

  function createNewRuntimeMember (name, instance, expose) {
    return {
      name: name,
      instance: instance,
      expose: expose,
      join: function (isOverwritable) {
        joinNewMember(this, isOverwritable)
      }
    }
  }

  function join (name, instance, isOverwritable) {
    const member = createNewRuntimeMember(name, instance)
    joinNewMember(member, isOverwritable)
  }

  const tags = {}

  function registerTag (key, tag) {
    tags[key] = tag
  }

  function unRegisterTag (key, tag) {
    delete tags[key]
  }

  function getTag (key) {
    return tags['tag:' + key]
  }

  function createSandbox (objToExtend) {
    const res = new Runtime(objToExtend)
    return res
  }

  function disable () {
    runtimeDisabled = true
  }

  function enable () {
    runtimeDisabled = false
  }

  function isDisabled () {
    return runtimeDisabled
  }

  function deleteMember (name) {
    _.unset(members, name)
  }

  function setVariable (name, value, isReadonly) {
    const exVal = dictionary.get(name)
    if (exVal != null && exVal.readOnly) {
      console.warn('Cannot overwrite readonly variable! Attempted to set variable "' + name + '"') // eslint-disable-line no-console
      return
    }
    dictionary.set(name, { value, readOnly: isReadonly })
    trigger('variable-change:' + name, value)
  }

  function getVariable (name) {
    const variable = dictionary.get(name)
    if (variable) {
      return variable.value
    } else {
      //            console.warn( 'Cannot read runtime variable "' + name + '". Variable is not set' );
      return undefined
    }
  }

  function deleteVariable (name) {
    dictionary.remove(name)
  }

  const varSubscriptions = {}
  function onVariableChange (name, callback) {
    varSubscriptions[name] = varSubscriptions[name] || []
    varSubscriptions[name].push(name)
    on('variable-change:' + name, callback)
  }

  function unsubscribeFromVariable (name, callback) {
    const evtName = 'variable-change:' + name
    if (callback) {
      off(evtName, callback)
    } else {
      if (varSubscriptions[name]) {
        varSubscriptions[name] = []
        off(evtName)
      }
    }
  }

  function awaitTag (selector, tryLimit = 100) {
    return new Promise(function (resolve, reject) {
      const interval = setInterval(query, 100)
      let tries = 0
      let tag
      function query () {
        tag = getTag(selector)
        tries += 1
        if (tag) {
          clearInterval(interval)
          resolve(tag)
        } else if (tries >= tryLimit) {
          clearInterval(interval)
          reject(new Error(`Cannot resolve tag ${selector}`))
        }
      }
    })
  }

  const api = apiBase || {}

  api.join = join
  api.deleteMember = deleteMember
  api.enable = enable
  api.disable = disable
  api.on = on
  api.off = off
  api.one = one
  api.trigger = trigger
  api.triggerDelayed = triggerDelayed
  api.get = get
  api.getCombined = getCombined
  api.getSync = getSync
  api.post = new Post()
  api.clear = clear
  api.member = createNewRuntimeMember
  api.join = join
  api.registerTag = registerTag
  api.unRegisterTag = unRegisterTag
  api.getTag = getTag
  api.awaitTag = awaitTag
  api.createSandbox = createSandbox
  api.variable = {
    set: setVariable,
    get: getVariable,
    remove: deleteVariable,
    onChange: onVariableChange,
    unsubscribe: unsubscribeFromVariable
  }
  api.isDisabled = isDisabled
  api.memberSearch = function (query) {
    const searchResult = membersNameRegistry.filter(function (name) {
      return name.indexOf(query) !== -1
    })

    return searchResult.length > 0 ? searchResult : null
  }

  setTimeout(function () {
    if (Object.keys(waitList).length > 0) {
      console.info('Following members have not been resolved yet by their dependants:', waitList) // eslint-disable-line no-console
      console.log('The current state of runtime members is:', members) // eslint-disable-line no-console
    }
  }, 5000)

  return api
}

const runtime = new Runtime()

module.exports = runtime
