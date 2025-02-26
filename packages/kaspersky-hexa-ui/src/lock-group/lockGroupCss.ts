import { getFromProps } from '@helpers/getFromProps'
import { css } from 'styled-components'

import { LockGroupDesignTokens } from './types'

const fromProps = getFromProps<LockGroupDesignTokens>()

export const lockGroupCss = css`
  & {
    .lock-group {
      color: ${fromProps('color')};
      border-bottom: 1px solid ${fromProps('borderColor')};
      padding: 0 0 4px;
      display: flex;

      &--standalone {
        border-bottom: none;
      }
    }

    .lock-group__children {
      padding-top: 20px;
    }

    .lock-group__children--outlined {
      border: 1px solid ${fromProps('borderColor')};
      border-top: none;
      padding: 20px;
    }

    .lock-group-caption {
      flex: 1;
      display: grid;
      grid-template-columns: min-content 1fr;
      grid-gap: 10px;

      &__title {
        white-space: nowrap;
      }
    }

    .lock-group-control {
      display: flex;
    }

    .lock-group-control-icon {
      margin: 2px ${fromProps('horizontalMargin')} 0 0;
      & path {
        fill: ${fromProps('iconColor')};
      }
    }

    .lock-group-control-label {
      margin: 0 ${fromProps('horizontalMargin')} 0 0;
    }

    .information-text-icon {
      margin: -5px 0 0 ${fromProps('horizontalMargin')};
      & path {
        fill: ${fromProps('iconColor')};
      }
    }
  }
`
