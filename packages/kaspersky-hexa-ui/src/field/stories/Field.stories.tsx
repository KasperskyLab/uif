import { LabelType } from '@design-system/tokens'
import { badges } from '@sb/badges'
import { FieldWithCustomLabelInfo } from '@sb/components/Warnings'
import { withDesignControls } from '@sb/components/designControls'
import { withMeta } from '@sb/components/Meta'
import { sbHideControls } from '@sb/helpers'
import { Space } from '@src/space'
import {
  Checkbox,
  Field,
  H4,
  Radio,
  SectionMessage,
  SegmentedButton,
  Text,
  Textbox,
  Toggle
} from '@src/index'
import { Meta, StoryObj } from '@storybook/react-webpack5'
import React, { useState } from 'react'
import styled from 'styled-components'

import MetaData from '../__meta__/meta.json'
import { FieldProps, LabelPosition, LayoutPreset } from '../types'

const meta: Meta<FieldProps> = {
  title: 'Hexa UI Components/Field',
  component: Field,
  argTypes: {
    ...sbHideControls(['theme', 'control']),
    getPopupContainer: {
      table: { type: { summary: '(triggerNode: HTMLElement) => HTMLElement' } }
    },
    gridPreset: {
      control: { type: 'select' },
      options: Object.values(LayoutPreset)
    },
    tooltip: {
      control: 'text'
    }
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

const labelPositions: LabelPosition[] = ['top', 'before', 'after']
const labelTypes: LabelType[] = ['default', 'full', 'stretch']

export const Basic: Story = {
  args: {
    labelPosition: 'top'
  }
}

export const LabelAdditions: Story = {
  render: (args: FieldProps) => (
    <>
      <Field {...args} description="With tooltip" tooltip="Tooltip text" />
      <Field {...args} description="With link tooltip" tooltip="Tooltip text with a [link](https://www.kaspersky.ru/)" />
      <Field
        {...args}
        label=""
        tooltip="Tooltip text"
        description="With tooltip when no label text"
      />
      <Field {...args} description="Required" required />
    </>
  )
}

export const LabelPositions: Story = {
  render: (args: FieldProps) => (
    <>
      {labelPositions.map(position => (
        <Field
          key={position}
          {...args}
          labelPosition={position}
          label={`Label ${position}`}
        />
      ))}
    </>
  )
}

export const Description: Story = {
  render: (args: FieldProps) => {
    return (
      <>
        <Field {...args} description="Some description" />
        <Field {...args} description="Some description with a [link](https://www.kaspersky.ru/)" />
        <Field {...args} control={<Toggle>Label</Toggle>} description="Some description" />
        <Field {...args} control={<Checkbox>Label</Checkbox>} description="Some description" />
        <SectionMessage mode="warning" title="Исключение">
          Для Radio/Checkbox.Group не может быть общего описания, только описание на уровне конкретных айтемов внутри этой группы
        </SectionMessage>
        <Field
          {...args}
          control={
            <Checkbox.Group options={[
              { label: 'Checkbox 1', value: '1' },
              { label: 'Checkbox 2', value: '2' },
              { label: 'Checkbox 3', value: '3', description: 'Some description' },
              { label: 'Checkbox 4', value: '4' }
            ]} />
          }
        />
        <Field
          {...args}
          control={
            <Radio vertical={true} options={[
              { label: 'Radio 1', value: '1' },
              { label: 'Radio 2', value: '2', description: 'Some description' },
              { label: 'Radio 3', value: '3', description: 'Some description' },
              { label: 'Radio 4', value: '4' }
            ]} />
          }
        />
      </>
    )
  }
}

export const Validation: Story = {
  render: (args: FieldProps) => (
    <>
      <Field
        {...args}
        messageMode="success"
        control={<Textbox validationStatus="success" />}
      />
      <Field
        {...args}
        messageMode="error"
        control={<Textbox validationStatus="error" />}
      />
      <Field
        {...args}
        messageMode="error"
        control={
          <Checkbox.Group options={
            ['1', '2', '3', '4'].map(item => ({
              label: `Checkbox ${item}`,
              value: item,
              invalid: true
            }))
          } />
        }
      />
      <Field
        {...args}
        messageMode="error"
        control={
          <SegmentedButton
            value={['2']}
            onChange={(e) => e}
            size="large"
            items={['1', '2', '3', '4'].map(value => ({ text: 'Label', value }))}
          />
        }
      />
      <Field
        {...args}
        messageMode="error"
        control={<Toggle>Label</Toggle>}
      />
    </>
  ),
  args: {
    message: `Validation text example
- Password must have:
- At least 8 characters
- At least 1 uppercase letter
- At least 1 number or symbol`
  }
}

export const Disabled: Story = {
  render: (args: FieldProps) => {
    const [isDisabled, setIsDisabled] = useState<boolean>(false)
    return (
      <FieldsContainer>
        <H4>Look in code how to disable component manually</H4>
        <Toggle onChange={setIsDisabled}>
          {isDisabled.toString()}
        </Toggle>
        <Field {...args} control={<Textbox disabled={isDisabled} />} />
      </FieldsContainer>
    )
  }
}

export const AdditionalComponent: Story = {
  args: {
    additionalComponent: (<Checkbox>Label</Checkbox>)
  }
}

const FieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 12px;
`

const LabelTypeGroup = ({ controlWidth, ...args }: FieldProps) => {
  const longLabel = 'The long label '.repeat(10)
  return (
    <FieldsContainer>
      <H4>labelType={args.labelType}</H4>
      <Field
        {...args}
        label="Basic label"
        control={<Textbox value="min-width: 200px" />}
      />
      <Field
        {...args}
        label={longLabel}
        control={<Textbox value="min-width: 200px" />}
      />
      <Field
        {...args}
        label="Basic label"
        control={<Textbox value={`${controlWidth}px`} />}
        controlWidth={controlWidth}
      />
      <Field
        {...args}
        label={longLabel}
        control={<Textbox value={`${controlWidth}px`} />}
        controlWidth={controlWidth}
      />
    </FieldsContainer>
  )
}

export const LabelTypes: Story = {
  render: (args: FieldProps) => (
    <>
      {labelTypes.map(type => <LabelTypeGroup {...args} key={type} labelType={type} />)}
    </>
  ),
  args: {
    controlWidth: 60
  }
}

export const GridLayout: Story = {
  args: {
    gridLayout: { firstCol: '123px', secondCol: '456px' }
  }
}

export const CustomLabel: Story = {
  render: (args: FieldProps) => (
    <>
      <Space gap="separated" direction="vertical">
        <FieldWithCustomLabelInfo />
        <Field
          {...args}
          label={
            <>
              <Text type="BTR3" color="secondary">First line</Text>
              <Text type="BTR4" color="secondary"><br />Second line</Text>
            </>
          }
          control={<Textbox />}
        />
      </Space>
    </>

  )
}
