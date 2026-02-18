import { checkbox } from '@design-system/css-configs/components/checkbox'
import { radio } from '@design-system/css-configs/components/radio'
import { TableColorConfig } from '@src/table/types'

import { ComponentThemeContext } from '../config'

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
    hover: colors.table_cell_header.dragger.hover,
    active: colors.table_cell_header.dragger.active
  },
  expandable: {
    icon: colors.action_button.icon.ghost.enabled
  },
  checkbox: checkbox({ effects }),
  radio: radio({ effects }),
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
  pagination: {
    background: colors.pagination_area.bg,
    boxShadow: `0 0 7px 0 ${colors.elevation.overlap}`
  },
  validation: {
    outline: colors.input_text.border.error
  }
})
