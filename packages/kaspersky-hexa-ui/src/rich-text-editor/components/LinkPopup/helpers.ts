import {
  Editor,
  Element,
  Range,
  Transforms
} from 'slate'

import { CustomEditor, CustomFormats, LinkElement } from '../../customTypes'

export const wrapLink = (url: string, editor: CustomEditor): void => {
  const { selection } = editor
  const isCollapsed = selection && Range.isCollapsed(selection)
  const link: LinkElement = {
    type: CustomFormats.LINK,
    url,
    children: isCollapsed ? [{ text: url }] : []
  }

  if (isCollapsed) {
    Transforms.insertNodes(editor, link)
  } else {
    Transforms.wrapNodes(editor, link, { split: true })
    Transforms.collapse(editor, { edge: 'end' })
  }

  if (editor.selection) {
    const [linkEntry] = Editor.nodes(editor, {
      match: (node) => Element.isElement(node) && node.type === CustomFormats.LINK
    })

    if (linkEntry) {
      Transforms.move(editor)
    }
  }
}

export const unwrapLink = (editor: CustomEditor): void => {
  Transforms.unwrapNodes(editor, {
    match: n => Element.isElement(n) && n.type === CustomFormats.LINK
  })
}
