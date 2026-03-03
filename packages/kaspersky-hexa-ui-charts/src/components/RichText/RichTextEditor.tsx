import clsx from 'clsx'
import isHotkey from 'is-hotkey'
import React, {
  FC,
  KeyboardEvent,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react'
import {
  createEditor,
  Descendant,
  Editor
} from 'slate'
import { withHistory } from 'slate-history'
import {
  Editable,
  ReactEditor,
  RenderElementProps,
  RenderLeafProps,
  RenderPlaceholderProps,
  Slate,
  withReact
} from 'slate-react'

import { Space } from '@kaspersky/hexa-ui'

import { useClickOutside } from '../../hooks/useClickOutside'

import { CustomFormats } from './customTypes'
import {
  isBlockStyleElement,
  isBlockStylePluginType,
  isBlockStyleType,
  isElementPluginType,
  isElementType,
  isLeafPluginType,
  isLeafType
} from './helpers'
import { useHotkeys } from './hooks/useHotkeys'
import DefaultPlugins from './Plugins/DefaultPlugins'
import style from './richText.module.scss'
import { ToolbarContainer } from './Toolbar'
import { toggleBlock, toggleMark } from './Toolbar/helpers'
import { ElementPluginType, LeafPluginType, PluginType } from './types'

interface RichTextEditorProps {
  plugins: PluginType[],
  limitTextSize?: number,
  readOnly?: boolean,
  showOverlay?: boolean,
  initialValue?: Descendant[],
  placeholder?: string,
  renderPlaceholder?: (props: RenderPlaceholderProps) => ReactNode,
  onChange: (value: Descendant[]) => void,
  onFocus?: () => void,
  onBlur?: () => void,
  onHover?: (isHovered: boolean) => void
}

const defaultInitialValue: Descendant[] = [
  {
    type: CustomFormats.PARAGRAPH,
    children: [{ text: '' }]
  }
]

export const RichTextEditor: FC<RichTextEditorProps> = ({
  onChange,
  onBlur,
  onFocus,
  onHover,
  readOnly,
  plugins,
  initialValue = defaultInitialValue,
  placeholder = '',
  renderPlaceholder,
  limitTextSize
}) => {
  const editContainer = useRef<HTMLDivElement | null>(null)
  const editor = useMemo(() => {
    return withReact(withHistory(createEditor()))
  }, [])
  const hotKeys = useHotkeys(plugins)

  const renderElementPlugins = useCallback(
    (props: RenderElementProps) => {
      const { element, attributes, children } = props
      const foundElementPlugin = plugins.find((plugin) => {
        if (isElementPluginType(plugin)) {
          return plugin.elementType === element.type
        }
        return false
      }) as ElementPluginType | undefined

      const foundBlockStylePlugin = plugins.find((plugin) => {
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

      return <p {...attributes}>{children}</p>
    },
    [plugins]
  )

  const renderLeafPlugins = useCallback(
    (props: RenderLeafProps) => {
      const { leaf, attributes } = props
      let { children } = props

      const foundPlugins = plugins.filter((plugin) => {
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

      return <span {...attributes}>{children}</span>
    },
    [plugins]
  )

  const handleKeyDown = useCallback(
    () => (event: KeyboardEvent<HTMLDivElement>) => {
      for (const hotkey in hotKeys) {
        if (isHotkey(hotkey, event as any)) {
          event.preventDefault()
          const mark = hotKeys[hotkey]
          if (isBlockStyleType(mark) || isElementType(mark)) {
            toggleBlock(editor, mark)
          } else if (isLeafType(mark)) {
            toggleMark(editor, mark)
          }
        }
      }
    },
    [editor, hotKeys]
  )

  const handleFocus = useCallback(
    (event) => {
      onFocus?.()
      event.stopPropagation()
    },
    [onFocus]
  )

  const handleBlur = useCallback(
    (event) => {
      onBlur?.()
      event.stopPropagation()
    },
    [onBlur]
  )

  const handleMouseEnter = useCallback(() => {
    onHover?.(true)
  }, [onHover])

  const handleMouseLeave = useCallback(() => {
    onHover?.(false)
  }, [onHover])

  useClickOutside(editContainer.current, handleBlur)

  const handleDOMBeforeInput = useCallback((event: InputEvent) => {
    const inputType = event.inputType
    if (limitTextSize) {
      if (inputType === 'insertText' || inputType === 'insertNode' || inputType === 'insertFromPaste') {
        const textLength = Editor.string(editor, []).length
        if (textLength >= limitTextSize) {
          event.preventDefault()
        }
      }
    }
  }, [limitTextSize, editor])

  return (
    <Space
        ref={(ref) => (editContainer.current = ref)}
        gap={4}
        className={style.editableContainer}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
      >
        <Slate editor={editor} initialValue={initialValue} onChange={onChange}>
          <Editable
            className={clsx(style.editable, !readOnly && style.enabled)}
            renderElement={renderElementPlugins}
            renderLeaf={renderLeafPlugins}
            placeholder={placeholder}
            spellCheck
            autoFocus={!readOnly}
            readOnly={readOnly}
            renderPlaceholder={renderPlaceholder}
            onKeyDown={handleKeyDown}
            onDOMBeforeInput={handleDOMBeforeInput}
          />
          {!readOnly && <ToolbarContainer plugins={plugins} className={style.toolbar} />}
        </Slate>
      </Space>
  )
}
