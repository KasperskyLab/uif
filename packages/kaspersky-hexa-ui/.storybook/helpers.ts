import { Addon_ArgType } from 'storybook/internal/types'

export const sbSetDefaultValue = (text: string) => ({
  table: { defaultValue: { summary: text } }
})

export const sbHideControl = { control: false } as SBArgType

export const sbHideControls = (controls: string[]) => (
  controls.reduce((acc, control) => {
    acc[control] = { control: false }
    return acc
  }, {} as SBArgTypes)
)

export type PropsWithTooltip<T> = T & { tooltip: string }

export type SBArgType = Addon_ArgType
export type SBArgTypes = { [key in string]: SBArgType }
export type SBArgTypeControl = SBArgType['control']

export function sbFixArrayArgs<T extends Record<string, any>> (args: T, arrayKeys: (keyof T)[]): T {
  const out = { ...args }

  for (const key of arrayKeys) {
    if (!Array.isArray(out[key])) {
      delete out[key]
    }
  }

  return out
}

export function sbMergeActions<T extends Record<string, any>> (args: T, actions: Partial<T>): T {
  const out = { ...args }

  for (const key in actions) {
    const addonAction = out[key]
    const action = actions[key]

    // @ts-ignore
    out[key] = (...args2) => {
      addonAction?.(...args2)
      // @ts-ignore
      action(...args2)
    }
  }

  return out
}
