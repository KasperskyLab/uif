import { Editor, Element as SlateElement, Transforms } from 'slate'

import { CustomEditor, CustomFormats, CustomTextKey } from '../customTypes'
import { isBlockStyleElement, isBlockStyleType, isListType, isMarkActive } from '../helpers'
import { CustomElementFormat } from '../types'

export const toggleBlock = (editor: CustomEditor, format: CustomElementFormat): void => {
  const isActive = isBlockActive(editor, format, isBlockStyleType(format) ? 'style' : 'type')
  const isList = isListType(format)

  Transforms.unwrapNodes(editor, {
    match: (n) => !Editor.isEditor(n) && SlateElement.isElement(n) && isListType(n.type) && !isBlockStyleType(format),
    split: true
  })
  let newProperties: Partial<SlateElement>
  if (isBlockStyleType(format)) {
    newProperties = {
      blockStyleType: isActive ? undefined : format
    }
  } else {
    newProperties = {
      type: isActive ? CustomFormats.PARAGRAPH : isList ? CustomFormats.LIST_ITEM : format
    }
  }
  Transforms.setNodes<SlateElement>(editor, newProperties)

  if (!isActive && isList) {
    const block = { type: format, children: [] }
    Transforms.wrapNodes(editor, block)
  }
}

export const toggleMark = (editor: CustomEditor, format: CustomTextKey): void => {
  const isActive = isMarkActive(editor, format)

  if (isActive) {
    Editor.removeMark(editor, format)
  } else {
    Editor.addMark(editor, format, true)
  }
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
