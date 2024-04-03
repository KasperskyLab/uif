import styled, { css } from 'styled-components'
import { BORDER_RADIUS, SPACES } from '../../design-system/theme/themes/variables'
import { getTextSizes, textLevels } from '../../design-system/tokens'
import { getFromProps } from '../../helpers/getFromProps'
import { NotificationCssConfig, NotificationMode, NotificationModeArray } from './types'

const fromProps = getFromProps<NotificationCssConfig>()
const TOAST_WIDTH = 520

export const Box = styled.div`
  display: flex;
  gap: ${SPACES[10]}px;
`

export const NotificationCss = css`
  .ant-notification-notice-message,
  .ant-notification-notice-description {
    ${getTextSizes(textLevels.BTR3)};
    gap: ${SPACES[16]}px;
  }

  .ant-notification-notice {
    width: ${TOAST_WIDTH}px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: ${SPACES[7]}px ${SPACES[8]}px;
    gap: ${SPACES[4]}px;
    border-radius: ${BORDER_RADIUS[4]}px;
  }
  
  ${(props: { cssConfig:NotificationCssConfig, title?: string, noIcon?: boolean }) => {
    const modes:NotificationMode[] = [...NotificationModeArray]

    return modes.map(mode => {
      return `
      .ant-notification-notice-${mode} {
        background: ${fromProps(`${mode}.background`)(props)};
        color: ${fromProps(`${mode}.color`)(props)};
        
        .ant-notification-notice-description {
          color: ${fromProps(`${mode}.color`)(props)};
          padding-right: 0px;
        }

        .ant-notification-notice-close {
          position: initial;
          height: ${SPACES[10]}px;
        }

        .toast-action-button {
          padding: 0;
          white-space: nowrap;

          &:after {
            background:  ${fromProps(`${mode}.separator`)(props)};
          }
        }
      }
    `
    }).join('')
  }}

  .toast-action-button {
    &:after {
      display: block;
      content: '';
      width: 1px;
      margin-left: ${SPACES[4]}px;
      height: 20px;
    }

    .kl-action-button-icon {
      display: none;
    }
  }

  .ant-notification-notice-content {
    width: 100%;
  }

  .ant-notification-notice-with-icon {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 0px;
    gap: ${SPACES[4]}px;
  }

  .ant-notification-notice-description {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    margin-left: 0px;
  }

  .ant-notification-notice-message {
    display: none;
  }

  .ant-notification-notice-icon {
    position: relative;
    margin-left: 0px;
    height: ${SPACES[10]}px;
    line-height: ${SPACES[10]}px;
  }

  ${({ noIcon }) => {
  return (
    noIcon && css`
    .ant-notification-notice-with-icon .ant-notification-notice-description {
      margin-left: 0px;
    }
    .ant-notification-notice-closable .ant-notification-notice-message {
      padding-right: 0px;
    }
    .ant-notification-notice-icon {
      display: none;
    }`
    )
  }}
`
