/* eslint-disable no-console, no-irregular-whitespace */
let idCtr = 0
const PubSub = require('./pubsub')
const Domain = require('./domain')
const VariableStore = require('./variable')
const lodash = {
  set: require('lodash.set'),
  get: require('lodash.get')
}

function Runtime (apiBase, globalRuntime) {
  const trackList = {}
  let domainHistory = []

  let members = new Map()
  let asyncMembers = new Map()
  const sandboxes = new Map()
  let aliases = new Map()
  const memberSubscriptions = new Map()
  let domains = new Map()
  let reservedMembers = new Map()
  let pubSub = new PubSub()
  const scopes = new Map()
  const variable = new VariableStore(pubSub)

  function joinNewMember (member) {
    if (reservedMembers.has(member.name)) {
      if (arguments.length === 1) return
      if (arguments[1] !== reservedMembers.get(member.name)) {
        return console.error(`Member name "${member.name}" is reserved. Please use another name.`) // eslint-disable-line no-console
      }
    }
    const existingMember = members.get(member.name)
    if (existingMember) {
      console.warn(`Member with name "${member.name}" is overridden`) // eslint-disable-line no-console
    }
    members.set(member.name, member)
    asyncMembers.set(member.name, Promise.resolve(member))
    pubSub.trigger('member:join:' + member.name, member)
    if (aliases.has(member.name)) {
      const subs = aliases.get(member.name)
      subs.forEach(function (alias) {
        members.set(alias, member)
        asyncMembers.set(alias, Promise.resolve(member))
        pubSub.trigger('member:join:' + alias, member)
      })
    }
    notifyTrackers(member.name)
  }

  function reserveMember (memberName, unlockKey) {
    if (reservedMembers.has(memberName)) {
      console.error('Cannot reserve already reserved member!') // eslint-disable-line no-console
    }
    reservedMembers.set(memberName, unlockKey)
  }

  function notifyTrackers (path) {
    Object.keys(trackList).forEach(function (trackPath) {
      const tracker = trackList[trackPath]
      if (tracker.matcher.test(path)) {
        tracker.callback(path.replace(tracker.matcher, ''))
      }
    })
  }

  function waitForJoin (memberName, cb) {
    if (memberSubscriptions.has(memberName)) {
      return memberSubscriptions.get(memberName)
    } else {
      const promise = new Promise(function (resolve, reject) {
        pubSub.on('member:join:' + memberName, function (res) {
          resolve(res)
        })
      })
      memberSubscriptions.set(memberName, promise)
      return promise
    }
  }

  function getMemberAsync (memberName) {
    const res = asyncMembers.get(memberName)
    if (res) {
      return res
    } else {
      return waitForJoin(memberName)
    }
  }

  /**
   * Returns an object that is the result of registering members.
   * For example. If the following commands were called:
   *
   * runtime.join('plugins.kes_windows', {})
   * runtime.join('plugins.kes_android', {})
   *
   * then all these members can be obtained immediately, through their parent `plugins`
   *
   * __ATTENTION__. This operation always "collects" the parent object. The results of this function are not cached.
   * Therefore, you need to use it only in cases where you need to get the entire parent branch,
   * to avoid writing complex selections or aggregations. __Avoid__ using it in iterations!
   * @param {any} nodeName
   * @returns
   */
  function getNode (nodeName) {
    const res = {}
    return new Promise(function (resolve, reject) {
      for (const ampPair of members) {
        if (ampPair[0].indexOf(`${nodeName}.`) !== -1) {
          lodash.set(res, ampPair[0], ampPair[1].instance)
        }
      }
      resolve(res)
    })
  }

  function get (...args) {
    const returnMemberAsIs = args[args.length - 1] === true
    const isCallbackSyntaxUsed = typeof args[args.length - 1] === 'function'
    let successCallback = isCallbackSyntaxUsed
      ? args[arguments.length - 1]
      : null
    const cutLastArgument = returnMemberAsIs || isCallbackSyntaxUsed

    const subscriptions = (cutLastArgument) ? args.slice(0, args.length - 1) : args
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
        argPromises.push(
          getMemberAsync(scope + name)
            .then(function (member) {
              resultStore[i] = returnMemberAsIs ? member : member.instance ? member.instance : member
            })
        )
      })
    }

    /* eslint-disable no-console */
    const timeouts = [
      setTimeout(console.warn.bind(console, `runtime.get('${[...args].join(', ')}') resolving takes too much time.`), 2500),
      setTimeout(console.error.bind(console, `runtime.get('${[...args].join(', ')}') didn't resolve in 5 seconds.`), 5000)
    ]
    /* eslint-enable no-console */

    subscriptions.forEach(function (arg, i) {
      arg = arg.trim()
      // find subscriptions by scopes
      const path = arg.split(':')
      const scopeResult = result[i] = []
      if (path.length > 1) {
        // result container for scope
        processSubscription(path[0], path[1], scopeResult)
      } else {
        // var scopeResult = [];
        processSubscription('', arg, scopeResult)
      }
    })
    Promise.all(argPromises)
      .then(function () {
        timeouts.forEach(clearTimeout)
        let res = []
        Object.keys(result)
          .forEach(function (key) {
            res = res.concat(result[key])
          })

        if (typeof successCallback === 'function') {
          successCallback(...res)
        } else {
          const MAX_ATTEMPTS = 10
          let i = 0
          const interval = setInterval(() => {
            i++
            if (typeof successCallback === 'function') {
              successCallback(...res)
              clearInterval(interval)
              return
            }
            if (i > MAX_ATTEMPTS) {
              clearInterval(interval)
            }
          }, 50)
        }
      })

    return {
      then: function (cb) {
        successCallback = cb
      }
    }
  }
  /**
  *
  * @description Executes runtime member function
  * @argument @requires {name} Member name @requires
  * @argument {args} Arguments
  */
  function execute (name, ...args) {
    return Promise.resolve(get(name)).then(member => {
      if (typeof member !== 'function') throw new Error('Resolved member for runtime.execute call is not a function')
      return member(...args)
    })
  }

  function getSync (memberName, returnMemberAsIs) {
    const res = members.get(memberName, null)
    const returnInstances = function (res) {
      if (res.instance) {
        return res.instance
      }
    }
    return res ? (returnMemberAsIs ? res : returnInstances(res)) : null
  }

  function clear () {
    members = new Map()
    asyncMembers = new Map()
    aliases = new Map()
    domains = new Map()
    reservedMembers = new Map()
    pubSub = new PubSub()
    domainHistory = []
  }

  function createNewRuntimeMember (name, instance, expose) {
    return {
      name: name,
      instance: instance,
      expose: expose,
      join: function () {
        joinNewMember(this)
      }
    }
  }

  function join (name, instance) {
    if (typeof arguments[0] === 'object' && arguments.length === 1) {
      const { name, member, scope } = arguments[0]
      joinNewMember(createNewRuntimeMember(name, member))
      if (scope) {
        const entries = scopes.get(scope) || []
        entries.push(name)
        scopes.set(scope, entries)
      }
      return
    }

    const member = createNewRuntimeMember(name, instance)
    joinNewMember(member, arguments[2])
  }

  function alias (originalName, alias) {
    if (!aliases.has(originalName)) {
      aliases.set(originalName, [])
    }
    const currentAlises = aliases.get(originalName)
    currentAlises.push(alias)
    aliases.set(originalName, currentAlises)
    if (members.has(originalName)) {
      members.set(alias, members.get(originalName))
      asyncMembers.set(alias, asyncMembers.get(originalName))
    }
  }

  function deleteMember (name) {
    members.delete(name)
    asyncMembers.delete(name)
  }

  function createSandbox (objToExtend, id) {
    const res = new Runtime(objToExtend, this)
    sandboxes.set(id, res)
    return res
  }

  function getSandbox (id) {
    return sandboxes.get(id)
  }

  /**
   * Allows you to track changes along a specific path
   * If a new member is registered at the specified path, a callback will be called
   *
   * @param {any} path The path for tracking changes. Must not contain a dot at the end.
   * @param {any} cb Callback. Called with the name of the member who was registered
   */
  function trackPath (path, cb) {
    const tracker = { matcher: new RegExp(`^${path}\\.`), callback: cb }
    trackList[path] = tracker
    getNode(path).then(({ [path]: existingMembers }) => {
      if (!existingMembers) {
        return
      }
      Object.keys(existingMembers).forEach(function (key) {
        cb(key.replace(tracker.matcher, ''))
      })
    })
  }

  function getOrCreateDomain (domainName) {
    let domain = domains.get(domainName)
    if (!domain) domain = createDomain(domainName)
    return domain
  }

  function createDomain (domainName) {
    const newDomain = new Domain(domainName, api);
    (globalRuntime || api).triggerDelayed('runtime::domain:created', newDomain)
    domains.set(domainName, newDomain)
    return newDomain
  }

  function removeDomain (domainName) {
    domains.delete(domainName)
  }

  function getDomain (domainName) {
    return domains.get(domainName)
  }

  function extendAPI (name, value) {
    if (lodash.get(api, name, false)) { throw new Error(`Runtime already has member with name ${name}`) }
    lodash.set(api, name, value)
  }

  function memberSearch (query) {
    const res = []
    const test = query instanceof RegExp
      ? name => query.test(name)
      : name => name.indexOf(query) > -1
    for (const name of members.keys()) {
      if (test(name)) { res.push(name) }
    }
    return res
  }

  function release (...args) {
    pubSub.offFor(...args)
    variable.offFor(...args)

    const scopedNames = scopes.get(args[0]) || []
    scopedNames.forEach(deleteMember)
    scopes.delete(args[0])
  }

  const domain = {
    getOrCreate: getOrCreateDomain,
    create: createDomain,
    remove: removeDomain,
    get: getDomain,
    get history () {
      return domainHistory
    }
  }

  const api = apiBase || {}
  api.id = ++idCtr
  api.join = join
  api.deleteMember = deleteMember
  api.reserveMember = reserveMember
  api.release = release
  api.on = pubSub.on
  api.off = pubSub.off
  api.one = pubSub.one
  api.emit = pubSub.trigger
  api.trigger = api.emit
  api.triggerDelayed = pubSub.triggerDelayed
  api.get = get
  api.getNode = getNode
  api.getSync = getSync
  api.trackPath = trackPath
  api.clear = clear
  api.member = createNewRuntimeMember
  api.alias = alias
  api.execute = execute
  api.createSandbox = createSandbox
  api.getSandbox = getSandbox
  api.variable = variable
  api.domain = domain
  api.extend = extendAPI
  api.memberSearch = memberSearch

  if (globalRuntime) {
    api.ksc = {
      variable: {
        get: globalRuntime.variable.get
      },
      on: globalRuntime.on,
      off: globalRuntime.off,
      trigger: globalRuntime.trigger,
      getNode: globalRuntime.getNode,
      getSync: globalRuntime.getSync
    }
  }
  return api
}

module.exports = Runtime
