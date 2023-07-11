import React from 'react'
import styled from 'styled-components'
import { Button } from '../button/Button'
import { Textbox } from '../input'
import { Checkbox } from '../checkbox'
import { Toggle } from '../toggle'
import { Radio } from '../radio'

export default {
  title: 'Organisms/Form'
}

export const BasicForm = ({ ...rest }) => {
  return (
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
          {...rest}
          options={[
            { label: 'First', value: '1' },
            { label: 'Second', value: '2' }
          ]}
          name="first"
          data-component-id="test-id"
        />
      </FormRow>
      <FormRow>
        <ButtonSubmit text='Ok' mode='primaryBlue' {...rest} />
        <ButtonSubmit text='Cancel' mode='secondary' {...rest} />
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
