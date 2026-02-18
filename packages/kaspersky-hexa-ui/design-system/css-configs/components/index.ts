import { ComponentsConfig } from '@design-system/css-configs/types'

import { effects } from '@kaspersky/hexa-ui-core/colors/js'

import { card, cardSize } from './card'
import { checkbox } from './checkbox'
import { codeViewer } from './codeViewer'
import { input } from './input'
import { link, linkSize } from './link'
import { loadingOverlay } from './loadingOverlay'
import { lockGroup } from './lockGroup'
import { picker } from './picker'
import { placeholder, placeholderSize } from './placeholder'
import { progressBar, progressBarSize } from './progressBar'
import { radio } from './radio'
import { segmentedButton, segmentedButtonSize } from './segmentedButton'
import { select } from './select'
import { statusCard, statusCardSize } from './statusCard'
import { tabs } from './tabs'
import { toggle } from './toggle'
import { tree } from './tree'
import { treeSelect } from './treeSelect'
import { upload } from './upload'

/* eslint sort-keys: "error" */
export const COMPONENTS_CONFIG: ComponentsConfig = {
  components: {
    card: {
      colors: card(),
      sizes: cardSize
    },
    checkbox: {
      colors: checkbox({ effects })
    },
    codeViewer: {
      colors: codeViewer({ effects })
    },
    input: {
      colors: input({ effects })
    },
    link: {
      colors: link({ effects }),
      sizes: linkSize
    },
    loadingOverlay: {
      colors: loadingOverlay()
    },
    lockGroup: {
      colors: lockGroup()
    },
    picker: {
      colors: picker({ effects })
    },
    placeholder: {
      colors: placeholder(),
      sizes: placeholderSize
    },
    progressBar: {
      colors: progressBar(),
      sizes: progressBarSize
    },
    radio: {
      colors: radio({ effects })
    },
    segmentedButton: {
      colors: segmentedButton({ effects }),
      sizes: segmentedButtonSize
    },
    select: {
      colors: select({ effects })
    },
    statusCard: {
      colors: statusCard(),
      sizes: statusCardSize
    },
    tabs: {
      colors: tabs({ effects })
    },
    toggle: {
      colors: toggle({ effects })
    },
    tree: {
      colors: tree({ effects })
    },
    treeSelect: {
      colors: treeSelect({ effects })
    },
    upload: {
      colors: upload()
    }
  }
}
