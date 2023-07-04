const React = require('react') // eslint-disable-line no-unused-vars
const ReactDOM = require('react-dom')

const self = this
const headerIcon = 'settings2'
const headerText = 'Component properties'
let currentControlSetup

// self.childTags = {}
self.properties = []
self.headerIcon = headerIcon
self.headerText = headerText
self.valueIsLocalized = false

self.getPropertyEditControl = getPropertyEditControl

runtime.on(
  'control-settings:value-field:state:set:localized',
  setValueLocalizationState.bind(null, true)
)
runtime.on(
  'control-settings:value-field:state:set:non-localized',
  setValueLocalizationState.bind(null, false)
)
runtime.on('right-side:buttons:save:click', saveForm)
runtime.on('right-side:buttons:delete:click', deleteForm)

function setValueLocalizationState (localized) {
  console.log('localized is', localized)
  self.valueIsLocalized = localized
  self.update()
}

/**
 * Builds property setup control and renders it
 * @param {object} propertySetup Setup control description. TextFielMapper for example. Member of PropertySet
 * @param {tag} containerTag <dynamic> tag holding mapper control
 */
function getPropertyEditControl (propertySetup, containerTag) {
  const propertyState = currentControlSetup.getState()[propertySetup.fieldName]
  if (!propertySetup.render) {
    if (propertySetup.component) {
      const Component = propertySetup.component.default // eslint-disable-line no-unused-vars
      const setState = (value) => {
        currentControlSetup.setFieldState(propertySetup.fieldName, value)
        runtime.trigger(`state:changed#${currentControlSetup.id}`)
        runtime.trigger(`value:changed#${currentControlSetup.id}`)
      }
      ReactDOM.render(<Component state={propertyState} setState={setState} />, containerTag.root)
    }
    return
  }
  if (propertyState && propertySetup.valid != null) {
    propertyState.valid = propertySetup.valid
  }
  const el = propertySetup.render(propertyState)
  if (!el.root) return
  containerTag.setContent(el.root)
  propertySetup.control = el
  const tag = el.root._tag

  savePropertyState(
    propertySetup.fieldName,
    propertyState || (tag.serializeState ? tag.serializeState() : null)
  )

  el.root._tag.on('value-changed', () => {
    savePropertyState(propertySetup.fieldName, tag.serializeState())
    runtime.trigger(`value:changed#${currentControlSetup.id}`)
    if (propertySetup.fieldName === 'alias') {
      runtime.trigger(`field-alias:changed#${currentControlSetup.id}`, el.root._tag.getValue())
    }
  })
  tag.controlSetupId = currentControlSetup.id
}

function savePropertyState (fieldName, state) {
  if (!state) return
  currentControlSetup.setFieldState(fieldName, state)
  runtime.trigger(`state:changed#${currentControlSetup.id}`)
}

self.init = function (controlSetup) {
  if (!controlSetup) {
    clear()
    return
  }
  self.controlCaption = controlSetup.getPropertySet().caption || controlSetup.caption
  self.icon = controlSetup.icon
  self.deleteButtonIsVisible = false
  currentControlSetup = controlSetup

  if (controlSetup.title) {
    self.headerIcon = controlSetup.title.icon
    self.headerText = controlSetup.title.text
  } else {
    self.headerIcon = headerIcon
    self.headerText = headerText
  }
  renderProps()
  renderComponentManual(controlSetup)
  initAccordion()
  initScrollShading()
}

function renderProps () {
  self.properties = currentControlSetup.getProperties()
  const state = currentControlSetup.getState()
  const idFieldValue = state.id && state.id.input
  if (!idFieldValue) {
    savePropertyState('id', { input: currentControlSetup.id })
  }
  self.update()
}

function renderComponentManual (controlSetup) {
  runtime.trigger('component-manual:render', controlSetup.manual)
}

function saveAccordionState (controlKey, index, isActive) {
  const storedData = localStorage.getItem('openAccordeons')
  const openAccordeons = (storedData && JSON.parse(storedData)) || {}
  if (!openAccordeons[controlKey]) openAccordeons[controlKey] = []
  openAccordeons[controlKey][index] = isActive
  localStorage.setItem('openAccordeons', JSON.stringify(openAccordeons))
}

function initAccordion () {
  const storedData = localStorage.getItem('openAccordeons')
  const openAccordeons = (storedData && JSON.parse(storedData)) || {}
  const controlKey = `${currentControlSetup.type}-${currentControlSetup.id}`

  const $settingsTitlesArr = $('.js-accordion-settings .title')
  const $expandAllBtn = $('.js-accordion-expandAll')
  let isExpandedAll = false
  const ACTIVE_CLASS_NAME = 'active'
  const EXPAND_CLASS_NAME = 'angle double down'
  const COLLAPSE_CLASS_NAME = 'angle double up'

  $settingsTitlesArr.each(function () {
    const index = $settingsTitlesArr && $settingsTitlesArr.index(this)
    if (openAccordeons[controlKey] && openAccordeons[controlKey][index]) {
      $(this).addClass(ACTIVE_CLASS_NAME).next('.content').addClass(ACTIVE_CLASS_NAME)
    }
  })

  $settingsTitlesArr.off('click')
  $settingsTitlesArr.on('click', function (i, j, k) {
    $(this).toggleClass(ACTIVE_CLASS_NAME).next('.content').toggleClass(ACTIVE_CLASS_NAME)
    const index = $settingsTitlesArr && $settingsTitlesArr.index(this)
    saveAccordionState(controlKey, index, this.classList.contains('active'))
    initScrollShading()
  })

  $expandAllBtn.on('click', function () {
    if (isExpandedAll) {
      $settingsTitlesArr.removeClass(ACTIVE_CLASS_NAME).next('.content').removeClass(ACTIVE_CLASS_NAME)
      setIconExpandedFalse()
    } else {
      $settingsTitlesArr.addClass(ACTIVE_CLASS_NAME).next('.content').addClass(ACTIVE_CLASS_NAME)
      setIconExpandedTrue()
    }
  })

  function setIconExpandedTrue () {
    $expandAllBtn.removeClass(EXPAND_CLASS_NAME).addClass(COLLAPSE_CLASS_NAME)
    isExpandedAll = true
  }

  function setIconExpandedFalse () {
    $expandAllBtn.removeClass(COLLAPSE_CLASS_NAME).addClass(EXPAND_CLASS_NAME)
    isExpandedAll = false
  }
}

function initScrollShading () {
  const $scrollShadeBox = $('.js-scroll-shade')
  const $scrollInner = $scrollShadeBox.find('.js-scroll-shade-inner')
  const scrollInnerHeight = parseInt($scrollInner.height())
  let resizeTimer

  const SHADE_TOP_CLASS_NAME = 'shade-top'
  const SHADE_BOTTOM_CLASS_NAME = 'shade-bottom'

  shadeBottomCalculation()

  $(window).on('resize', function () {
    clearTimeout(resizeTimer)
    resizeTimer = setTimeout(initScrollShading, 300)
  })

  $scrollInner.on('scroll resize', shadeCalculation)

  function shadeCalculation () {
    shadeTopCalculation()
    shadeBottomCalculation()
  }

  function shadeTopCalculation () {
    const isTopScrolled = $scrollInner.scrollTop() !== 0

    if (isTopScrolled) {
      $scrollShadeBox.addClass(SHADE_TOP_CLASS_NAME)
    } else {
      $scrollShadeBox.removeClass(SHADE_TOP_CLASS_NAME)
    }
  }

  function shadeBottomCalculation () {
    const isBottomScrolled = ($scrollInner[0].scrollHeight > scrollInnerHeight && $scrollInner.scrollTop() + scrollInnerHeight !== $scrollInner[0].scrollHeight)

    if (isBottomScrolled) {
      $scrollShadeBox.addClass(SHADE_BOTTOM_CLASS_NAME)
    } else {
      $scrollShadeBox.removeClass(SHADE_BOTTOM_CLASS_NAME)
    }
  }
}

runtime.on('render-settings', (controlSetup) => {
  self.init(controlSetup)
})

runtime.on('clear-settings', () => {
  clear()
})

runtime.on('control-settings:refresh', renderProps)

self.publishJSON = function () {
  if (validateForm() === true) {
    runtime.trigger('saveForm')
  }
}

function validateForm () {
  let res = true
  const requiredFields = _.filter(currentControlSetup.getProperties(), cs => cs.required)
  requiredFields.forEach((element) => {
    if (element.control.validate() === false) {
      res = false
    }
  })
  return res
}

function clear () {
  self.properties = []
  self.controlCaption = null
  self.update()
}

self.on('mount', () => {
  runtime.trigger('form-setup:activate')
  runtime.on('control-settings:clear', clear)
})

function deleteForm () {
  runtime.trigger('form-setup:delete')
}

function saveForm () {
  if (validateForm() === true) {
    runtime.trigger('saveForm')
  }
}

self.componentGroups = [
  {
    caption: 'Input fields',
    elements: [
      {
        title: 'Textfield',
        type: 0,
        icon: 'textbox'
      },
      {
        title: 'Dropdown',
        type: 1,
        icon: 'i-dropdown'
      },
      {
        title: 'Password',
        type: 8,
        icon: 'i-key'
      },
      {
        title: 'URL',
        type: 9,
        icon: 'link'
      },
      {
        title: 'Time',
        type: 14,
        icon: 'time'
      },
      {
        title: 'Date',
        type: 15,
        icon: 'date'
      },
      {
        title: 'Checkbox',
        type: 3,
        icon: 'i-checkbox'
      },
      {
        title: 'Checkbox group',
        type: 30,
        icon: 'i-checkbox'
      },
      {
        title: 'Radio button',
        type: 4,
        icon: 'i-radio'
      },
      {
        title: 'Toggle',
        type: 5,
        icon: 'switch'
      }
    ]
  },
  {
    caption: 'Text and headers',
    elements: [
      {
        title: 'Text',
        type: 13,
        icon: 'text'
      },
      {
        title: 'Header',
        type: 16,
        icon: 'i-header'
      }
    ]
  },
  {
    caption: 'Lists',
    elements: [
      {
        title: 'List-editor',
        type: 6,
        icon: 'i-list'
      }
    ]
  },
  {
    caption: 'Windows',
    elements: [
      {
        title: 'Form trigger',
        type: 7,
        icon: 'popup'
      }
    ]
  }
]
