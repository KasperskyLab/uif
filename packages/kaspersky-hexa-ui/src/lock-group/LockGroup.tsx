import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { shouldForwardProp } from '@helpers/shouldForwardProp'
import classnames from 'classnames'
import React, { ReactElement } from 'react'
import styled from 'styled-components'

import { Lock2, StatusInfoOutline, StatusWarningOutline, Unlock2 } from '@kaspersky/icons/16'

import { ActionButton } from '../action-button'
import { Popover } from '../popover'
import { Tag } from '../tag'
import { Toggle } from '../toggle'
import { Text } from '../typography'

import { lockGroupCss } from './lockGroupCss'
import { ILockIconProps, LockGroupProps } from './types'
import { useThemedLockGroup } from './useThemedLockGroup'

const StyledContainer = styled.div.withConfig({ shouldForwardProp })`
  ${lockGroupCss}
`

const LockIcon = ({ isLockStatusNotDefined, isLockClosed }: ILockIconProps) => {
  if (isLockStatusNotDefined) {
    return <StatusWarningOutline className="lock-group-control-icon"/>
  }
  return isLockClosed
    ? <Lock2 className="lock-group-control-icon"/>
    : <Unlock2 className="lock-group-control-icon"/>
}

export const LockGroup = (rawProps: LockGroupProps & React.ComponentProps<typeof StyledContainer>): ReactElement => {
  const themedProps = useThemedLockGroup(rawProps)
  const props = useTestAttribute(themedProps)

  const {
    children,
    informationText,
    isHideLock,
    isHideControl,
    isLockClosed,
    isLockStatusNotDefined = false,
    isLockDisabled,
    isGroupDisabled,
    isStandalone = false,
    onLockChange,
    statusText,
    title,
    titleLevel = 'H6',
    titleTags = [],
    isChildrenOutlined = false,
    testAttributes,
    ...restProps
  } = props

  const generateTestId = (prefix: string) => {
    if (rawProps.klId || rawProps.testId) {
      return {
        'data-testid': rawProps.testId && prefix + rawProps.testId,
        'kl-id': rawProps.klId && prefix + rawProps.klId
      }
    }

    return {}
  }

  const lockGroupClass = classnames({
    'lock-group': true,
    'lock-group--standalone': isStandalone
  })

  const lockGroupChildrenClass = classnames({
    'lock-group__children': true,
    'lock-group__children--outlined': isChildrenOutlined
  })

  return <StyledContainer
    {...testAttributes}
    {...restProps}
  >
    <div className={lockGroupClass} {...generateTestId('lock-group-')}>
      {!isStandalone && (
        <div className="lock-group-caption">
          {title && (
            <div className="lock-group-caption__title">
              <Text {...generateTestId('lock-group-title-')} type={titleLevel}>{title}</Text>
            </div>
          )}
          {titleTags && titleTags.length > 0 && (
            <div className="lock-group-caption__tags">
              {titleTags.map((titleTag, index) => (
                <Tag key={index} mode="neutral" outlined>{titleTag}</Tag>
              ))}
            </div>
          )}
        </div>
      )}
      {!isHideControl && (
        <div className="lock-group-control" {...generateTestId('lock-group-control-')}>
          {!isHideLock && <LockIcon isLockClosed={isLockClosed} isLockStatusNotDefined={isLockStatusNotDefined} />}
          {statusText && (
            <Text
              klId = {rawProps.klId && 'lock-group-status-text-' + rawProps.klId}
              testId = {rawProps.testId && 'lock-group-status-text-' + rawProps.testId}
              type="BTR3"
              className="lock-group-control-label">
                {statusText}
            </Text>
          )}
          <Toggle
            klId = {rawProps.klId && 'lock-group-toggle-' + rawProps.klId}
            testId = {rawProps.testId && 'lock-group-toggle-' + rawProps.testId}
            disabled={isLockDisabled || isLockStatusNotDefined}
            onChange={onLockChange}
            checked={isLockClosed}/>
          {informationText && (
            <Popover placement="bottomLeft" content={informationText}>
              <ActionButton interactive={false} icon={<StatusInfoOutline className="information-text-icon" />} />
            </Popover>
          )}
        </div>
      )}
    </div>
    {!isStandalone && (
      <div className={lockGroupChildrenClass}>
        {isGroupDisabled
          ? React.Children.map(children, (child) => {
              return React.isValidElement(child)
                // @ts-ignore
                ? React.cloneElement(child, { disabled: true })
                : child
            })
          : children}
      </div>
    )}
  </StyledContainer>
}
