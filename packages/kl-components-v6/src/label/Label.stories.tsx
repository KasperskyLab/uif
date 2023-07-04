import React from 'react'
import { badges } from '../../.storybook/badges'
import { StoryLayout } from '../../.storybook/StoryComponents'
import { Label } from './Label'
import { withMeta } from '../../helpers/hocs/MetaComponent/withMeta'
import Meta from './__meta__/meta.json'
import { useTheme } from '../../design-system/theme/hooks'
import { Textbox } from '../input'
import { Text } from '../typography/text'

export default {
  title: 'Atoms/Label',
  component: Label,
  argTypes: {
    theme: {
      control: { type: 'select', default: 'light' },
      options: ['light', 'dark'],
      description: 'Color Palette Theme'
    }
  },
  args: {
    text: <Text type='BTM5'>Custom label text style</Text>,
    disabled: false,
    theme: 'light',
    errorText: ''
  },
  parameters: {
    badges: [badges.stable, badges.needsDesignReview],
    docs: {
      page: withMeta(Meta)
    }
  }
}

export const BasicTemplate = ({ ...rest }) => {
  const theme = useTheme()
  return (
    <StoryLayout theme={theme.key}>
      <Label {...rest} text='Default label text style'>
        <Textbox/>
      </Label>
      <Label {...rest}>
        <Textbox/>
      </Label>
      <Label {...rest} text='Default label text style' tooltip='Tooltip text ...'>
        <Textbox/>
      </Label>
    </StoryLayout>
  )
}

BasicTemplate.parameters = {
  docs: {
    storyDescription: 'Basic Component Usage Example'
  }
}
