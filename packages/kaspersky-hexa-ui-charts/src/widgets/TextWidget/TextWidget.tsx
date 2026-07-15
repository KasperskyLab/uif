import React, { useCallback, useEffect, useReducer } from 'react'

import { allPlugins, dividerPluginsProps, RichTextEditor } from '@kaspersky/hexa-ui'

import { BorderHoverType, Overlay } from '../../components/Overlay/Overlay'


import { ActionType, TextWidgetEditorState } from './constants'
import { usePlugins } from './hooks/usePlugins'
import { useTextWidgetReducer } from './hooks/useTextWidgetReducer'
import { TextWidgetProps } from './types'

export const TextWidget = ({
  editTrigger,
  initialValue,
  readonly,
  onOverlayClick,
  onChange,
  onBlur,
  onFocus,
  onHover,
  width = '100%',
  height = 'max-content',
  placeholder,
  renderPlaceholder,
  limit,
  linkPopupText
}: TextWidgetProps) => {
  const reducer = useTextWidgetReducer()
  const [state, dispatch] = useReducer(
    reducer,
    readonly ? TextWidgetEditorState.DISABLED : TextWidgetEditorState.ENABLED,
    (init) => ({
      editorState: init,
      showOverlay: false
    })
  )

  const { showOverlay, editorState } = state

  useEffect(() => {
    if (readonly) {
      dispatch({ type: ActionType.SET_READONLY })
    } else {
      dispatch({ type: ActionType.BLUR })
    }
  }, [readonly])

  const handleHover = useCallback(() => {
    if (!readonly && editorState !== TextWidgetEditorState.FOCUS) {
      dispatch({ type: ActionType.HOVER })
      onHover?.(true)
    }
  }, [readonly, editorState, onHover])

  const handleMouseLeave = useCallback(() => {
    if (state.editorState !== TextWidgetEditorState.FOCUS) {
      dispatch({ type: ActionType.MOUSE_LEAVE })
      onHover?.(false)
    }
  }, [state.editorState, onHover])

  const handleOverlayClick = useCallback(
    (event: React.MouseEvent) => {
      dispatch({ type: ActionType.OVERLAY_CLICK })
      onOverlayClick?.()
      event.stopPropagation()
    },
    [onOverlayClick]
  )

  const handleFocus = useCallback(() => {
    dispatch({ type: ActionType.FOCUS })
    onFocus?.()
  }, [onFocus])

  const handleBlur = useCallback(() => {
    dispatch({ type: ActionType.BLUR })
    onBlur?.()
  }, [onBlur])

  const plugins = usePlugins(allPlugins, { linkPopupText })

  return (
    <Overlay
      editTrigger={editTrigger}
      onClick={handleOverlayClick}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleHover}
      show={showOverlay}
      width={width}
      hoverable
      height={height}
      borderHoverType={BorderHoverType.Solid}
    >
      <RichTextEditor
        initialValue={initialValue}
        onChange={onChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        readOnly={readonly}
        autoFocus={!readonly && editorState === TextWidgetEditorState.FOCUS}
        enabled={!readonly && editorState === TextWidgetEditorState.FOCUS}
        plugins={plugins}
        dividerPluginsProps={dividerPluginsProps}
        placeholder={placeholder}
        renderPlaceholder={renderPlaceholder}
        limitTextSize={limit}
      />
    </Overlay>
  )
}
