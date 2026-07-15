import { css } from 'styled-components'

export const getInternalRadioCss = () => css`
  // enabled
  .ant-radio-wrapper {
    display: flex;
    flex-direction: row;
    align-items: start;
    gap: 4px;
    padding: 0;
    margin: 0;

    color: var(--radio--text--base--enabled);
    white-space: unset;

    & > span + span {
      padding: 0 0 0 4px;
    }
  }
  
  // dot
  .ant-radio-inner {
    width: calc(14px);
    height: calc(14px);
    background-color: var(--radio--bg--base--enabled);
    border-color: var(--radio--border--base--enabled);

    &::after {
      transform: scale(calc(0.5));
      width: calc(16px);
      height: calc(16px);
      margin-top: calc(-8px);
      margin-left: calc(-8px);
      transition: opacity 0.1s ease-in-out !important;
      left: 50%;
      top: 50%;
      background-color: var(--radio--icon--base--enabled_selected);
    }
  }
  
  .ant-radio-checked .ant-radio-inner::after {
    background-color: var(--radio--icon--base--enabled_selected);
  }

  .ant-radio-checked::after {
    display: none;
  }
  
  // hover
  .ant-radio-wrapper:hover {
    .ant-radio-inner {
      border-color: var(--radio--border--base--hover);
      background-color: var(--radio--bg--base--hover);
      
      &::after {
        background-color: var(--radio--icon--base--hover_selected);
      }
    }
  }

  // active
  .ant-radio-wrapper:active, .ant-radio-wrapper:hover:active {
    .ant-radio-inner {
      border-color: var(--radio--border--base--active);
      background-color: var(--radio--bg--base--active);

      &::after {
        background-color: var(--radio--icon--base--active_selected);
      }
    }
  }
  
  // focus
  && .ant-radio-input:focus + .ant-radio-inner {
    border-color: var(--radio--border--base--enabled);
    outline: none;
    box-shadow: none;
  }
  && .ant-radio-input:focus-visible + .ant-radio-inner {
    border-color: var(--radio--border--base--enabled);
    outline: none;
    box-shadow: 0px 0px 0px 2px var(--focus--stroke);
  }
  
  // disabled
  .ant-radio-wrapper {
    &, &:hover, &:active, &:focus {
      &.ant-radio-wrapper-disabled {
        span {
          color: var(--radio--text--base--disabled);
        }
        .ant-radio-inner {
          border-color: var(--radio--border--base--disabled) !important;
          background-color: var(--radio--bg--base--disabled);

          &::after {
            background-color: var(--radio--icon--base--disabled_selected);
          }
        }
      }
    }
  }
`

export const getRadioCss = () => css`
  display: flex;
  flex-direction: row;
  gap: 12px;

  .ant-radio {
    display: flex;
    top: inherit;
    height: 20px;
    align-items: center;
  }

  &.ant-radio-vertical {
    flex-direction: column;
    gap: 8px;
  }

  // readonly
  .kl-radio-readonly.ant-radio-wrapper {
    &, &:hover, &:active, &:focus {
      &.ant-radio-wrapper-disabled {
        &, * {
          cursor: default;
        }
        span {
          color: var(--radio--text--base--readonly);
        }
        .ant-radio-inner {
          border-color: var(--radio--border--base--readonly) !important;
          background-color: var(--radio--bg--base--readonly);

          &::after {
            background-color: var(--radio--icon--base--readonly_selected);
          }
        }
      }
    }
  }

  // invalid
  &.kl-radio-invalid .ant-radio-wrapper:not(.ant-radio-wrapper-disabled) {
    &, &:hover, &:active, &:focus {
      .ant-radio-inner {
        border-color: var(--radio--border--danger--enabled);

        &::after {
          background-color: var(--radio--icon--danger--enabled_selected);
        }
      }
      .ant-radio-inner {
        background-color: var(--radio--bg--base--enabled);
      }
    }
  }
  
  ${getInternalRadioCss()}
`

export const radioCss = getRadioCss()
