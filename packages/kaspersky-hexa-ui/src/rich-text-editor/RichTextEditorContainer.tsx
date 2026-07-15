import { useClickOutside } from '@helpers/hooks/useClickOutside'
import { Space } from '@src/space'
import React, { useCallback, useMemo, useRef } from 'react'
import { Descendant } from 'slate'

import { CustomFormats } from './customTypes'
import style from './richText.module.scss'
import {
  MemorizedRichTextEditor as RichTextEditor,
  RichTextEditorProps
} from './RichTextEditor'
import { RichTextEditorContext } from './RichTextEditorContext'

import { dividerPluginsProps as defaultDividerPluginsProps } from './index'

export interface RichTextEditorContainerProps extends RichTextEditorProps {
  onHover?: (isHovered: boolean) => void;
}

const defaultInitialValue: Descendant[] = [
  {
    type: CustomFormats.PARAGRAPH,
    children: [{ text: '' }]
  }
]

export const RichTextEditorContainer = ({
  onChange,
  onBlur,
  onFocus,
  onHover,
  readOnly,
  enabled = true,
  autoFocus = true,
  plugins,
  initialValue = defaultInitialValue,
  placeholder = '',
  renderPlaceholder,
  limitTextSize,
  dividerPluginsProps = defaultDividerPluginsProps,
  testId
}: RichTextEditorContainerProps) => {
  const editContainer = useRef<HTMLDivElement | null>(null)
  const contextValue = useMemo(() => ({ container: editContainer }), [])

  const handleFocus = useCallback<React.FocusEventHandler<HTMLDivElement>>(
    (event) => {
      onFocus?.()
      event.stopPropagation()
    },
    [onFocus]
  )

  const handleBlur = useCallback(
    (event: MouseEvent) => {
      if (enabled && !readOnly && editContainer.current) {
        onBlur?.()
        event.stopPropagation()
      }
    },
    [onBlur, enabled, readOnly]
  )

  const handleMouseEnter = useCallback<
    React.MouseEventHandler<HTMLDivElement>
  >(() => {
    onHover?.(true)
  }, [onHover])

  const handleMouseLeave = useCallback<
    React.MouseEventHandler<HTMLDivElement>
  >(() => {
    onHover?.(false)
  }, [onHover])

  useClickOutside(editContainer, handleBlur)

  return (
    <RichTextEditorContext.Provider value={contextValue}>
      <Space
        ref={(ref) => (editContainer.current = ref)}
        gap={4}
        className={style.editableContainer}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        data-testid={testId}
      >
        <RichTextEditor
          initialValue={initialValue}
          onChange={onChange}
          onBlur={onBlur}
          readOnly={readOnly}
          autoFocus={autoFocus}
          enabled={enabled}
          plugins={plugins}
          dividerPluginsProps={dividerPluginsProps}
          placeholder={placeholder}
          renderPlaceholder={renderPlaceholder}
          limitTextSize={limitTextSize}
          testId={testId}
        />
      </Space>
    </RichTextEditorContext.Provider>
  )
}

export const MemorizedRichTextEditor = React.memo(RichTextEditorContainer)
