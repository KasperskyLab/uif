export const sbSetDefaultValue = (text: string) => ({
  table: { defaultValue: { summary: text } }
})

export const sbHideControl = { control: false }

export const sbHideControls = (controls: string[]) => (
  controls.reduce((acc, control) => {
    acc[control] = { control: false }
    return acc
  }, {} as Record<string, typeof sbHideControl>)
)
