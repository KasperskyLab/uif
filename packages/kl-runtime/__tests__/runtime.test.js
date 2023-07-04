const Runtime = require('../src/index')
const shortid = require('shortid')

describe('Runtime tests:', function () {
  let runtime
  let shortId

  beforeEach(() => {
    runtime = new Runtime()
    shortId = shortid.generate()
  })

  describe('Events:', function () {
    test('subscribe to event;', function () {
      let cb = jest.fn()
      runtime.on('testEvent', cb)
      runtime.trigger('testEvent')
      expect(cb).toBeCalled()
    })

    test('throws when no callback to subscribe provided;', function () {
      expect(() => runtime.on('testEvent')).toThrow()
    })

    test('unsubscribe from event;', function () {
      let cb = jest.fn()
      runtime.on('testEvent', cb)
      runtime.trigger('testEvent')
      runtime.off('testEvent', cb)
      runtime.trigger('testEvent')
      expect(cb).toHaveBeenCalledTimes(1)
    })

    test('subscribe to event once;', function () {
      let cb = jest.fn()
      runtime.one('testEvent', cb)
      runtime.trigger('testEvent')
      runtime.trigger('testEvent')
      expect(cb).toHaveBeenCalledTimes(1)
    })

    test('subscribe to event in scope once;', function () {
      let cb = jest.fn()
      runtime.one('testEvent', 'myScope', cb)
      runtime.trigger('testEvent')
      runtime.trigger('testEvent')
      expect(cb).toHaveBeenCalledTimes(1)
    })

    test('Trigger delayed - One receiver', function () {
      let cb = jest.fn()
      let name = shortid.generate()
      let evtName = shortid.generate()
      let obj = { name: name }
      runtime.triggerDelayed(evtName, obj)
      runtime.on(evtName, cb)
      expect(cb).toHaveBeenCalledTimes(1)
      expect(cb).toHaveBeenCalledWith(obj)
    })

    test('Trigger delayed - Multiple receivers', function () {
      let cb = jest.fn()
      let cb2 = jest.fn()
      let name = shortid.generate()
      let evtName = shortid.generate()
      let obj = { name: name }
      runtime.triggerDelayed(evtName, obj)
      runtime.on(evtName, cb)
      runtime.on(evtName, cb2)
      expect(cb).toHaveBeenCalledTimes(1)
      expect(cb).toHaveBeenCalledWith(obj)
      expect(cb2).toHaveBeenCalledTimes(1)
      expect(cb2).toHaveBeenCalledWith(obj)
    })

    test('Release event subscribers event', function () {
      let cb = jest.fn()
      let obj = {}
      runtime.on('testEvent', obj, cb)
      runtime.trigger('testEvent')
      runtime.release(obj)
      runtime.trigger('testEvent')
      expect(cb).toHaveBeenCalledTimes(1)
    })

    test('returns falsy by release unknown scope', function () {
      expect(runtime.release({})).toBeFalsy()
    })
  })

  describe('Members', function () {
    test('getting member;', function (cb) {
      let member = { name: 'test' }
      runtime.join('testMember', member)
      runtime.get('testMember').then(function (m) {
        expect(m).toBeDefined()
        expect(m.name).toBe('test')
        cb()
      })
    })

    test('getting member by all aliases;', function () {
      const aliases = []

      let member = { name: 'test' }
      runtime.join('testMember', {})
      for (let index = 0; index < 10; index++) {
        aliases[index] = shortid.generate()
        runtime.alias('testMember', aliases[index])
      }
      runtime.join('testMember', member)

      aliases.forEach(alias => {
        expect(runtime.getSync(alias)).toEqual(member)
      })
    })

    test('getting member with callback;', function () {
      let res = null
      const cb = (d) => { res = d }
      let member = { name: 'test' }
      runtime.join('testMember', member)
      runtime.get('testMember', cb)
      setTimeout(() => { expect(res).toEqual(member) }, 10)
    })

    test('getting same member multiple times by common Promise;', function (cb) {
      let name = shortid.generate()
      let member = { name: name }
      let ctr = 0
      runtime.get(name).then(function (m) {
        expect(m).toBeDefined()
        expect(m.name).toBe(name)
        ctr++
        if (ctr === 3) cb()
      })
      runtime.get(name).then(function (m) {
        expect(m).toBeDefined()
        expect(m.name).toBe(name)
        ctr++
        if (ctr === 3) cb()
      })
      runtime.get(name).then(function (m) {
        expect(m).toBeDefined()
        expect(m.name).toBe(name)
        ctr++
        if (ctr === 3) cb()
      })
      runtime.join(name, member)
    })

    test('getting member scoped;', function (cb) {
      let member = { name: 'test' }
      let member2 = { name: 'test2' }
      runtime.join('services.testService', member)
      runtime.join('services.testService2', member2)
      runtime.get('services: testService testService2').then(function (m, m2) {
        expect(m).toBeDefined()
        expect(m.name).toBe('test')
        expect(m2).toBeDefined()
        expect(m2.name).toBe('test2')
        cb()
      })
    })

    test('clearing members;', () => {
      let res = null
      const getCb = (d) => { res = d }
      let member = { name: 'test' }
      runtime.join('testMember', member)
      runtime.clear()
      runtime.get('testMember', getCb)
      return new Promise(resolve => {
        setTimeout(() => {
          expect(res).toBeNull()
          expect(runtime.getSync('testMember')).toBeNull()
          resolve()
        }, 5100)
      })
    }, 6000)

    describe('trackPath()', () => {
      it('should track members with delayed registration', function (cb) {
        let member = { name: 'test' }
        let member2 = { name: 'test2' }
        let cb1 = jest.fn()
        runtime.trackPath('services', cb1)
        runtime.join('services.testService1', member)
        runtime.join('services.testService2', member2)
        expect(cb1).toHaveBeenCalledTimes(2)
        cb()
      })

      it('should track already registered members', function (cb) {
        let member = { name: 'test' }
        let member2 = { name: 'test2' }
        runtime.join('services.testService3', member)
        runtime.join('services.testService4', member2)
        runtime.trackPath('services', toHaveBeenCalledTimes(2, cb))

        function toHaveBeenCalledTimes (times, onSuccess) {
          let counter = 0
          return () => {
            counter++
            if (counter === times) {
              onSuccess()
            }
          }
        }
      })
    })

    test('reserving member;', function (cb) {
      let name = shortid.generate()
      let lockKey = shortid.generate()
      let restrictedMember = { name: name }
      let member = { name: name }
      runtime.reserveMember(name, lockKey)
      runtime.join(name, restrictedMember)
      let noMember = runtime.getSync(name)
      expect(noMember).toBe(null)
      runtime.join(name, member, lockKey)
      let existingMember = runtime.getSync(name)
      expect(existingMember).toBe(member)
      cb()
    })

    test('blocks to redefine reserved member;', () => {
      let name = shortid.generate()
      let lockKey = shortid.generate()
      global.console.error = jest.fn()
      runtime.reserveMember(name, lockKey)
      let member = { name, member: { name: 'test' }, scope: 'myScope' }
      expect(runtime.join(member)).toBeUndefined()
    })

    test('warning on override member;', () => {
      global.console.warn = jest.fn()
      let member = { name: 'member', member: { name: 'test' }, scope: 'myScope' }
      runtime.join(member)
      runtime.join(member)
      expect(global.console.warn).toBeCalled()
    })

    test('return undefined when join reserved empty member;', () => {
      let name = shortid.generate()
      let lockKey = shortid.generate()
      global.console.error = jest.fn()
      runtime.reserveMember(name, lockKey)
      runtime.reserveMember(name, lockKey)
      expect(global.console.error).toBeCalled()
    })

    test('getting members node;', function (cb) {
      let obj1 = { name: 'obj1' }
      let obj2 = { name: 'obj2' }
      let obj3 = { name: 'obj3' }
      let obj4 = { name: 'obj4' }
      runtime.join('root.obj1', obj1)
      runtime.join('root.obj2', obj2)
      runtime.join('root.obj3', obj3)
      runtime.join('root.children.obj4', obj4)
      runtime.getNode('root').then(function (res) {
        expect(res.root.obj1).toBe(obj1)
        expect(res.root.obj2).toBe(obj2)
        expect(res.root.obj3).toBe(obj3)
        expect(res.root.children).toBeDefined()
        expect(res.root.children.obj4).toBe(obj4)
        cb()
      })
    })

    test('getting member registered by object;', function (cb) {
      let member = { name: 'testMember', member: { name: 'test' }, scope: 'myScope' }
      runtime.join(member)
      runtime.get('testMember').then(function (m) {
        expect(m).toBeDefined()
        expect(m.name).toBe('test')
        cb()
      })
    })

    test('deleting memeber', () => {
      let res = null
      const getCb = (d) => { res = d }
      let member = { name: 'test' }
      runtime.join('testMember', member)
      runtime.deleteMember('testMember')
      runtime.get('testMember', getCb)
      return new Promise(resolve => {
        setTimeout(() => {
          expect(res).toBeNull()
          expect(runtime.getSync('testMember')).toBeNull()
          resolve()
        }, 5100)
      })
    }, 5500)

    test('searching member;', () => {
      const member = {foo: 'bar'}
      runtime.join('myMember', member)
      let [foundMemberName] = runtime.memberSearch(/\w*Member/)
      expect(runtime.getSync(foundMemberName)).toEqual(member)
      foundMemberName = runtime.memberSearch('Member')[0]
      expect(runtime.getSync(foundMemberName)).toEqual(member)
    })

    describe('Execute tests:', () => {
      test('Executes handler function', function (cb) {
        let functionMember = (a, b = 0) => new Promise(resolve => { setTimeout(() => { resolve(a * 2 + b) }, 200) })
        runtime.join('functionMember', functionMember)
        runtime.execute('functionMember', 2, 2).then(async function (result) {
          expect(result).toEqual(await functionMember(2, 2))
          cb()
        })
      })

      test('Throws error if member is not a function', function (cb) {
        let nonFunctionMember = {}
        runtime.join('nonFunctionMember', nonFunctionMember)
        expect(runtime.execute('nonFunctionMember')).rejects.toThrow()
        cb()
      })
    })

    describe('Domain tests:', () => {
      test('Domain history', function () {
        let history = runtime.domain.history
        expect(history).toEqual([])
        history.push('testDomain')
        expect(history).toEqual(['testDomain'])
      })
    })
  })

  describe('extend API', () => {
    it('should extend runtime API with provided member', function (cb) {
      let member = { name: 'test' }
      runtime.extend('utils.test', member)
      expect(runtime.utils.test).toBe(member)
      cb()
    })

    it('should prevernt API extension if property already exists in runtime API', function (cb) {
      let member = { name: 'test' }
      let id = `utils.test.${shortId}`
      runtime.extend(id, member)
      function extendRuntime () {
        runtime.extend(id, member)
      }
      expect(extendRuntime).toThrow()
      let resolvedMember = require('lodash.get')(runtime, id)
      expect(resolvedMember).toBe(member)
      cb()
    })
  })

  describe('Sandboxes:', () => {
    test('creating and getting runtime sandbox;', function () {
      runtime.createSandbox({}, shortId)
      const sandboxRuntime = runtime.getSandbox(shortId)
      expect(sandboxRuntime).toHaveProperty(['ksc', 'variable', 'get'])
    })
  })

  describe('Domains:', () => {
    test('getting domain;', () => {
      const domain = runtime.domain.getOrCreate(shortId)
      expect(domain).toHaveProperty('getChanges')
      expect(domain.name).toEqual(shortId)
      expect(runtime.domain.get(shortId)).toEqual(domain)
    })
  })
})
