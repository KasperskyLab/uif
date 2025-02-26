import { LabelType } from '@design-system/tokens'
import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { sbHideControls } from '@sb/helpers'
import { Button, Field, FieldSet, Select, Sidebar, Textbox } from '@src/index'
import { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import styled from 'styled-components'

import MetaData from '../__meta__/meta.json'
import { FieldProps } from '../types'

const meta: Meta<FieldProps> = {
  title: 'Hexa UI Components/Field/FieldDev',
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
    badges: [badges.stable, badges.reviewedByDesign],
    docs: {
      page: withMeta(MetaData)
    }
  }
}
export default meta

type Story = StoryObj<FieldProps>

const labelTypes: LabelType[] = ['default', 'full', 'stretch']

const Block = styled.div`width: 910px; background: #FAC;`

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
  render: (args: FieldProps) => (
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

export const InSmallSidebar: Story = {
  render: (args: FieldProps) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
      <>
        <Button text="Open sidebar" onClick={() => setIsOpen(true)}/>
        <Sidebar
          visible={isOpen}
          onClose={() => setIsOpen(false)}
          title="Sidebar"
          size="extraSmall"
        >
          <FieldSet items={[
            <Field key="1" control={args.control} label={args.label} />,
            <Field key="2" control={args.control} label={args.label} labelPosition="before"/>
          ]}/>
        </Sidebar>
      </>
    )
  }
}
