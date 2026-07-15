import { badges } from '@sb/badges'
import {
  buildStoryArgTypes,
  getControlsInclude
} from '@sb/components/Documentation'
import { withMeta } from '@sb/components/Meta'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import MetaData from '../__meta__/meta.json'
import { Select as SelectComponent } from '../Select'
import { OptionType, SelectProps } from '../types'

import {
  defaultArgs,
  selectPropPresentation
} from './Select.controls'

export const selectOptions: OptionType[] = [
  'This is a looooong long tag content that should be truncated on maxChars prop.',
  'Moscow',
  'Saint Petersburg',
  'Novosibirsk',
  'Yekaterinburg',
  'Kazan',
  'Omsk',
  'Samara',
  'Rostov',
  'Ufa',
  'Krasnoyarsk',
  'Voronezh',
  'Perm',
  'Volgograd',
  'Krasnodar',
  'Saratov',
  'Tyumen',
  'Tolyatti',
  'Izhevsk',
  'Barnaul'
].map((city, index) => ({
  label: city,
  value: index + 1,
  ...(index % 3 === 0
    ? (
        index % 6 === 0
          ? { description: `long long long long long description default text #${index + 1}` }
          : { description: `description default text #${index + 1}` }
      )
    : {})
}))

export const selectStorySettings: Meta<SelectProps> = {
  argTypes: buildStoryArgTypes(selectPropPresentation),
  args: {
    ...defaultArgs,
    options: selectOptions,
    testId: 'select-test-id',
    klId: 'select-kl-id',
    dropdownMaxHeight: 256,
    usePortal: true
  },
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    docs: {
      page: withMeta(MetaData)
    },
    design: MetaData.pixsoView
  }
}

const meta = {
  title: 'Hexa UI Components/Select',
  component: SelectComponent,
  tags: ['!autodocs'],
  includeStories: ['Playground'],
  excludeStories: ['selectStorySettings', 'selectOptions'],
  ...selectStorySettings
} satisfies Meta<SelectProps>

export default meta

type Story = StoryObj<SelectProps>

export const Playground: Story = {
  name: 'Playground',
  render: (args) => (
    <div style={{ maxWidth: 300 }}>
      <SelectComponent {...args} />
    </div>
  ),
  parameters: {
    controls: {
      include: getControlsInclude(selectPropPresentation),
      sort: 'none'
    }
  }
}
