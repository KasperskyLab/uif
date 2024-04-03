import React, { PropsWithChildren, ReactNode, FC } from 'react'
import styled from 'styled-components'
import { Tooltip } from 'antd'
import { LockOutlined, UnlockOutlined, InfoCircleOutlined } from '@ant-design/icons'
import { Text } from '../typography'
import { Toggle } from '../toggle'
import { shouldForwardProp } from '@helpers/shouldForwardProp'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'

const StyledContainer = styled.div.withConfig({ shouldForwardProp })`
  --lock-icon-color: rgba(13, 13, 21, 1);
  --lock-border-color: rgba(29, 54, 83, 0.17);

  .night-blue-theme & {
    --lock-icon-color: var(--text-color);
  }

  .lock-group {
    border-bottom: 1px solid var(--lock-border-color);
    margin: 0 0 20px;
    padding: 0 0 4px;
    display: flex;
  }

  .lock-group-caption {
    flex: 1;
  }

  .lock-group-control {
    display: flex;
  }

  .lock-group-control-icon {
    margin: 2px .25rem 0 0;
    & path {
      fill: var(--lock-icon-color);
    }
  }

  .lock-group-control-label {
    margin: 0 15px 0 3px;
  }

  .information-text-icon {
    color: rgb(81, 174, 226);
    cursor: help;
    margin-left: 8px
  }
`

interface ILockGroupCaptionProps {
  title?: ReactNode
}

const LockGroupCaption = ({ title }: ILockGroupCaptionProps) => {
  return <div className='lock-group-caption'>
    {title && <Text type='BTM3'>{title}</Text>}
  </div>
}

interface ILockIconProps {
  isLockClosed?: boolean
}

const LockIcon = ({ isLockClosed }: ILockIconProps) => {
  return isLockClosed
    ? <LockOutlined className='lock-group-control-icon'/>
    : <UnlockOutlined className='lock-group-control-icon'/>
}

interface ILockStatusProps {
  statusText?: ReactNode
}

const LockStatus = ({ statusText }: ILockStatusProps) => {
  return (
    <Text type='BTM3' className='lock-group-control-label'>{statusText}</Text>
  )
}

interface IInformationIcon {
  informationText?: string | ReactNode | FC
}

const InformationIcon = ({ informationText }: IInformationIcon) => {
  const parsedInfo = typeof informationText === 'string'
    ? <Text>{informationText}</Text>
    : informationText

  // for exclude color error
  const color = '#FFFFFF'
  return <Tooltip title={parsedInfo} placement="bottomLeft" color={color}>
    <InfoCircleOutlined className='information-text-icon'/>
  </Tooltip>
}

export declare type LockChangeHandler = (checked: boolean) => void

interface ILockGroupControlProps {
  informationText?: string | ReactNode | FC,
  isHideLock?: boolean,
  isLockClosed?: boolean,
  isLockDisabled?: boolean,
  isGroupDisabled?: boolean,
  statusText?: ReactNode,
  onLockChange?: LockChangeHandler
}

const LockGroupControl = ({
  isHideLock,
  isLockClosed,
  informationText,
  statusText,
  isLockDisabled,
  onLockChange
}: PropsWithChildren<ILockGroupControlProps>) => {
  return <div className='lock-group-control'>
    {!isHideLock && <LockIcon isLockClosed={isLockClosed} />}
    <LockStatus statusText={statusText}/>
    <Toggle size='small' disabled={isLockDisabled} onChange={onLockChange} checked={isLockClosed}/>
    {informationText && <InformationIcon informationText={informationText} />}
  </div>
}

export interface ILockGroupProps {
  className?: string,
  informationText?: string | ReactNode | FC,
  isHideLock?: boolean,
  isHideControl?: boolean,
  isLockClosed?: boolean,
  isLockDisabled?: boolean,
  isGroupDisabled?: boolean,
  /** @deprecated Use testId instead */
  klId?: string,
  onLockChange?: LockChangeHandler,
  statusText?: ReactNode,
  testId?: string,
  title?: ReactNode
}

export const LockGroup = ({
  children,
  informationText,
  isHideLock,
  isHideControl,
  isLockClosed,
  isLockDisabled,
  isGroupDisabled,
  onLockChange,
  statusText,
  title,
  ...restProps
}: PropsWithChildren<ILockGroupProps> & React.ComponentProps<typeof StyledContainer>) => {
  const { testAttributes, ...rest } = useTestAttribute(restProps)
  return <StyledContainer
    {...testAttributes}
    {...rest}
  >
    <div className='lock-group'>
      <LockGroupCaption title={title}/>
      {!isHideControl && <LockGroupControl
        isHideLock={isHideLock}
        informationText={informationText}
        isLockClosed={isLockClosed}
        isLockDisabled={isLockDisabled}
        statusText={statusText}
        onLockChange={onLockChange}
      />}
    </div>
    <div>
      {isGroupDisabled
        ? React.Children.map(children, (child) => {
            return React.isValidElement(child)
              // @ts-ignore
              ? React.cloneElement(child, { disabled: true })
              : child
          })
        : children}
    </div>
  </StyledContainer>
}
