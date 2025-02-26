import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'

import MetaData from '../__meta__/meta.json'
import { FormTrigger } from '../FormTrigger'
import { FormTriggerProps, FormTriggerType } from '../types'

const meta: Meta<FormTriggerProps> = {
  title: 'Hexa UI Components/Form trigger',
  component: FormTrigger,
  args: {
    title: 'Kaspersky Security Network',
    description: 'Kaspersky Security Network (KSN) is a cloud-based knowledge base that contains information about the reputation of files, web resources, and software. The use of data from Kaspersky Security Network ensures faster responses of the application to new threats, improves the performance of protection components, and reduces the likelihood of false positives.',
    actionText: 'Open form',
    onClick: () => alert('Form opened'),
    testId: 'form-trigger-test-id',
    klId: 'form-trigger-kl-id'
  },
  parameters: {
    badges: [badges.stable, badges.missingDesign],
    docs: {
      page: withMeta(MetaData)
    }
  }
}
export default meta

export const Basic: StoryObj<FormTriggerProps> = {
  render: (args: FormTriggerProps) => (
    <div>
      <FormTrigger {...args} type={FormTriggerType.Button} />
      <FormTrigger {...args} type={FormTriggerType.Button} />
      <FormTrigger {...args} type={FormTriggerType.Link} />
    </div>
  )
}
