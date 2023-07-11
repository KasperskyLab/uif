import { getAdditionalFields } from './helpers'

const formSelector = new SelectField({
  label: 'Form',
  fieldName: 'formToInherit',
  onMount: function () {
    runtime.trigger('forms:get', forms => {
      forms = Object.keys(forms).map(key => {
        const { id: value, name: text } = forms[key]
        return { text, value }
      })
      this.opts.items = [
        ...forms
      ]
      this.update()
    })
  }
})

const onInheritanceChecked = value => {
  if (!value) {
    formSelector.hidden = true
    inheritFormResolverCheckbox.hidden = true
    formIdResolver.hidden = true
  } else {
    formSelector.hidden = false
    inheritFormResolverCheckbox.hidden = false
    formIdResolver.hidden = true
  }

  runtime.trigger('control-settings:refresh')
}

const onInheritanceResolverChecked = value => {
  if (value) {
    formSelector.hidden = true
    formIdResolver.hidden = false
  } else {
    formSelector.hidden = false
    formIdResolver.hidden = true
  }
  runtime.trigger('control-settings:refresh')
}

const formIdResolver = new TextField({
  label: 'Function to dynamically get form ID',
  fieldName: 'formToInheritResolver'
})

const inheritFormCheckbox = new BoolField({
  label: 'Inherit controls from form',
  fieldName: 'inheritControls',
  onChange: onInheritanceChecked,
  onMount: onInheritanceChecked
})

const inheritFormResolverCheckbox = new BoolField({
  label: 'Use Function to dynamically get form ID',
  fieldName: 'inheritControlsResolver',
  onChange: onInheritanceResolverChecked,
  onMount: onInheritanceResolverChecked
})

function ControlGroupPropertySet () {
  const pSet = [
    new PropertyGroup([
      new TextField({
        label: constants.CTRL_LABEL_ALIAS,
        fieldName: constants.FIELD_ALIAS
      }),
      new ControlGroupElementsField({
        fieldName: 'elements'
      }),
      new TextField({
        label: constants.CTRL_LABEL_ID,
        fieldName: constants.FIELD_NAME,
        required: true
      }),
      new SelectField({
        label: 'Items orientation',
        fieldName: 'itemsOrientation',
        items: [
          {
            text: '--',
            value: ''
          },
          {
            text: 'Vertical',
            value: 'column'
          },
          {
            text: 'Horizontal',
            value: 'row'
          }
        ]
      })
    ], 'General settings'),
    new PropertyGroup([
      inheritFormCheckbox,
      inheritFormResolverCheckbox,
      formSelector,
      formIdResolver
    ], 'Getting a list of controls'),
    new PropertyGroup([new LockSourceField()], 'Lock group'),
    new PropertyGroup([new AccordionSourceField()], 'Accordion'),
    new PropertyGroup([new StyleField()], 'Control style'),
    new PropertyGroup([new DependencyListField()], 'Dependencies'),
    ...getAdditionalFields(['elements'])
  ]
  const api = {
    type: 'ControlGroupPropertySet',
    caption: 'Group of controls',
    getMembers () {
      return pSet
    },
    jsonPatch (json) {
      if (!json.elements) {
        json.elements = []
      }

      return json
    }
  }

  return api
}

module.exports = ControlGroupPropertySet
