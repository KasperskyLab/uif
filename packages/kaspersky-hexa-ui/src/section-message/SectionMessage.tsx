import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { showDeprecationWarn } from '@helpers/showDeprecationWarn'
import { ActionButton } from '@src/action-button'
import { Link } from '@src/link'
import { Space } from '@src/space'
import { Text } from '@src/typography'
import cn from 'classnames'
import React, { FC, useState } from 'react'
import styled from 'styled-components'

import { ArrowDown1, StatusDangerOutline1, StatusInfoOutline, StatusOkOutline, StatusWarningOutline } from '@kaspersky/hexa-ui-icons/16'

import { IconStyled, sectionMessageCss, SpaceBox } from './sectionMessageCss'
import { SectionMessageMode, sectionMessageModes, SectionMessageProps, SectionMessageViewProps } from './types'
import { useThemedSectionMessage } from './useThemedSectionMessage'

const IconInfoMap: { [key in SectionMessageMode]: FC } = {
  error: () => <StatusDangerOutline1 data-component-id="icon-error" />,
  warning: () => <StatusWarningOutline data-component-id="icon-warning" />,
  success: () => <StatusOkOutline data-component-id="icon-success" />,
  info: () => <StatusInfoOutline data-component-id="icon-info"/>
}

const StyledSectionMessage = styled.div.withConfig({
  shouldForwardProp: (prop) => !['cssConfig', 'componentId'].includes(prop)
})`
  ${sectionMessageCss}
`

export const SectionMessage: FC<SectionMessageProps> = (rawProps: SectionMessageProps) => {
  const { mode = 'info', ...notDeprecatedProps } = rawProps

  let notDeprecatedMode = mode
  if (!sectionMessageModes.includes(mode)) {
    notDeprecatedMode = 'info'
    showDeprecationWarn('mode', mode)
  }

  const props = useThemedSectionMessage({ ...notDeprecatedProps, mode: notDeprecatedMode })
  const { testAttributes } = useTestAttribute(props)
  return <SectionMessageView testAttributes={testAttributes} {...props} />
}

const SectionMessageView: FC<SectionMessageViewProps> = (props: SectionMessageViewProps) => {
  const { mode, title, children, cssConfig } = props
  const { klId, testId, actions, expandable, closable = true, testAttributes, ...forwardedProps } = props

  const [visibility, setVisibility] = useState(true)
  const [visibilityContent, setVisibilityContent] = useState(true)

  const IconComponent = IconInfoMap[mode as SectionMessageMode]

  const closeNotification = () => {
    if (props.onClose) props.onClose()
    setVisibility(false)
  }

  return (
    <>
      {visibility && <StyledSectionMessage {...testAttributes} {...forwardedProps}>
        <IconStyled cssConfig={cssConfig}>
          <IconComponent/>
        </IconStyled>
        <SpaceBox
          gap={8}
          direction="vertical"
          align="flex-start"
        >
          {title && (
            <Text testId="alert-title" klId="alert-title" type="H6">
              {title}
            </Text>
          )}
          {visibilityContent && (children || actions) && <SpaceBox
            gap={16}
            direction="vertical"
            align="flex-start"
          >
            {children}
            {actions && (
              <Space gap={16} direction="horizontal">
                {actions.FIRST_ACTION && (
                  <Link
                    {...actions.FIRST_ACTION}
                  >
                    {actions.FIRST_ACTION.text}
                  </Link>
                )}
                {actions.SECOND_ACTION && (
                  <Link
                    {...actions.SECOND_ACTION}
                  >
                    {actions.SECOND_ACTION.text}
                  </Link>
                )}
              </Space>
            )}
          </SpaceBox>
          }
        </SpaceBox>
        {expandable && (
          <ActionButton
            icon={<ArrowDown1 className={cn(!visibilityContent && 'rotated-icon')} />}
            onClick={() => setVisibilityContent(!visibilityContent)}
            klId={`${klId}-section-message-expansion-icon`}
            testId={`${testId}-section-message-expansion-icon`}
          />
        )}
        {closable && (
          <div className="hexa-ui-section-message-close-container">
            <ActionButton
              onClick={() => closeNotification()}
              klId={`${klId}-section-message-close-icon`}
              testId={`${testId}-section-message-close-icon`}
              size="large"
            />
          </div>
        )}
      </StyledSectionMessage>
    }
    </>)
}

SectionMessage.displayName = 'SectionMessage'
