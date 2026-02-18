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
      align-items: center;
      gap: var(--spacing--gap_dependent)
    }

    .lock-group-control-icon {
      & path {
        fill: ${fromProps('iconColor')};
      }
    }

    .information-text-icon {
      & path {
        fill: ${fromProps('iconColor')};
      }
    }
    
    .lock-group-status-icon {
      margin-right: var(--spacing--gap_related);
    }
  }
`
