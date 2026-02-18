const fs = require('fs')
const { initFeatureRegistry } = require('../../src/utils')

const featureRegistry = initFeatureRegistry()

const FEATURE_CONFIGMAP = {
  "FEATURE_INTEGRATION_REGISTRY": 0,
  "FEATURE_USER_123_ws-id_user-id_CANARY_PLUGIN": 1,
  "FEATURE_USER_456_second-ws-id_user-id_CANARY_PLUGIN": 0,
  "FEATURE_CANARY_test_plugin": 1
}

const CONNECTION_MOCK = {
  kscUserId: 'user-id', // userId
  hostedInstanceId: '123', // securityCenterId
  wsId: 'ws-id'// workspaceId
}

const CONNECTION_MOCK_SECOND = {
  kscUserId: 'user-id',
  hostedInstanceId: '456',
  wsId: 'second-ws-id'
}


runtime = {
  logger: {
    log: jest.fn(),
    error: jest.fn()
  }
}

jest.mock('fs')

describe('test feature-registry methods:', () => {
  beforeAll(() => {
    fs.readFileSync.mockReturnValue(JSON.stringify(FEATURE_CONFIGMAP))
  })

  afterEach(() => {
    fs.readFileSync.mockReturnValue(JSON.stringify(FEATURE_CONFIGMAP))
  })

  test('test server-feature methods:', () => {
    expect(featureRegistry.isPluginServerFeatureEnabled({ featureName: 'INTEGRATION_REGISTRY' })).toEqual(false)
    expect(featureRegistry.isPluginServerFeatureEnabled({ featureName: 'CANARY_test_plugin' })).toEqual(true)
  })

  test('test user-feature methods:', () => {
    expect(
      featureRegistry.isPluginUserFeatureEnabled({ featureName: 'CANARY_PLUGIN' }, CONNECTION_MOCK)
    ).toEqual(true)
    expect(
      featureRegistry.isPluginUserFeatureEnabled({ featureName: 'CANARY_PLUGIN' }, CONNECTION_MOCK_SECOND)
    ).toEqual(false)
  })

  test('handle parse error: ', () => {
    fs.readFileSync.mockReturnValue('invalid-json')
    expect(featureRegistry.isPluginServerFeatureEnabled({ featureName: 'CANARY_test_plugin' })).toEqual(false)
    expect(
      featureRegistry.isPluginUserFeatureEnabled({ featureName: 'CANARY_PLUGIN' }, CONNECTION_MOCK)
    ).toEqual(false)
    expect(runtime.logger.error).toBeCalledTimes(2)
  })
})
