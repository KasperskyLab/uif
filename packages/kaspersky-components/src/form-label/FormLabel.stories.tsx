import React from 'react'
import { Story, Meta } from '@storybook/react'
import { StoryLayout } from '@sb/StoryComponents'
import { withMeta } from '@helpers/hocs/MetaComponent/withMeta'
import MetaData from './__meta__/meta.json'
import { useTheme } from '@design-system/theme/hooks'
import { FormLabel } from './FormLabel'

type StoryArguments = {
  mode: 'primary' | 'secondary',
  text: string,
  required: boolean,
  disabled: boolean,
  tooltip: string
};

export default {
  title: 'Molecules/Form Label',
  viewMode: 'docs',
  parameters: {
    docs: {
      page: withMeta(MetaData)
    }
  },
  argTypes: {
    text: {
      defaultValue: 'My text',
      control: { type: 'text' }
    },
    mode: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' }
    },
    required: {
      control: { type: 'boolean' }
    },
    disabled: {
      control: { type: 'boolean' }
    },
    tooltip: {
      defaultValue: 'Type something',
      control: { type: 'text' }
    }
  },
  args: {
    mode: 'primary',
    required: false,
    disabled: false
  }
} as Meta

export const Figma: Story = () => (
  <iframe
    style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
    width="100%"
    height={450}
    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F9hiN2DbkqbxbhR9EWRI1VK%2F%255BB2B%255D-UI-KIT%3Ftype%3Ddesign%26node-id%3D45814%253A330383%26t%3DDFyrId4CiMpn7Jt4-1"
    allowFullScreen
  ></iframe>
)

export const Default: Story<StoryArguments> = ({
  required,
  mode,
  tooltip,
  disabled,
  text
}) => {
  const theme = useTheme()

  return (
    <StoryLayout theme={theme.key}>
      <FormLabel
        disabled={disabled}
        mode={mode}
        required={required}
        tooltip={tooltip.length ? tooltip : undefined}
      >
        <span style={{ whiteSpace: 'pre-line' }}>{text}</span>
      </FormLabel>
    </StoryLayout>
  )
}
