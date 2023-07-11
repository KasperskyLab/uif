import React from 'react'
import { ComponentStory } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { badges } from '../../.storybook/badges'
import { withMeta } from '../../helpers/hocs/MetaComponent/withMeta'
import Meta from './__meta__/meta.json'
import { Calendar } from './Calendar'
import { RangePicker } from './RangePicker'

export default {
  title: 'Atoms/DatePicker',
  component: Calendar,
  argTypes: {
    theme: {
      control: { type: 'select', default: 'light' },
      options: ['light', 'dark'],
      description: 'Color Palette Theme'
    }
  },
  args: {
    theme: 'light'
  },
  parameters: {
    badges: [badges.stable, badges.needsDesignReview],
    docs: {
      page: withMeta(Meta)
    }
  }
}

export const Basic: ComponentStory<typeof Calendar> = ({ ...rest }) => {
  return (
    <Calendar onChange={action('Change')} {...rest} />
  )
}

export const Preset: ComponentStory<typeof Calendar> = ({ ...rest }) => {
  return (
    <Calendar onChange={action('Change')} presets={[{ title: 'Today', value: new Date() }]} {...rest} />
  )
}

export const Range: ComponentStory<typeof RangePicker> = ({ ...rest }) => {
  return (
    <RangePicker {...rest} />
  )
}

Basic.parameters = {
  docs: {
    storyDescription: 'Basic Component Usage Example'
  }
}
