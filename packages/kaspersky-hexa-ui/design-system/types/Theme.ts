import { BORDER_RADIUS, SPACES } from '@design-system/theme'
import { AlertColorConfig, AlertMode } from '@src/alert/types'
import { AnchorColorConfig } from '@src/anchor-links/Anchor/types'
import { AnchorLinkColorConfig } from '@src/anchor-links/AnchorLink/types'
import { BadgeColorConfig, BadgeMode, BadgeSize, BadgeSizeConfig } from '@src/badge/types'
import { BreadcrumbsColorConfig, BreadcrumbsSize, BreadcrumbsSizeConfig } from '@src/breadcrumbs/types'
import { ChipColorConfig, ChipSize, ChipSizeConfig } from '@src/chip/types'
import { DividerColorConfig, DividerMode } from '@src/divider/types'
import { ExpandableTextColorConfig } from '@src/expandable-text/types'
import { FieldColorConfig } from '@src/field/types'
import { FormLabelStateProps } from '@src/form-label/types'
import { HelpMessageCssConfig, HelpMessageMode } from '@src/help-message/types'
import { IconColorConfig } from '@src/icon/types'
import { IndicatorCssConfig, IndicatorMode } from '@src/indicator/types'
import {
  InformationCardColorConfig,
  InformationCardSize,
  InformationCardSizeConfig
} from '@src/informationCard/types'
import { KeyValueCssConfig } from '@src/key-value/types'
import {
  LoaderColorConfig,
  LoaderMode,
  LoaderSize,
  LoaderSizeConfig
} from '@src/loader/types'
import { MenuColorConfig } from '@src/menu/types'
import { ModalColorConfig, ModalMode, ModalSize, ModalSizeConfig } from '@src/modal/types'
import { NotificationColorConfig, NotificationMode } from '@src/notification/types'
import { PaginationColorConfig } from '@src/pagination/types'
import { PopoverCssConfig } from '@src/popover/types'
import { ScrollbarColorConfig } from '@src/scrollbar/types'
import { SectionMessageColorConfig, SectionMessageMode } from '@src/section-message/types'
import {
  SegmentedControlColorConfig,
  SegmentedControlSize,
  SegmentedControlSizeConfig
} from '@src/segmented-control/types'
import { SeverityColorConfig, SeverityMode } from '@src/severity/types'
import {
  SidebarColorConfig,
  SidebarSize,
  SidebarSizeConfig
} from '@src/sidebar/types'
import { StatusColorConfig, StatusMode } from '@src/status/types'
import { TableColorConfig } from '@src/table/types'
import { TagColorConfig, TagMode, TagSize, TagSizeConfig } from '@src/tag/types'
import { TooltipCssConfig } from '@src/tooltip/types'
import { UploadColorConfig } from '@src/upload/legacy/types'
import { WeeklyScheduleCssConfig } from '@src/weekly-schedule/types'

import { effects } from '@kaspersky/hexa-ui-core/colors/js'

import { colors } from '../theme/themes/light/colors'
import { ThemeKey } from '../types'

export type Theme = 'light' | 'dark'

type ComponentConfig<Colors, Sizes = undefined> = {
  colors: Colors,
  sizes: Sizes
}

export type ThemeConfig = Readonly<{
  key: ThemeKey,
  colors: typeof colors,
  effects: typeof effects,
  shapes: {
    borderRadius: typeof BORDER_RADIUS
  },
  spaces: typeof SPACES,
  components: Readonly<{
    segmentedControl: ComponentConfig<
      SegmentedControlColorConfig,
      Record<SegmentedControlSize, SegmentedControlSizeConfig>
    >,
    badge: {
      colors: Record<BadgeMode, BadgeColorConfig>,
      sizes: Record<BadgeSize, BadgeSizeConfig>
    },
    breadcrumbs: ComponentConfig<
      BreadcrumbsColorConfig,
      Record<BreadcrumbsSize, BreadcrumbsSizeConfig>
    >,
    sidebar: ComponentConfig<
      SidebarColorConfig,
      Record<SidebarSize, SidebarSizeConfig>
    >,
    tag: ComponentConfig<
      Record<TagMode, TagColorConfig>,
      Record<TagSize, TagSizeConfig>
    >,
    chip: ComponentConfig<
      ChipColorConfig,
      Record<ChipSize, ChipSizeConfig>
    >,
    expandableText: { colors: ExpandableTextColorConfig },
    scrollbar: { colors: ScrollbarColorConfig },
    informationCard: ComponentConfig<
      InformationCardColorConfig,
      Record<InformationCardSize, InformationCardSizeConfig>
    >,
    severity: { colors: Record<SeverityMode, SeverityColorConfig> },
    divider: { colors: Record<DividerMode, DividerColorConfig> },
    loader: ComponentConfig<
      Record<LoaderMode, LoaderColorConfig>,
      Record<LoaderSize, LoaderSizeConfig>
    >,
    notification: ComponentConfig<Record<NotificationMode, NotificationColorConfig>>,
    alert: { colors: Record<AlertMode, AlertColorConfig> },
    sectionMessage: { colors: Record<SectionMessageMode, SectionMessageColorConfig> },
    indicator: { colors: Record<IndicatorMode, IndicatorCssConfig> },
    status: { colors: Record<StatusMode, StatusColorConfig> },
    field: { colors: FieldColorConfig },
    pagination: { colors: PaginationColorConfig },
    tooltip: { colors: TooltipCssConfig },
    modal: {
      colors: Record<ModalMode, ModalColorConfig>,
      sizes: Record<ModalSize, ModalSizeConfig>
    },
    keyValue: { colors: KeyValueCssConfig },
    table: { colors: TableColorConfig },
    helpMessage: { colors: Record<HelpMessageMode, HelpMessageCssConfig> },
    anchors: { colors: AnchorColorConfig & AnchorLinkColorConfig },
    icon: { colors: IconColorConfig },
    formLabel: { colors: FormLabelStateProps },
    popover: { colors: PopoverCssConfig },
    upload: { colors: UploadColorConfig },
    weeklySchedule: { colors: WeeklyScheduleCssConfig },
    menu: { colors: MenuColorConfig }
  }>
}>
