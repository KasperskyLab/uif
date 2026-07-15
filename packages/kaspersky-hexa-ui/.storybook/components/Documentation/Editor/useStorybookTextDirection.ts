import { useStorybookGlobals } from '../useStorybookGlobals'

export type TextDirection = 'ltr' | 'rtl'

export const useStorybookTextDirection = (): TextDirection => {
  const direction = useStorybookGlobals().direction

  return direction === 'rtl' ? 'rtl' : 'ltr'
}
