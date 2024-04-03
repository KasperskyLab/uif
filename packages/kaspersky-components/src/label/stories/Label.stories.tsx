import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Label } from '../Label'
import MetaData from '../__meta__/meta.json'
import { sbHideControls } from '@helpers/storybookHelpers'
import { withMeta } from '@helpers/hocs/MetaComponent/withMeta'
import { badges } from '@sb/badges'
import { Text } from '@src/typography/text'
import { Textbox } from '@src/input'
import { LabelProps } from '@src/label/types'

const meta: Meta<LabelProps> = {
  title: 'Atoms/Label',
  component: Label,
  argTypes: {
    ...sbHideControls(['theme'])
  },
  args: {
    text: <Text type='BTM5'>Custom label text style</Text>,
    disabled: false,
    theme: 'light',
    errorText: '',
    children: <Textbox />,
    testId: 'label-test-id',
    klId: 'label-kl-id'
  },
  parameters: {
    badges: [badges.stable, badges.needsDesignReview],
    docs: {
      page: withMeta(MetaData)
    }
  }
}
export default meta

type Story = StoryObj<LabelProps>

export const Basic: Story = {}

export const Position: Story = {
  render: (args: LabelProps) => (
    <>
      <Label {...args} text='Default label text style'/>
      <Label {...args} text='Default label text style position none' position={'none'}>
        <Textbox value={'Label position none'}/>
      </Label>
      <Label {...args} text='Default label text style position top' position={'top'} />
      <Label {...args} text='Default label text style position aside' position={'aside'} />
      <Label {...args} text='Default label text style position right' position={'right'} />
    </>
  )
}

export const Type: Story = {
  render: (args: LabelProps) => (
    <>
      <Label {...args} text='Default label text style'/>
      <Label {...args} text='Default label text style type default' type={'default'}/>
      <Label {...args} text='Default label text style type top' type={'full'}/>
      <Label {...args} text='Default label text style type stretch' type={'stretch'}/>
    </>
  )
}

export const Other = {
  render: (args: LabelProps) => (
    <>
      <Label {...args} text='Default label text style with error text' errorText={'Error text'}/>
      <Label {...args} text='Default label text with tooltip' tooltip='Tooltip text ...'/>
      <Label {...args} text='Required label text' required={true}/>
      <Label
        {...args}
        text='Label with all props above, position right, type stretch'
        errorText='Error text'
        tooltip='Tooltip text ...'
        required={true}
        position='right'
        type='stretch'
      />
    </>
  )
}
