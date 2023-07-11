import React from 'react'
import { ComponentStory } from '@storybook/react'
import { badges } from '../../.storybook/badges'
import { withMeta } from '../../helpers/hocs/MetaComponent/withMeta'
import Meta from './meta.json'
import { Checkbox } from './Checkbox'
import { StoryColumn, StoryLayout } from '../../.storybook/StoryComponents'
import { useTheme } from '../../design-system/theme/hooks'
import { CheckboxValueType } from 'antd/es/checkbox/Group'

export default {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  argTypes: {
    theme: {
      control: { type: 'select', default: 'light' },
      options: ['light', 'dark'],
      description: 'Color Palette Theme'
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Is the checkbox disabled'
    }
  },
  args: {
    theme: 'light',
    disabled: false
  },
  parameters: {
    badges: [badges.stable, badges.needsDesignReview],
    docs: {
      page: withMeta(Meta)
    }
  }
}

const BasicTemplate: ComponentStory<typeof Checkbox> = ({
  theme: themeProps,
  ...rest
}) => {
  const theme = useTheme()
  return (
    <StoryLayout theme={theme.key}>
      <StoryColumn>
        <Checkbox data-component-id="test-cb1" {...rest}>
          Check me
        </Checkbox>
      </StoryColumn>
      <StoryColumn>
        <Checkbox data-component-id="test-cb2" checked={true} {...rest}>
          Im checked
        </Checkbox>
      </StoryColumn>
      <StoryColumn>
        <Checkbox
          data-component-id="test-cb3"
          indeterminate={true}
          checked={true}
          {...rest}
        >
          Im indeterminate
        </Checkbox>
      </StoryColumn>
    </StoryLayout>
  )
}

BasicTemplate.parameters = {
  docs: {
    storyDescription: 'Basic Component Usage Example'
  }
}

export const Basic = BasicTemplate.bind({})

const options = [
  {
    label: 'One',
    value: 'One'
  },
  {
    label: 'Two',
    value: 'Two'
  },
  {
    label: 'Three',
    value: 'Three'
  }
]

const onChange = (checkedValues: CheckboxValueType[]) => {
  // eslint-disable-next-line no-console
  console.log('checked = ', checkedValues)
}

const CheckboxGroupTemplate: ComponentStory<typeof Checkbox> = ({
  theme: themeProps
}) => {
  const theme = useTheme(themeProps)
  return (
    <StoryLayout theme={theme.key}>
       <Checkbox.Group options={options} defaultValue={['One']} onChange={onChange} />
    </StoryLayout>

  )
}

export const CheckboxGroup = CheckboxGroupTemplate.bind({})
