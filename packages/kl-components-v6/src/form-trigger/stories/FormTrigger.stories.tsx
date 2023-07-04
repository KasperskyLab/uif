import * as React from 'react'
import { FormTrigger } from '../FormTrigger'
import { IFormTriggerProps } from '../types'
import Meta from '../__meta__/meta.json'
import { badges } from '../../../.storybook/badges'
import { withMeta } from '../../../helpers/hocs/MetaComponent/withMeta'

export default {
  title: 'Molecules/Form trigger',
  component: FormTrigger,
  parameters: {
    badges: [badges.stable, badges.needsDesignReview],
    docs: {
      page: withMeta(Meta)
    }
  },
  argTypes: {
    theme: {
      control: { type: 'select', default: 'light' },
      options: ['light', 'dark'],
      description: 'Color Palette Theme'
    },
    title: {
      control: { type: 'text' },
      description: 'Header text'
    },
    description: {
      control: { type: 'text' },
      description: 'Description'
    },
    actionText: {
      control: { type: 'text' },
      description: 'Button text'
    }
  },
  args: {
    theme: 'light',
    title: 'Kaspersky Security Network',
    description: 'Kaspersky Security Network (KSN) is a cloud-based knowledge base that contains information about the reputation of files, web resources, and software. The use of data from Kaspersky Security Network ensures faster responses of the application to new threats, improves the performance of protection components, and reduces the likelihood of false positives.',
    actionText: 'Open form',
    onClick: () => alert('Form opened')
  }
}

export const Basic = ({ ...rest }: IFormTriggerProps) => <FormTrigger
  data-component-id='test-id'
  {...rest}
/>
