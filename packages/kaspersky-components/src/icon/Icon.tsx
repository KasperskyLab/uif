import React, { forwardRef, useContext, ForwardedRef } from 'react'
import styled from 'styled-components'
import { Context } from '@helpers/context'
import Icons8Pack from '@kaspersky/icons/8'
import Icons12Pack from '@kaspersky/icons/12'
import Icons16Pack, { StatusQuestionOutline } from '@kaspersky/icons/16'
import Icons24Pack from '@kaspersky/icons/24'
import Icons48Pack from '@kaspersky/icons/48'
import { IconProps, IconPackSizes, IconSizes } from './types'
import { useThemedIcon } from './useThemedIcon'
import { wrapperSpanCss } from '@src/icon/IconCss'
import { iconsMapper, MappedObjectInterface } from './iconsMapper'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'

const AllIcons = {
  Icons8Pack,
  Icons12Pack,
  Icons16Pack,
  Icons24Pack,
  Icons48Pack
}

export type IconsPackageNames = keyof typeof Icons8Pack
  | keyof typeof Icons12Pack
  | keyof typeof Icons16Pack
  | keyof typeof Icons24Pack
  | keyof typeof Icons48Pack

export const Icon = (rawProps: IconProps): JSX.Element => {
  const themedProps = useThemedIcon(rawProps)
  const props = useTestAttribute(themedProps)
  return <IconView {...props} />
}

const SpanWrapper = (props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>) => {
  return <span {...props} />
}

export const StyledSpan = styled(SpanWrapper).withConfig({
  shouldForwardProp: prop => !['cssConfig'].includes(prop)
})`${wrapperSpanCss}`

function getPackageIcon (size: IconSizes | IconPackSizes, key: IconsPackageNames) {
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

function getMapperIconObject (size: IconSizes, name: string): MappedObjectInterface {
  return iconsMapper?.[size]?.[name] ?? {
    size,
    key: name
  }
}

const IconView = forwardRef<HTMLSpanElement, IconProps>((props: IconProps, ref: ForwardedRef<HTMLSpanElement>): JSX.Element => {
  const { size, testId, klId, color, onClick, name, cssConfig, themedColor, testAttributes, ...rest } = props
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
      console.warn(`@kaspersky/icons: did not found ${props.name} in size ${props.size}`)
      IconToDisplay = StatusQuestionOutline
      colorFromMapper = 'pink'
    }
  }
  return (
    <StyledSpan
      role="img"
      style={{ cursor: svgCursor }}
      color={color}
      cssConfig={cssConfig}
      onClick={onClick}
      ref={ref}
      {...testAttributes}
      {...rest}
    >
      {TagName
        ? <TagName size={size} name={name} />
        : <IconToDisplay color={colorFromMapper ?? color ?? themedColor}/>
      }
        </StyledSpan>
  )
})

IconView.displayName = 'Icon'
