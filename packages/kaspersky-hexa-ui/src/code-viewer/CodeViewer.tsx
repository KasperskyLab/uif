import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { shouldForwardProp } from '@helpers/shouldForwardProp'
import cn from 'classnames'
import React, { ForwardedRef, forwardRef, memo } from 'react'
import { ResizableBox } from 'react-resizable'
import styled from 'styled-components'

import { ResizeInput } from '@kaspersky/hexa-ui-icons/12'

import {
  codeViewerCss,
  CodeWrapper,
  EditorContainer,
  Handle
} from './codeViewerCss'
import { DEFAULT_SIZES } from './constants'
import {
  CodeViewerProps,
  CodeViewerRef,
  CodeViewerViewProps,
  CustomLanguages
} from './types'
import { useCodeViewer } from './useCodeViewer'
import { useThemedCodeViewer } from './useThemedCodeViewer'

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
    validationStatus = 'default',
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
      validationStatus={validationStatus}
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
