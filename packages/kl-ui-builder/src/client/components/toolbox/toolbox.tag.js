const self = this
self.visible = false

self.toggleToolbox = function () {
  self.visible = !self.visible
  runtime.trigger('toggle-toolbox', self.visible)
  self.update()
}

self.componentGroups = [
  {
    type: 'inputs',
    caption: 'Input fields',
    elements: [
      {
        title: 'Autocomplete',
        type: 22,
        icon: 'uib textbox'
      },
      {
        title: 'Dropdown',
        type: 1,
        icon: 'uib i-dropdown'
      },
      {
        title: 'Password',
        type: 8,
        icon: 'uib i-key'
      },
      {
        title: 'URL',
        type: 9,
        icon: 'uib link'
      },
      {
        title: 'Time',
        type: 14,
        icon: 'uib i-time'
      },
      {
        title: 'Data',
        type: 15,
        icon: 'uib date'
      },
      {
        title: 'Checkbox',
        type: 3,
        icon: 'uib i-checkbox'
      },
      {
        title: 'Checkbox group',
        type: 30,
        icon: 'uib checkbox-group'
      },
      {
        title: 'Radio button',
        type: 4,
        icon: 'uib i-radio'
      },
      {
        title: 'Toggle',
        type: 5,
        icon: 'uib switch'
      }
    ]
  },
  {
    type: 'buttons',
    caption: 'Buttons',
    elements: [
      {
        title: 'Button',
        type: 28,
        icon: 'uib i-button'
      },
      {
        title: 'Link',
        type: 29,
        icon: 'uib link'
      }
    ]
  },
  {
    type: 'texts',
    caption: 'Text and headers',
    elements: [
      {
        title: 'Text',
        type: 13,
        icon: 'uib text'
      },
      {
        title: 'L10n text',
        type: 25,
        icon: 'uib vendor globe'
      },
      {
        title: 'Header',
        type: 16,
        icon: 'uib i-header'
      },
      {
        title: 'Key:Value',
        type: 21,
        icon: 'uib key-value'
      },
      {
        title: 'Markdown',
        type: 35,
        icon: 'uib custom-component'
      }
    ]
  },
  {
    type: 'graphics',
    caption: 'Graphics',
    elements: [
      {
        title: 'Icon',
        type: 26,
        icon: 'images'
      }
    ]
  },
  {
    type: 'lists',
    caption: 'Lists',
    elements: [
      {
        title: 'Table',
        type: 31,
        icon: 'uib i-list'
      }
    ]
  },
  {
    type: 'forms',
    caption: 'Forms',
    elements: [
      {
        title: 'Form trigger',
        type: 7,
        icon: 'uib form-trigger'
      },
      {
        title: 'Wizzard',
        type: 24,
        icon: 'uib vendor magic'
      }
    ]
  },
  {
    type: 'grouping',
    caption: 'Grouping',
    elements: [
      {
        title: 'Control group',
        type: 20,
        icon: 'uib i-group'
      },
      {
        title: 'Accordion',
        type: 19,
        icon: 'uib accordeon'
      },
      {
        title: 'Segmentede form group',
        type: 23,
        icon: 'uib segments'
      },
      {
        title: 'Repeater',
        type: 37,
        icon: 'retweet'
      }
    ]
  },
  {
    type: 'others',
    caption: 'Other',
    elements: [
      {
        title: 'Lock group',
        type: 17,
        icon: 'uib i-lock'
      },
      {
        title: 'Toggle',
        type: 27,
        icon: 'uib vendor toggle off'
      },
      {
        title: 'Custom component',
        type: 18,
        icon: 'uib custom-component'
      },
      {
        title: 'List-editor (deprecated)',
        type: 6,
        icon: 'uib i-list'
      },
      {
        title: 'Tree',
        type: 32,
        icon: 'uib i-list'
      },
      {
        title: 'Validation',
        type: 33,
        icon: 'uib i-checkbox'
      },
      {
        title: 'Action bar',
        type: 34,
        icon: 'uib vendor ellipsis horizontal'
      },
      {
        title: 'Agreement',
        type: 36,
        icon: 'uib vendor handshake'
      }
    ]
  }
]

const components = require('../../custom-modules/components.json')

for (const type in components) {
  const { toolbox } = components[type]
  let componentGroup = toolbox.group
  if (!componentGroup) {
    componentGroup = 'others'
  }
  const group = self.componentGroups.find(({ type }) => type === componentGroup)
  group.elements.push(toolbox)
}

self.notifyDragClients = function (evt) {
  evt.dataTransfer.setData('componentType', evt.item.type)
  // eslint-disable-next-line
  console.log('started drag of component ' + evt.item.type)

  runtime.trigger('draggingControl', evt.type)
}

self.onItemDblClick = function (evt) {
  const cs = new ControlSetup(evt.item.type)
  cs.icon = evt.item.icon
  runtime.trigger('form:control:add', cs)
}

self.on('mount', function () {
  runtime.on('toggle-toolbox', toggle)
})

function toggle (visible) {
  self.visible = visible
  self.update()
}
