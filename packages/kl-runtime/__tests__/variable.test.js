let VariableStore = require('../src/variable')
let PubSub = require('tiny-emitter')
let pubSub = new PubSub()
pubSub.trigger = pubSub.emit
describe('Variable tests:', function () {
  let variableStore = null

  beforeEach(() => {
    variableStore = new VariableStore(pubSub)
  })

  test('set and get;', () => {
    variableStore.set('1', 1)
    expect(variableStore.get('1')).toBe(1)
  })

  test('returns falsy and warn on setting readonly variable;', () => {
    global.console = {warn: jest.fn()}
    variableStore.set('readOnlyVar', 1, true)
    const result = variableStore.set('readOnlyVar', 2)
    expect(console.warn).toBeCalled()
    expect(variableStore.get('readOnlyVar')).toBe(1)
    expect(result).toBeFalsy()
  })

  test('removing a variable;', () => {
    variableStore.set('var', true)
    expect(variableStore.get('var')).toBeDefined()
    variableStore.remove('var')
    expect(variableStore.get('var')).toBeUndefined()
  })

  test('clearing a variable;', () => {
    variableStore.set('var', true)
    expect(variableStore.get('var')).toBeDefined()
    variableStore.clear('var')
    expect(variableStore.get('var')).toBeUndefined()
  })

  test('calling onChange handler;', () => {
    variableStore.onChange('1', function (val) {
      expect(val).toBe(2)
    })
    variableStore.set('1', 2)
  })

  test('setting onChange handler for specific scope;', () => {
    variableStore.onChange('1', 'myScope', function (val) {
      expect(val).toBe(2)
    })
    variableStore.set('1', 2)
  })

  test('removing onChange handler by func & var name;', () => {
    const cb = jest.fn()
    variableStore.onChange('myVar', cb)
    variableStore.unsubscribe('myVar', cb)
    variableStore.set('myVar', 2)
    expect(cb).not.toBeCalled()
  })

  test('removing onChange handlers for variable;', () => {
    const cb = jest.fn()
    const cb2 = jest.fn()
    variableStore.onChange('myVar', cb)
    variableStore.onChange('myVar', cb2)
    variableStore.unsubscribe('myVar')
    variableStore.set('myVar', 2)
    expect(cb).not.toBeCalled()
    expect(cb2).not.toBeCalled()
  })

  test('clear all subscriptions and variables;', () => {
    const cb = jest.fn()
    const cb2 = jest.fn()
    variableStore.onChange('myVar', cb)
    variableStore.onChange('myVar', cb2)
    variableStore.unsubscribe('myVar')
    variableStore.set('myVar', 1)
    variableStore.set('myVar2', 2)
    variableStore.clearAll()
    expect(cb).not.toBeCalled()
    expect(cb2).not.toBeCalled()
    expect(variableStore.get('myVar')).toBeUndefined()
    expect(variableStore.get('myVar2')).toBeUndefined()
  })

  test('removing onChange handler for specific scope;', () => {
    const cb = jest.fn()
    const cb2 = jest.fn()
    variableStore.onChange('myVar', cb)
    variableStore.onChange('myVar', 'myScope', cb2)
    variableStore.offFor('myScope')
    variableStore.set('myVar', 2)
    expect(cb2).not.toBeCalled()
    expect(cb).toBeCalled()
  })
})
