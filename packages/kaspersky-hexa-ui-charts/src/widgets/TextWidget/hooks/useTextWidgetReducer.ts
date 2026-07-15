import { useCallback } from 'react'

import { ActionType, TextWidgetEditorState } from '../constants'
import { State, TextWidgetAction } from '../types'

export const useTextWidgetReducer = () => {
  return useCallback((state: State, action: TextWidgetAction): State => {
    switch (action.type) {
      case ActionType.HOVER:
        return {
          editorState: TextWidgetEditorState.HOVER,
          showOverlay: true
        }

      case ActionType.MOUSE_LEAVE:
        return {
          editorState: TextWidgetEditorState.ENABLED,
          showOverlay: false
        }

      case ActionType.FOCUS:
        return {
          editorState: TextWidgetEditorState.FOCUS,
          showOverlay: false
        }

      case ActionType.BLUR:
        return {
          editorState: TextWidgetEditorState.ENABLED,
          showOverlay: false
        }

      case ActionType.OVERLAY_CLICK:
        return {
          editorState: TextWidgetEditorState.FOCUS,
          showOverlay: false
        }

      case ActionType.SET_READONLY:
        return {
          editorState: TextWidgetEditorState.DISABLED,
          showOverlay: false
        }

      default:
        return state
    }
  }, [])

  
}