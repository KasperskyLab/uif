import { TableColorConfig } from '@src/table/types'

import { ComponentThemeContext } from '../config'

import { checkbox } from './checkbox'
import { radio } from './radio'

export const table = ({ colors, effects }: ComponentThemeContext): TableColorConfig => ({
  headCell: {
    enabled: {
      border: colors.table_cell_header.border
    },
    hover: {
      background: colors.table_cell_header.bg.hover
    },
    active: {
      background: colors.table_cell_header.bg.active
    }
  },
  cell: {
    enabled: {
      border: colors.table_row.border
    },
    hover: {
      background: colors.table_row.bg.hover
    },
    selected: {
      background: colors.table_row.bg.selected
    }
  },
  root: {
    background: colors.table_row.bg.base,
    color: colors.table_cell.text.enabled
  },
  resize: {
    enabled: colors.table_row.border,
    hover: colors.table_cell_header.divider_hover
  },
  expandable: {
    icon: colors.action_button.icon.ghost.enabled
  },
  checkbox: checkbox({ colors, effects }),
  radio: radio({ colors, effects }),
  filters: {
    toolbar: {
      background: colors.toolbar.bg
    },
    item: {
      background: colors.toolbar.bg,
      icon: colors.action_button.bg.ghost.enabled,
      title: {
        color: colors.label.text.subtle
      }
    }
  },
  validation: {
    outline: colors.input_text.border.error
  }
})
