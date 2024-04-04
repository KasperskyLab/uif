import React from 'react'
import styled from 'styled-components'
import { Meta, StoryObj } from '@storybook/react'
import {
  Field,
  Textbox,
  Checkbox,
  Radio,
  SectionMessage,
  SegmentedButton,
  Toggle,
  H4
} from '@src/index'
import { FieldProps, LabelPosition } from '../types'
import { withMeta } from '@helpers/hocs/MetaComponent/withMeta'
import MetaData from '../__meta__/meta.json'
import { badges } from '@sb/badges'
import { sbHideControls } from '@helpers/storybookHelpers'
import { LabelType } from '@design-system/tokens'

const meta: Meta<FieldProps> = {
  title: 'Molecules/Field',
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
      <Field {...args} description='With tooltip' tooltip='Tooltip text' />
      <Field
        {...args}
        label=''
        tooltip='Tooltip text'
        description='With tooltip when no label text'
      />
      <Field {...args} description='Required' required />
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
      <SectionMessage mode='warning' title='Исключение'>
        Для компонента toggle не может быть лейбла сверху
      </SectionMessage>
      <Field {...args} labelPosition='before' control={<Toggle/>}/>
    </>
  )
}

export const Description: Story = {
  render: (args: FieldProps) => (
    <>
      <Field {...args} />
      <Field {...args} control={<Toggle>Label</Toggle>}/>
      <SectionMessage mode='warning' title='Исключение'>
        Для Radio/Checkbox.Group не может быть общего описания, только описание на уровне конкретных айтемов внутри этой группы
      </SectionMessage>
      <H4>Со стороны разработки пока не готово</H4>
      <Field
        {...args}
        control={
          <Checkbox.Group options={[
            { label: 'Checkbox 1', value: '1' },
            { label: 'Checkbox 2', value: '2' },
            { label: 'Checkbox 3', value: '3' },
            { label: 'Checkbox 4', value: '4' }
          ]}/>
        }
      />
      <Field
        {...args}
        control={
          <Radio vertical={true} options={[
            { label: 'Radio 1', value: '1' },
            { label: 'Radio 2', value: '2' },
            { label: 'Radio 3', value: '3' },
            { label: 'Radio 4', value: '4' }
          ]}/>
        }
      />
    </>
  ),
  args: {
    description: 'Description'
  }
}

export const Validation: Story = {
  render: (args: FieldProps) => (
    <>
      <Field
        {...args}
        messageMode='success'
        control={<Textbox valid={true}/>}
      />
      <Field
        {...args}
        messageMode='error'
        control={<Textbox invalid={true}/>}
      />
      <Field
        {...args}
        messageMode='error'
        control={
          <Checkbox.Group options={
            ['1', '2', '3', '4'].map(item => ({
              label: `Checkbox ${item}`,
              value: item,
              invalid: true
            }))
          }/>
        }
      />
      <Field
        {...args}
        messageMode='error'
        control={
          <SegmentedButton
            value={['2']}
            onChange={(e) => e}
            size='large'
            items={['1', '2', '3', '4'].map(value => ({ text: 'Label', value }))}
          />
        }
      />
      <Field
        {...args}
        messageMode='error'
        control={<Toggle>Label</Toggle>}
      />
    </>
  ),
  args: {
    message: 'Validation text'
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
        label='Basic label'
        control={<Textbox value='min-width: 200px'/>}
      />
      <Field
        {...args}
        label={longLabel}
        control={<Textbox value='min-width: 200px'/>}
      />
      <Field
        {...args}
        label='Basic label'
        control={<Textbox value={`${controlWidth}px`}/>}
        controlWidth={controlWidth}
      />
      <Field
        {...args}
        label={longLabel}
        control={<Textbox value={`${controlWidth}px`}/>}
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
