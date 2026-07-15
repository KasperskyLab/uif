import { Element as SlateElement } from 'slate'

import {
  BLOCK_STYLE_TYPES,
  ELEMENT_TYPES,
  LEAF_FORMAT_TYPES,
  LIST_TYPES
} from '../constants'
import {
  CustomElement,
  CustomElementWithStyle,
  CustomFormats,
  CustomTextKey
} from '../customTypes'
import {
  BlockStylePluginType,
  BlockStyleType,
  CustomElementFormat,
  ElementPluginType,
  LeafPluginType,
  ListType,
  PluginType
} from '../types'

export const isBlockStyleType = (
  format: CustomFormats
): format is BlockStyleType => {
  return BLOCK_STYLE_TYPES.includes(format as BlockStyleType)
}

export const isListType = (format: CustomElementFormat): format is ListType => {
  return LIST_TYPES.includes(format as ListType)
}

export const isLeafType = (format: CustomFormats): format is CustomTextKey => {
  return Object.values(LEAF_FORMAT_TYPES).includes(format as CustomTextKey)
}

export const isElementType = (
  format: CustomFormats
): format is CustomElementFormat => {
  return ELEMENT_TYPES.includes(format)
}

export const isBlockStyleElement = (
  element: CustomElement
): element is CustomElementWithStyle => {
  return 'blockStyleType' in element
}

export const isElementPluginType = (
  plugin: PluginType
): plugin is ElementPluginType =>
  typeof plugin !== 'string' && 'elementType' in plugin

export const isLeafPluginType = (
  plugin: PluginType
): plugin is LeafPluginType =>
  typeof plugin !== 'string' && 'leafType' in plugin

export const isBlockStylePluginType = (
  plugin: PluginType
): plugin is BlockStylePluginType =>
  typeof plugin !== 'string' && 'blockStyleType' in plugin

export const isSlateBlockStyleElement = (node: unknown): node is CustomElementWithStyle => {
  return SlateElement.isElement(node) && 'blockStyleType' in node
}
