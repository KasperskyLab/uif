const { buildUi } = require('../../src/utils')

describe('Forms Processing', () => {
  it('creates form map from ui structure', () => {
    const ui = buildUi({
      forms: {
        formId: {
          id: 'formId',
          json: { elements: [] }
        }
      }
    })
    expect(ui).toMatchObject({
      formId: {
        id: 'formId',
        name: undefined,
        elements: [],
        dataSource: undefined,
        section: undefined,
        init: undefined,
        onRendered: undefined,
        onDispose: undefined,
        objectType: undefined,
        objectId: undefined,
        rootForm: undefined,
        ignoreDomainValidation: undefined,
        domain: undefined,
        useCache: undefined,
        mode: undefined,
        title: undefined,
        navigationTitle: undefined,
        navigationGroup: undefined,
        customButtonsGetter: undefined,
        isInSilentChangeMode: undefined,
        modelTrackerIsOff: undefined,
        isParentEntity: undefined,
        actionBarAssistantBootstrapper: undefined,
        topicId: undefined,
        customFields: undefined,
        parentElementId: undefined,
        parentFormId: undefined
      }
    })
  })

  it('keeps for author for development mode', () => {
    const ui = buildUi({
      forms: {
        formId: {
          id: 'formId',
          json: { elements: [] },
          author: 'Name'
        }
      },
      devMode: true
    })
    expect(ui.formId.author).toBe('Name')
  })

  it('filters forms by build type', () => {
    const ui = buildUi({
      forms: {
        form: {
          id: 'form',
          json: { elements: [] }
        },
        formAny: {
          id: 'formAny',
          json: { elements: [] },
          customFields: { buildType: 'any' }
        },
        formLocal: {
          id: 'formLocal',
          json: { elements: [] },
          customFields: { buildType: 'local' }
        },
        formCloud: {
          id: 'formCloud',
          json: { elements: [] },
          customFields: { buildType: 'cloud' }
        }
      },
      buildTypes: ['local']
    })
    expect(ui.form).toBeDefined()
    expect(ui.formAny).toBeDefined()
    expect(ui.formLocal).toBeDefined()
    expect(ui.formCloud).toBeUndefined()
  })

  it('filters form elements by build type', () => {
    const ui = buildUi({
      forms: {
        form: {
          id: 'form',
          json: {
            elements: [{
              id: 'element'
            }, {
              id: 'elementAny',
              buildType: 'any'
            }, {
              id: 'elementLocal',
              buildType: 'local'
            }, {
              id: 'elementCloud',
              buildType: 'cloud'
            }]
          },
        }
      },
      buildTypes: ['cloud']
    })
    expect(ui.form.elements.find(({ id }) => id === 'element')).toBeDefined()
    expect(ui.form.elements.find(({ id }) => id === 'elementAny')).toBeDefined()
    expect(ui.form.elements.find(({ id }) => id === 'elementCloud')).toBeDefined()
    expect(ui.form.elements.find(({ id }) => id === 'elementLocal')).toBeUndefined()
  })

  it('filters nested form elements by build type', () => {
    const ui = buildUi({
      forms: {
        form: {
          id: 'form',
          json: {
            elements: [{
              id: 'element',
              elements: [{
                id: 'elementCloud',
                buildType: 'cloud'
              }]
            }]
          },
        }
      },
      buildTypes: ['local']
    })
    expect(ui.form.elements.find(({ id }) => id === 'element').elements.length).toBe(0)
  })

  it('applies help topics to form', () => {
    const ui = buildUi({
      forms: {
        form: {
          id: 'form',
          json: { elements: [] }
        }
      },
      helpTopics: {
        form: {
          topicId: 10
        }
      }
    })

    expect(ui.form.topicId).toBe(10)
  })

  it('applies help topics to form elements', () => {
    const ui = buildUi({
      forms: {
        form: {
          id: 'form',
          json: {
            elements: [{
              id: 'element'
            }]
          }
        }
      },
      helpTopics: {
        form: {
          elements: {
            element: {
              topicId: 10
            }
          }
        }
      }
    })

    expect(ui.form.elements[0].topicId).toBe(10)
  })

  it('applies help topics to nested form elements', () => {
    const ui = buildUi({
      forms: {
        form: {
          id: 'form',
          json: {
            elements: [{
              id: 'element',
              elements: [{
                id: 'subelement'
              }]
            }]
          }
        }
      },
      helpTopics: {
        form: {
          elements: {
            element: {
              elements: {
                subelement: {
                  topicId: 10
                }
              }
            }
          }
        }
      }
    })

    expect(ui.form.elements[0].elements[0].topicId).toBe(10)
  })

  it('keeps topic when help data is absent for form', () => {
    const ui = buildUi({
      forms: {
        form: {
          id: 'form',
          json: { elements: [] },
          topicId: 10
        }
      },
      helpTopics: {}
    })

    expect(ui.form.topicId).toBe(10)
  })
})
