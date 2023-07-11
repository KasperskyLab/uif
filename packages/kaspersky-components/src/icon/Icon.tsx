import React, { forwardRef, useContext, ForwardedRef } from 'react'
import styled from 'styled-components'
import { Context } from '@helpers/context'
import * as IconsMicro from '@icons/micro'
import * as Icons16 from '@icons/16'
import * as Icons24 from '@icons/24'
import * as Icons48 from '@icons/48'
import { merge } from 'lodash'
import { IconProps } from './types'
import { useThemedIcon } from './useThemeIcon'
import { wrapperSpanCss } from '@src/icon/IconCss'

export const DefaultIcons = {
  extraSmall: IconsMicro,
  small: Icons16,
  medium: Icons24,
  large: Icons48
}

const SpanWrapper = (props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>) => {
  return <span {...props} />
}

export const StyledSpan = styled(SpanWrapper).withConfig({
  shouldForwardProp: prop => !['cssConfig'].includes(prop)
})`${wrapperSpanCss}`

export const Icon = (rawProps: IconProps): JSX.Element => {
  const props = useThemedIcon(rawProps)
  return <IconView {...props} />
}

export const IconView = forwardRef<HTMLSpanElement, IconProps>((props: IconProps, ref: ForwardedRef<HTMLSpanElement>): JSX.Element => {
  const { size, klId, color, onClick, name, cssConfig, ...rest } = props
  const svgCursor = onClick ? 'pointer' : ''
  const { icons: ContextIcons } = useContext(Context)
  const Icons: { [size: string]: { [name: string]: React.ComponentType<IconProps> } } = merge(DefaultIcons, ContextIcons)
  const TagName = Icons[size][name] ?? (() => null)
  return (
    <StyledSpan
      role="img"
      style={{ cursor: svgCursor }}
      color={color}
      kl-id={klId}
      cssConfig={cssConfig}
      onClick={onClick}
      {...rest}
    >
      <TagName size={size} name={name} />
    </StyledSpan>
  )
})
