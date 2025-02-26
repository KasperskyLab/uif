import { ButtonColorConfig, ButtonMode, ButtonSize, ButtonSizeConfig } from '@src/button/types'
import { CardColorConfig, CardMode, CardSize, CardSizeConfig } from '@src/card/types'
import { PickerColorConfig } from '@src/datepicker/types'
import { InputColorConfig } from '@src/input/types'
import { LockGroupDesignTokens } from '@src/lock-group/types'
import { ProgressBarColorConfig, ProgressBarMode, ProgressBarSize, ProgressBarSizeConfig } from '@src/progress-bar/types'
import { StatusCardColorConfig, StatusCardMode, StatusCardSize, StatusCardSizeConfig } from '@src/status-card/types'
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
    button: ComponentConfig<
      Record<ButtonMode, ButtonColorConfig>,
      Record<ButtonSize, ButtonSizeConfig>
    >,
    card: ComponentConfig<
      Record<CardMode, CardColorConfig>,
      Record<CardSize, CardSizeConfig>
    >,
    input: ComponentConfig<InputColorConfig>,
    lockGroup: ComponentConfig<LockGroupDesignTokens>,
    picker: ComponentConfig<PickerColorConfig>,
    progressBar: ComponentConfig<
      Record<ProgressBarMode, ProgressBarColorConfig>,
      Record<ProgressBarSize, ProgressBarSizeConfig>
    >,
    statusCard: ComponentConfig<
      Record<StatusCardMode, StatusCardColorConfig>,
      Record<StatusCardSize, StatusCardSizeConfig>
    >,
    upload: ComponentConfig<UploaderCssConfig>
  }
}
