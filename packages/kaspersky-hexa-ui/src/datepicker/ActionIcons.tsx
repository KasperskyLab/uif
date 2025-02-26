import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { shouldForwardProp } from '@helpers/shouldForwardProp'
import { ActionButtonCustomProps, ActionButtonProps, useThemedActionButton } from '@src/action-button'
import ActionButtonCSS from '@src/action-button/ActionButtonCSS'
import { ActionButtonMode, ActionButtonSize } from '@src/action-button/types'
import React from 'react'
import styled from 'styled-components'

import {
  ArrowDoubleLeft,
  ArrowDoubleRight,
  ArrowLeftMini,
  ArrowRightMini
} from '@kaspersky/icons/16'

const StyledArrowDoubleRightIcon = styled(ArrowDoubleRight).withConfig({ shouldForwardProp })`
  ${ActionButtonCSS}
`
const StyledArrowDoubleLeftIcon = styled(ArrowDoubleLeft).withConfig({ shouldForwardProp })`
  ${ActionButtonCSS}
`
const StyledArrowRightMiniIcon = styled(ArrowRightMini).withConfig({ shouldForwardProp })`
  ${ActionButtonCSS}
`
const StyledArrowLeftMiniIcon = styled(ArrowLeftMini).withConfig({ shouldForwardProp })`
  ${ActionButtonCSS}
`

const IconsDefaultProps = {
  cssConfig: {},
  interactive: true,
  mode: 'ghost' as ActionButtonMode,
  size: 'large' as ActionButtonSize
}

export const ArrowDoubleRightIcon = (rawProps: ActionButtonProps): JSX.Element => {
  const themedProps = useThemedActionButton({ ...rawProps, ...IconsDefaultProps })
  const props = useTestAttribute(themedProps)
  return <StyledArrowDoubleRightIcon {...props as ActionButtonCustomProps} cssConfig={themedProps.cssConfig} />
}

export const ArrowDoubleLeftIcon = (rawProps: ActionButtonProps): JSX.Element => {
  const themedProps = useThemedActionButton({ ...rawProps, ...IconsDefaultProps })
  const props = useTestAttribute(themedProps)
  return <StyledArrowDoubleLeftIcon {...props as ActionButtonCustomProps} cssConfig={themedProps.cssConfig} />
}

export const ArrowRightMiniIcon = (rawProps: ActionButtonProps): JSX.Element => {
  const themedProps = useThemedActionButton({ ...rawProps, ...IconsDefaultProps })
  const props = useTestAttribute(themedProps)
  return <StyledArrowRightMiniIcon {...props as ActionButtonCustomProps} cssConfig={themedProps.cssConfig} />
}

export const ArrowLeftMiniIcon = (rawProps: ActionButtonProps): JSX.Element => {
  const themedProps = useThemedActionButton({ ...rawProps, ...IconsDefaultProps })
  const props = useTestAttribute(themedProps)
  return <StyledArrowLeftMiniIcon {...props as ActionButtonCustomProps} cssConfig={themedProps.cssConfig} />
}
