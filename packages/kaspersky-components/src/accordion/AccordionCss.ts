import { css } from 'styled-components'
import { getFromProps } from '../../helpers/getFromProps'
import { AccordionCssConfig } from './types'
import { SPACES } from '../../design-system/theme/themes/variables'

const fromProps = getFromProps<AccordionCssConfig>()

export const accordionPanelCss = css``

export const accordionCss = css`
&.ant-collapse {
  border-radius: ${fromProps('borderRadius')};
  border-color: ${fromProps('borderColor')};

  & > .ant-collapse-item {
    border-color: ${fromProps('borderColor')};

    &:first-child {
      border-radius: ${fromProps('upBorderRadius')};

      .ant-collapse-header {
        border-radius: ${fromProps('upBorderRadius')};
      }
    }

    &:last-child {
      border-radius: ${fromProps('downBorderRadius')};

      .ant-collapse-header {
        border-radius: ${fromProps('downBorderRadius')};
      }
    }

    &-active {
      &:last-child {
        .ant-collapse-header {
          border-radius: 0;
        }

        .ant-collapse-content {
          border-radius: ${fromProps('downBorderRadius')};
        }
      }
    }

    .ant-collapse-header {
        padding: ${SPACES[4]}px ${SPACES[8]}px;
        background: ${fromProps('default.titleBackground')};
        border-color: ${fromProps('borderColor')};
        
        .ant-collapse-arrow {
          transition: transform .3s;
        }
    }

    .ant-collapse-content {
      border-color: ${fromProps('borderColor')};
      padding: ${SPACES[4]}px ${SPACES[8]}px;
      background: ${fromProps('default.contentBackground')};
    }
  }

  &.ant-collapse-icon-position-left {
    .ant-collapse-item-active {
      .ant-collapse-header {
        .ant-collapse-arrow {
          transform: rotate(180deg);
        }
      }
    }
  }

  &.ant-collapse-icon-position-right {
    .ant-collapse-item-active {
      .ant-collapse-header {
        .ant-collapse-arrow {
          transform: rotate(180deg) translateY(50%);
        }
      }
    }
  }
}
`
