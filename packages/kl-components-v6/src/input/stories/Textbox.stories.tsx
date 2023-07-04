import React from 'react'
import { Textbox } from '../Textbox'
import { withMeta } from '../../../helpers/hocs/MetaComponent/withMeta'
import MetaData from '../__meta__/meta.json'
import { badges } from '../../../.storybook/badges'
import { StoryLayout } from '../../../.storybook/StoryComponents'
import { UserOutlined } from '@ant-design/icons'
import { useTheme } from '@design-system/theme/hooks'
import { ITextboxProps, IUrlInputProps } from '../types'

export default {
  title: 'Atoms/Input',
  component: Textbox,
  argTypes: {
    mask: {
      control: { type: 'select', default: 'None' },
      options: ['None', 'Date', 'Number', 'Phone', 'Pattern', 'Email', 'IP', 'MAC']
    },
    disabled: 'boolean',
    readOnly: 'boolean',
    error: 'boolean',
    positive: 'boolean',
    placeholder: 'string',
    // disable autogeneric control
    onChange: { table: { disable: true } },
    value: { table: { disable: true } },
    maskOptions: { table: { disable: true } },
    klId: { table: { disable: true } }
  },
  args: {
    disabled: false,
    readOnly: false,
    mask: 'None',
    error: false,
    positive: false,
    placeholder: 'Placeholder'
  },
  parameters: {
    badges: [badges.stable, badges.dev],
    docs: {
      page: withMeta(MetaData)
    },
    controls: {
      exclude: ['size']
    }
  }
}

const getMaskOptions = (type: unknown) => ({
  Date: {
    mask: Date,
    lazy: false,
    overwrite: true,
    autofix: true
  },
  Number: {
    mask: Number
  },
  Phone: {
    mask: '+7 (000) 000-00-00',
    lazy: false,
    overwrite: true,
    autofix: true
  },
  Pattern: {
    mask: '{#}000[aaa]/NIC-`*[**]',
    lazy: false,
    overwrite: true,
    autofix: true
  },
  Email: {
    mask: 'NAME@HOST.CODE',
    blocks: {
      // eslint-disable-next-line no-useless-escape
      NAME: { mask: /^[a-zA-Z0-9_\-\.]*$/ },
      // eslint-disable-next-line no-useless-escape
      HOST: { mask: /^[a-zA-Z0-9_\-]*$/ },
      // eslint-disable-next-line no-useless-escape
      CODE: { mask: /^[a-zA-Zs\.]{1,8}$/ }
    }
  },
  None: undefined,
  IP: {
    mask: 'NUM.NUM.NUM.NUM',
    blocks: {
      NUM: {
        mask: /^[0-9]{1,3}$/
      }
    }
  },
  MAC: {
    mask: 'MACAD:MACAD:MACAD:MACAD',
    blocks: {
      MACAD: { mask: /^[0-9a-f]{1,2}$/ }
    },
    lazy: false,
    overwrite: true,
    autofix: true
  }
}[type as string])

export const Basic = (args: ITextboxProps & {mask: string}) => {
  const theme = useTheme()
  return (
    <StoryLayout theme={theme.key}>
      <Textbox
        maskOptions={getMaskOptions(args.mask)}
        {...args}
      />
    </StoryLayout>
  )
}

Basic.parameters = {
  docs: {
    storyDescription: 'Basic Component Usage Example'
  }
}

export const Icon = (args: ITextboxProps) => {
  const theme = useTheme()
  return (
    <StoryLayout theme={theme.key}>
      <Textbox
        suffix={<UserOutlined />}
        {...args}
      />
    </StoryLayout>
  )
}

Icon.parameters = {
  docs: {
    storyDescription: 'Icons can be used to determine what a given input field is for.'
  }
}

export const InputNumber = (args: ITextboxProps) => {
  const { value, onChange, ...rest } = args
  const theme = useTheme()
  return (
    <StoryLayout theme={theme.key}>
      <Textbox.Number {...rest}/>
    </StoryLayout>
  )
}

InputNumber.parameters = {
  docs: {
    description: {
      story: 'Based on [InputNumber](https://ant.design/components/input-number/) from the Antd library.\nAllows you to enter a number and control the value using the mouse (number buttons) or keyboard.'
    }
  }
}

export const Textarea = (args: ITextboxProps) => {
  const theme = useTheme()
  return (
    <StoryLayout theme={theme.key}>
      <Textbox.Textarea
        rows={3}
        value={'1\n2\n3'}
        disabled={args.disabled}
        readOnly={args.readOnly}
        error={args.error}
        positive={args.positive}
        placeholder={args.placeholder}/>
    </StoryLayout>
  )
}

Textarea.parameters = {
  docs: {
    description: {
      story: 'Multiline text input field.'
    }
  }
}

Textarea.argTypes = {
  mask: { table: { disable: true } },
  placeholder: { table: { disable: true } }
}

export const Password = (args: ITextboxProps) => {
  const theme = useTheme()
  return (
    <StoryLayout theme={theme.key}>
      <Textbox.Password {...args}/>
    </StoryLayout>
  )
}
Password.argTypes = {
  mask: { table: { disable: true } }
}

Password.parameters = {
  docs: {
    description: {
      story: 'Password field. It is possible to show/hide the entered value.'
    }
  }
}

export const Url = (args: IUrlInputProps) => {
  const theme = useTheme()
  return (
    <StoryLayout theme={theme.key}>
      <Textbox.Url klId={'url-input'} {...args}/>
    </StoryLayout>
  )
}
Url.argTypes = {
  mask: { table: { disable: true } }
}

Url.parameters = {
  docs: {
    description: {
      story: 'Fields for entering url / port.'
    }
  }
}
