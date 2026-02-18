import { ComponentContext } from '@design-system/css-configs/types'
import { focus } from '@design-system/tokens/focus'
import { TabsColorConfig } from '@src/tabs/types'

export const tabs = ({ effects }: ComponentContext): TabsColorConfig => ({
  selected: {
    enabled: {
      color: 'var(--tabs_item--text--selected--base)',
      border: 'var(--tabs_item--border--selected--base)',
      background: 'var(--tabs_item--bg--selected--enabled)'
    },
    hover: {
      background: 'var(--tabs_item--bg--selected--hover)'
    },
    pressed: {
      background: 'var(--tabs_item--bg--selected--active)'
    },
    disabled: {
      color: 'var(--tabs_item--text--selected--disabled)'
    }
  },
  unselected: {
    enabled: {
      color: 'var(--tabs_item--text--unselected--base)',
      background: 'var(--tabs_item--bg--unselected--enabled)'
    },
    hover: {
      background: 'var(--tabs_item--bg--unselected--hover)'
    },
    pressed: {
      background: 'var(--tabs_item--bg--unselected--active)'
    },
    disabled: {
      color: 'var(--tabs_item--text--unselected--disabled)'
    }
  },
  divider: {
    color: 'var(--tabs--border)'
  },
  ...focus({ effects })
})
