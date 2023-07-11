import styled, { css } from 'styled-components'
import { BORDER_RADIUS, SPACES } from '../../design-system/theme/themes/variables'
import { getTextSizes, textLevels } from '../../design-system/tokens'
import { getFromProps } from '../../helpers/getFromProps'
import { NotificationCssConfig } from './types'
import { CloseOutlined } from '@ant-design/icons'

const fromProps = getFromProps<NotificationCssConfig>()

export const CloseBox = styled(CloseOutlined)`
  svg {
    width: ${SPACES[6]}px;
    height: ${SPACES[6]}px;
  }
`

export const Box = styled.div`
  display: flex;
  gap: ${SPACES[10]}px;
`

export const NotificationCss = css`
  .ant-notification-notice-message,
  .ant-notification-notice-description {
    ${getTextSizes(textLevels.BTR3)};
    gap: ${SPACES[16]}px;
    color: ${({ theme }) =>
    theme.colors.fixedNeutralColors.fixedneutralcolor_primarywhite};
  }
  .ant-notification-notice-close {
    color: ${fromProps('iconColor')};
    position: initial;
  }

  .ant-notification-notice {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: ${SPACES[7]}px ${SPACES[9]}px ${SPACES[7]}px ${SPACES[7]}px;
    gap: ${SPACES[4]}px;
    border-radius: ${BORDER_RADIUS[2]}px;
    background: ${fromProps('normal.background')};
    color: ${fromProps('normal.color')};
  }

  .ant-notification-notice-content {
    width: 100%;
  }

  .ant-notification-notice-with-icon {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 0px;
    gap: ${SPACES[5]}px;
  }
  .ant-notification-notice-description {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    margin-left: 0px;
  }


  .ant-notification-notice-message {
    margin-left: 0px;
    ${(props: { cssConfig:NotificationCssConfig, title?: string, noIcon?: boolean }) => {
    return (
      props.title &&
              css`
                margin-left: ${!props.noIcon ? `${SPACES[16]}px` : '0px'};
                margin-right: 0px;
                margin-bottom: 0px;
                margin-top: 0px;
              `
    )
  }}}
  
    .ant-notification-notice-with-icon .ant-notification-notice-description {
    ${({ noIcon }) => {
    return (
      noIcon &&
        css`
          margin-left: 0px;
        `
    )
  }}
  }

  .ant-notification-notice-closable .ant-notification-notice-message {
    ${({ noIcon }) => {
    return (
      noIcon &&
        css`
          padding-right: 0px;
        `
    )
  }}
  }

  .ant-notification-notice-icon {
    font-size: ${SPACES[10]}px;

    ${({ noIcon }) => {
    return (
      noIcon &&
        css`
          position: absolute;
          display: none;
        `
    )
  }}
  }

  color: ${fromProps('iconColor')};
`
