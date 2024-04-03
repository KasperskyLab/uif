import { ThemeKey, ThemeConfig } from '../../../types'
import { COMMON_THEME } from '../common-theme'
import { severity } from './severity'
import { alert } from './alert'
import { sectionMessage } from './sectionMessage'
import { button, buttonSize } from './button'
import { segmentedButton, segmentedButtonSize } from './segmentedButton'
import { colors } from './colors'
import { dropdown } from './dropdown'
import { badge } from './badge'
import { sidebar, sidebarSize } from './sidebar'
import { divider } from './divider'
import { link, linkSize } from './link'
import { chip, chipSize } from './chip'
import { informationCard, informationCardSize } from './informationCard'
import { loader, loaderSize } from './loader'
import { select } from './select'
import { notification } from './notification'
import { tag, tagSize } from './tag'
import { checkbox } from './checkbox'
import { radio } from './radio'
import { toggle } from './toggle'
import { tabs } from './tabs'
import { indicator } from './indicator'
import { status } from './status'
import { input, inputSize } from './input'
import { codeViewer } from './codeViewer'
import { field } from './field'
import { pagination } from './pagination'
import { toolbar } from './toolbar'
import { tooltip } from './tooltip'
import { modal, modalSize } from './modal'
import { keyValue } from './keyValue'
import { table } from './table'
import { tree } from './tree'
import { treeSelect } from './treeSelect'
import { accordion, accordionSize } from './accordion'
import { anchor } from './anchor'
import { picker } from './picker'
import { label } from './label'
import { tenantFilter } from './tenantFilter'
import { icon } from './icon'
import { formLabel } from './formLabel'
import { actionButton, actionButtonSize } from './actionButton'
import { helpMessage } from './helpMessage'
import { popover } from './popover'
import { expandableText } from './expandableText'
import { scrollbar } from './scrollbar'
import { timeInput } from './timeInput'
import { weeklySchedule } from './weeklySchedule'

export const DARK_THEME: ThemeConfig = {
  ...COMMON_THEME,
  key: ThemeKey.Dark,
  colors,
  components: {
    button: {
      colors: button({ colors }),
      sizes: buttonSize
    },
    segmentedButton: {
      colors: segmentedButton({ colors }),
      sizes: segmentedButtonSize
    },
    link: {
      colors: link({ colors }),
      sizes: linkSize
    },
    badge: {
      colors: badge({ colors })
    },
    sidebar: {
      colors: sidebar({ colors }),
      sizes: sidebarSize
    },
    dropdown: {
      colors: dropdown({ colors })
    },
    tag: {
      colors: tag({ colors }),
      sizes: tagSize
    },
    chip: {
      colors: chip({ colors }),
      sizes: chipSize
    },
    expandableText: {
      colors: expandableText({ colors })
    },
    scrollbar: {
      colors: scrollbar({ colors })
    },
    informationCard: {
      colors: informationCard({ colors }),
      sizes: informationCardSize
    },
    severity: {
      colors: severity({ colors })
    },
    checkbox: {
      colors: checkbox({ colors })
    },
    radio: {
      colors: radio({ colors })
    },
    select: {
      colors: select({ colors })
    },
    divider: {
      colors: divider({ colors })
    },
    loader: {
      colors: loader({ colors }),
      sizes: loaderSize
    },
    toggle: {
      colors: toggle({ colors })
    },
    tabs: {
      colors: tabs({ colors })
    },
    notification: {
      colors: notification({ colors }),
      sizes: undefined
    },
    alert: {
      colors: alert({ colors })
    },
    sectionMessage: {
      colors: sectionMessage({ colors })
    },
    indicator: {
      colors: indicator({ colors })
    },
    status: {
      colors: status({ colors })
    },
    input: {
      colors: input({ colors }),
      sizes: inputSize
    },
    codeViewer: {
      colors: codeViewer({ colors })
    },
    field: { colors: field({ colors }) },
    pagination: { colors: pagination({ colors }) },
    toolbar: { colors: toolbar({ colors }) },
    tooltip: { colors: tooltip({ colors }) },
    modal: {
      colors: modal({ colors }),
      sizes: modalSize
    },
    keyValue: { colors: keyValue({ colors }) },
    table: {
      colors: table({ colors })
    },
    tree: {
      colors: tree({ colors })
    },
    treeSelect: {
      colors: treeSelect({ colors })
    },
    helpMessage: { colors: helpMessage({ colors }) },
    accordion: { colors: accordion({ colors }), sizes: accordionSize },
    anchors: { colors: anchor({ colors }) },
    picker: { colors: picker({ colors }) },
    label: { colors: label({ colors }) },
    tenantFilter: { colors: tenantFilter({ colors }) },
    icon: icon({ colors }),
    formLabel: {
      colors: formLabel({ colors })
    },
    actionButton: { colors: actionButton({ colors }), sizes: actionButtonSize },
    popover: {
      colors: popover({ colors })
    },
    timeInput: {
      colors: timeInput({ colors })
    },
    weeklySchedule: {
      colors: weeklySchedule({ colors })
    }
  }
}
