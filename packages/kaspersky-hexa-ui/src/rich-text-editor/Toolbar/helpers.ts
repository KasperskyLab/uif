import { Editor, Element as SlateElement, Text, Transforms } from 'slate'

import { CustomEditor, CustomFormats, CustomTextKey } from '../customTypes'
import { isMarkActive } from '../helpers/isMarkActive'
import { isBlockStyleElement, isBlockStyleType, isElementPluginType, isListType } from '../helpers/typeGuards'
import { CustomElementFormat, PluginsFlat } from '../types'

export const toggleBlock = (
  editor: CustomEditor,
  format: CustomElementFormat
): void => {
  const isActive = isBlockActive(
    editor,
    format,
    isBlockStyleType(format) ? 'style' : 'type'
  )
  const isList = isListType(format)

  Transforms.unwrapNodes(editor, {
    match: (n) =>
      !Editor.isEditor(n) &&
      SlateElement.isElement(n) &&
      isListType(n.type) &&
      !isBlockStyleType(format),
    split: true
  })

  let newProperties: Partial<SlateElement>

  if (isBlockStyleType(format)) {
    newProperties = {
      blockStyleType: isActive ? undefined : format
    }
  } else {
    newProperties = {
      type: isActive ? CustomFormats.PARAGRAPH : isList ? CustomFormats.LIST_ITEM : format,
      blockStyleType: undefined
    }
  }

  Transforms.setNodes<SlateElement>(editor, newProperties)

  if (!isActive && isList) {
    const block = { type: format, children: [] }
    Transforms.wrapNodes(editor, block)
  }
}

export const toggleMark = (
  editor: CustomEditor,
  format: CustomTextKey
): void => {
  const isActive = isMarkActive(editor, format)

  if (isActive) {
    Editor.removeMark(editor, format)
  } else {
    Editor.addMark(editor, format, true)
  }
}

export const setMarkForBlock = (
  editor: CustomEditor,
  format: CustomTextKey,
  isActive: boolean
): void => {
  const [blockEntry] = Editor.nodes(editor, {
    match: (n) => SlateElement.isElement(n) && Editor.isBlock(editor, n)
  })

  if (!blockEntry) {
    return
  }

  const [, path] = blockEntry

  Transforms.setNodes(
    editor,
    isActive ? { [format]: true } : { [format]: undefined },
    {
      at: path,
      match: Text.isText,
      split: true
    }
  )
}

export const syncElementLeafFormats = (
  editor: CustomEditor,
  leafFormatsWithin: CustomTextKey[] = [],
  isActive: boolean
): void => {
  leafFormatsWithin.forEach((leafFormat) => {
    if (isActive) {
      Editor.addMark(editor, leafFormat, true)
    } else {
      Editor.removeMark(editor, leafFormat)
    }

    setMarkForBlock(editor, leafFormat, isActive)
  })
}

const getActiveElementPlugin = (
  editor: CustomEditor,
  plugins: PluginsFlat = []
) => {
  return plugins.find((plugin) => {
    if (!isElementPluginType(plugin)) {
      return false
    }

    return isBlockActive(editor, plugin.elementType, 'type')
  })
}

export const toggleBlockWithRelatedLeafs = (
  editor: CustomEditor,
  format: CustomElementFormat,
  plugins: PluginsFlat = []
): void => {
  const isActive = isBlockActive(
    editor,
    format,
    isBlockStyleType(format) ? 'style' : 'type'
  )

  const targetPlugin = plugins.find(
    (item) => isElementPluginType(item) && item.elementType === format
  )

  const activeElementPlugin = getActiveElementPlugin(editor, plugins)

  Editor.withoutNormalizing(editor, () => {
    toggleBlock(editor, format)

    if (targetPlugin && isElementPluginType(targetPlugin) && targetPlugin.leafFormatsWithin?.length) {
      syncElementLeafFormats(editor, targetPlugin.leafFormatsWithin, !isActive)
      return
    }

    if (
      format === CustomFormats.PARAGRAPH &&
      activeElementPlugin && isElementPluginType(activeElementPlugin) &&
      activeElementPlugin.leafFormatsWithin?.length
    ) {
      syncElementLeafFormats(editor, activeElementPlugin.leafFormatsWithin, false)
    }
  })
}

export const isBlockActive = (
  editor: CustomEditor,
  format: CustomElementFormat,
  blockType: 'type' | 'style' = 'type'
): boolean => {
  const { selection } = editor

  if (!selection) {
    return false
  }

  const [match] = Array.from(
    Editor.nodes(editor, {
      at: Editor.unhangRange(editor, selection),
      match: (n) => {
        if (!Editor.isEditor(n) && SlateElement.isElement(n)) {
          if (blockType === 'style' && isBlockStyleElement(n)) {
            return n.blockStyleType === format
          }

          return n.type === format
        }

        return false
      }
    })
  )

  return !!match
}
