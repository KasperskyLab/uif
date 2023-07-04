import React from 'react'
import { Label } from '../Label'
import Meta from '../__meta__/meta.json'
import { withMeta } from '@helpers/hocs/MetaComponent/withMeta'
import { badges } from '@sb/badges'
import { StoryLayout } from '@sb/StoryComponents'
import { useTheme } from '@design-system/theme/hooks'
import { Text } from '@src/typography/text'
import { Textbox } from '@src/input'

export default {
  title: 'Atoms/Label',
  component: Label,
  argTypes: {
    theme: {
      control: { type: 'select', default: 'light' },
      options: ['light', 'dark'],
      description: 'Theme'
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

export const Basic = ({ ...rest }) => {
  const theme = useTheme()
  return (
    <StoryLayout theme={theme.key}>
      <Label {...rest} >
        <Textbox/>
      </Label>
    </StoryLayout>
  )
}

export const Position = () => {
  const theme = useTheme()
  return (
    <StoryLayout theme={theme.key}>
      <Label text='Default label text style'>
        <Textbox/>
      </Label>
      <Label text='Default label text style position none' position={'none'}>
        <Textbox value={'Label position none'}/>
      </Label>
      <Label text='Default label text style position top' position={'top'}>
        <Textbox/>
      </Label>
      <Label text='Default label text style position aside' position={'aside'}>
        <Textbox/>
      </Label>
      <Label text='Default label text style position right' position={'right'}>
        <Textbox/>
      </Label>
    </StoryLayout>
  )
}

export const Type = () => {
  const theme = useTheme()
  return (
    <StoryLayout theme={theme.key}>
      <Label text='Default label text style'>
        <Textbox/>
      </Label>
      <Label text='Default label text style type default' type={'default'}>
        <Textbox/>
      </Label>
      <Label text='Default label text style type top' type={'full'}>
        <Textbox/>
      </Label>
      <Label text='Default label text style type stretch' type={'stretch'}>
        <Textbox/>
      </Label>
    </StoryLayout>
  )
}

export const Other = () => {
  const theme = useTheme()
  return (
    <StoryLayout theme={theme.key}>
      <Label text='Default label text style with error text' errorText={'Error text'}>
        <Textbox/>
      </Label>
      <Label text='Default label text with tooltip' tooltip='Tooltip text ...'>
        <Textbox/>
      </Label>
      <Label text='Required label text' required={true}>
        <Textbox/>
      </Label>
      <Label
        text='Label with all props above, position right, type stretch'
        errorText='Error text'
        tooltip='Tooltip text ...'
        required={true}
        position='right'
        type='stretch'
      >
        <Textbox/>
      </Label>
    </StoryLayout>
  )
}

Basic.parameters = {
  docs: {
    storyDescription: 'Basic usage example'
  }
}
