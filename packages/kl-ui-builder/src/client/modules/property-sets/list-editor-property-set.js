import { getAdditionalFields } from './helpers'

function ListEditorPropertySet () {
  function onAddNewForm () {
    runtime.trigger('list-editor:editor:setup', true)
  }

  const pSet = [
    new PropertyGroup(
      [
        new TextField({
          label: constants.CTRL_LABEL_ID,
          fieldName: constants.FIELD_NAME,
          required: true
        }),
        new TextField({
          label: constants.CTRL_LABEL_TOPIC_ID,
          fieldName: constants.FIELD_TOPIC_ID
        })
      ],
      'General settings'
    ),
    new PropertyGroup([new ValueField()], 'Value'),
    new PropertyGroup(
      [
        new TableColumnListField({
          fieldName: 'columns',
          localized: true
        })
      ],
      'Columns'
    ),
    new PropertyGroup(
      [
        new BoolField({
          label: 'Filters',
          fieldName: 'showFilterTab',
          defaultValue: true
        }),
        new BoolField({
          label: 'Columns',
          fieldName: 'showColumnsTab',
          defaultValue: true
        }),
        new BoolField({
          label: 'Search',
          fieldName: 'showSearchTab',
          defaultValue: true
        }),
        new BoolField({
          label: 'Grouping',
          fieldName: 'showGroupingTab',
          defaultValue: true
        })
      ],
      'Sidebar tabs'
    ),
    new PropertyGroup(
      [
        new ListEditorActionsField({
          label: 'Available actions',
          fieldName: 'buttons'
        }),
        new OptionalFunctionField({
          label: 'Custom buttons getter',
          fieldName: 'customActionsResolver'
        }),
        new OptionalFunctionField({
          label: 'Custom buttons sync state handler',
          fieldName: 'actionsStateResolver'
        }),
        new OptionalFunctionField({
          label: 'New row function-constructor',
          fieldName: 'factory'
        }),
        new BoolField({
          label: 'Rows can be selected regardless of the presence of a toolbar',
          fieldName: 'selectionPossible'
        }),
        new BoolField({
          label: 'Single selection',
          fieldName: 'isInSingleSelectionMode'
        }),
        new BoolField({
          label: 'Draggable rows',
          fieldName: 'isDraggableRows'
        })
      ],
      'Toolbar'
    ),
    new PropertyGroup(
      [
        new LinkButtonField({
          fieldName: 'lnkEditor',
          text: 'Child form',
          onclick: onAddNewForm
        })
      ],
      'Row editor'
    ),
    new PropertyGroup(
      [
        new OptionalFunctionField({
          label: 'Custom filter function',
          fieldName: 'customFilterFunction'
        }),
        new OptionalFunctionField({
          label: 'Custom search function',
          fieldName: 'customSearchFunction'
        })
      ],
      'Search & filtration'
    ),
    new PropertyGroup(
      [
        new OptionalTextField({
          label: 'runtime variable to get selected rows',
          fieldName: 'selectionSyncEnvVarName'
        })
      ],
      'Data exchange with external modules'
    ),
    new PropertyGroup(
      [
        new BoolField({
          label: 'Tree mode',
          fieldName: 'treeMode'
        }),
        new OptionalFunctionField({
          label: 'Child row resolver',
          fieldName: 'childRowResolver'
        }),
        new BoolField({
          label: 'Select child rows when parent is selected',
          fieldName: 'syncSelectToChildren'
        })
      ],
      'Tree view'
    ),
    new ListEditorElementsField({
      fieldName: 'elements'
    }),
    new PropertyGroup([new LockSourceField()], 'Lock group'),
    new PropertyGroup([new AccordionSourceField()], 'Accordion'),
    new PropertyGroup(
      [
        new StyleField({
          rules: ['indent', 'offsetBottom', 'offsetTop', 'offsetAfter', 'customClass', 'state']
        }),
        new TextField({
          label: 'List height (px)',
          fieldName: 'height'
        }),
        new BoolField({
          label: 'Automatically calculate list height',
          fieldName: 'dynamicHeightMode'
        }),
        new TextField({
          label: 'Additional Margin Bottom',
          fieldName: 'additionalMarginBottom'
        })
      ],
      'Styles'
    ),
    new PropertyGroup([new DependencyListField()], 'Dependencies'),
    ...getAdditionalFields(['elements'])
  ]
  const api = {
    type: 'ListEditorPropertySet',
    caption: 'List editor',
    getMembers () {
      return pSet
    },
    jsonPatch (json) {
      if (!json.columns) return json
      const els = []
      if (!json.elements) {
        json.elements = _.fill(new Array(json.columns.length), {})
      }
      const {
        showFilterTab = false,
        showColumnsTab = false,
        showSearchTab = false,
        showGroupingTab = false
      } = json
      json.showFilterTab = showFilterTab
      json.showColumnsTab = showColumnsTab
      json.showSearchTab = showSearchTab
      json.showGroupingTab = showGroupingTab

      json.columns.forEach((col, i) => {
        const currentCol = json.elements[i] || {}
        currentCol.headerTitle = col.text
        currentCol.filters = col.filters || {
          hideColumnAvailable: true,
          showByDefault: true,
          filterColumnAvailable: true,
          localizeField: false
        }
        els.push(currentCol)
      })
      delete json.columns
      json.elements = els
      return json
    }
  }

  return api
}

module.exports = ListEditorPropertySet
