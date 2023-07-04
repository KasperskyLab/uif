const { jsonPatcher } = require('../../src/utils')

describe('testing different environments', () => {
  const source = {
    "key1": {
      "key2": false,
      "env-local": {
        "key3": 10
      },
      "env-cloud": {
        "key3": 11
      },
      "key4": 1
    }
  }

  test('env-cloud', () => {
    const buildTarget = 'cloud'
    const expected = {
      "key1": {
        "key2": false,
        "key3": 11,
        "key4": 1
      }
    }

    expect(expected).toEqual(jsonPatcher({ file: source, buildTarget }))
  })

  test('env-local', () => {
    const buildTarget = 'local'
    const expected = {
      "key1": {
        "key2": false,
        "key3": 10,
        "key4": 1
      }
    }

    expect(expected).toEqual(jsonPatcher({ file: source, buildTarget }))
  })
})

test('full wrap', () => {
  const source = {
    "env-local": {
      "key1": {
        "key2": false,
        "key3": 10,
        "key4": 1
      }
    }
  }
  
  const expected = {
    "key1": {
      "key2": false,
      "key3": 10,
      "key4": 1
    }
  }

  expect(expected).toEqual(jsonPatcher({ file: source }))
})

test('nested env sections', () => {
  const source = {
    "key2": {
      "env-local": {
        "key3": {
          "key4": {
            "env-local": {
              "shouldExist": true
            },
            "env-cloud": {
              "shouldNotExist": true
            }
          },
          "key5": {
            "env-cloud": {
              "shouldNotExist": true
            }
          }
        }
      }
    }
  }

  const expected = {
    "key2": {
      "key3": {
        "key4": {
          "shouldExist": true
        },
        "key5": {}
      }
    }
  }

  expect(expected).toEqual(jsonPatcher({ file: source }))
})

test('array of objects', () => {
  const source = {
    "key1": true,
    "key2": [
      {
        "key3": true,
        "env-local": {
          "key4": [
            "value1",
            "value2",
            "value3"
          ],
          "key5": true
        },
        "env-cloud": {
          "key4": [
            "value6",
            "value7"
          ]
        }
      },
      {
        "key3": false
      }
    ]
  }

  const expected = {
    "key1": true,
    "key2": [
      {
        "key3": true,
        "key4": [
          "value1",
          "value2",
          "value3"
        ],
        "key5": true
      },
      {
        "key3": false
      }
    ]
  }

  expect(expected).toEqual(jsonPatcher({ file: source }))
})
