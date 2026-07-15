import {
  BaseEditor,
  BaseRange,
  Descendant,
  Element,
  Range
} from 'slate'
import { HistoryEditor } from 'slate-history'
import { ReactEditor } from 'slate-react'

export enum CustomFormats {
  BOLD = 'bold',
  ITALIC = 'italic',
  CODE = 'code',
  UNDERLINE = 'underline',
  LIST_ITEM = 'list-item',
  TEXT = 'text',
  PARAGRAPH = 'paragraph',
  BULLETED_LIST = 'bulleted-list',
  NUMBERED_LIST = 'numbered-list',
  HEADING_ONE = 'heading-one',
  HEADING_TWO = 'heading-two',
  HEADING_THREE = 'heading-three',
  ALIGN_LEFT = 'left',
  ALIGN_CENTER = 'center',
  ALIGN_RIGHT = 'right',
  LINK = 'link'
}

export type BlockStyleElement = {
  blockStyleType?: string
}

export type BulletedListElement = BlockStyleElement & {
  type: CustomFormats.BULLETED_LIST,
  children: Descendant[]
}

export type HeadingElement = BlockStyleElement & {
  type: CustomFormats.HEADING_ONE,
  children: Descendant[],
  align?: string
}

export type HeadingTwoElement = BlockStyleElement & {
  type: CustomFormats.HEADING_TWO,
  children: Descendant[],
  align?: string
}

export type HeadingThreeElement = BlockStyleElement & {
  type: CustomFormats.HEADING_THREE,
  children: Descendant[],
  align?: string
}

export type ParagraphElement = BlockStyleElement & {
  type: CustomFormats.PARAGRAPH,
  children: Descendant[],
  align?: string
}

export type ListItemElement = BlockStyleElement & {
  type: CustomFormats.LIST_ITEM,
  children: Descendant[]
}

export type NumberedListItemElement = BlockStyleElement & {
  type: CustomFormats.NUMBERED_LIST,
  children: Descendant[]
}

export type LinkElement = BlockStyleElement & {
  type: CustomFormats.LINK,
  url: string,
  children: Descendant[],
  align?: string
}

export type CustomElementWithStyle =
  | HeadingElement |
  HeadingTwoElement |
  HeadingThreeElement |
  ListItemElement |
  NumberedListItemElement |
  BulletedListElement |
  LinkElement

export type CustomElement =
  | HeadingElement |
  HeadingTwoElement |
  HeadingThreeElement |
  ParagraphElement |
  ListItemElement |
  NumberedListItemElement |
  BulletedListElement |
  LinkElement

export type CustomElementType = CustomElement['type']

export type CustomText = {
  [CustomFormats.BOLD]?: boolean,
  [CustomFormats.CODE]?: boolean,
  [CustomFormats.UNDERLINE]?: boolean,
  // MARKDOWN PREVIEW SPECIFIC LEAF
  [CustomFormats.TEXT]: string
}

export type CustomTextKey = keyof Omit<CustomText, 'text'>

export type EmptyText = {
  text: string
}

export type CustomEditor = BaseEditor &
  ReactEditor &
  HistoryEditor & {
    nodeToDecorations?: Map<Element, Range[]>
  }

declare module 'slate' {
  interface CustomTypes {
    Editor: CustomEditor,
    Element: CustomElement,
    Text: CustomText,
    Range: BaseRange & {
      [key: string]: unknown
    }
  }
}
