import { badges } from '@sb/badges'
import { buildStoryArgTypes, getControlsInclude } from '@sb/components/Documentation'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import MetaData from '../__meta__/meta.json'
import { WizardPageProps } from '../types'
import { Wizard as WizardComponent } from '../Wizard'

import { defaultArgs, wizardPropPresentation } from './Wizard.controls'

const steps: WizardPageProps['steps'] = [
  { name: 'Шаг 1', description: 'Описание шага', render: () => <>Содержимое первого шага</> },
  { name: 'Шаг 2', render: () => <>Содержимое второго шага</> },
  { name: 'Шаг 3', render: () => <>Содержимое третьего шага</> }
]

export const wizardStorySettings: Meta<WizardPageProps> = {
  argTypes: buildStoryArgTypes(wizardPropPresentation),
  args: defaultArgs,
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    design: MetaData.pixsoView
  }
}

const meta = {
  title: 'Hexa UI Components/Wizard',
  component: WizardComponent as React.FC<WizardPageProps>,
  tags: ['!autodocs'],
  includeStories: ['Playground'],
  excludeStories: ['steps', 'wizardStorySettings'],
  ...wizardStorySettings,
  decorators: [
    (Story, context) => <div style={{ width: '100%', height: '100%' }}><Story {...context} /></div>
  ]
} satisfies Meta<WizardPageProps>

export default meta

type Story = StoryObj<WizardPageProps>

export const Playground: Story = {
  name: 'Playground',
  render: (args) => <WizardComponent view="page" {...args} steps={steps} />,
  parameters: {
    controls: {
      include: getControlsInclude(wizardPropPresentation),
      sort: 'none'
    }
  }
}
