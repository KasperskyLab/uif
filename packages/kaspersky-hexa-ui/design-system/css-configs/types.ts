import { CardColorConfig, CardMode, CardSize, CardSizeConfig } from '@src/card/types'
import { CheckboxColorConfig } from '@src/checkbox/types'
import { CodeViewerColorConfig } from '@src/code-viewer/types'
import { PickerColorConfig } from '@src/datepicker/types'
import { InputColorConfig } from '@src/input/types'
import { LinkColorConfig, LinkSize, LinkSizeConfig } from '@src/link/types'
import { LoadingOverlayColorConfig } from '@src/loading-overlay/types'
import { LockGroupDesignTokens } from '@src/lock-group/types'
import { PlaceholderColorConfig, PlaceholderMode, PlaceholderSize, PlaceholderSizeConfig } from '@src/placeholder/types'
import { ProgressBarColorConfig, ProgressBarMode, ProgressBarSize, ProgressBarSizeConfig } from '@src/progress-bar/types'
import { RadioColorConfig } from '@src/radio/types'
import { SegmentedButtonColorConfig, SegmentedButtonMode, SegmentedButtonSize, SegmentedButtonSizeConfig } from '@src/segmented-button/types'
import { SelectColorConfig } from '@src/select/types'
import { StatusCardColorConfig, StatusCardMode, StatusCardSize, StatusCardSizeConfig } from '@src/status-card/types'
import { TabsColorConfig } from '@src/tabs/types'
import { ToggleColorConfig } from '@src/toggle/types'
import { TreeColorConfig } from '@src/tree/types'
import { TreeSelectColorConfig } from '@src/tree-select/types'
import { UploaderCssConfig } from '@src/upload/types'

import { effects } from '@kaspersky/hexa-ui-core/colors/js'

export type ComponentContext = {
  effects: typeof effects
}

type ComponentConfig<Colors, Sizes = undefined> = {
  colors: Colors,
  sizes?: Sizes
}

export type ComponentsConfig = {
  components: {
    card: ComponentConfig<
      Record<CardMode, CardColorConfig>,
      Record<CardSize, CardSizeConfig>
    >,
    checkbox: { colors: CheckboxColorConfig },
    codeViewer: { colors: CodeViewerColorConfig },
    input: ComponentConfig<InputColorConfig>,
    link: ComponentConfig<
      LinkColorConfig,
      Record<LinkSize | 'noSize', LinkSizeConfig>
    >,
    loadingOverlay: ComponentConfig<LoadingOverlayColorConfig>,
    lockGroup: ComponentConfig<LockGroupDesignTokens>,
    picker: ComponentConfig<PickerColorConfig>,
    placeholder: ComponentConfig<
      Record<PlaceholderMode, PlaceholderColorConfig>,
      Record<PlaceholderSize, PlaceholderSizeConfig>
    >,
    progressBar: ComponentConfig<
      Record<ProgressBarMode, ProgressBarColorConfig>,
      Record<ProgressBarSize, ProgressBarSizeConfig>
    >,
    radio: { colors: RadioColorConfig },
    segmentedButton: ComponentConfig<
      Record<SegmentedButtonMode, SegmentedButtonColorConfig>,
      Record<SegmentedButtonSize, SegmentedButtonSizeConfig>
    >,
    select: { colors: SelectColorConfig },
    statusCard: ComponentConfig<
      Record<StatusCardMode, StatusCardColorConfig>,
      Record<StatusCardSize, StatusCardSizeConfig>
    >,
    tabs: { colors: TabsColorConfig },
    tree: { colors: TreeColorConfig },
    treeSelect: { colors: TreeSelectColorConfig },
    toggle: { colors: ToggleColorConfig },
    upload: ComponentConfig<UploaderCssConfig>
  }
}
