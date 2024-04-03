import React, { forwardRef, memo, ForwardedRef } from 'react'
import styled from 'styled-components'
import cn from 'classnames'
import { ResizableBox } from 'react-resizable'
import { ResizeInput } from '@kaspersky/icons/12'
import {
  codeViewerCss,
  EditorContainer,
  CodeWrapper,
  Handle
} from './codeViewerCss'
import {
  CodeViewerRef,
  CodeViewerProps,
  CustomLanguages,
  CodeViewerViewProps
} from './types'
import { useThemedCodeViewer } from './useThemedCodeViewer'
import { useCodeViewer } from './useCodeViewer'
import { DEFAULT_SIZES } from './constants'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { shouldForwardProp } from '@helpers/shouldForwardProp'

const StyledCodeViewer = styled.div.withConfig({ shouldForwardProp })`
  ${codeViewerCss}
`

export const CodeViewer = <T extends CustomLanguages>(rawProps: CodeViewerProps<T>): JSX.Element => {
  const themedProps = useThemedCodeViewer(rawProps)
  const props = useTestAttribute(themedProps)
  return <CodeViewerForwardRef {...props} />
}

const CodeViewerView = <T extends CustomLanguages>(
  props: CodeViewerViewProps<T>,
  ref: ForwardedRef<CodeViewerRef>
): JSX.Element => {
  const values = useCodeViewer(props, ref)

  const {
    resizable,
    resizeAxis,
    cssConfig,
    readonly,
    invalid,
    valid,
    wrapperClassName,
    className,
    width,
    height,
    minConstraints,
    maxConstraints,
    testAttributes
  } = props

  const handle = resizable && (
      <Handle
        cssConfig={cssConfig}
        readonly={readonly}
        resizeAxis={resizeAxis}
      >
        <ResizeInput />
      </Handle>
  )

  return (
    <StyledCodeViewer
      cssConfig={cssConfig}
      className={cn('kl6-code-viewer', wrapperClassName)}
      valid={valid}
      invalid={invalid}
      readonly={readonly}
      {...testAttributes}
    >
      <ResizableBox
        width={width || DEFAULT_SIZES.width}
        height={height || DEFAULT_SIZES.height}
        axis={resizeAxis}
        minConstraints={minConstraints || DEFAULT_SIZES.minConstraints}
        maxConstraints={maxConstraints || DEFAULT_SIZES.maxConstraints}
        handle={handle}
      >
        <CodeWrapper className={className}>
          <EditorContainer ref={values.containerRef} />
        </CodeWrapper>
      </ResizableBox>
    </StyledCodeViewer>
  )
}

const CodeViewerForwardRef = memo(forwardRef<CodeViewerRef, CodeViewerViewProps<any>>(CodeViewerView))
