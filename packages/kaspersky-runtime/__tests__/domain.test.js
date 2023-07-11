let Domain = require('../src/domain')

describe('Domain tests', function () {
  let domain = null

  const changes = {
    scopedChanges: {foo: 'baz'},
    unscopedChanges: {bar: 'bag'}
  }

  beforeEach(() => {
    domain = new Domain('test')
  })

  describe('Managing changes:', () => {
    test('get and set changes;', () => {
      domain.setChanges(changes)
      expect(domain.getChanges()).toMatchObject(changes)
    })

    test('call callback on change;', () => {
      const cb = jest.fn()
      domain.onChange = cb
      domain.change({})
      expect(cb).toBeCalled()
    })

    test('get on change callback;', () => {
      const cb = jest.fn()
      domain.onChange = cb
      expect(domain.onChange).toEqual(cb)
    })

    test('call revert callback;', () => {
      const cb = jest.fn()
      domain.onRevert = cb
      domain.revert()
      expect(cb).toHaveBeenCalled()
    })

    test('get revert callback;', () => {
      const cb = jest.fn()
      domain.onRevert = cb
      expect(domain.onRevert).toEqual(cb)
    })
  })

  describe('Saving changes', function () {
    test('return changes on save;', (cb) => {
      domain.change(changes)
      domain.onSave = () => Promise.resolve(changes)
      domain.save({}).then(data => {
        expect(data).toMatchObject(changes)
        cb()
      })
    })

    test('call callback on save;', function () {
      let fnc = jest.fn().mockImplementation(function () {
        return new Promise(function () {})
      })
      domain.onSave = fnc
      domain.change('scope', {})
      domain.save()
      expect(fnc).toBeCalled()
    })

    test('get on save callback;', () => {
      const cb = jest.fn()
      domain.onSave = cb
      expect(domain.onSave).toEqual(cb)
    })

    test('save with correct data set;', function (done) {
      function onSave (changes, scopedChanges) {
        return new Promise(function () {
          expect(changes).toBeDefined()
          expect(scopedChanges).toBeDefined()
          expect(changes.form1).toBeDefined()
          expect(changes.form1.name).toBe('form1')
          expect(scopedChanges.scopeA).toBeDefined()
          expect(scopedChanges.scopeA.form2).toBeDefined()
          expect(scopedChanges.scopeA.form2.name).toBe('form2')
          expect(scopedChanges.scopeB.form3).toBeDefined()
          expect(scopedChanges.scopeB.form3.name).toBe('form3')
          done()
        })
      }
      domain.onSave = onSave
      domain.change('form1', { name: 'form1' })
      domain.change('form2', { name: 'form2' }, 'scopeA')
      domain.change('form3', { name: 'form3' }, 'scopeB')
      domain.save()
    })

    test('throw an error on save withoutchanges;', async function (cb) {
      domain.change('scope', {})
      let errorHappens = false
      try {
        await domain.save()
      } catch (error) {
        errorHappens = true
      }
      expect(errorHappens).toBe(true)
      cb()
    })
  })

  describe('Events pubsub', function () {
    test('call callback on custom event subscription;', () => {
      const cb = jest.fn()
      domain.on('myEvnt', cb)
      domain.trigger('myEvnt')
      expect(cb).toBeCalled()
    })

    test('remove event subscribtion;', () => {
      const cb = jest.fn()
      domain.on('myEvnt', cb)
      domain.trigger('myEvnt')
      domain.offScope('myEvnt', cb)
      domain.trigger('myEvnt')
      expect(cb).toHaveBeenCalledTimes(1)
    })
  })

  describe('Clear state / Dispose domain:', () => {
    const changesTest = (clearFnc) => {
      domain.setChanges(changes)
      clearFnc()
      expect(domain.getChanges()).toEqual({
        scopedChanges: {},
        unscopedChanges: {}
      })
    }
    test('clear state for domain changes;', () => { changesTest(domain.clearState) })
    test('dispose domain for domain changes;', () => { changesTest(domain.dispose) })

    const subscribtionTest = (clearFnc) => {
      const cb = jest.fn()
      domain.on('myEvnt', cb)
      clearFnc()
      domain.trigger('myEvnt')
      expect(cb).not.toBeCalled()
    }
    test('clear state for subscriptions;', () => { subscribtionTest(domain.clearState) })
    test('dispose domain for subscriptions;', () => { subscribtionTest(domain.dispose) })

    const variablesTest = (clearFnc) => {
      domain.variable.set('var', 'foo')
      clearFnc()
      expect(domain.variable.get('var')).toBeUndefined()
    }
    test('clear state for variables;', () => { variablesTest(domain.clearState) })
    test('dispose domain for variables;', () => { variablesTest(domain.dispose) })
  })

  describe('Common functions', () => {
    test('initializing and call on init func;', () => {
      const cb = jest.fn()
      domain.onInit = cb
      domain.initialize().then(() => {
        expect(cb).toBeCalled()
        expect(domain.initialized).toBeTruthy()
      })
    })

    test('getting on init callback;', () => {
      const cb = jest.fn()
      domain.onInit = cb
      expect(domain.onInit).toEqual(cb)
    })

    test('initializing without callback;', async (cb) => {
      domain.initialize().then(async () => {
        await domain.initialize()
        cb()
      })
    })
  })
})
