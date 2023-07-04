import { getAdditionalFields } from './helpers'

function SegmentedFormGroupPropertySet () {
  const pSet = [
    new PropertyGroup([
      new KeyValueListField({
        label: 'Tabs',
        fieldName: 'elements'
      }),
      new OptionalFunctionField({
        label: 'onActiveFormChange',
        fieldName: 'onActiveFormChange'
      }),
      new OptionalFunctionField({
        label: 'onChangeHandler',
        fieldName: 'onChangeHandler'
      }),
      new SelectField({
        label: 'Menu type',
        fieldName: 'menuType',
        items: [
          {
            value: 'vertical',
            text: 'Vertical'
          },
          {
            value: 'horizontal',
            text: 'Horizontal'
          },
          {
            value: 'tabular',
            text: 'Horizontal with tabs'
          }
        ]
      }),
      new BoolField({
        label: 'Use context splitter',
        fieldName: 'useContextSplitter'
      }),
      new OptionalFunctionField({
        label: 'Custom validate function',
        fieldName: 'customValidateFunction'
      })
    ], 'Value'),
    new PropertyGroup([new DependencyListField()], 'Dependencies'),
    new PropertyGroup([
      new StyleField({
        rules: ['customClass']
      })
    ], 'Styles'),
    ...getAdditionalFields(['elements'])
  ]

  const api = {
    type: 'SegmentedFormGroupPropertySet',
    caption: 'Segmented Form Group',
    getMembers: function () {
      return pSet
    },
    value: { valueType: 'string' }
  }

  return api
}

module.exports = SegmentedFormGroupPropertySet
