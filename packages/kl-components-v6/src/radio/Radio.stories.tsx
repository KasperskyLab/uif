import React, { useState } from 'react'

import { ComponentStory } from '@storybook/react'
import { badges } from '../../.storybook/badges'
import { Radio } from './Radio'
import { StoryLayout } from '../../.storybook/StoryComponents'
import { withMeta } from '../../helpers/hocs/MetaComponent/withMeta'
import Meta from './meta.json'
import { useTheme } from '../../design-system/theme/hooks'

export default {
  title: 'Atoms/Radio',
  component: Radio,
  args: {
    theme: 'light',
    disabled: false,
    vertical: true
  },
  parameters: {
    badges: [badges.stable, badges.needsDesignReview],
    docs: {
      page: withMeta(Meta)
    }
  }
}

const options = [
  { label: 'First', value: '1' },
  { label: 'Second', value: '2' }
]

export const Basic: ComponentStory<typeof Radio> = ({
  theme: themeProps,
  ...rest
}) => {
  const [radioState, changeRadioState] = useState('2')
  const theme = useTheme()
  return (
    <StoryLayout theme={theme.key}>
      <Radio
        {...rest}
        options={options}
        name="first"
        data-component-id="test-id"
        onChange={(e) => {
          changeRadioState(e.target.value)
        }}
        value={radioState}
      />
    </StoryLayout>
  )
}

export const RadioModes: ComponentStory<typeof Radio> = ({
  theme: themeProps,
  ...rest
}) => {
  const [radioState, changeRadioState] = useState('2')
  const theme = useTheme()
  return (
    <StoryLayout theme={theme.key}>
      <Radio
        {...rest}
        options={options}
        name="key"
        onChange={(e) => {
          changeRadioState(e.target.value)
        }}
        value={radioState}
      />
      <Radio
        {...rest}
        options={options}
        optionType="button"
        name="key"
        onChange={(e) => {
          changeRadioState(e.target.value)
        }}
        value={radioState}
      />
    </StoryLayout>
  )
}

Basic.parameters = {
  docs: {
    storyDescription: 'Basic Component Usage Example'
  }
}
