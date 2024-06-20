import { AnchorColorConfig } from '@src/anchor-links/Anchor/types'
import { AnchorLinkColorConfig } from '@src/anchor-links/AnchorLink/types'
import { AlertColorConfig, AlertMode } from '@src/alert/types'
import { SectionMessageCssConfig, SectionMessageMode } from '@src/section-message/types'
import { TagColorConfig, TagMode, TagSize, TagSizeConfig } from '@src/tag/types'
import {
  ButtonColorConfig,
  ButtonMode,
  ButtonSize,
  ButtonSizeConfig
} from '@src/button/types'
import {
  SegmentedButtonMode,
  SegmentedButtonColorConfig,
  SegmentedButtonSize,
  SegmentedButtonSizeConfig
} from '@src/segmented-button/types'
import { DropdownColorConfig } from '@src/dropdown/types'
import { BadgeMode, BadgeColorConfig } from '@src/badge'
import {
  SidebarColorConfig,
  SidebarSize,
  SidebarSizeConfig
} from '@src/sidebar/types'
import { DividerColorConfig, DividerMode } from '@src/divider/types'
import { LinkColorConfig, LinkSizeConfig, LinkSize } from '@src/link/types'
import {
  LoaderColorConfig,
  LoaderMode,
  LoaderSize,
  LoaderSizeConfig
} from '@src/loader/types'
import { SelectColorConfig } from '@src/select/types'
import { NotificationMode, NotificationColorConfig } from '@src/notification/types'
import { SeverityColorConfig, SeverityMode } from '@src/severity/types'
import { CheckboxColorConfig } from '@src/checkbox/types'
import { RadioMode, RadioColorConfig } from '@src/radio/types'
import { ToggleColorConfig } from '@src/toggle/types'
import { PaginationColorConfig } from '@src/pagination/types'
import { TabsColorConfig } from '@src/tabs/types'
import { PickerColorConfig } from '@src/datepicker/types'
import { LabelColorConfig } from '@src/label/types'
import { TenantFilterCssConfig } from '@src/tenantFilter/types'
import { colors } from '../theme/themes/light/colors'
import { BORDER_RADIUS, SPACES } from '@design-system/theme'
import { ThemeKey } from '../types'
import { InputColorConfig, InputSizeConfig } from '@src/input/types'
import { CodeViewerColorConfig } from '@src/code-viewer/types'
import { FieldColorConfig } from '@src/field/types'
import { ToolbarColorConfig } from '@src/toolbar/types'
import { TooltipCssConfig } from '@src/tooltip/types'
import { ModalColorConfig, ModalMode, ModalSizeConfig, ModalSize } from '@src/modal/types'
import { KeyValueCssConfig } from '@src/key-value/types'
import { TableColorConfig } from '@src/table'
import { TreeColorConfig } from '@src/tree/types'
import { TreeSelectColorConfig } from '@src/tree-select/types'
import { HelpMessageCssConfig, HelpMessageMode } from '@src/help-message'
import { AccordionColorConfig, AccordionPanelSizeConfig, AccordionTitleSize } from '@src/accordion/types'
import { IconColorConfig } from '@src/icon'
import { FormLabelStateProps } from '@src/form-label'
import { IndicatorCssConfig, IndicatorMode, IndicatorModeDeprecated } from '@src/indicator/types'
import { StatusColorConfig, StatusMode } from '@src/status/types'
import {
  ActionButtonMode,
  ActionButtonColorConfig,
  ActionButtonSize,
  ActionButtonSizeConfig
} from '@src/action-button/types'
import { ChipColorConfig, ChipSizeConfig, ChipSize } from '@src/chip/types'
import {
  InformationCardColorConfig,
  InformationCardSizeConfig,
  InformationCardSize
} from '@src/informationCard/types'
import { PopoverCssConfig } from '@src/popover/types'
import { ExpandableTextColorConfig } from '@src/expandable-text/types'
import { ScrollbarColorConfig } from '@src/scrollbar/types'
import { TimeInputColorConfig } from '@src/time-input'
import { WeeklyScheduleCssConfig } from '@src/weekly-schedule/types'
import { MenuColorConfig } from '@src/menu/types'

export type Theme = 'light' | 'dark'

type ComponentConfig<Colors, Sizes = undefined> = {
  colors: Colors,
  sizes: Sizes
}

export type ThemeConfig = {
  readonly key: ThemeKey,
  readonly colors: typeof colors,
  readonly shapes: {
    readonly borderRadius: typeof BORDER_RADIUS
  },
  readonly spaces: typeof SPACES,
  readonly components: {
    readonly button: ComponentConfig<
      Record<ButtonMode, ButtonColorConfig>,
      Record<ButtonSize, ButtonSizeConfig>
    >,
    readonly segmentedButton: ComponentConfig<
      Record<SegmentedButtonMode, SegmentedButtonColorConfig>,
      Record<SegmentedButtonSize, SegmentedButtonSizeConfig>
    >,
    readonly link: ComponentConfig<
      LinkColorConfig,
      Record<LinkSize | 'noSize', LinkSizeConfig>
    >,
    readonly badge: { colors: Record<BadgeMode, BadgeColorConfig> },
    readonly sidebar: ComponentConfig<
      SidebarColorConfig,
      Record<SidebarSize, SidebarSizeConfig>
    >,
    readonly dropdown: { colors: DropdownColorConfig },
    readonly tag: ComponentConfig<
      Record<TagMode, TagColorConfig>,
      Record<TagSize, TagSizeConfig>
    >,
    readonly chip: ComponentConfig<
      ChipColorConfig,
      Record<ChipSize, ChipSizeConfig>
    >,
    readonly expandableText: { colors: ExpandableTextColorConfig },
    readonly scrollbar: { colors: ScrollbarColorConfig },
    readonly informationCard: ComponentConfig<
      InformationCardColorConfig,
      Record<InformationCardSize, InformationCardSizeConfig>
    >,
    readonly severity: { colors: Record<SeverityMode, SeverityColorConfig> },
    readonly checkbox: { colors: CheckboxColorConfig },
    readonly radio: { colors: Record<RadioMode, RadioColorConfig> },
    readonly select: { colors: SelectColorConfig },
    readonly divider: { colors: Record<DividerMode, DividerColorConfig> },
    readonly loader: ComponentConfig<
      Record<LoaderMode, LoaderColorConfig>,
      Record<LoaderSize, LoaderSizeConfig>
    >,
    readonly toggle: { colors: ToggleColorConfig },
    readonly tabs: { colors: TabsColorConfig },
    readonly notification: ComponentConfig<Record<NotificationMode, NotificationColorConfig>>,
    readonly alert: { colors: Record<AlertMode, AlertColorConfig> },
    readonly sectionMessage: { colors: Record<SectionMessageMode, SectionMessageCssConfig> },
    readonly indicator: { colors: Record<IndicatorMode | IndicatorModeDeprecated, IndicatorCssConfig> },
    readonly status: { colors: Record<StatusMode, StatusColorConfig> },
    readonly input: ComponentConfig<InputColorConfig, InputSizeConfig>,
    readonly codeViewer: { colors: CodeViewerColorConfig },
    readonly field: { colors: FieldColorConfig },
    readonly pagination: { colors: PaginationColorConfig },
    readonly toolbar: { colors: ToolbarColorConfig },
    readonly tooltip: { colors: TooltipCssConfig },
    readonly modal: {
      colors: Record<ModalMode, ModalColorConfig>,
      sizes: Record<ModalSize, ModalSizeConfig>
    },
    readonly keyValue: { colors: KeyValueCssConfig },
    readonly table: { colors: TableColorConfig },
    readonly tree: { colors: TreeColorConfig },
    readonly treeSelect: { colors: TreeSelectColorConfig },
    readonly helpMessage: { colors: Record<HelpMessageMode, HelpMessageCssConfig> },
    readonly accordion: {
      colors: AccordionColorConfig,
      sizes: Record<AccordionTitleSize, AccordionPanelSizeConfig>
    },
    readonly anchors: { colors: AnchorColorConfig & AnchorLinkColorConfig },
    readonly picker: { colors: PickerColorConfig },
    readonly label: { colors: LabelColorConfig },
    readonly tenantFilter: { colors: TenantFilterCssConfig },
    readonly icon: { colors: IconColorConfig },
    readonly formLabel: { colors: FormLabelStateProps },
    readonly actionButton: ComponentConfig<
      Record<ActionButtonMode, ActionButtonColorConfig>,
      Record<ActionButtonSize, ActionButtonSizeConfig>
    >,
    readonly popover: { colors: PopoverCssConfig },
    readonly timeInput: { colors: TimeInputColorConfig },
    readonly weeklySchedule: { colors: WeeklyScheduleCssConfig },
    readonly menu: { colors: MenuColorConfig }
  }
}
