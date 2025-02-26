import { ComponentsConfig } from '@design-system/css-configs/types'

import { effects } from '@kaspersky/hexa-ui-core/colors/js'

import { button, buttonSize } from './button'
import { card, cardSize } from './card'
import { input } from './input'
import { lockGroup } from './lockGroup'
import { picker } from './picker'
import { progressBar, progressBarSize } from './progressBar'
import { statusCard, statusCardSize } from './statusCard'
import { upload } from './upload'

/* eslint sort-keys: "error" */
export const COMPONENTS_CONFIG: ComponentsConfig = {
  components: {
    button: {
      colors: button({ effects }),
      sizes: buttonSize
    },
    card: {
      colors: card(),
      sizes: cardSize
    },
    input: {
      colors: input({ effects })
    },
    lockGroup: {
      colors: lockGroup()
    },
    picker: {
      colors: picker({ effects })
    },
    progressBar: {
      colors: progressBar(),
      sizes: progressBarSize
    },
    statusCard: {
      colors: statusCard(),
      sizes: statusCardSize
    },
    upload: {
      colors: upload()
    }
  }
}
