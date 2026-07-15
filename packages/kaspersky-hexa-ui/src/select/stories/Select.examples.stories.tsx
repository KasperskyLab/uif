import { ThemedPalette, ThemedPaletteProps } from '@design-system/palette'
import { validationStatuses } from '@helpers/typesHelpers'
import { FieldSet } from '@src/field-set'
import { Link } from '@src/link'
import { Space } from '@src/space'
import { Status } from '@src/status'
import { Text, P } from '@src/typography'
import { Toggle } from '@src/toggle'
import { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import styled from 'styled-components'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'
import {
  Delete,
  Edit,
  Placeholder
} from '@kaspersky/hexa-ui-icons/16'

import { Select } from '../Select'
import { OptionType, SelectProps } from '../types'

import { selectOptions, selectStorySettings } from './Select.stories'

const Wrapper = styled.div`
  max-width: 300px;
  flex: 1;
`

const ScrollableContainer = styled.div`
  width: 100%;
  max-height: 300px;
  max-width: 600px;
  overflow-y: auto;
  border: 1px solid #eee;
  padding: 20px;
`

const meta: Meta<SelectProps> = {
  title: 'Hexa UI Components/Select/Stories',
  component: Select,
  tags: ['!autodocs'],
  ...selectStorySettings,
  decorators: [
    (Story, context) => (
      <Wrapper>
        <Story {...context} />
      </Wrapper>
    )
  ]
}

export default meta

type Story = StoryObj<SelectProps>

export const Basic: Story = {}

export const WithDefaultValue: Story = {
  args: {
    defaultValue: 1,
    validationStatus: 'success'
  }
}

export const WithDisabled: Story = {
  args: {
    options: selectOptions.map(option => {
      if ((option.value as number) % 3 === 0) {
        return { ...option, disabled: true }
      }
      return option
    })
  }
}

export const WithValidationStatuses: Story = {
  render: (args: SelectProps) => (
    <Space size={16} direction="vertical">
      {validationStatuses.map(status => (
        <Select key={status} {...args} validationStatus={status} placeholder={status} />
      ))}
    </Space>
  ),
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 300 }}>
        <Story />
      </div>
    )
  ]
}

export const Multiselect: Story = {
  args: {
    mode: 'multiple'
  }
}

export const MultiselectWithSearch: Story = {
  render: (args) => (
    <FieldSet
      items={[
        {
          label: 'autoClearSearchValue = true',
          control: {
            component: 'select',
            ...args
          }
        },
        {
          label: 'autoClearSearchValue = false',
          control: {
            component: 'select',
            autoClearSearchValue: false,
            ...args
          }
        }
      ]}
    />
  ),
  args: {
    onSearch: (val) => { console.log('onSearch', val) },
    mode: 'multiple',
    showSearch: true
  }
}

export const SelectWithSearch: Story = {
  render: (args) => (
    <FieldSet
      items={[
        {
          label: 'autoClearSearchValue = true',
          control: {
            component: 'select',
            ...args
          }
        },
        {
          label: 'autoClearSearchValue = false',
          control: {
            component: 'select',
            autoClearSearchValue: false,
            ...args
          }
        }
      ]}
    />
  ),
  args: {
    onSearch: (val) => { console.log('onSearch', val) },
    showSearch: true,
    allowClear: true
  }
}

export const WithShowSearchAndAllowClear: Story = {
  render: (args) => (
    <FieldSet
      items={[
        {
          label: 'No mode',
          control: {
            component: 'select',
            ...args
          }
        },
        {
          label: 'Tags mode',
          control: {
            component: 'select',
            mode: 'tags',
            ...args
          }
        },
        {
          label: 'Multiple mode',
          control: {
            component: 'select',
            mode: 'multiple',
            ...args
          }
        }
      ]}
    />
  ),
  args: {
    allowClear: true,
    showSearch: true
  }
}

export const Tags: Story = {
  render: (args: SelectProps) => {
    const [val, setVal] = React.useState(['MyTag', 'MyTag'])
    return (
      <FieldSet
        items={[
          {
            label: 'Tags mode',
            control: {
              component: 'select',
              ...args
            }
          },
          {
            label: 'Tags mode with maxTagCount = responsive',
            control: {
              component: 'select',
              ...args,
              maxTagCount: 'responsive'
            }
          },
          {
            label: 'Tags mode with allowNonUniqueValues',
            control: {
              component: 'select',
              mode: 'tags',
              id: (args.id ?? '') + '1',
              ...args,
              allowNonUniqueValues: true,
              value: val,
              onChange: (newValue) => setVal(newValue)
            }
          }
        ]}
      />
    )
  },
  args: {
    getPopupContainer: (): HTMLElement => document.body,
    maxTagCount: 3,
    mode: 'tags',
    id: 'xxx'
  }
}

export const WithFooter: Story = {
  args: {
    renderFooter: (): JSX.Element => (
      <div style={{ padding: '8px 12px' }}>
        <Link href="#">Terms and Conditions</Link>
      </div>
    )
  }
}

export const WithHeader: Story = {
  args: {
    renderHeader: (): JSX.Element => (
      <div style={{ padding: '8px 12px' }}>
        <Text>Custom Header</Text>
      </div>
    )
  }
}

export const CustomDropdown: Story = {
  render: (args: SelectProps) => {
    const [checked, setChecked] = React.useState(false)

    return (
      <Select
        {...args}
        renderDropdown={(menu) => (
          <>
            <div style={{ padding: '8px 12px' }}>
              <Toggle
                checked={checked}
                onChange={(value) => setChecked(value)}
              >
                <>{checked ? 'Hide' : 'Show'} Content</>
              </Toggle>
            </div>
            {checked && <>{menu}</>}
          </>
        )}
      />
    )
  }
}

export const WithActions: Story = {
  args: {
    options: [
      {
        value: '1',
        label: 'Option 1 with super long name "Super Long Name"',
        description: 'description',
        actions: [
          {
            icon: <Edit />,
            onClick: () => alert('edit "Option 1"')
          },
          {
            icon: <Delete />,
            onClick: () => alert('delete "Option 1"')
          }
        ]
      },
      {
        value: '2',
        label: 'Option 2',
        actions: [
          {
            icon: <Edit />,
            onClick: () => alert('edit "Option 2"')
          }
        ]
      }
    ]
  }
}

export const WithCustomElements: Story = {
  render: (args: SelectProps) => {
    const Allowed: React.FC<{ selected?: boolean }> = ({ selected }) => (
      <Space gap={4}>
        <Placeholder color={selected ? '#1DA189' : 'black'} />
        Allowed
      </Space>
    )

    const Blocked: React.FC<{ selected?: boolean }> = ({ selected }) => (
      <Space gap={4} color="black">
        <Placeholder color={selected ? '#B21A35' : 'black'} />
        Blocked
      </Space>
    )

    return (
      <Space size={16}>
        <Select {...args}>
          <Select.Option value={1} label={<Allowed selected />} data-label="Allowed">
            <Allowed />
          </Select.Option>
          <Select.Option value={2} label={<Blocked selected />} data-label="Blocked">
            <Blocked />
          </Select.Option>
        </Select>
        <Select
          {...args}
          options={selectOptions.map((option) =>
            ({
              ...option,
              label: <Status mode="resolved" label={option.label} icon={<Placeholder />} />,
              dataLabel: option.label
            }))}
        />
      </Space>
    )
  },
  args: {
    options: undefined
  }
}

export const SelectWithGroupedOptions: Story = {
  args: {
    options: [
      {
        label: 'Group A',
        options: [
          { label: 'Option A1', value: 'a1' },
          { label: 'Option A2', value: 'a2' }
        ]
      },
      {
        label: 'Group B',
        options: [
          { label: 'Option B1', value: 'b1' },
          { label: 'Option B2', value: 'b2' }
        ]
      }
    ]
  }
}

export const Loading: Story = {
  args: {
    loading: true
  }
}

export const LoadingMoreOptions: Story = {
  args: {
    options: selectOptions,
    hasMore: true,
    onLoadMore: (): void => console.log('trigger load more')
  }
}

export const LoadingError: Story = {
  args: {
    options: selectOptions,
    loadingError: (
      <div>
        Текст сообщения об ошибке. Может быть многострочным и содержать технические параметры ошибки.
      </div>
    )
  }
}

export const NoData: Story = {
  args: {
    options: [],
    defaultValue: undefined
  }
}

export const ParentScroll: Story = {
  render: (args: SelectProps) => {
    const MockText: React.FC = () => (
      <P>
        Этот текст демонстрирует поведение выпадающего списка при прокрутке родителя с
        включённым свойством closeOnParentScroll.
      </P>
    )
    return (
      <ScrollableContainer>
        {Array.from({ length: 3 }).map((_, index) => <MockText key={index} />)}
        <Select {...args} />
        {Array.from({ length: 6 }).map((_, index) => <MockText key={index} />)}
      </ScrollableContainer>
    )
  },
  args: {
    options: selectOptions.slice(0, 8),
    closeOnParentScroll: true
  }
}

type PaletteStory = StoryObj<ThemedPaletteProps>
export const ColorTokens: PaletteStory = {
  args: { source: componentColors.input_select },
  render: args => <ThemedPalette {...args} />
}
