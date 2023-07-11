import React, { useState } from 'react'
import { ComponentStory } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { badges } from '../../.storybook/badges'
import { StoryColumn, StoryLayout } from '../../.storybook/StoryComponents'
import { Toggle } from './Toggle'
import { Text } from '../typography/text'
import { withMeta } from '../../helpers/hocs/MetaComponent/withMeta'
import Meta from './meta.json'
import { useTheme } from '../../design-system/theme/hooks'

export default {
  title: 'Atoms/Toggle',
  component: Toggle,
  argTypes: {
    theme: {
      control: { type: 'select', default: 'light' },
      options: ['light', 'dark'],
      description: 'Color Palette Theme'
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Is the switch disabled'
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Loader visible'
    }
  },
  args: {
    theme: 'light',
    disabled: false,
    loading: false
  },
  parameters: {
    badges: [badges.stable, badges.needsDesignReview],
    docs: {
      page: withMeta(Meta)
    }
  }
}

export const Basic: ComponentStory<typeof Toggle> = ({
  theme: themeProps,
  ...rest
}) => {
  const theme = useTheme()
  return (
    <StoryLayout theme={theme.key}>
      <StoryColumn>
        <Toggle size='small' {...rest}>
          Toggle me small
        </Toggle>
        <Toggle size='default' {...rest}>Toggle me default</Toggle>
      </StoryColumn>
    </StoryLayout>
  )
}

Basic.parameters = {
  docs: {
    storyDescription: 'Basic Component Usage Example'
  }
}

export const Control: ComponentStory<typeof Toggle> = ({ theme: themeProps, ...rest }) => {
  const [first, setFirst] = useState<boolean>(true)
  const [second, setSecond] = useState<boolean>(true)
  const getLabel = (value: boolean) => (value ? 'On' : 'Off')
  const changeState = action('update state')
  const theme = useTheme()
  return (
    <StoryLayout theme={theme.key}>
      <StoryColumn>
        <Toggle
          {...rest}
          checked={first}
          onChange={(value) => {
            setFirst(value)
            changeState({ first: value })
          }}
        >
          {getLabel(first)}
        </Toggle>
        {!first && <Text>second onChange not work</Text>}
        <Toggle
          {...rest}
          checked={second}
          onChange={(value) => {
            if (!first) return
            setSecond(value)
            changeState({ second: value })
          }}
        >
          {getLabel(first)}
        </Toggle>
      </StoryColumn>
    </StoryLayout>
  )
}

Control.parameters = {
  docs: {
    storyDescription: 'Controllable Component Example'
  }
}
