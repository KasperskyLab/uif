import styled, { css } from 'styled-components'
import { CodeViewerCssConfig } from './types'
import { getTextSizes, MonoTextTypes } from '@design-system/tokens'
import { SPACES, BORDER_RADIUS } from '@design-system/theme'
import { getFromProps } from '@helpers/getFromProps'
import { reactSvgComponentToMarkupString } from './helpers'
import { StatusWarningSolid, StatusDangerSolid1 } from '@kaspersky/icons/24'

const fromProps = getFromProps<CodeViewerCssConfig>()

export const codeViewerCss = css<{
  cssConfig: CodeViewerCssConfig,
  valid?: boolean,
  invalid?: boolean,
  readonly?: boolean
}>`
  position: relative;
  width: min-content;

  .cm-editor {
    padding: ${SPACES[3]}px ${SPACES[6]}px;
    background: ${fromProps('enabled.background')};
    border: 1px solid ${fromProps('enabled.borderColor')};
    border-radius: ${BORDER_RADIUS[4]}px;

    &:hover {
      border-color: ${fromProps('hover.borderColor')};
    }
  }

  // focus, valid, invalid states should have more weight than hover state
  && .cm-editor {
    &.cm-focused {
      outline: none;
      box-shadow: ${fromProps('focus.boxShadow')};
      border-color: ${fromProps('enabled.borderColor')};
    }

    ${(props) => props.valid && `border-color: ${fromProps('valid.borderColor')(props)};`}
    ${(props) => props.invalid && `border-color: ${fromProps('invalid.borderColor')(props)};`}
  }

  ${(props) => props.readonly && `
    && .cm-editor {
      &.cm-focused {
        box-shadow: none;
        border-color: transparent;
      }

      border-color: transparent;
      background: ${fromProps('readonly.background')(props)};
    }
  `}

  .cm-scroller {
    .cm-content {
      .cm-line {
        padding: 0;
        color: ${fromProps('tagColors.mainTagColor')};
        &, > span {
          ${getTextSizes(MonoTextTypes.MTR3)}
        }

        .cm-lintRange {
          &, > span {
            ${getTextSizes(MonoTextTypes.MTR3)}
          }
        }
      }

      .cm-activeLine {
        background: ${fromProps('activeLine.background')};
        ${(props) => props.readonly && 'background: transparent;'}
      }
    }

    .cm-gutters {
      background: ${fromProps('enabled.background')};
      ${(props) => props.readonly && `background: ${fromProps('readonly.background')(props)};`}
      padding-right: ${SPACES[14]}px;
      border: none;
      position: relative;

      .cm-gutterElement {
        padding: 0;
        color: ${fromProps('enabled.color')};
        ${getTextSizes(MonoTextTypes.MTR3)}
      }

      .cm-activeLineGutter {
        background: inherit;
        color: ${fromProps('activeLine.color')};
        ${(props) => props.readonly && `color: ${fromProps('enabled.color')(props)};`}
      }

      .cm-gutter-lint {
        position: absolute;
        right: 8px;
        width: ${SPACES[10]}px;

        .cm-gutterElement {
          position: relative;
  
          .cm-lint-marker {
            position: absolute;
            right: 0;
          }
  
          .cm-lint-marker-warning {
            ${(props) => `content: url(${reactSvgComponentToMarkupString(StatusWarningSolid, {
                style: { color: fromProps('warningIconColor')(props) }
              })});`}
          }
          .cm-lint-marker-error {
            ${(props) => `content: url(${reactSvgComponentToMarkupString(StatusDangerSolid1, {
              style: { color: fromProps('errorIconColor')(props) }
            })});`}
          }
        }
      }
    }
  }

  .cm-tooltip {
    border-radius: ${BORDER_RADIUS[4]}px;
    border: none;

    .cm-diagnostic {
      background: ${fromProps('enabled.background')};
      padding: ${SPACES[4]}px;
      border-radius: ${BORDER_RADIUS[4]}px;
      border: none;
      box-shadow: ${fromProps('tooltipBoxShadow')};

      .cm-diagnosticText {
        ${getTextSizes(MonoTextTypes.MTR3)}
        color: ${fromProps('activeLine.color')};
      }
    }
  }
`

export const CodeWrapper = styled.div`
  border-radius: ${BORDER_RADIUS[4]}px;
  width: 100%;
  height: 100%;
`

export const EditorContainer = styled.div`
  border-radius: ${BORDER_RADIUS[4]}px;
  width: 100%;
  height: 100%;
  position: relative;
  
  > div {
    width: 100%;
    height: 100%;
  }
`

export const Handle = styled.div<{
  cssConfig: CodeViewerCssConfig,
  readonly?: boolean,
  resizeAxis?: string
}>`
  position: absolute;
  right: 2px;
  bottom: 2px;
  display: flex;
  align-items: center;

  > svg {
    color: ${fromProps('enabled.iconColor')};
    ${(props) => props.readonly && `color: ${fromProps('readonly.iconColor')(props)};`}
  }

  ${(props) => {
    switch (props.resizeAxis) {
      case 'x':
        return { cursor: 'ew-resize' }
      case 'y':
        return { cursor: 'ns-resize' }
      case 'none':
        return { cursor: 'default' }
      case 'both':
      default:
        return { cursor: 'nwse-resize' }
    }
  }}
`
