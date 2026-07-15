import { getIconPackFromWindows } from '@helpers/getIconPackFrowWindows'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { showDeprecationWarn } from '@helpers/showDeprecationWarn'
import React from 'react'
import styled from 'styled-components'

import { Placeholder } from '@kaspersky/hexa-ui-icons/16'

import { actualIconSizes, DeprecatedIconSizes, IconPackSizes, IconResolverProps } from './types'

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

/** @deprecated Use ReactNode for icons instead. */
export const IconResolver = (props: IconResolverProps) => {
  const { name, size, testAttributes } = useTestAttribute(props)

  showDeprecationWarn('icon', 'string', `Use @kaspersky/hexa-ui-icons package instead:

import { ${name} } from '@kaspersky/hexa-ui-icons/${size}'

<Component icon={<${name} />} />
`)

  const getIcon = () => {
    const iconSize = isActualIconSize(size) ? size : deprecatedToActualSizeMapper[size]
    const icons = getIconPackFromWindows(iconSize)
    if (!icons) {
      console.warn(`Could not find icon with size ${iconSize}. Instead, a fallback icon was used`)
      return <Placeholder />
    }

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
