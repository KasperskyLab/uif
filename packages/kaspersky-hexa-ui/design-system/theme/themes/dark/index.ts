import { effects } from '@kaspersky/hexa-ui-core/colors/js'

import { ThemeKey, ThemeConfig } from '../../../types'
import { COMMON_THEME } from '../common-theme'

import { accordion, accordionSize } from './accordion'
import { actionButton, actionButtonSize } from './actionButton'
import { alert } from './alert'
import { anchor } from './anchor'
import { badge, badgeSize } from './badge'
import { breadcrumbs, breadcrumbsSize } from './breadcrumbs'
import { checkbox } from './checkbox'
import { chip, chipSize } from './chip'
import { codeViewer } from './codeViewer'
import { colors } from './colors'
import { divider } from './divider'
import { dropdown } from './dropdown'
import { expandableText } from './expandableText'
import { field } from './field'
import { formLabel } from './formLabel'
import { helpMessage } from './helpMessage'
import { icon } from './icon'
import { indicator } from './indicator'
import { informationCard, informationCardSize } from './informationCard'
import { keyValue } from './keyValue'
import { link, linkSize } from './link'
import { loader, loaderSize } from './loader'
import { menu } from './menu'
import { modal, modalSize } from './modal'
import { notification } from './notification'
import { pagination } from './pagination'
import { popover } from './popover'
import { radio } from './radio'
import { scrollbar } from './scrollbar'
import { sectionMessage } from './sectionMessage'
import { segmentedButton, segmentedButtonSize } from './segmentedButton'
import { segmentedControl, segmentedControlSize } from './segmentedControl'
import { select } from './select'
import { severity } from './severity'
import { sidebar, sidebarSize } from './sidebar'
import { status } from './status'
import { submenu } from './submenu'
import { table } from './table'
import { tabs } from './tabs'
import { tag, tagSize } from './tag'
import { tenantFilter } from './tenantFilter'
import { timeInput } from './timeInput'
import { toggle } from './toggle'
import { toolbar } from './toolbar'
import { tooltip } from './tooltip'
import { tree } from './tree'
import { treeSelect } from './treeSelect'
import { upload } from './upload'
import { weeklySchedule } from './weeklySchedule'

export const DARK_THEME: ThemeConfig = {
  ...COMMON_THEME,
  key: ThemeKey.Dark,
  colors,
  effects,
  components: {
    breadcrumbs: {
      colors: breadcrumbs({ colors, effects }),
      sizes: breadcrumbsSize
    },
    segmentedButton: {
      colors: segmentedButton({ colors, effects }),
      sizes: segmentedButtonSize
    },
    segmentedControl: {
      colors: segmentedControl({ colors, effects }),
      sizes: segmentedControlSize
    },
    submenu: {
      colors: submenu({ colors, effects })
    },
    link: {
      colors: link({ colors, effects }),
      sizes: linkSize
    },
    badge: {
      colors: badge({ colors, effects }),
      sizes: badgeSize
    },
    sidebar: {
      colors: sidebar({ colors, effects }),
      sizes: sidebarSize
    },
    dropdown: {
      colors: dropdown({ colors, effects })
    },
    tag: {
      colors: tag({ colors, effects }),
      sizes: tagSize
    },
    chip: {
      colors: chip({ colors, effects }),
      sizes: chipSize
    },
    expandableText: {
      colors: expandableText({ colors, effects })
    },
    scrollbar: {
      colors: scrollbar({ colors, effects })
    },
    informationCard: {
      colors: informationCard({ colors, effects }),
      sizes: informationCardSize
    },
    severity: {
      colors: severity({ colors, effects })
    },
    checkbox: {
      colors: checkbox({ colors, effects })
    },
    radio: {
      colors: radio({ colors, effects })
    },
    select: {
      colors: select({ colors, effects })
    },
    divider: {
      colors: divider({ colors, effects })
    },
    loader: {
      colors: loader({ colors, effects }),
      sizes: loaderSize
    },
    toggle: {
      colors: toggle({ colors, effects })
    },
    tabs: {
      colors: tabs({ colors, effects })
    },
    notification: {
      colors: notification({ colors, effects }),
      sizes: undefined
    },
    alert: {
      colors: alert({ colors, effects })
    },
    sectionMessage: {
      colors: sectionMessage({ colors, effects })
    },
    indicator: {
      colors: indicator({ colors, effects })
    },
    status: {
      colors: status({ colors, effects })
    },
    codeViewer: {
      colors: codeViewer({ colors, effects })
    },
    field: { colors: field({ colors, effects }) },
    pagination: { colors: pagination({ colors, effects }) },
    toolbar: { colors: toolbar({ colors, effects }) },
    tooltip: { colors: tooltip({ colors, effects }) },
    modal: {
      colors: modal({ colors, effects }),
      sizes: modalSize
    },
    keyValue: { colors: keyValue({ colors, effects }) },
    table: {
      colors: table({ colors, effects })
    },
    tree: {
      colors: tree({ colors, effects })
    },
    treeSelect: {
      colors: treeSelect({ colors, effects })
    },
    helpMessage: { colors: helpMessage({ colors, effects }) },
    accordion: { colors: accordion({ colors, effects }), sizes: accordionSize },
    anchors: { colors: anchor({ colors, effects }) },
    tenantFilter: { colors: tenantFilter({ colors, effects }) },
    icon: icon({ colors, effects }),
    formLabel: {
      colors: formLabel({ colors, effects })
    },
    actionButton: { colors: actionButton({ colors, effects }), sizes: actionButtonSize },
    popover: {
      colors: popover({ colors, effects })
    },
    timeInput: {
      colors: timeInput({ colors, effects })
    },
    upload: { colors: upload({ colors, effects }) },
    weeklySchedule: {
      colors: weeklySchedule({ colors, effects })
    },
    menu: {
      colors: menu({ colors, effects })
    }
  }
}
