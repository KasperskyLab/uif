import React from 'react'
import styled from 'styled-components'
import { Meta, StoryObj } from '@storybook/react'
import { Field, Textbox, Select } from '@src/index'
import { FieldProps } from '../types'
import { withMeta } from '@helpers/hocs/MetaComponent/withMeta'
import MetaData from '../__meta__/meta.json'
import { badges } from '@sb/badges'
import { sbHideControls } from '@helpers/storybookHelpers'
import { LabelType } from '@design-system/tokens'

const meta: Meta<FieldProps> = {
  title: 'Molecules/Field/FieldDev',
  component: Field,
  argTypes: {
    ...sbHideControls(['theme', 'control'])
  },
  args: {
    labelPosition: 'before',
    label: 'Label',
    control: (<Textbox />),
    required: false,
    onHelpClick: undefined,
    testId: 'field-test-id',
    klId: 'field-kl-id'
  },
  parameters: {
    badges: [badges.stable, badges.dev],
    docs: {
      page: withMeta(MetaData)
    }
  }
}
export default meta

type Story = StoryObj<FieldProps>

const labelTypes: LabelType[] = ['default', 'full', 'stretch']

const Block = styled.div`width: 910px; background: #FAC`

const SelectBugTemplate = (args: FieldProps) => (
  <>
    <Block>910px</Block>
    <Field
      {...args}
      control={<Select value={args?.labelType} />}
    />
    <Field
      {...args}
      control={<Select value={args?.labelType?.repeat(50)} />}
    />
  </>
)

export const SelectLongTextBug: Story = {
  render: (args) => (
    <>
      {labelTypes.map(type => (
        <SelectBugTemplate {...args} key={type} labelType={type} />
      ))}
    </>
  )
}

export const EmptyLabel: Story = {
  render: (args: FieldProps) => (
    <>
      <Block>910px</Block>
      {labelTypes.map(type => (
        <Field
          key={type}
          {...args}
          labelType={type}
          control={<Textbox placeholder={`labelType: ${type}`}/>}
        />
      ))}
    </>
  ),
  args: {
    label: '',
    tooltip: 'Tooltip text'
  }
}
