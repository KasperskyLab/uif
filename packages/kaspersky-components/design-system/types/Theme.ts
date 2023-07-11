import { AlertColorConfig, AlertMode, AlertType } from '../../src/alert/types'
import {
  ButtonColorConfig,
  ButtonMode,
  ButtonSize,
  ButtonSizeConfig
} from '../../src/button/types'
import {
  DropdownColorConfig,
  DropdownSizeConfig
} from '../../src/dropdown/types'
import { BadgeMode, BadgeSizeConfig, BadgeStateProps } from '../../src/badge'
import {
  SidebarColorConfig,
  SidebarSize,
  SidebarSizeConfig
} from '../../src/sidebar/types'
import {
  DividerColorConfig,
  DividerMode,
  DividerSizeConfig,
  DividerType
} from '../../src/divider/types'
import { LinkColorConfig, LinkSizeConfig } from '../../src/link/types'
import {
  LoaderColorConfig,
  LoaderMode,
  LoaderSize,
  LoaderSizeConfig
} from '../../src/loader/types'
import { SelectColorConfig, SelectSizeConfig } from '../../src/select/types'
import {
  NotificationColorConfig,
  NotificationCommonModeCssProps,
  NotificationMode
} from '../../src/notification/types'
import { SeverityColorConfig, SeverityMode } from '../../src/severity/types'
import { TagSize, TagSizeConfig } from '../../src/tag/types'
import { CheckboxColorConfig } from '../../src/checkbox/types'
import { RadioMode, RadioColorConfig } from '../../src/radio/types'
import { ToggleColorConfig } from '../../src/toggle/types'
import { PaginationColorConfig, PaginationSize, PaginationSizeConfig } from '../../src/pagination/types'
import { TabsColorConfig, TabsSizeConfig } from '../../src/tabs/types'
import { PickerColorConfig, PickerInputColorConfig } from '../../src/datepicker/types'
import { LabelColorConfig } from '../../src/label/types'
import { colors } from '../theme/themes/light/colors'
import { BORDER_RADIUS, SPACES } from '../theme/themes/variables'
import { ThemeKey } from '.'
import {
  InputColorConfig,
  InputSizeConfig
} from '../../src/input/types'
import { FieldCssConfig } from '../../src/field/types'
import { ToolbarColorConfig } from '../../src/toolbar/types'
import { SearchCssConfig } from '../../src/search/types'
import { ModalColorConfig, ModalCommonModeCssProps, ModalMode } from '../../src/modal/types'
import { KeyValueCssConfig } from '../../src/key-value/types'
import { TableColorConfig, TableSizeConfig } from '../../src/table/types'
import { TreeColorConfig } from '../../src/tree/types'
import { TextSizes } from '../tokens'
import { AccordionColorConfig } from '../../src/accordion/types'
import {
  AnchorColorConfig,
  AnchorLinkColorConfig,
  AnchorLinkSizeConfig,
  AnchorSizeConfig
} from '../../src/anchor-links/types'
import { IconColorConfig } from '../../src/icon/types'
import { FormLabelStateProps } from '@src/form-label'

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
    readonly link: ComponentConfig<
    LinkColorConfig,
    LinkSizeConfig
    >,
    readonly badge: ComponentConfig<
    Record<BadgeMode, BadgeStateProps>,
    BadgeSizeConfig
    >,
    readonly sidebar: ComponentConfig<
    SidebarColorConfig,
    Record<SidebarSize, SidebarSizeConfig>
    >,
    readonly dropdown: ComponentConfig<DropdownColorConfig, DropdownSizeConfig>,
    readonly tag: { sizes: Record<TagSize, TagSizeConfig> },
    readonly severity: Record<SeverityMode, SeverityColorConfig>,
    readonly checkbox: { colors: CheckboxColorConfig },
    readonly radio: { colors: Record<RadioMode, RadioColorConfig> },
    readonly select: ComponentConfig<SelectColorConfig, SelectSizeConfig>,
    readonly divider: ComponentConfig<
    DividerColorConfig,
    Record<DividerMode | DividerType, DividerSizeConfig>
    >,
    readonly loader: ComponentConfig<
    Record<LoaderMode, LoaderColorConfig>,
    Record<LoaderSize, LoaderSizeConfig>
    >,
    readonly toggle: { colors: ToggleColorConfig },
    readonly tabs: ComponentConfig<TabsColorConfig, TabsSizeConfig>,
    readonly notification: ComponentConfig<
    Record<NotificationMode, NotificationColorConfig> & {
      common: NotificationCommonModeCssProps
    }
    >,
    readonly alert: ComponentConfig<
    Record<AlertMode, Record<AlertType, AlertColorConfig>>
    >,
    readonly input: ComponentConfig<
    InputColorConfig,
    InputSizeConfig
    >,
    readonly field: { colors: FieldCssConfig },
    readonly pagination: ComponentConfig<PaginationColorConfig, Record<PaginationSize, PaginationSizeConfig>>,
    readonly toolbar: { colors: ToolbarColorConfig },
    readonly search: { colors: SearchCssConfig },
    readonly modal:
    {
      colors: Record<ModalMode, ModalColorConfig> & {
        common: ModalCommonModeCssProps
      }
    },
    readonly keyValue: { colors: KeyValueCssConfig },
    readonly table: ComponentConfig<TableColorConfig, TableSizeConfig>,
    readonly tree: { colors: TreeColorConfig, sizes: TextSizes },
    readonly accordion: { colors: AccordionColorConfig },
    readonly anchors: { colors: AnchorColorConfig & AnchorLinkColorConfig, sizes: AnchorSizeConfig & AnchorLinkSizeConfig },
    readonly picker: { colors: PickerColorConfig },
    readonly pickerInput: { colors: PickerInputColorConfig },
    readonly label: { colors: LabelColorConfig },
    readonly icon: { colors: IconColorConfig },
    readonly formLabel: { colors: FormLabelStateProps }
  }
}
