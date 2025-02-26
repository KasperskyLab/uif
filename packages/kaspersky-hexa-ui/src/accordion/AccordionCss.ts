import { getFromProps } from '@helpers/getFromProps'
import { css } from 'styled-components'

import { AccordionCssConfig, AccordionPanelCssConfig } from './types'

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
    position: absolute;
    height: ${fromPanelProps('lineHeight')};
    display: flex;
    align-items: center;
  }
`

const fromProps = getFromProps<AccordionCssConfig>()

export const accordionCss = css<{ cssConfig: AccordionCssConfig }>`
  &.ant-collapse .ant-collapse-item + .ant-collapse-item {
    margin-top: 16px;
  }

  &.ant-collapse {
    border: none;
    width: 100%;
    min-width: 432px;
    background: transparent;

    & > .ant-collapse-item {
      background: ${fromProps('enabled.background')};
      border: 1px solid ${fromProps('enabled.border')};
      border-radius: 12px;

      .ant-collapse-header {
        &::before, &::after {
          content: none;
        }

        &:focus-visible > .accordion-header {
          box-shadow: ${fromProps('focus.boxShadow')};
          outline: none;
          border-radius: 4px;
        }

        display: flex;
        align-items: start;
        justify-content: space-between;
        gap: 8px;
        padding: 16px 24px;
        border: none;
        background: none;
        color: ${fromProps('enabled.color')};

        .ant-collapse-arrow {
          position: static;
          transform: none;
          transition: transform .3s;
          color: ${fromProps('enabled.color')};
          padding: 0;
        }

        .accordion-header {
          border: none;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: start;
          justify-content: space-between;
          gap: 8px;

          .accordion-header-block {
            display: flex;
            align-items: start;
            gap: 8px;

            .accordion-header-title {
              color: ${fromProps('enabled.color')};
            }

            .accordion-header-additional-text {
              color: ${fromProps('enabled.additionalTextColor')};
              white-space: nowrap;
            }

            .accordion-header-tag {
              margin-right: 0;
            }

            .accordion-header-indicator {
              outline: 2px solid ${fromProps('enabled.background')};
              flex-shrink: 0;
            }

            .accordion-header-actions {
              width: 24px;
              > svg {
               margin: 0 auto;
              }
            }
          }
        }
      }

      .ant-collapse-content {
        background: transparent;
        color: ${fromProps('enabled.color')};
        border: none;
      }

      .ant-collapse-content-box {
        padding: 0 24px 16px 24px;
      }

      &.ant-collapse-item-disabled {
        background: ${fromProps('disabled.background')};
        border-color: ${fromProps('disabled.border')};

        .ant-collapse-header {
          .accordion-header {
            .accordion-header-title,
            .accordion-header-additional-text {
              color: ${fromProps('disabled.color')};
            }
          }

          .ant-collapse-arrow {
            color: ${fromProps('disabled.color')};
          }
        }
      }
    }

    &.ant-collapse-icon-position-left .ant-collapse-header {
      .accordion-header {
        padding-left: 32px;
      }
    }

    &.ant-collapse-icon-position-right .ant-collapse-header {
      & > div:first-child {
        right: 24px;
      }
      .accordion-header {
        padding-right: 32px;
        &.accordion-header-with-actions {
          padding-right: 26px;
        }
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
        margin-left: -32px;
      }
      .accordion-header {
        padding-right: 24px;
        order: -1;

        &.accordion-header-with-actions .accordion-header-actions {
          display: none;
        }
      }
    }

    & > .ant-collapse-item {
      border: none;
      border-radius: 0;

      .ant-collapse-header {
        justify-content: start;
        padding: 0;
        gap: 8px;
        
        .accordion-header {
          width: fit-content;
        }
      }

      .ant-collapse-content-box {
        margin-top: 16px;
        padding: 0;
      }
      
      &.ant-collapse-item-disabled {
        background: none;
      }
    }
  }
`
