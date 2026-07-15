import * as Icons16 from '@kaspersky/hexa-ui-icons/16'
import React from 'react'

import * as HexaUI from './documentationHexaScope'

const omitDefaultExport = <T extends Record<string, unknown>>(module: T) => {
  const { default: _, ...rest } = module
  return rest
}

const iconsScope = omitDefaultExport(Icons16 as Record<string, unknown>)
const hexaScope = omitDefaultExport(HexaUI as Record<string, unknown>)

/** react-live scope для MDX-документации: Hexa UI + иконки 16px (компоненты приоритетнее при совпадении имён). */
export const documentationLiveScope = {
  React,
  ...iconsScope,
  ...hexaScope,
  // Empty-state Placeholder component vs 16px icon — в live-примерах почти всегда нужна иконка.
  PlaceholderComponent: hexaScope.Placeholder,
  Placeholder: iconsScope.Placeholder,
  exports: {}
} as Record<string, unknown>

export const mergeDocumentationLiveScope = (
  additional?: Record<string, unknown>
): Record<string, unknown> => ({
  ...documentationLiveScope,
  ...additional
})
