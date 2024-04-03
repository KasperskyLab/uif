import React from 'react'
import styled from 'styled-components'
import { Meta, StoryObj } from '@storybook/react'
import { Button } from '@src/button'
import { Textbox } from '@src/input'
import { Checkbox } from '@src/checkbox'
import { Toggle } from '@src/toggle'
import { Radio } from '@src/radio'

const meta: Meta = {
  title: 'Organisms/Form'
}
export default meta

export const BasicForm: StoryObj = {
  render: (args) => (
    <form>
      <FormRow>
        <div>Login</div>
        <Textbox />
      </FormRow>
      <FormRow>
        <div>Password</div>
        <Textbox type={'password'} />
      </FormRow>
      <FormRow>
        <Checkbox>Check me</Checkbox>
      </FormRow>
      <FormRow>
        <Toggle>Toggle me</Toggle>
      </FormRow>
      <FormRow>
        <Radio
          {...args}
          options={[
            { label: 'First', value: '1' },
            { label: 'Second', value: '2' }
          ]}
          name="first"
          data-component-id="test-id"
        />
      </FormRow>
      <FormRow>
        <ButtonSubmit text='Ok' mode='primaryBlue' {...args} />
        <ButtonSubmit text='Cancel' mode='secondary' {...args} />
      </FormRow>
    </form>
  )
}

const FormRow = styled.div`
  margin: 10px;
  max-width: 400px;
`

const ButtonSubmit = styled(Button)`
  &.ant-btn {
    margin-right: 10px;
    min-width: 50px;
  }
`
