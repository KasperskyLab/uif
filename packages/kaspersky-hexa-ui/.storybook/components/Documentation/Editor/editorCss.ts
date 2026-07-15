import { getTextSizes } from '@design-system/tokens'
import styled from 'styled-components'
import { LiveError } from 'react-live'

import { MonoTextTypes } from '@kaspersky/hexa-ui-core/typography/js'

const codeTypography = getTextSizes(MonoTextTypes.MTR3)

/** sb-unstyled — исключает блок из типографики Storybook Docs (~16px на div/pre). */
export const EditorRoot = styled.div.attrs({
  className: 'hexa-docs-editor sb-unstyled'
})`

  ${codeTypography}
`

export const EditorDescription = styled.div`
  margin-bottom: 16px;
`

export const EditorContainer = styled.div<{ $mode?: 'dont' }>`
  border: 1px solid
    ${({ $mode }) =>
      $mode === 'dont' ? 'var(--border--color--danger)' : 'var(--border--neutral--medium)'};
  border-radius: 4px;
  overflow: hidden;
  background-color: var(--bg--secondary, #f6f8fa);
  display: flex;
  flex-direction: column;
`

export const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`

export const EditorPane = styled.div<{ $isDark: boolean; $maxHeight?: number }>`
  flex: 0 0 auto;
  width: 100%;
  min-width: 0;
  border-top: 1px solid var(--border--neutral--medium);
  overflow: ${({ $maxHeight }) => ($maxHeight !== undefined ? 'auto' : 'visible')};
  display: flex;
  background-color: ${({ $isDark }) => ($isDark ? '#1e1e1e' : '#f6f8fa')};
  max-height: ${({ $maxHeight }) => ($maxHeight !== undefined ? `${$maxHeight}px` : 'none')};
`

export const LineNumbers = styled.div<{ $isDark: boolean }>`
  padding: 10px 0px;
  ${codeTypography}
  text-align: right;
  min-width: 24px;
  user-select: none;
  white-space: pre;
  position: sticky;
  left: 0;
  z-index: 1;
  color: ${({ $isDark }) => ($isDark ? '#858585' : '#BBB')};
  background-color: ${({ $isDark }) => ($isDark ? '#1e1e1e' : '#f6f8fa')};
  border-right: 0px solid ${({ $isDark }) => ($isDark ? '#333' : '#eee')};
`

export const CodeEditorWrapper = styled.div`
  flex: 1;
  min-width: 0;
`

export const CodeEditor = styled.div`
  ${codeTypography}

  && > div,
  && pre,
  && pre.prism-code,
  && .token-line {
    ${codeTypography}
    margin: 0 !important;
    padding: 0 !important;
    white-space: pre !important;
    background: transparent !important;
    font-family: inherit !important;
  }

  && pre,
  && pre.prism-code {
    padding: 10px !important;
    tab-size: 4;
    -moz-tab-size: 4;
  }

  & textarea {
    outline: none !important;
  }
`

export const PreviewPane = styled.div<{
  $mode?: 'dont'
  $minHeight?: number
  $maxHeight?: number
}>`
  flex: 0 0 auto;
  width: 100%;
  overflow: ${({ $maxHeight }) => ($maxHeight !== undefined ? 'auto' : 'visible')};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  z-index: 0;
  isolation: isolate;
  background-color: ${({ $mode }) =>
      $mode === 'dont'
        ? 'var(--bg--danger_subtle--enabled)'
        : 'var(--bg--neutral--level_0)'
  };
  min-height: ${({ $minHeight }) => ($minHeight !== undefined ? `${$minHeight}px` : 'auto')};
  max-height: ${({ $maxHeight }) => ($maxHeight !== undefined ? `${$maxHeight}px` : 'none')};
  transition: background-color 0.2s ease;
`

export const CodeToggleBar = styled.div`
  margin-top: 4px;
  font-size: 12px;
  line-height: 16px;
  text-align: right;
  position: relative;
  z-index: 1;

  && a,
  && .kl6-link {
    font-size: 12px;
    line-height: 16px;
  }
`

export const PreviewContent = styled.div<{
  $direction?: 'horizontal' | 'vertical'
  $gap?: number
  $minHeight?: number
  $maxHeight?: number
}>`
  padding: 16px;
  width: 100%;
  box-sizing: border-box;
  min-height: ${({ $minHeight }) => ($minHeight !== undefined ? `${$minHeight}px` : 'auto')};
  max-height: ${({ $maxHeight }) => ($maxHeight !== undefined ? `${$maxHeight}px` : 'none')};

  & > * {
    width: 100%;
    box-sizing: border-box;
  }

  & > div {
    display: flex;
    flex-direction: ${({ $direction = 'horizontal' }) =>
      $direction === 'vertical' ? 'column' : 'row'};
    flex-wrap: ${({ $direction = 'horizontal' }) =>
      $direction === 'vertical' ? 'nowrap' : 'wrap'};
    align-items: flex-start;
    min-height: 100%;
    gap: ${({ $gap = 16 }) => $gap}px;
  }
`

export const StyledLiveError = styled(LiveError)`
  ${codeTypography}
  background-color: #fde8e8;
  color: #c62828;
  padding: 12px;
  white-space: pre-wrap;
  margin: 20px;
  border-radius: 4px;
  border: 1px solid #f5c6c6;
`
