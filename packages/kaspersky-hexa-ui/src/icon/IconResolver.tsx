import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import React from 'react'
import styled from 'styled-components'

import Icons12 from '@kaspersky/hexa-ui-icons/12'
import Icons16, { Placeholder } from '@kaspersky/hexa-ui-icons/16'
import Icons24 from '@kaspersky/hexa-ui-icons/24'
import Icons32 from '@kaspersky/hexa-ui-icons/32'
import Icons48 from '@kaspersky/hexa-ui-icons/48'
import Icons8 from '@kaspersky/hexa-ui-icons/8'

import { actualIconSizes, DeprecatedIconSizes, IconPackSizes, IconResolverProps } from './types'

const iconSizeMapper = {
  8: Icons8,
  12: Icons12,
  16: Icons16,
  24: Icons24,
  32: Icons32,
  48: Icons48
}

const deprecatedToActualSizeMapper: Record<DeprecatedIconSizes, IconPackSizes> = {
  extraSmall: 8,
  small: 16,
  medium: 24,
  large: 48
}

const isActualIconSize = (size: IconPackSizes | DeprecatedIconSizes): size is IconPackSizes =>
  typeof size === 'number' && actualIconSizes.includes(size)

export const Wrapper = styled.span`
  line-height: 0;
`

export const IconResolver = (props: IconResolverProps) => {
  const { name, size, testAttributes } = useTestAttribute(props)

  const getIcon = () => {
    const iconSize = isActualIconSize(size) ? size : deprecatedToActualSizeMapper[size]
    const icons = iconSizeMapper[iconSize]
    if (!icons) {
      console.warn(`Could not find icon with size ${iconSize}. Instead, a fallback icon was used`)
      return <Placeholder />
    }

    // @ts-ignore
    const Icon = icons[name]
    if (!Icon) {
      console.warn(`Could not find icon with size ${iconSize} and name ${name}. Instead, a fallback icon was used`)
      return <Placeholder />
    }

    return <Icon />
  }

  return (
    <Wrapper
      role="img"
      {...testAttributes}
    >
      {getIcon()}
    </Wrapper>
  )
}
