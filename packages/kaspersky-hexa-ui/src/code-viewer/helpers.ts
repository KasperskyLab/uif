import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

export const reactSvgComponentToMarkupString = (
  component: React.ComponentType, props: Record<string, unknown>
): string => {
  return `data:image/svg+xml,${encodeURIComponent(
    renderToStaticMarkup(React.createElement(component, props))
  )}`
}
