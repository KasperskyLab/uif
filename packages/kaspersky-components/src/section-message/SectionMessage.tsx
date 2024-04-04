import React, { useState, FC } from 'react'
import { SectionMessageProps, SectionMessageMode, SectionMessageViewProps } from './types'
import styled from 'styled-components'
import { sectionMessageCss, IconStyled, SpaceBox } from './sectionMessageCss'
import { useThemedSectionMessage } from './useThemedSectionMessage'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { StatusInfoOutline, StatusOkOutline, StatusWarningOutline, ArrowDown1 } from '@kaspersky/icons/16'
import { ActionButton } from '@src/action-button'
import { Space } from '@src/space'
import { Link } from '@src/link'
import { Text } from '@src/typography/text'
import cn from 'classnames'

const IconInfoMap: { [key in SectionMessageMode]: FC } = {
  error: () => <StatusWarningOutline data-component-id='icon-error' />,
  warning: () => <StatusWarningOutline data-component-id='icon-warning' />,
  success: () => <StatusOkOutline data-component-id='icon-success' />,
  info: () => <StatusInfoOutline data-component-id='icon-info'/>
}

const StyledSectionMessage = styled.div.withConfig({
  shouldForwardProp: (prop) => !['cssConfig', 'componentId'].includes(prop)
})`
  ${sectionMessageCss}
`

export const SectionMessage: FC<SectionMessageProps> = (rawProps: SectionMessageProps) => {
  const { type, mode, ...notDeprecatedProps } = rawProps
  let notDeprecatedMode = mode
  if (mode === 'infoAccent') {
    // ToDo: move warn to helper @DeprecatedWarn
    console.warn('Deprecated "mode" prop value "infoAccent" use "info" instead')
    notDeprecatedMode = 'info'
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
          size={8}
          direction={'vertical'}
          align="flex-start"
        >
          {title && (
            <Text testId="alert-title" klId="alert-title" type="H6">
              {title}
            </Text>
          )}
          {visibilityContent && <SpaceBox
            size={16}
            direction={'vertical'}
            align="flex-start"
          >
            {children}
            {actions && (
              <Space size={16} direction="horizontal">
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
          <ActionButton
            onClick={() => closeNotification()}
            klId={`${klId}-section-message-close-icon`}
            testId={`${testId}-section-message-close-icon`}
          />
        )}
      </StyledSectionMessage>
    }
    </>)
}

SectionMessage.displayName = 'SectionMessage'
