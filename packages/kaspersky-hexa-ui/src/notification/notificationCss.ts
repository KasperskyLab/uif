import { getTextSizes } from '@design-system/tokens'
import { getFromProps } from '@helpers/getFromProps'
import styled, { css } from 'styled-components'

import { textLevels } from '@kaspersky/hexa-ui-core/typography/js'

import { NotificationCssConfig, NotificationModeArray } from './types'

const fromProps = getFromProps<NotificationCssConfig>()
const TOAST_WIDTH = 520

export const Box = styled.div`
  display: flex;
  gap: 20px;
`

export const Description = styled.div``

export const NotificationCss = css<{ cssConfig: NotificationCssConfig, noIcon?: boolean }>`
  .ant-notification-notice-message,
  .ant-notification-notice-description {
    ${getTextSizes(textLevels.BTR3)};
    gap: 32px;
  }

  .ant-notification-notice {
    width: ${TOAST_WIDTH}px;
    display: flex;
    flex-direction: row;
    align-items: start;
    padding: 14px 16px;
    gap: 8px;
    border-radius: 8px;
  }
  
  ${props => NotificationModeArray.map(mode => `
      .ant-notification-notice-${mode} {
        background: ${fromProps(`${mode}.background`)(props)};
        color: ${fromProps(`${mode}.color`)(props)};
        
        .ant-notification-notice-description {
          color: ${fromProps(`${mode}.color`)(props)};
          padding-right: 0px;
        }

        .ant-notification-notice-close {
          position: initial;
          height: 20px;
        }

        .toast-action-button {
          padding: 0;
          white-space: nowrap;

          &:after {
            background:  ${fromProps(`${mode}.separator`)(props)};
            margin-top: -1px;
          }
        }
      }
    `
    ).join('')
  }

  .toast-action-button {
    &:after {
      display: block;
      content: '';
      width: 1px;
      margin-left: 8px;
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
    align-items: start;
    margin-left: 0px;
    gap: 8px;
  }

  .ant-notification-notice-description {
    margin: 1px 0 -1px 0;
  }
  .ant-notification-notice-description, ${Description} {
    display: flex;
    align-items: start;
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
    height: 20px;
    line-height: 20px;
  }

  ${props => props.noIcon && `
    .ant-notification-notice-with-icon .ant-notification-notice-description {
      margin-left: 0px;
    }
    .ant-notification-notice-closable .ant-notification-notice-message {
      padding-right: 0px;
    }
    .ant-notification-notice-icon {
      display: none;
    }`
  }
`
