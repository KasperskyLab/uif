import { Field } from '@src/field'
import { Textbox } from '@src/input'
import { StoryObj } from '@storybook/react'
import React from 'react'
import styled from 'styled-components'

import { Select } from '../Select'
import { SelectProps } from '../types'

type Story = StoryObj<SelectProps>

const selectOptions = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' }
]

type FormFieldsProps = {
  labelType?: 'default' | 'full'
}

const FormFields = ({ labelType = 'default' }: FormFieldsProps) => (
  <>
    <Field
      required
      labelType={labelType}
      labelPosition="before"
      label="Name"
      control={<Textbox placeholder="Enter name" />}
    />
    <Field
      required
      labelType={labelType}
      labelPosition="before"
      label="Category"
      control={
        <Select
          placeholder="Select"
          options={selectOptions}
        />
      }
    />
    <Field
      required
      labelType={labelType}
      labelPosition="before"
      label="Type"
      control={
        <Select
          placeholder="Select"
          options={selectOptions}
        />
      }
    />
    <Field
      required
      labelType={labelType}
      labelPosition="before"
      label="Status"
      control={
        <Select
          placeholder="Select"
          options={selectOptions}
        />
      }
    />
  </>
)

const FormLayout = styled.div`
  width: 100%;
  max-width: 640px;

  .kl6-field + .kl6-field {
    margin-top: 16px;
  }
`

/**
 * Same specificity trick as SidebarFilters.module.scss (.valueRow × 3).
 * Plain ".kl6-field-control-box { min-width: unset }" loses to Field fieldCss.
 */
const ClientLikeLayout = styled(FormLayout)`
  &&& .kl6-field .kl6-field-control-wrapper .kl6-field-control-box {
    min-width: unset;
  }
`

export const FieldDefaultWidth: Story = {
  render: () => (
    <FormLayout>
      <FormFields />
    </FormLayout>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Control case: labelType="default" + min-width: 200px on control-box. ' +
          'Select and Textbox stay the same width.'
      }
    }
  }
}

export const FieldDefaultWidthRepro: Story = {
  render: () => (
    <ClientLikeLayout>
      <FormFields labelType="full" />
    </ClientLikeLayout>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Repro attempt: labelType="full" + min-width: unset on control-box ' +
          '(SidebarFilters / QuickFilter pattern). Select rows should be ' +
          'narrower than the Textbox row.'
      }
    }
  }
}
