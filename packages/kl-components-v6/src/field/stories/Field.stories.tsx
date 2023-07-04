import * as React from 'react'
import { Field } from '../../field'
import { Textbox } from '../../input'
import { Checkbox } from '../../checkbox'
import { Toggle } from '../../toggle'
import { Button } from '../../button'
import { FieldProps } from '../../field/types'
import { withMeta } from '../../../helpers/hocs/MetaComponent/withMeta'
import MetaData from '../__meta__/meta.json'
import { badges } from '../../../.storybook/badges'
import { StoryLayout } from '../../../.storybook/StoryComponents'
import { useTheme } from '@design-system/theme/hooks'

export default {
  title: 'Molecules/Field',
  component: Field,
  argTypes: {
    disabled: 'boolean',
    error: 'boolean',
    placeholder: 'string',
    label: 'string',
    labelPosition: {
      options: ['before', 'after', 'top'],
      control: { type: 'radio' }
    }
  },
  args: {},
  parameters: {
    badges: [badges.stable, badges.dev],
    docs: {
      page: withMeta(MetaData)
    }
  }
}

export const Basic = (args: FieldProps) => {
  const theme = useTheme()
  const localizedPlaceholder = 'key.placeholder'
  return (
    <StoryLayout theme={theme.key}>
      <div>
        <Field
          {...args}
          label='First label'
          labelPosition='before'
          stretch={true}
          helpTrigger={true}
          description='Field description text ...'
          control={<Textbox placeholder={localizedPlaceholder}
                            disabled={false}
                            error={false}/>}
           />

        <Field
          {...args}
          label='Stretch false Input label'
          stretch={false}
          helpTrigger={true}
          control={<Textbox placeholder={localizedPlaceholder}
                            disabled={false}
                            error={false}/>}
        />

        <Field
          {...args}
          helpTrigger={true}
          description='Field description text ...'
          message='error text ...'
          control={<Checkbox>Check me</Checkbox>}
        />

        <Field
          {...args}
          helpTrigger={true}
          description='Field description text ...'
          message='error text ...'
          control={<Toggle>Toggle me</Toggle>}
        />

        <Field
          {...args}
          label='Button label'
          required={true}
          helpTrigger={true}
          control={<Button text={'click me'}/>}
        />
      </div>
    </StoryLayout>
  )
}

Basic.parameters = {
  docs: {
    storyDescription: 'Basic Component Usage Example'
  }
}
