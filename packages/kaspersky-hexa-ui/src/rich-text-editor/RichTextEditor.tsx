import { DividerProps } from '@src/divider'
import clsx from 'clsx'
import isHotkey from 'is-hotkey'
import React, {
  KeyboardEvent,
  ReactNode,
  useCallback,
  useEffect,
  useMemo
} from 'react'
import { Descendant, Editor, Transforms } from 'slate'
import {
  Editable,
  ReactEditor,
  RenderElementProps,
  RenderLeafProps,
  RenderPlaceholderProps,
  Slate
} from 'slate-react'

import { BlockElement, InlineElement } from './components'
import { CustomPlaceholder } from './components/CustomPlaceholder'
import { CustomFormats } from './customTypes'
import { removeEmptyTrailingParagraphs } from './helpers/removeEmptyTrailingParagraphs'
import {
  isBlockStyleElement,
  isBlockStylePluginType,
  isBlockStyleType,
  isElementPluginType,
  isElementType,
  isLeafPluginType,
  isLeafType
} from './helpers/typeGuards'
import { useHotkeys } from './hooks/useHotkeys'
import { useRichTextEditor } from './hooks/useRichTextEditor'
import DefaultPlugins from './Plugins/DefaultPlugins'
import style from './richText.module.scss'
import { ToolbarContainer } from './Toolbar'
import { toggleBlockWithRelatedLeafs, toggleMark } from './Toolbar'
import {
  ElementPluginType,
  LeafPluginType,
  Plugins,
  PluginsFlat
} from './types'

import { dividerPluginsProps as defaultDividerPluginsProps } from './index'

export interface RichTextEditorProps {
  plugins: Plugins;
  limitTextSize?: number;
  dividerPluginsProps?: DividerProps;
  onChange: (value: Descendant[]) => void;
  enabled?: boolean;
  autoFocus?: boolean;
  readOnly?: boolean;
  initialValue?: Descendant[];
  placeholder?: string;
  renderPlaceholder?: (props: RenderPlaceholderProps) => ReactNode;
  onFocus?: () => void;
  onBlur?: () => void;
  testId?: string;
}

const defaultInitialValue: Descendant[] = [
  {
    type: CustomFormats.PARAGRAPH,
    children: [{ text: '' }]
  }
]

export const RichTextEditor = ({
  onChange,
  onBlur,
  onFocus,
  readOnly,
  enabled = true,
  autoFocus = true,
  plugins,
  initialValue,
  placeholder = '',
  renderPlaceholder,
  limitTextSize,
  dividerPluginsProps = defaultDividerPluginsProps,
  testId
}: RichTextEditorProps) => {

  const initialValueSlate = initialValue?.length ? initialValue : defaultInitialValue
  const flatPlugins: PluginsFlat = useMemo(() => plugins.flat(), [plugins])
  const editor = useRichTextEditor(flatPlugins)

  const handleBlur = useCallback(() => {
    removeEmptyTrailingParagraphs(editor)

    if (editor.children.length === 0) {
      Transforms.insertNodes(editor, defaultInitialValue, { at: [0] })
    }

    onBlur?.()
  }, [editor, onBlur])

  useEffect(() => {
    if (readOnly) {
      return
    }
    if (autoFocus) {
      ReactEditor.focus(editor)
      onFocus?.()
    } else if (ReactEditor.isFocused(editor)) {
      ReactEditor.blur(editor)
      handleBlur()
    }
  }, [autoFocus, readOnly])

  useEffect(() => {
    const handleDocumentKeyDown: (e: DocumentEventMap['keydown']) => void = (event) => {
      if (!enabled) {
        if (
          isHotkey('mod+z', event) ||
          isHotkey('mod+y', event) ||
          isHotkey('mod+shift+z', event)
        ) {
          event.preventDefault()
          return
        }
      }
    }
    document.addEventListener('keydown', handleDocumentKeyDown)
    return () => document.removeEventListener('keydown', handleDocumentKeyDown)
  }, [enabled])

  const hotKeys = useHotkeys(flatPlugins)

  const renderElementPlugins = useCallback(
    (props: RenderElementProps) => {
      const { element, attributes, children } = props

      const foundElementPlugin = flatPlugins.find((plugin) => {
        if (isElementPluginType(plugin)) {
          return plugin.elementType === element.type
        }
        return false
      }) as ElementPluginType | undefined

      const foundBlockStylePlugin = flatPlugins.find((plugin) => {
        if (isBlockStylePluginType(plugin) && isBlockStyleElement(element)) {
          return plugin.blockStyleType === element.blockStyleType
        }
        return false
      }) as ElementPluginType | undefined

      const defaultPlugin = DefaultPlugins.find(
        (plugin) => plugin.elementType === element.type
      )

      if (foundElementPlugin || foundBlockStylePlugin || defaultPlugin) {
        let resultChildren = props.children

        if (foundBlockStylePlugin) {
          resultChildren = foundBlockStylePlugin.render({
            ...props,
            children: resultChildren
          })
        }

        if (foundElementPlugin) {
          resultChildren = foundElementPlugin.render({
            ...props,
            children: resultChildren
          })
        }

        if (defaultPlugin) {
          resultChildren = defaultPlugin.render({
            ...props,
            children: resultChildren
          })
        }

        return resultChildren
      }

      return <BlockElement attributes={attributes}>{children}</BlockElement>
    },
    [flatPlugins]
  )

  const renderLeafPlugins = useCallback(
    (props: RenderLeafProps) => {
      const { leaf, attributes } = props
      let { children } = props

      const foundPlugins = flatPlugins.filter((plugin) => {
        if (isLeafPluginType(plugin)) {
          return plugin.leafType && leaf[plugin.leafType]
        }

        return false
      }) as LeafPluginType[]

      if (foundPlugins.length > 0) {
        foundPlugins.forEach((plugin) => {
          children = plugin.render({ ...props, children })
        })
      }

      return <InlineElement attributes={attributes}>{children}</InlineElement>
    },
    [flatPlugins]
  )

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      for (const hotkey in hotKeys) {
        if (isHotkey(hotkey, event as any)) {
          event.preventDefault()
          const mark = hotKeys[hotkey]

          if (isBlockStyleType(mark) || isElementType(mark)) {
            toggleBlockWithRelatedLeafs(editor, mark, flatPlugins)
          } else if (isLeafType(mark)) {
            toggleMark(editor, mark)
          }

          return
        }
      }
    },
    [editor, hotKeys, flatPlugins]
  )

  const getAvailableLength = useCallback(() => {
    if (!limitTextSize) return Infinity

    const currentLength = Editor.string(editor, []).length

    const selectedLength = editor.selection
      ? Editor.string(editor, editor.selection).length
      : 0

    return limitTextSize - (currentLength - selectedLength)
  }, [limitTextSize, editor])

  const handleDOMBeforeInput = useCallback(
    (event: InputEvent) => {
      if (!limitTextSize) return

      if (
        event.inputType === 'insertText' ||
        event.inputType === 'insertNode'
      ) {
        const availableLength = getAvailableLength()
        if (availableLength <= 0) {
          event.preventDefault()
        }
      }
    },
    [limitTextSize, getAvailableLength]
  )

  const handlePaste = useCallback(
    (event: React.ClipboardEvent) => {
      if (!limitTextSize) return

      const availableLength = getAvailableLength()
      if (availableLength <= 0) {
        event.preventDefault()
        return
      }

      const pastedText = event.clipboardData?.getData('text/plain') ?? ''
      if (pastedText.length <= availableLength) return

      event.preventDefault()
      const trimmedText = pastedText.slice(0, availableLength)
      Transforms.insertText(editor, trimmedText)
    },
    [limitTextSize, getAvailableLength, editor]
  )

  const customPlaceholder = useCallback(
    (props) => {
      return (
        <CustomPlaceholder
          color="secondary"
          {...props}
          renderPlaceholder={renderPlaceholder}
          placeholder={placeholder}
        />
      )
    },
    [placeholder, renderPlaceholder]
  )

  return (
    <Slate editor={editor} initialValue={initialValueSlate} onChange={onChange}>
      <Editable
        className={clsx(style.editable, !readOnly && style.enabled)}
        renderElement={renderElementPlugins}
        renderLeaf={renderLeafPlugins}
        placeholder="stub"
        spellCheck
        autoFocus={autoFocus}
        readOnly={readOnly}
        renderPlaceholder={customPlaceholder}
        onKeyDown={handleKeyDown}
        onDOMBeforeInput={handleDOMBeforeInput}
        onPaste={handlePaste}
        onBlur={handleBlur}
        data-testid={testId ? `${testId}-editable` : undefined}
      />
      {!readOnly && enabled && (
        <ToolbarContainer
          plugins={plugins}
          flatPlugins={flatPlugins}
          className={style.toolbar}
          dividerPluginsProps={dividerPluginsProps}
          testId={testId}
        />
      )}
    </Slate>
  )
}

export const MemorizedRichTextEditor = React.memo(RichTextEditor)
