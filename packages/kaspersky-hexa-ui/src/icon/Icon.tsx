import { Context } from '@helpers/context'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { shouldForwardProp } from '@helpers/shouldForwardProp'
import { wrapperSpanCss } from '@src/icon/IconCss'
import React, { ForwardedRef, forwardRef, useContext } from 'react'
import styled from 'styled-components'

import Icons12Pack from '@kaspersky/hexa-ui-icons/12'
import Icons16Pack, { StatusQuestionOutline } from '@kaspersky/hexa-ui-icons/16'
import Icons24Pack from '@kaspersky/hexa-ui-icons/24'
import Icons32Pack from '@kaspersky/hexa-ui-icons/32'
import Icons48Pack from '@kaspersky/hexa-ui-icons/48'
import Icons8Pack from '@kaspersky/hexa-ui-icons/8'

import { iconsMapper, MappedObjectInterface } from './iconsMapper'
import { DeprecatedIconSizes, IconPackSizes, IconProps } from './types'
import { useThemedIcon } from './useThemedIcon'

const AllIcons = {
  Icons8Pack,
  Icons12Pack,
  Icons16Pack,
  Icons24Pack,
  Icons32Pack,
  Icons48Pack
}

export type IconsPackageNames = keyof typeof Icons8Pack
  | keyof typeof Icons12Pack
  | keyof typeof Icons16Pack
  | keyof typeof Icons24Pack
  | keyof typeof Icons48Pack

/**
 * @deprecated Use IconResolver instead
 */
export const Icon = (rawProps: IconProps): JSX.Element => {
  const themedProps = useThemedIcon(rawProps)
  const props = useTestAttribute(themedProps)
  return <IconView {...props} />
}

export const StyledSpan = styled.span.withConfig({ shouldForwardProp })`
  ${wrapperSpanCss}
`

function getPackageIcon (size: DeprecatedIconSizes | IconPackSizes, key: IconsPackageNames) {
  let IconByKey
  let packageSize: IconPackSizes
  if (size as IconsPackageNames) {
    switch (size) {
      case 'extraSmall':
        packageSize = 8
        break
      case 'small':
        packageSize = 16
        break
      case 'medium':
        packageSize = 24
        break
      case 'large':
        packageSize = 48
        break
      default:
        packageSize = 24
    }
    IconByKey = (AllIcons?.[`Icons${packageSize}Pack`] as any)?.[key]
    // extraSmall size mapped in 2 sizes 12 and 8
    if (!IconByKey && size === 'extraSmall') {
      packageSize = 12
      IconByKey = (AllIcons?.[`Icons${packageSize}Pack`] as any)?.[key]
    }
  } else {
    IconByKey = (AllIcons?.[`Icons${size as IconPackSizes}Pack`] as any)?.[key]
  }
  return IconByKey ?? undefined
}

function getMapperIconObject (size: DeprecatedIconSizes, name: string): MappedObjectInterface {
  return iconsMapper?.[size]?.[name] ?? {
    size,
    key: name
  }
}

const IconView = forwardRef<HTMLSpanElement, IconProps>((props: IconProps, ref: ForwardedRef<HTMLSpanElement>): JSX.Element => {
  const { size, testId, klId, color, onClick, name, cssConfig, themedColor, iconColor, testAttributes, ...rest } = props
  const svgCursor = onClick ? 'pointer' : ''
  const Icons: { [size: string]: { [name: string]: React.ComponentType<IconProps> } } = useContext(Context)?.icons
  const TagName = Icons?.[size]?.[name]
  let IconToDisplay
  let colorFromMapper

  if (!TagName) {
    const mappedIcon = getMapperIconObject(size, name)
    const PackageIcon = getPackageIcon(mappedIcon.size, mappedIcon.key)

    if (PackageIcon) {
      IconToDisplay = PackageIcon
      colorFromMapper = mappedIcon?.color
    } else {
      console.warn(`@kaspersky/hexa-ui-icons: did not found ${props.name} in size ${props.size}`)
      IconToDisplay = StatusQuestionOutline
      colorFromMapper = 'pink'
    }
  }
  return (
    <StyledSpan
      role="img"
      style={{ cursor: svgCursor }}
      color={color}
      iconColor={iconColor}
      cssConfig={cssConfig}
      onClick={onClick}
      ref={ref}
      {...testAttributes}
      {...rest}
    >
      {TagName
        ? <TagName size={size} name={name} />
        : <IconToDisplay color={colorFromMapper ?? iconColor ?? color ?? themedColor}/>
      }
    </StyledSpan>
  )
})

IconView.displayName = 'Icon'
