import { ThemedPalette, ThemedPaletteProps } from '@design-system/palette'
import { PopupConfigProvider } from '@helpers/components/PopupConfigProvider'
import { StoryColumn } from '@sb/StoryComponents'
import { Textbox } from '@src/input'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'

import { Checkbox as CheckboxComponent } from '../Checkbox'
import { CheckboxProps } from '../types'

import { checkboxStorySettings } from './Checkbox.stories'

const meta = {
  title: 'Hexa UI Components/Checkbox/Stories',
  component: CheckboxComponent,
  tags: ['!autodocs'],
  ...checkboxStorySettings
} satisfies Meta<typeof CheckboxComponent>

export default meta

type StoryCheckbox = StoryObj<CheckboxProps>

export const Basic: StoryCheckbox = {
  render: (args: CheckboxProps) => (
    <StoryColumn>
      <CheckboxComponent {...args}>
        Check me
      </CheckboxComponent>
      <PopupConfigProvider getPopupContainer={() => document.body}>
        <CheckboxComponent
          // eslint-disable-next-line @stylistic/max-len
          tooltip="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquet scelerisque ligula, eget aliquet sem elementum id. Suspendisse ornare scelerisque arcu, non tincidunt quam. Vestibulum a laoreet erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur a gravida quam. Cras varius, dui quis euismod ultrices, eros leo maximus nibh, a sagittis dolor augue condimentum libero. Duis tortor est, placerat ut porta in, sagittis eu ante. Sed viverra leo magna, sed volutpat diam consequat id. Nulla pharetra nibh sit amet tempus ornare. Nunc ut quam ante."
          {...args}
        >
          tooltip
        </CheckboxComponent>
      </PopupConfigProvider>
      <CheckboxComponent checked {...args}>
        Im checked
      </CheckboxComponent>
      <CheckboxComponent
        checked={false}
        indeterminate
        {...args}
      >
        Im indeterminate
      </CheckboxComponent>
      <CheckboxComponent
        description="Some description"
        {...args}
      >
        With description
      </CheckboxComponent>
      <CheckboxComponent
        description="Some description"
        dependentElement={
          <Textbox placeholder="dependentElement" />
        }
        {...args}
      >
        With description and dependentElement
      </CheckboxComponent>
    </StoryColumn>
  )
}

type PaletteStory = StoryObj<ThemedPaletteProps>
export const ColorTokens: PaletteStory = {
  args: { source: componentColors.checkbox },
  render: args => <ThemedPalette {...args} />
}
