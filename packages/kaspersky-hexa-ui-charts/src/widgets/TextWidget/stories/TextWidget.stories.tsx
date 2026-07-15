import { withMeta } from '@sb/components/Meta'
import { Meta, StoryObj } from '@storybook/react'
import { action } from 'storybook/actions'

import { CustomFormats, type Descendant } from '@kaspersky/hexa-ui'

import MetaData from '../__meta__/meta.json'
import { TextWidget } from '../TextWidget'

import { customTextStub, text } from './textWidgetStub'

const meta = {
  title: 'Widget/TextWidget',
  component: TextWidget,
  args: {
    initialValue: [
      { type: CustomFormats.PARAGRAPH, children: [{ text: text }] },
      { type: CustomFormats.PARAGRAPH, children: [{ text: text }] }
    ],
    placeholder: 'This is placeholder',
    onOverlayClick: action('onClick'),
    onChange: action('onChange'),
    readonly: false,
    editTrigger: 'Overlay component trigger',
    limit: 2000,
    linkPopupText: { label: 'Адрес', buttonText: { ok: 'Сохранить', cancel: 'Отменить' } },
    width: '500px'
  },
  parameters:{
    docs: {
      page: withMeta(MetaData)
    }
  }
} satisfies Meta<typeof TextWidget> 

export default meta

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    readonly: false,
    initialValue: []
  }
}

export const WithText: Story = {
  args: {
    readonly: false,
    initialValue: customTextStub as Descendant[]
  }
}

export const CustomTextWithLimit: Story = {
  args: {
    readonly: false,
    initialValue: customTextStub as Descendant[],
    limit: 100
  }
}
