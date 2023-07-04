import { getAdditionalFields } from './helpers'

function DataTablePropertySet () {
  function onAddNewForm () {
    runtime.trigger('list-editor:editor:setup', true)
  }

  const defaultColumnFields = [
    {
      type: 'checkbox',
      fieldName: 'filters.showByDefault',
      label: 'Show by default'
    },
    {
      type: 'checkbox',
      fieldName: 'filters.useOnlyForFilter',
      label: 'Use only for filter (ignore "Show by default")'
    },
    {
      type: 'checkbox',
      fieldName: 'filters.hideColumnAvailable',
      label: 'Column can be hidden'
    },
    {
      type: 'checkbox',
      fieldName: 'filters.filterColumnAvailable',
      label: 'Column can be filtered'
    },
    {
      type: 'checkbox',
      fieldName: 'filters.groupingAvailable',
      label: 'Can be grouped by column'
    },
    {
      type: 'checkbox',
      fieldName: 'filters.localizeField',
      label: 'Localize before search'
    },
    {
      type: 'checkbox',
      fieldName: 'isNotSortable',
      label: 'Disable sorting by this field'
    },
    {
      type: 'checkbox',
      fieldName: 'filters.sortByField',
      label: 'Sort by field',
      unique: true
    },
    {
      type: 'checkbox',
      fieldName: 'filters.groupByField',
      label: 'By default, group by this field',
      unique: true
    },
    {
      type: 'checkbox',
      fieldName: 'filters.editorLink',
      label: 'The link in this column opens the row properties window'
    },
    {
      type: 'select',
      label: 'Field type for filtration',
      fieldName: 'filters.type',
      items: [
        {
          text: 'Text',
          value: 'text'
        }, {
          text: 'Number',
          value: 'number'
        }, {
          text: 'Radio',
          value: 'radio'
        }, {
          text: 'Boolean',
          value: 'boolean'
        }, {
          text: 'Enum',
          value: 'enum'
        }, {
          text: 'Date range',
          value: 'dateRange'
        }, {
          text: 'Days before',
          value: 'daysBefore'
        }, {
          text: 'IP address range',
          value: 'ip'
        }
      ]
    },
    {
      type: 'text',
      label: 'list of values getter',
      fieldName: 'filters.enumListGetter',
      depends: {
        on: 'filters.type',
        equals: ['enum', 'radio']
      }
    },
    {
      type: 'checkbox',
      fieldName: 'filters.enumListRefresh',
      label: 'Prompt for a list of values whenever other filters change',
      depends: {
        on: 'filters.type',
        equals: ['enum', 'radio']
      }
    },
    {
      type: 'text',
      label: 'Column ID',
      fieldName: 'columnId'
    },
    {
      type: 'text',
      label: 'Server field name (vecFieldsToReturn)',
      fieldName: 'columnServerField'
    },
    {
      type: 'text',
      label: 'Column group name',
      fieldName: 'filters.group'
    },
    {
      type: 'text',
      label: 'Default column width',
      fieldName: 'filters.defaultColumnWidth'
    },
    {
      type: 'text',
      label: 'Filter name',
      fieldName: 'filters.name'
    },
    {
      type: 'text',
      label: 'Function for patching group text when grouping before display',
      fieldName: 'filters.patchGroupBeforeShowFunc'
    }
  ]

  const pSet = [
    new PropertyGroup([
      new TextField({
        label: constants.CTRL_LABEL_ID,
        fieldName: constants.FIELD_NAME,
        required: true
      }),
      new TextField({
        label: constants.CTRL_LABEL_TOPIC_ID,
        fieldName: constants.FIELD_TOPIC_ID
      }),
      new BoolField({
        label: 'Pagination mode',
        fieldName: 'paginationMode'
      }),
      new BoolField({
        label: 'Simple pagination',
        fieldName: 'simplePagination'
      }),
      new BoolField({
        label: 'Don`t use pagination',
        fieldName: 'unusePagination'
      }),
      new SelectField({
        label: 'Page size',
        fieldName: 'tablePageSize',
        items: [
          {
            text: '--',
            value: 0
          },
          {
            text: '5',
            value: 5
          },
          {
            text: '10',
            value: 10
          },
          {
            text: '20',
            value: 20
          },
          {
            text: '50',
            value: 50
          },
          {
            text: '100',
            value: 100
          }
        ]
      }),
      new OptionalFunctionField({
        label: 'Datasource function',
        fieldName: 'dataSourceFunction'
      }),
      new OptionalFunctionField({
        label: 'Getter Id For Filter',
        fieldName: 'getterIdForFilter'
      }),
      new OptionalFunctionField({
        label: 'Event for table update',
        fieldName: 'refreshEvent'
      }),
      new OptionalFunctionField({
        label: 'Event for reinitialization',
        fieldName: 'reinitEvent'
      }),
      new OptionalFunctionField({
        label: 'Row modelp patch function',
        fieldName: 'rowModelPatchFunction'
      })
    ], 'General settings'),
    new PropertyGroup([
      new ValueField()
    ], 'Value'),
    new PropertyGroup([
      new TableColumnListField({
        fieldName: 'columns',
        localized: true,
        defaultFields: defaultColumnFields,
        additionalFields: customFields.dataTableColumns
      }),
      new OptionalFunctionField({
        label: 'Custom columns getter',
        fieldName: 'customColumnsGetter'
      }),
      new OptionalFunctionField({
        label: 'Columns patch function',
        fieldName: 'columnsPatchFunction'
      })
    ], 'Columns'),
    new PropertyGroup(
      [
        new BoolField({
          label: 'Filtration',
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
          label: 'Syn buttons state handler',
          fieldName: 'actionsStateResolver'
        }),
        new OptionalFunctionField({
          label: 'New row function-constructor',
          fieldName: 'factory'
        }),
        new BoolField({
          label: 'Row can be selected',
          fieldName: 'selectionPossible'
        }),
        new BoolField({
          label: 'Has select all',
          fieldName: 'hasSelectAll'
        }),
        new BoolField({
          label: 'Single select',
          fieldName: 'isInSingleSelectionMode'
        }),
        new BoolField({
          label: 'Draggable rows',
          fieldName: 'isDraggableRows'
        }),
        new OptionalFunctionField({
          label: 'Is Busy var name',
          fieldName: 'isBusyVarName'
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
      ], 'Row editor'
    ),
    new PropertyGroup(
      [
        new OptionalFunctionField({
          label: 'Custom Filter Function',
          fieldName: 'customFilterFunction'
        }),
        new OptionalFunctionField({
          label: 'Custom search function',
          fieldName: 'customSearchFunction'
        }),
        new OptionalTextField({
          label: 'Predefined filters function',
          fieldName: 'predefinedFiltersFunction'
        }),
        new BoolField({
          label: 'Remove local storage filters',
          fieldName: 'removeLocalStorageFilters'
        }),
        new OptionalFunctionField({
          label: 'Filters preset function',
          fieldName: 'filtersPresetFunction'
        })
      ],
      'Search & Filtration'
    ),
    new PropertyGroup(
      [
        new OptionalTextField({
          label: 'Runtime variable to get selected rows',
          fieldName: 'selectionSyncEnvVarName'
        }),
        new OptionalTextField({
          label: 'Runtime variable for getting server names of fields of selected columns',
          fieldName: 'selectedColumnsVecFieldsSyncEnvVarName'
        })
      ],
      'Data exchange with external modules'
    ),
    new ListEditorElementsField({
      fieldName: 'elements'
    }),
    new PropertyGroup([new LockSourceField()], 'Lock group'),
    new PropertyGroup([new AccordionSourceField()], 'Accordion'),
    new PropertyGroup(
      [
        new StyleField({
          rules: ['indent', 'offsetBottom', 'offsetTop', 'offsetAfter', 'customClass']
        })
      ],
      'Styles'
    ),
    new PropertyGroup([new DependencyListField()], 'Dependencies'),
    new PropertyGroup([new ValidationListField()], 'Validation'),
    new PropertyGroup([
      new OptionalFunctionField({
        label: 'Preselected rows getter',
        fieldName: 'getPreselectedRows'
      })
    ], 'Calculation of preselected table rows'),
    ...getAdditionalFields(['elements', 'dataTable'])
  ]
  const api = {
    type: 'DataTablePropertySet',
    caption: 'Data Table',
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
        showGroupingTab = false,
        isNotSortable = false
      } = json
      json.showFilterTab = showFilterTab
      json.showColumnsTab = showColumnsTab
      json.showSearchTab = showSearchTab
      json.showGroupingTab = showGroupingTab
      json.isNotSortable = isNotSortable

      json.columns.forEach((col, i) => {
        const currentCol = json.elements[i] || {}
        currentCol.columnId = col.columnId
        currentCol.columnServerField = col.columnServerField
        currentCol.isNotSortable = col.isNotSortable
        currentCol.headerTitle = col.text
        currentCol.filters = col.filters || {
          hideColumnAvailable: true,
          showByDefault: true,
          filterColumnAvailable: true,
          localizeField: false
        }
        els.push(Object.assign({}, currentCol, col.additionalFields))
      })
      delete json.columns
      json.elements = els
      return json
    }
  }

  return api
}

module.exports = DataTablePropertySet
