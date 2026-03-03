import { Editor } from 'slate'

import { BLOCK_STYLE_TYPES, ELEMENT_TYPES, LEAF_FORMAT_TYPES, LIST_TYPES } from '../constants'
import { CustomEditor, CustomElement, CustomElementWithStyle, CustomFormats, CustomTextKey } from '../customTypes'
import {
  BlockStylePluginType,
  BlockStyleType,
  CustomElementFormat,
  ElementPluginType,
  LeafPluginType,
  ListType
} from '../types'

export const isBlockStyleType = (format: CustomFormats): format is BlockStyleType => {
  return BLOCK_STYLE_TYPES.includes(format as BlockStyleType)
}

export const isListType = (format: CustomElementFormat): format is ListType => {
  return LIST_TYPES.includes(format as ListType)
}

export const isLeafType = (format: CustomFormats): format is CustomTextKey => {
  return Object.values(LEAF_FORMAT_TYPES).includes(format as CustomTextKey)
}

export const isElementType = (format: CustomFormats): format is CustomElementFormat => {
  return ELEMENT_TYPES.includes(format)
}

export const isBlockStyleElement = (element: CustomElement): element is CustomElementWithStyle => {
  return 'blockStyleType' in element
}

export const isMarkActive = (editor: CustomEditor, format: CustomTextKey): boolean => {
  const marks = Editor.marks(editor)
  return marks ? marks[format] === true : false
}

export const isElementPluginType = (
  plugin: LeafPluginType | ElementPluginType | BlockStylePluginType
): plugin is ElementPluginType => 'elementType' in plugin

export const isLeafPluginType = (
  plugin: LeafPluginType | ElementPluginType | BlockStylePluginType
): plugin is LeafPluginType => 'leafType' in plugin

export const isBlockStylePluginType = (
  plugin: LeafPluginType | ElementPluginType | BlockStylePluginType
): plugin is BlockStylePluginType => 'blockStyleType' in plugin
