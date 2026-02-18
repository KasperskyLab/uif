import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { sbHideControls } from '@sb/helpers'
import { Button } from '@src/button'
import { CheckboxGroup } from '@src/checkbox'
import { Textbox } from '@src/input'
import { Link } from '@src/link'
import { Radio } from '@src/radio'
import { Tag } from '@src/tag'
import { Meta, StoryObj } from '@storybook/react-webpack5'
import React, { useState } from 'react'
import styled from 'styled-components'

import MetaData from '../__meta__/meta.json'
import { KeyValue } from '../KeyValue'
import { KeyValuePair, KeyValueProps } from '../types'

const data: KeyValuePair[] = [
  {
    pairKey: 'Input',
    pairValue: (
      <Textbox placeholder="Text" />
    )
  },
  {
    pairKey: 'Textarea',
    pairValue: (
      <Textbox.Textarea placeholder="Text area" />
    )
  },
  {
    pairKey: 'Button',
    pairValue: (
      <Button size="medium" mode="primary">
        Button
      </Button>
    )
  },
  {
    pairKey: 'Checkbox Group',
    pairValue: (
      <CheckboxGroup options={[{
        label: 'One', value: '1'
      }, {
        label: 'Two', value: '2'
      }, {
        label: 'Three', value: '3'
      }]} direction="vertical" />
    )
  },
  {
    pairKey: 'Radio',
    pairValue: (
      <Radio options={[{
        label: 'One', value: '1'
      }, {
        label: 'Two', value: '2'
      }, {
        label: 'Three', value: '3'
      }]} vertical />
    )
  },
  {
    pairKey: 'Tag Group',
    pairValue: (
      <div>
        <Tag mode="red" size="small">Tag</Tag>
        <Tag mode="marengo" size="small">Tag</Tag>
        <Tag mode="marina" size="small">Tag</Tag>
      </div>
    )
  },
  {
    pairKey: 'Link',
    pairValue: (
      <Link href="#" target="_blank" size="medium">
        Link
      </Link>
    )
  }
]

const meta: Meta<KeyValueProps> = {
  title: 'Deprecated/KeyValue',
  component: KeyValue,
  argTypes: {
    keyTooltip: {
      control: { type: 'text' }
    },
    ...sbHideControls(['theme', 'data', 'rowHeight', 'padding', 'wrapperClasses'])
  },
  args: {
    labelPosition: 'aside',
    keyRequired: false,
    keyMode: 'secondary',
    data,
    keysMargin: 16,
    testId: 'key-value-test-id',
    klId: 'key-value-kl-id'
  },
  parameters: {
    badges: [badges.deprecated],
    deprecatedLink: 'Hexa UI Components/FieldSet',
    docs: {
      page: withMeta(MetaData)
    }
  }
}
export default meta

export const Basic: StoryObj<KeyValueProps> = {}

const KeyValueWrapper = styled.div<{
  keyWidth: number,
  valueWidth: number
}>`
  ${({ keyWidth, valueWidth }) => `
    .kl-custom-key {
      min-width: ${keyWidth}px;
    }
      
    .kl-custom-value {
      width: ${valueWidth}px;
    }
  `}
`

type KeyValueCustomClassesProps = KeyValueProps & { keyWidth: number, valueWidth: number }
export const CustomClasses: StoryObj<KeyValueCustomClassesProps> = {
  render: ({
    keyWidth,
    valueWidth,
    ...rest
  }: KeyValueCustomClassesProps) => {
    return (
      <KeyValueWrapper keyWidth={keyWidth} valueWidth={valueWidth}>
        <KeyValue
          {...rest}
          wrapperClasses={{
            keyClassName: 'kl-custom-key',
            valueClassName: 'kl-custom-value'
          }}
        />
      </KeyValueWrapper>
    )
  },
  args: {
    keyWidth: 200,
    valueWidth: 400
  }
}

export const KeyValueWithUpdateValueState: StoryObj<KeyValueProps> = {
  render: () => {
    const [value, setValue] = useState('')
    return (
      <KeyValue
        data={[
          {
            key: 'unique_key',
            pairKey: 'Input',
            pairValue: <Textbox
              value={value}
              onChange={(newValue: string) => {
                setValue(newValue)
              }}
            />
          }
        ]}
      />
    )
  }
}
