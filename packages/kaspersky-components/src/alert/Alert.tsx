import React from 'react'
import { AlertProps, AlertMode, AlertCssConfig } from '@src/alert/types'
import styled from 'styled-components'
import { alertCss, IconStyled, SpaceBox } from './alertCss'
import { useThemedAlert } from './useThemeAlert'
import {
  CheckCircleOutlined,
  WarningOutlined,
  InfoCircleOutlined
} from '@ant-design/icons'
import { Button } from '@src/button'
import { Space } from '@src/space'
import { Link } from '@src/link'
import { Text } from '@src/typography/text'

export const IconMap: { [key in AlertMode]: React.FC } = {
  info: () => <InfoCircleOutlined data-component-id="icon-info" />,
  infoAccent: () => <InfoCircleOutlined data-component-id="icon-info-accent" />,
  success: () => <CheckCircleOutlined data-component-id="icon-success" />,
  error: () => <InfoCircleOutlined data-component-id="icon-error" />,
  warning: () => <WarningOutlined data-component-id="icon-warning" />
}

const StyledAlert = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    !['cssConfig', 'noIcon', 'componentId'].includes(prop)
})`
  ${alertCss}
`

export const Alert = (rawProps: AlertProps): JSX.Element => {
  const props = useThemedAlert(rawProps)
  return <AlertView data-component-id={props.componentId} {...props} />
}

export const AlertView: React.FC<
AlertProps & {
  cssConfig: AlertCssConfig
}
> = (props): JSX.Element => {
  const { mode, noIcon, type, title, children, actions, cssConfig } = props
  const IconComponent = IconMap[mode]

  return (
    <StyledAlert {...props}>
      {!noIcon && (
        <IconStyled mode={mode} cssConfig={cssConfig}>
          <IconComponent />
        </IconStyled>
      )}
      <SpaceBox
        size={8}
        direction={type === 'alert' ? 'horizontal' : 'vertical'}
        align="flex-start"
      >
        {type !== 'alert' && title && (
          <Text klId="alert-title" type="BTM2">
            {title}
          </Text>
        )}

        <SpaceBox
          size={24}
          direction={type === 'alert' ? 'horizontal' : 'vertical'}
          align="flex-start"
        >
          {children}

          {actions && (
            <Space size={8} direction="horizontal">
              {type === 'sectionMessage' && (
                <>
                  {actions.FIRST_ACTION && (
                    <Button
                      mode="primaryBlack"
                      size="medium"
                      {...actions.FIRST_ACTION}
                    >
                      {actions.FIRST_ACTION.text}
                    </Button>
                  )}
                  {actions.SECOND_ACTION && (
                    <Button
                      mode="tertiary"
                      size="medium"
                      {...actions.SECOND_ACTION}
                    >
                      {actions.SECOND_ACTION.text}
                    </Button>
                  )}
                </>
              )}
              {type === 'alert' && (
                <>
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
                </>
              )}
            </Space>
          )}
        </SpaceBox>
      </SpaceBox>
    </StyledAlert>
  )
}

Alert.displayName = 'Alert'
