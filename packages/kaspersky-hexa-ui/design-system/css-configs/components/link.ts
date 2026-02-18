import { ComponentContext } from '@design-system/css-configs/types'
import { focus } from '@design-system/tokens/focus'
import { getTextSizes } from '@design-system/tokens/typography'
import { LinkColorConfig, LinkSize, LinkSizeConfig } from '@src/link/types'

import { TextTypes } from '@kaspersky/hexa-ui-core/typography/js'

export const link = ({ effects }: ComponentContext): LinkColorConfig => ({
  enabled: {
    color: 'var(--link--default--text--enabled)'
  },
  visited: {
    color: 'var(--link--visited--text--enabled)'
  },
  hover: {
    color: 'var(--link--default--text--hover)'
  },
  active: {
    color: 'var(--link--default--text--active)'
  },
  disabled: {
    color: 'var(--link--default--text--disabled)'
  },
  ...focus({ effects })
})

export const linkSize: Record<LinkSize | 'noSize', LinkSizeConfig> = {
  medium: {
    borderRadius: '4px',
    borderWidth: '4px',
    ...getTextSizes(TextTypes.BTM3)
  },
  large: {
    borderRadius: '4px',
    borderWidth: '4px',
    ...getTextSizes(TextTypes.BTM2)
  },
  noSize: {
    borderRadius: '4px',
    borderWidth: '4px'
  }
}
