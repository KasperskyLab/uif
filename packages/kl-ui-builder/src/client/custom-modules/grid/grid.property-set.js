import { getAdditionalFields } from 'helpers'
import LayoutTypes from './constants/layout-types'

function GridPropertySet () {
  const customAreaSettings = new CustomLayoutField({
    fieldName: 'customLayout'
  })

  const customLayoutFlow = new SelectField({
    label: 'Grid elements location',
    fieldName: 'gridAutoFlow',
    items: [
      {
        value: '',
        text: 'By default'
      },
      {
        value: 'row',
        text: 'By rows'
      },
      {
        value: 'column',
        text: 'By columns'
      },
      {
        value: 'row dense',
        text: 'Row dense'
      },
      {
        value: 'column dense',
        text: 'Column dense'
      }
    ]
  })

  function onLayoutTypeChanged (type) {
    switch (type) {
      case LayoutTypes.TWO_COLUMNS:
        runtime.variable.set('grid.areas', ['left', 'right', ''])
        break
      case LayoutTypes.CUSTOM:
        customAreaSettings.hidden = false
        customLayoutFlow.hidden = false
        break
      default:
        runtime.variable.set('grid.areas', [''])
        customAreaSettings.hidden = true
        customLayoutFlow.hidden = true
    }
    runtime.trigger('control-settings:refresh')
  }

  const pSet = [
    new PropertyGroup([
      new TextField({
        label: constants.CTRL_LABEL_ID,
        fieldName: constants.FIELD_NAME,
        required: true
      }),
      new SelectField({
        label: 'Layout',
        fieldName: 'layoutType',
        onChange: onLayoutTypeChanged,
        onMount: onLayoutTypeChanged,
        items: [
          {
            value: LayoutTypes.SINGLE_ROW,
            text: 'One column'
          },
          {
            value: LayoutTypes.TWO_COLUMNS,
            text: 'Two columns'
          },
          {
            value: LayoutTypes.DEFAULT,
            text: 'Default (12 columns)'
          },
          {
            value: LayoutTypes.CUSTOM,
            text: 'Custom value'
          }
        ]
      }),
      customAreaSettings,
      customLayoutFlow
    ], 'General settings'),
    new PropertyGroup([new GridItemsListField({
      fieldName: 'gridItems'
    })], 'Markdown elements'),
    new PropertyGroup([
      new SelectField({
        label: 'Vertical arrangement (alignment) of elements inside the markup element (align-items)',
        fieldName: 'alignItems',
        items: [
          {
            value: '',
            text: 'Not set'
          },
          {
            value: 'stretch',
            text: 'Stretch'
          },
          {
            value: 'center',
            text: 'Center'
          },
          {
            value: 'start',
            text: 'Start'
          },
          {
            value: 'end',
            text: 'End'
          }
        ]
      }),
      new SelectField({
        label: 'Horizontal arrangement (alignment) of elements inside the markup element (justify-items)',
        fieldName: 'justifyItems',
        items: [
          {
            value: '',
            text: 'Not Set'
          },
          {
            value: 'stretch',
            text: 'Stretch'
          },
          {
            value: 'center',
            text: 'Center'
          },
          {
            value: 'start',
            text: 'Start'
          },
          {
            value: 'end',
            text: 'End'
          }
        ]
      })
    ], 'Markup properties'),
    new PropertyGroup([new LockSourceField()], 'Lock group'),
    new PropertyGroup([new AccordionSourceField()], 'Accordion'),
    new PropertyGroup([new StyleField()], 'Control style'),
    new PropertyGroup([new DependencyListField()], 'Dependencies'),
    new PropertyGroup([new ValidationListField()], 'Validation'),
    ...getAdditionalFields(['grid'])
  ]

  const api = {
    caption: 'Page layout',
    getMembers () {
      return pSet
    },
    type: 'GridPropertySet'
  }

  return api
}

module.exports = GridPropertySet
