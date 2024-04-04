import React, {
  useRef,
  useEffect,
  useState,
  type ForwardedRef
} from 'react'
import { defaultKeymap, indentLess, insertTab } from '@codemirror/commands'
import { lineNumbers, highlightActiveLineGutter } from '@codemirror/gutter'
import { linter, lintGutter } from '@codemirror/lint'
import { EditorState, StateEffect, Compartment } from '@codemirror/state'
import { EditorView, highlightActiveLine, keymap } from '@codemirror/view'
import type { CodeViewerViewProps, CodeViewerRef, CustomLanguages } from './types'
import { DEFAULT_LANGUAGES } from './constants'
import { createTagsColors } from './hightlightingStyles'

export function useCodeViewer<T extends CustomLanguages>
(props: CodeViewerViewProps<T>, forwardedRef: ForwardedRef<CodeViewerRef>) : CodeViewerValues {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const editorStateRef = useRef<EditorState | null>(null)
  const editorViewRef = useRef<EditorView | null>(null)
  const highlightingExtensionRef = useRef(new Compartment())
  const languageExtensionRef = useRef(new Compartment())
  const readOnlyExtensionRef = useRef(new Compartment())
  const valueChangeListenerExtensionRef = useRef(new Compartment())
  const linesChangeListenerExtensionRef = useRef(new Compartment())
  const hasTextListenerExtensionRef = useRef(new Compartment())
  const focusListenerExtensionRef = useRef(new Compartment())
  const keymapExtensionRef = useRef(new Compartment())

  /** Defines editor view and state */
  useEffect(() => {
    if (!containerRef.current) return

    editorStateRef.current = EditorState.create({
      doc: '',
      extensions: [
        languageExtensionRef.current.of([]),
        readOnlyExtensionRef.current.of([]),
        valueChangeListenerExtensionRef.current.of([]),
        highlightingExtensionRef.current.of([]),
        linesChangeListenerExtensionRef.current.of([]),
        hasTextListenerExtensionRef.current.of([]),
        keymapExtensionRef.current.of([]),
        focusListenerExtensionRef.current.of([]),
        lineNumbers(),
        highlightActiveLine(),
        highlightActiveLineGutter(),
        ...props.linter ? [linter(props.linter)] : [],
        ...props.linter ? [lintGutter()] : []
      ]
    })
    editorViewRef.current = new EditorView({
      state: editorStateRef.current,
      parent: containerRef.current
    })

    return () => {
      editorViewRef.current?.destroy()
    }
  }, [])

  /** Controls readonly state */
  useEffect(() => {
    if (!editorViewRef.current) return

    const readOnlyExtension = EditorState.readOnly.of(!!props.readonly)
    editorViewRef.current.dispatch({
      effects: readOnlyExtensionRef.current.reconfigure(readOnlyExtension)
    })
  }, [props.readonly])

  /** Updates text passed through «initialValue» prop */
  useEffect(() => {
    if (!editorViewRef.current) return

    const currentValue = editorViewRef.current.state.doc.toString()
    const transaction = editorViewRef.current.state.update({
      changes: {
        from: 0,
        to: currentValue.length,
        insert: props.initialValue || ''
      }
    })
    editorViewRef.current.dispatch(transaction)
  }, [props.initialValue])

  /** Defines and updates «onChange» listener */
  useEffect(() => {
    if (!editorViewRef.current || !props.onChange) return

    const valueChangeListenerExtension = EditorView.updateListener.of((update) => {
      if (update.docChanged && props.onChange) {
        props.onChange(update.state.doc.toString())
      }
    })

    const effects = valueChangeListenerExtensionRef.current.reconfigure(valueChangeListenerExtension)
    editorViewRef.current.dispatch({ effects })
  }, [props.onChange])

  /** Controls highlighting styles */
  useEffect(() => {
    if (!editorViewRef.current) return

    const tagsColors = createTagsColors(props.cssConfig)
    const effects: StateEffect<unknown> = highlightingExtensionRef.current.reconfigure(tagsColors)

    if (effects) {
      editorViewRef.current.dispatch({ effects })
    }
  }, [props.language, props.cssConfig])

  /** Defines editor keymap */
  useEffect(() => {
    if (!editorViewRef.current) return

    const keymapExtension = keymap.of([...defaultKeymap, {
      key: 'Tab',
      preventDefault: true,
      run: insertTab
    }, {
      key: 'Shift-Tab',
      preventDefault: true,
      run: indentLess
    }])

    editorViewRef.current.dispatch({
      effects: keymapExtensionRef.current.reconfigure([keymapExtension])
    })
  }, [])

  /** Controls languages state */
  useEffect(() => {
    if (!editorViewRef.current) return

    const selectedLang = DEFAULT_LANGUAGES[props.language as keyof typeof DEFAULT_LANGUAGES] ||
      (props.customLanguages && props.customLanguages[props.language])

    const effects = languageExtensionRef.current.reconfigure(selectedLang)

    if (effects) {
      editorViewRef.current.dispatch({ effects })
    }
  }, [props.language, props.customLanguages])

  const [linesNum, setLinesNum] = useState(1)

  /** Controls lines number state */
  useEffect(() => {
    if (!editorViewRef.current) return
    setLinesNum(editorViewRef.current.state.doc.lines)

    const linesChangeListenerExtension = EditorView.updateListener.of((update) => {
      if (update.docChanged) {
        setLinesNum(update.state.doc.lines)
      }
    })

    const effects = linesChangeListenerExtensionRef.current.reconfigure(linesChangeListenerExtension)
    editorViewRef.current.dispatch({ effects })
  }, [])

  const [hasText, setHasText] = useState((props.initialValue || '').trim().length > 0)

  /** Controls «hasText» state */
  useEffect(() => {
    if (!editorViewRef.current) return

    const hasTextListenerExtension = EditorView.updateListener.of((update) => {
      if (update.docChanged) {
        const text = update.state.doc.toString().trim()
        setHasText(text.length > 0)
      }
    })

    const effects = hasTextListenerExtensionRef.current.reconfigure(hasTextListenerExtension)
    editorViewRef.current.dispatch({ effects })
  }, [])

  /** Defines a ref to use the CodeMirror API outside of the component */
  useEffect(() => {
    if (!forwardedRef) return

    const isOldRef = typeof forwardedRef === 'function'
    const isEditorDefined = !!editorStateRef.current && !!editorViewRef.current

    if (isOldRef && isEditorDefined) {
      forwardedRef({
        editorState: editorStateRef.current as EditorState,
        editorView: editorViewRef.current as EditorView
      })
    }

    if (isOldRef && !isEditorDefined) {
      forwardedRef(null)
    }

    if (!isOldRef && isEditorDefined) {
      forwardedRef.current = {
        editorState: editorStateRef.current as EditorState,
        editorView: editorViewRef.current as EditorView
      }
    }

    if (!isOldRef && !isEditorDefined) {
      forwardedRef.current = null
    }
  }, [forwardedRef])

  return {
    containerRef,
    linesNum,
    hasText
  }
}

type CodeViewerValues = {
  containerRef: React.MutableRefObject<HTMLDivElement | null>,
  linesNum: number,
  hasText: boolean
}
