import { effects } from '@kaspersky/hexa-ui-core/colors/js'

import { ThemeConfig, ThemeKey } from '../../../types'
import { COMMON_THEME } from '../common-theme'

import { alert } from './alert'
import { anchor } from './anchor'
import { badge, badgeSize } from './badge'
import { breadcrumbs, breadcrumbsSize } from './breadcrumbs'
import { chip, chipSize } from './chip'
import { colors } from './colors'
import { divider } from './divider'
import { expandableText } from './expandableText'
import { field } from './field'
import { formLabel } from './formLabel'
import { helpMessage } from './helpMessage'
import { icon } from './icon'
import { indicator } from './indicator'
import { informationCard, informationCardSize } from './informationCard'
import { keyValue } from './keyValue'
import { loader, loaderSize } from './loader'
import { menu } from './menu'
import { modal, modalSize } from './modal'
import { notification } from './notification'
import { pagination } from './pagination'
import { popover } from './popover'
import { scrollbar } from './scrollbar'
import { sectionMessage } from './sectionMessage'
import { segmentedControl, segmentedControlSize } from './segmentedControl'
import { severity } from './severity'
import { sidebar, sidebarSize } from './sidebar'
import { status } from './status'
import { table } from './table'
import { tag, tagSize } from './tag'
import { tooltip } from './tooltip'
import { upload } from './upload'
import { weeklySchedule } from './weeklySchedule'

export const LIGHT_THEME: ThemeConfig = {
  ...COMMON_THEME,
  key: ThemeKey.Light,
  colors,
  effects,
  components: {
    breadcrumbs: {
      colors: breadcrumbs({ colors, effects }),
      sizes: breadcrumbsSize
    },
    segmentedControl: {
      colors: segmentedControl({ colors, effects }),
      sizes: segmentedControlSize
    },
    badge: {
      colors: badge({ colors, effects }),
      sizes: badgeSize
    },
    sidebar: {
      colors: sidebar({ colors, effects }),
      sizes: sidebarSize
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
    divider: {
      colors: divider({ colors, effects })
    },
    loader: {
      colors: loader({ colors, effects }),
      sizes: loaderSize
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
    field: {
      colors: field({ colors, effects })
    },
    pagination: { colors: pagination({ colors, effects }) },
    tooltip: { colors: tooltip({ colors, effects }) },
    modal: {
      colors: modal({ colors, effects }),
      sizes: modalSize
    },
    keyValue: { colors: keyValue({ colors, effects }) },
    table: {
      colors: table({ colors, effects })
    },
    helpMessage: { colors: helpMessage({ colors, effects }) },
    anchors: { colors: anchor({ colors, effects }) },
    icon: icon({ colors, effects }),
    formLabel: {
      colors: formLabel({ colors, effects })
    },
    popover: {
      colors: popover({ colors, effects })
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
