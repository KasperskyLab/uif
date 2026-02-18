import { ComponentContext } from '@design-system/css-configs/types'
import { focus } from '@design-system/tokens/focus'
import { TreeColorConfig } from '@src/tree/types'

export const tree = ({ effects }: ComponentContext): TreeColorConfig => ({
  enabled: {
    backgroundSelected: 'var(--submenu_item--bg--enabled_selected)',
    colorSelected: 'var(--submenu_item--text--enabled_selected)',
    background: 'var(--submenu_item--bg--enabled)',
    color: 'var(--tree--text--enabled)',
    lineColor: 'var(--tree--icon--dnd)',
    arrowColor: 'var(--action_button--icon--ghost--enabled)'
  },
  hover: {
    backgroundSelected: 'var(--submenu_item--bg--hover_selected)',
    colorSelected: 'var(--submenu_item--text--hover_selected)',
    background: 'var(--submenu_item--bg--hover)',
    color: 'var(--tree--text--hover)'
  },
  active: {
    backgroundSelected: 'var(--submenu_item--bg--active_selected)',
    colorSelected: 'var(--submenu_item--text--active_selected)',
    background: 'var(--submenu_item--bg--active)',
    color: 'var(--tree--text--active)'
  },
  disabled: {
    color: 'var(--tree--text--disabled)'
  },
  error: {
    border: 'var(--input_text--border--error)'
  },
  ...focus({ effects })
})
