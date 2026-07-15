import { DocsContext } from '@storybook/addon-docs/blocks'
import { ThemeKey } from '@design-system/types'
import { ContextType, useContext, useEffect, useState } from 'react'
import { GLOBALS_UPDATED } from 'storybook/internal/core-events'

export type StorybookGlobals = Record<string, unknown>

type DocsContextValue = ContextType<typeof DocsContext>

const readGlobalsFromDocsContext = (docsContext: DocsContextValue | null): StorybookGlobals => {
  if (!docsContext) {
    return {}
  }

  try {
    const [story] = docsContext.componentStories()
    if (story) {
      return docsContext.getStoryContext(story).globals ?? {}
    }
  } catch {
    // DocsContext may be incomplete during the first render pass.
  }

  return {}
}

export const useStorybookGlobals = (): StorybookGlobals => {
  const docsContext = useContext(DocsContext)

  const [globals, setGlobals] = useState<StorybookGlobals>(() => readGlobalsFromDocsContext(docsContext))

  useEffect(() => {
    if (!docsContext?.channel) {
      return
    }

    const onGlobalsUpdated = ({ globals: nextGlobals }: { globals: StorybookGlobals }) => {
      setGlobals(nextGlobals)
    }

    docsContext.channel.on(GLOBALS_UPDATED, onGlobalsUpdated)
    return () => {
      docsContext.channel.off(GLOBALS_UPDATED, onGlobalsUpdated)
    }
  }, [docsContext])

  return globals
}

export const useStorybookThemeKey = (fallback: ThemeKey): ThemeKey => {
  const theme = useStorybookGlobals().theme

  if (theme === ThemeKey.Dark) {
    return ThemeKey.Dark
  }

  if (theme === ThemeKey.Light) {
    return ThemeKey.Light
  }

  return fallback
}
