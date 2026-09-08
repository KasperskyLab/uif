import { ComponentContext } from '@design-system/css-configs/types'
import { focus } from '@design-system/tokens/focus'
import { getTextSizes } from '@design-system/tokens/typography'
import { LinkColorConfig, LinkSize, LinkSizeConfig } from '@src/link/types'

import { TextTypes } from '@kaspersky/hexa-ui-core/typography/js'

export const link = ({ effects }: ComponentContext): LinkColorConfig => ({
  enabled: {
    color: 'var(--common--accent--enabled)'
  },
  visited: {
    enabled: {
      color: 'var(--common--violet--enabled)'
    },
    hover: {
      color: 'var(--common--violet--hover)'
    },
    active: {
      color: 'var(--common--violet--active)'
    }
  },
  hover: {
    color: 'var(--common--accent--hover)'
  },
  active: {
    color: 'var(--common--accent--active)'
  },
  disabled: {
    color: 'var(--fg--neutral--tertiary)'
  },
  ...focus({ effects })
})

export const linkSize: Record<LinkSize | 'noSize', LinkSizeConfig> = {
  small: {
    borderRadius: '4px',
    borderWidth: '4px',
    ...getTextSizes(TextTypes.BTM4)
  },
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
