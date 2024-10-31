import { Addon_ArgType } from '@storybook/types'

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

export type SBArgType = Addon_ArgType
export type SBArgTypes = { [key in string]: SBArgType }
export type SBArgTypeControl = SBArgType['control']
