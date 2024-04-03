import React, { useState, FC } from 'react'
import { AlertProps, AlertMode, AlertViewProps, AlertType } from './types'
import styled from 'styled-components'
import { alertCss, IconStyled, SpaceBox } from './alertCss'
import { useThemedAlert } from './useThemedAlert'
import { StatusInfoOutline, StatusOkOutline, StatusWarningOutline } from '@kaspersky/icons/16'
import { Space } from '@src/space'
import { ActionButton } from '@src/action-button'
import { Link } from '@src/link'
import cn from 'classnames'
import { SectionMessage } from '@src/section-message'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'

const IconMap: { [key in AlertMode]: React.FC } = {
  error: () => <StatusWarningOutline data-testid="alert-error-icon" data-component-id="icon-error" />,
  warning: () => <StatusWarningOutline data-testid="alert-warning-icon" data-component-id="icon-warning" />,
  success: () => <StatusOkOutline data-testid="alert-success-icon" data-component-id="icon-success" />,
  info: () => <StatusInfoOutline data-testid="alert-info-icon" data-component-id="icon-info" />
}

const StyledAlert = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    !['cssConfig', 'componentId'].includes(prop)
})`
  ${alertCss}
`

export const Alert = (rawProps: AlertProps & {type?: AlertType}): JSX.Element => {
  const { type, mode, ...notDeprecatedProps } = rawProps
  let notDeprecatedMode = mode
  if (type === 'sectionMessage') {
    // ToDo: move warn to helper @DeprecatedWarn
    console.warn('Deprecated "type" prop value "sectionMessage" use component SectionMessage instead')
    return <SectionMessage {...rawProps}></SectionMessage>
  }
  if (mode === 'infoAccent') {
    // ToDo: move warn to helper @DeprecatedWarn
    console.warn('Deprecated "mode" prop value "infoAccent" use "info" instead')
    notDeprecatedMode = 'info'
  }

  const themedProps = useThemedAlert({ ...notDeprecatedProps, mode: notDeprecatedMode })
  const props = useTestAttribute(themedProps)
  return <AlertView {...props} />
}

const AlertView: FC<AlertViewProps> = (props: AlertViewProps) => {
  const { mode, closable, children, cssConfig } = props
  const { actions, testAttributes, ...forwardedProps } = props
  const [visibility, setVisibility] = useState(true)
  const IconComponent = IconMap[mode as AlertMode]

  const closeNotification = () => {
    if (props.onClose) props.onClose()
    setVisibility(false)
  }

  if (!visibility) return null

  return (
    <StyledAlert {...testAttributes} {...forwardedProps}>
      <IconStyled cssConfig={cssConfig}>
        <IconComponent/>
      </IconStyled>
      <SpaceBox
        size={8}
        direction={'horizontal'}
        align="flex-start"
      >
        <SpaceBox
          size={24}
          direction={'horizontal'}
          align="flex-start"
        >
          {children}
          {actions && (
            <Space size={8} className={cn(closable && 'alert-action-separator')} direction="horizontal">
              {actions.FIRST_ACTION && (
                <Link {...actions.FIRST_ACTION}>
                  {actions.FIRST_ACTION.text}
                </Link>
              )}
              {actions.SECOND_ACTION && (
                <Link {...actions.SECOND_ACTION}>
                  {actions.SECOND_ACTION.text}
                </Link>
              )}
            </Space>
          )}
        </SpaceBox>
        {closable && <ActionButton size={'large'} onClick={() => closeNotification()}/>}
      </SpaceBox>
    </StyledAlert>
  )
}

Alert.displayName = 'Alert'
