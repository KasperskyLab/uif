import { ThemeKey, ThemeConfig } from '../../../types'
import { COMMON_THEME } from '../common-theme'
import { alert } from './alert'
import { button, buttonSize } from './button'
import { colors } from './colors'
import { dropdown, dropdownSize } from './dropdown'
import { badge, badgeSize } from './badge'
import { sidebar, sidebarSize } from './sidebar'
import { divider, dividerSize } from './divider'
import { link, linkSize } from './link'
import { loader, loaderSize } from './loader'
import { select, selectSizes } from './select'
import { notification } from './notification'
import { severity } from './severity'
import { tagSize } from './tag'
import { checkbox } from './checkbox'
import { radio } from './radio'
import { toggle } from './toggle'
import { tabs, tabsSize } from './tabs'
import { input, inputSize } from './input'
import { field } from './field'
import { pagination, paginationSize } from './pagination'
import { toolbar } from './toolbar'
import { search } from './search'
import { modal } from './modal'
import { keyValue } from './keyValue'
import { table, tableSizes } from './table'
import { tree, treeSize } from './tree'
import { accordion } from './accordion'
import { anchors, anchorsSize } from './anchor'
import { picker, pickerInput } from './picker'
import { label } from './label'
import { icon } from './icon'
import { formLabel } from './formLabel'

export const LIGHT_THEME: ThemeConfig = {
  ...COMMON_THEME,
  key: ThemeKey.Light,
  colors,
  components: {
    button: {
      colors: button({ colors }),
      sizes: buttonSize
    },
    link: {
      colors: link({ colors }),
      sizes: linkSize
    },
    badge: {
      colors: badge({ colors }),
      sizes: badgeSize
    },
    sidebar: {
      colors: sidebar({ colors }),
      sizes: sidebarSize
    },
    dropdown: {
      colors: dropdown({ colors }),
      sizes: dropdownSize
    },
    tag: {
      sizes: tagSize
    },
    severity: severity({ colors }),
    checkbox: {
      colors: checkbox({ colors })
    },
    radio: {
      colors: radio({ colors })
    },
    select: {
      colors: select({ colors }),
      sizes: selectSizes
    },
    divider: {
      colors: divider({ colors }),
      sizes: dividerSize
    },
    loader: {
      colors: loader({ colors }),
      sizes: loaderSize
    },
    toggle: {
      colors: toggle({ colors })
    },
    tabs: {
      colors: tabs({ colors }),
      sizes: tabsSize
    },
    notification: {
      colors: notification({ colors }),
      sizes: undefined
    },
    alert: {
      colors: alert({ colors }),
      sizes: undefined
    },
    input: {
      colors: input({ colors }),
      sizes: inputSize
    },
    field: {
      colors: field({ colors })
    },
    pagination: {
      colors: pagination({ colors }),
      sizes: paginationSize
    },
    toolbar: { colors: toolbar({ colors }) },
    search: { colors: search({ colors }) },
    modal: { colors: modal({ colors }) },
    keyValue: { colors: keyValue({ colors }) },
    table: {
      colors: table({ colors }),
      sizes: tableSizes
    },
    tree: {
      colors: tree({ colors }),
      sizes: treeSize
    },
    accordion: { colors: accordion({ colors }) },
    anchors: { colors: anchors({ colors }), sizes: anchorsSize },
    picker: { colors: picker({ colors }) },
    pickerInput: { colors: pickerInput({ colors }) },
    label: { colors: label({ colors }) },
    icon: icon({ colors }),
    formLabel: {
      colors: formLabel({ colors })
    }
  }
}
