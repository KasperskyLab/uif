import { defaultKeymap, indentLess, insertTab } from '@codemirror/commands'
import { syntaxHighlighting } from '@codemirror/language'
import { linter, lintGutter } from '@codemirror/lint'
import { Compartment, EditorState, RangeSetBuilder, StateEffect } from '@codemirror/state'
import {
  Decoration,
  EditorView,
  highlightActiveLine,
  highlightActiveLineGutter,
  keymap,
  lineNumbers
} from '@codemirror/view'
import React, {
  type ForwardedRef,
  useEffect,
  useRef,
  useState
} from 'react'

import { DEFAULT_LANGUAGES } from './constants'
import { applyDefaultExtensions } from './extensions'
import { createTagsColors } from './hightlightingStyles'
import type { CodeViewerRef, CodeViewerViewProps, CustomLanguages } from './types'

export function useCodeViewer<T extends CustomLanguages>
(props: CodeViewerViewProps<T>, forwardedRef: ForwardedRef<CodeViewerRef>) : CodeViewerValues {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const editorStateRef = useRef<EditorState | null>(null)
  const editorViewRef = useRef<EditorView | null>(null)
  const linesHighlightingExtensionRef = useRef(new Compartment())
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

    const defaultExtensions = applyDefaultExtensions()[props.language as keyof typeof DEFAULT_LANGUAGES]

    const extensions = [
      languageExtensionRef.current.of([]),
      readOnlyExtensionRef.current.of([]),
      valueChangeListenerExtensionRef.current.of([]),
      highlightingExtensionRef.current.of([]),
      linesHighlightingExtensionRef.current.of([]),
      linesChangeListenerExtensionRef.current.of([]),
      hasTextListenerExtensionRef.current.of([]),
      keymapExtensionRef.current.of([]),
      focusListenerExtensionRef.current.of([]),
      lineNumbers(),
      highlightActiveLine(),
      highlightActiveLineGutter(),
      ...props.linter ? [linter(props.linter)] : [],
      ...props.linter ? [lintGutter()] : [],
      ...props.completions ? [props.completions] : [],
      ...(defaultExtensions || []),
      ...(props.lineWrapping ? [EditorView.lineWrapping] : [])
    ]
    editorStateRef.current = EditorState.create({
      doc: '',
      extensions
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

    const readOnlyExtension = [
      EditorState.readOnly.of(!!props.readonly),
      EditorView.editable.of(!props.readonly) // hide cursor
    ]
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

  useEffect(() => {
    if (!editorViewRef.current || !props.readonly || !props.linesHighlighted) return

    const isInRanges = (num: number, ranges: string[]): boolean =>
      ranges.some(r => {
        const parts = r.split('-')
        const start = parseInt(parts[0])
        const end = parseInt(parts[1])
        const min = Math.min(start, end)
        const max = Math.max(start, end)
        return (num >= min && num <= max) || (num === start && isNaN(end))
      })

    const decoration = Decoration.line({
      attributes: { class: 'cm-highlightedLine' }
    })

    const builder = new RangeSetBuilder<Decoration>()
    for (const { from, to } of editorViewRef.current.visibleRanges) {
      for (let pos = from; pos <= to;) {
        const line = editorViewRef.current.state.doc.lineAt(pos)
        if (isInRanges(line.number, props.linesHighlighted)) {
          builder.add(line.from, line.from, decoration)
        }
        pos = line.to + 1
      }
    }

    const decorations = builder.finish()
    const effects = linesHighlightingExtensionRef.current.reconfigure(EditorView.decorations.of(decorations))

    if (effects) {
      editorViewRef.current.dispatch({ effects })
    }
  }, [props.readonly, props.linesHighlighted])

  /** Defines and updates «onChange» listener */
  useEffect(() => {
    if (!editorViewRef.current || !props.onChange) return

    const valueChangeListenerExtension = EditorView.updateListener.of((update) => {
      if (update.docChanged && props.onChange) {
        props.onChange(update.state.doc.toString(), update)
      }
    })

    const effects = valueChangeListenerExtensionRef.current.reconfigure(valueChangeListenerExtension)
    editorViewRef.current.dispatch({ effects })
  }, [props.onChange])

  /** Controls highlighting styles */
  useEffect(() => {
    if (!editorViewRef.current) return

    const tagsColors = createTagsColors(props.cssConfig)
    const effects: StateEffect<unknown> = highlightingExtensionRef.current.reconfigure(syntaxHighlighting(tagsColors))

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
