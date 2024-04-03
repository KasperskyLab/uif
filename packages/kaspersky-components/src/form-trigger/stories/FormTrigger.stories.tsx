import * as React from 'react'
import { FormTrigger } from '../FormTrigger'
import { FormTriggerProps } from '../types'
import MetaData from '../__meta__/meta.json'
import { badges } from '@sb/badges'
import { withMeta } from '@helpers/hocs/MetaComponent/withMeta'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<FormTriggerProps> = {
  title: 'Molecules/Form trigger',
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
    badges: [badges.stable, badges.needsDesignReview],
    docs: {
      page: withMeta(MetaData)
    }
  }
}
export default meta

export const Basic: StoryObj<FormTriggerProps> = {
  render: (args: FormTriggerProps) => (
    <>
      <FormTrigger {...args} />
      <FormTrigger {...args} />
    </>
  )
}
