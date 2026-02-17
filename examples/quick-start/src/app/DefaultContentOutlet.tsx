import { useOutletContext } from 'react-router-dom'
import { DefaultContent } from './DefaultContent'
import type { ThemeKey } from '@kaspersky/hexa-ui/design-system'

export type LayoutOutletContext = {
  themeKey: ThemeKey
  setThemeKey: (key: ThemeKey) => void
  addMenuItem: () => void
  removeMenuItem: () => void
  toggleUser: () => void
  isAdded: boolean
}

export function DefaultContentOutlet() {
  const ctx = useOutletContext<LayoutOutletContext>()
  return <DefaultContent {...ctx} />
}
