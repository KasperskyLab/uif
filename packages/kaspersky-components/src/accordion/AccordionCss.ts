import { css } from 'styled-components'
import { getFromProps } from '@helpers/getFromProps'
import { AccordionCssConfig, AccordionPanelCssConfig } from './types'
import { BORDER_RADIUS, SPACES } from '@design-system/theme/themes/variables'

const fromPanelProps = getFromProps<AccordionPanelCssConfig>()

export const accordionPanelCss = css<{ cssConfig: AccordionPanelCssConfig }>`
  .accordion-header-title {
    font-family: ${fromPanelProps('fontFamily')};
    font-size: ${fromPanelProps('fontSize')};
    line-height: ${fromPanelProps('lineHeight')};
    font-style: ${fromPanelProps('fontStyle')};
    font-weight: ${fromPanelProps('fontWeight')};
    min-height: ${fromPanelProps('lineHeight')};
  }

  .accordion-header-container {
    display: flex;
    align-items: center;
    height: ${fromPanelProps('lineHeight')};
  }

  .ant-collapse-header > div:first-child {
    position absolute;
    height: ${fromPanelProps('lineHeight')};
  }
`

const fromProps = getFromProps<AccordionCssConfig>()

export const accordionCss = css<{ cssConfig: AccordionCssConfig }>`
  &.ant-collapse .ant-collapse-item + .ant-collapse-item {
    margin-top: ${SPACES[8]}px;
  }

  &.ant-collapse {
    border: none;
    width: 100%;
    min-width: 432px;
    background: transparent;

    & > .ant-collapse-item {
      border: 1px solid ${fromProps('default.borderColor')};
      border-radius: ${BORDER_RADIUS[6]}px;

      &:last-child {
        .ant-collapse-header,
        .ant-collapse-content {
          border: none;
        }
      }

      .ant-collapse-header {
        &::before, &::after {
          content: none;
        }

        &:focus-visible > .accordion-header {
          box-shadow: ${fromProps('focus.boxShadow')};
          outline: none;
          border-radius: ${BORDER_RADIUS[2]}px;
        }

        display: flex;
        align-items: start;
        justify-content: space-between;
        gap: ${SPACES[4]}px;
        padding: ${SPACES[8]}px ${SPACES[12]}px;
        border: none;
        background: ${fromProps('default.background')};
        color: ${fromProps('default.color')};

        .ant-collapse-arrow {
          position: static;
          transform: none;
          transition: transform .3s;
          color: ${fromProps('default.color')};
          padding: 0;
        }

        .accordion-header {
          border: none;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: start;
          gap: ${SPACES[4]}px;

          .accordion-header-title {
            color: ${fromProps('default.color')};
          }

          .accordion-header-additional-text {
            color: ${fromProps('default.additionalTextColor')};
            white-space: nowrap;
          }

          .accordion-header-tag {
            margin-right: 0;
          }

          .accordion-header-indicator {
            outline: ${SPACES[1]}px solid ${fromProps('default.background')};
            flex-shrink: 0;
          }
        }
      }

      .ant-collapse-content {
        background: transparent;
        color: ${fromProps('default.color')};
        border: none;
      }

      .ant-collapse-content-box {
        padding: 0 ${SPACES[12]}px ${SPACES[8]}px ${SPACES[12]}px;
      }

      &-active {
        &:last-child {
          .ant-collapse-header,
          .ant-collapse-content {
            border: none;
          }
        }
      }

      &-disabled {
        border-color: ${fromProps('disabled.borderColor')};
        &:last-child {
          .ant-collapse-header {
            border: none;
            background: ${fromProps('disabled.background')};

            .accordion-header-title,
            .accordion-header-additional-text {
              color: ${fromProps('disabled.color')};
            }

            .ant-collapse-arrow {
              transition: transform .3s;
              color: ${fromProps('disabled.color')};
            }
          }
        }
      }
    }

    &.ant-collapse-icon-position-left .ant-collapse-header {
      .accordion-header {
        padding-left: ${SPACES[16]}px;
      }
    }

    &.ant-collapse-icon-position-right .ant-collapse-header {
      & > div:first-child {
        right: ${SPACES[12]}px;
      }
      .accordion-header {
        padding-right: ${SPACES[16]}px;
      }
    }

    .ant-collapse-item-active {
      .ant-collapse-header {
        .ant-collapse-arrow {
          transform: rotate(90deg);
        }
      }
    }
  }

  &.accordion-without-border {
    &.ant-collapse-icon-position-right .ant-collapse-header {
      & > div:first-child {
        position: unset;
      }
      .accordion-header {
        padding-right: 0;
        order: -1;
      }
    }

    & > .ant-collapse-item {
      border: none;
      border-radius: 0;

      .ant-collapse-header {
        justify-content: start;
        padding: 0;
        gap: ${SPACES[4]}px;
        
        .accordion-header {
          width: fit-content;
        }
      }

      .ant-collapse-content-box {
        margin-top: ${SPACES[8]}px;
        padding: 0;
      }
    }
  }
`
