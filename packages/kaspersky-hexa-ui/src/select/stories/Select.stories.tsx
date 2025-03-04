import { ThemedPalette, ThemedPaletteProps } from '@design-system/palette'
import { validationStatuses } from '@helpers/typesHelpers'
import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { sbHideControls } from '@sb/helpers'
import { Field } from '@src/field'
import { Link } from '@src/link'
import { Space } from '@src/space'
import { Status } from '@src/status'
import { Toggle } from '@src/toggle'
import { P, Text } from '@src/typography'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import styled from 'styled-components'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'
import { Add, Cancel1, Placeholder } from '@kaspersky/hexa-ui-icons/16'

import MetaData from '../__meta__/meta.json'
import { Select } from '../Select'
import { SelectProps } from '../types'

import Docs from './SelectDocs'

const opts = [
  'This is a looooong long tag content that should be truncated on maxChars prop.',
  'Moscow',
  'Saint Petersburg',
  'Novosibirsk',
  'Yekaterinburg',
  'Kazan',
  'Omsk',
  'Samara',
  'Rostov',
  'Ufa',
  'Krasnoyarsk',
  'Voronezh',
  'Perm',
  'Volgograd',
  'Krasnodar',
  'Saratov',
  'Tyumen',
  'Tolyatti',
  'Izhevsk',
  'Barnaul'
].map((city, index) => ({
  label: city,
  value: index + 1
}))

const meta: Meta<SelectProps> = {
  title: 'Hexa UI Components/Inputs/Select',
  component: Select,
  argTypes: {
    onChange: {},
    onDeselect: {},
    onLoadMore: {},
    onSelect: {},
    validationStatus: {
      control: { type: 'radio' },
      options: validationStatuses
    },
    ...sbHideControls(['theme'])
  },
  args: {
    validationStatus: 'default',
    placeholder: 'Select',
    options: opts,
    allowClear: false,
    disabled: false,
    readOnly: false,
    testId: 'select-test-id',
    klId: 'select-kl-id'
  },
  parameters: {
    actions: { argTypesRegex: '^(on.*)' },
    badges: [badges.stable, badges.reviewedByDesign],
    docs: {
      page: withMeta(MetaData, Docs)
    },
    design: MetaData.figmaView
  },
  decorators: [
    (Story, context) => (
      <Wrapper>
        <Story {...context}/>
      </Wrapper>
    )
  ]
}
export default meta

type Story = StoryObj<SelectProps>

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

export const Basic: Story = {}
export const WithDefaultValue: Story = {
  args: {
    defaultValue: 1,
    validationStatus: 'success'
  }
}

export const WithDisabled: Story = {
  args: {
    options: opts.map(option => {
      if (option.value % 3 === 0) {
        return { ...option, disabled: true }
      }
      return option
    })
  }
}

export const WithCustomElements: Story = {
  render: (args: SelectProps) => {
    const Allowed: React.FC<{ selected?: boolean }> = ({ selected }) => (
      <Space gap={4}>
        <Add color={selected ? '#1DA189' : 'black'} />
        Allowed
      </Space>
    )

    const Blocked: React.FC<{ selected?: boolean }> = ({ selected }) => (
      <Space gap={4} color="black">
        <Cancel1 color={selected ? '#B21A35' : 'black'} />
        Blocked
      </Space>
    )

    return (
      <Space size={16}>
        <Select {...args}>
          <Select.Option value={1} label={<Allowed selected />}>
            <Allowed />
          </Select.Option>
          <Select.Option value={2} label={<Blocked selected />}>
            <Blocked />
          </Select.Option>
        </Select>
        <Select
          {...args}
          options={opts.map((option) =>
            ({ ...option, label: <Status mode="resolved" label={option.label} icon={<Placeholder />}/> })
          )}
        />
      </Space>
    )
  },
  args: {
    options: undefined
  }
}

export const LargeItemText: Story = {
  args: {
    mode: 'multiple',
    options: [
      { label: 'default text', value: 1 },
      { label: 'long text long text long text long text long text long text long text long text', value: 2 }
    ]
  }
}

const ParentScrollDataMock = () => (
  <P>
    ???? ?????? ???? ????? ???????????, ?? ?????? ????? ?????????????
    ?????? ????????? ???????? closeOnParentScroll
  </P>
)

export const ParentScroll: Story = {
  render: (args: SelectProps) => (
    <ScrollableContainer>
      {Array.from({ length: 3 }).map((_, index) => <ParentScrollDataMock key={index}/>)}
      <Select {...args} />
      {Array.from({ length: 6 }).map((_, index) => <ParentScrollDataMock key={index}/>)}
    </ScrollableContainer>
  ),
  args: {
    options: opts.slice(0, 5),
    closeOnParentScroll: true
  }
}

export const Loading: Story = {
  args: {
    loading: true
  }
}

export const LoadingMoreOptions: Story = {
  args: {
    options: opts,
    hasMore: true,
    onLoadMore: (): void => console.log('trigger load more')
  }
}

export const LoadingError: Story = {
  args: {
    options: opts,
    loadingError: (
      <div>
        Текст сообщения об ошибке. Может быть многострочным и содержать технические параметры ошибки.
      </div>
    )
  }
}

export const SelectWithSearch: Story = {
  args: {
    showSearch: true,
    allowClear: true
  }
}

export const Multiselect: Story = {
  args: {
    mode: 'multiple'
  }
}

export const MultiselectWithSearch: Story = {
  args: {
    mode: 'multiple',
    showSearch: true
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

export const WithShowSearchAndAllowClear: Story = {
  render: (args: SelectProps) => {
    return (
      <div style={{ width: '550px' }}>
        <P>No mode</P>
        <Field control={<Select {...args} />} />
        <P>Tags mode</P>
        <Field control={<Select {...args} mode="tags" />} />
        <P>Multiple mode</P>
        <Field control={<Select {...args} mode="multiple" />} />
      </div>
    )
  },
  args: {
    allowClear: true,
    showSearch: true
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

export const Tags: Story = {
  render: (args: SelectProps) => {
    const [val, setVal] = React.useState(['MyTag', 'MyTag'])
    return (
      <div style={{ width: '550px' }}>
        <Field label="Tags mode" control={<Select {...args} />} />
        <Field label="Tags mode with allowNonUniqueValues" control={
          <Select
            id={args.id + '1'}
            {...args}
            allowNonUniqueValues={true}
            value={val}
            onChange={(newValue) => setVal(newValue)}
          />
        } />
      </div>
    )
  },
  args: {
    getPopupContainer: (): HTMLElement => document.body,
    maxTagCount: 3,
    mode: 'tags',
    id: 'xxx'
  }
}

export const NoData: Story = {
  args: {
    options: [],
    defaultValue: undefined
  }
}

export const DropdownMinMaxWidth: Story = {
  render: (args: SelectProps) => (
    <Wrapper style={{ marginLeft: '100px' }}>
      <h2>Max Width: 100px</h2>
      <Select {...args} dropdownStyle={{ maxWidth: 100, minWidth: 100 }} />
      <div style={{ width: 200, marginTop: 50 }}>
        <h2>Min Width: 200%</h2>
        <Select {...args} dropdownStyle={{ maxWidth: 'none', minWidth: '200%' }} />
      </div>
    </Wrapper>
  )
}

export const CustomAttributes: Story = {
  args: {
    options: [
      {
        value: '1',
        label: 'Option 1',
        data: 1,
        payload: { value: 1, name: 'a' },
        id: 1,
        'data-attr': true
      },
      {
        value: '2',
        label: 'Option 2',
        data: 2,
        payload: { value: 2, name: 'b' },
        id: 1,
        'data-attr': true
      }
    ],
    open: true,
    placeholder: 'Select with Custom Attributes'
  }
}

export const SelectWithGroupedOptions: Story = {
  args: {
    options: [
      {
        label: 'For this resource',
        options: [
          {
            data: '',
            key: '',
            label: 'Inline view',
            payload: {
              id: '',
              userID: '',
              tenantID: '',
              tenantName: '',
              phantomID: '54b9cf94-7a8e-434c-bb3a-632cc81e9eb6',
              description: '',
              publish: false,
              autoCreated: false,
              name: 'test',
              kind: 'json',
              regexpGroupsCEF: false,
              mapping: [],
              extra: [],
              enrichment: [],
              expressions: [],
              xmlKeyAttrs: [],
              xmlArrayKeys: [],
              pairDelimiter: '',
              delimiter: '',
              kvDelimiter: '',
              saveExtra: false,
              packageIntegrationResource: false,
              repositoryPackageID: '',
              eventLogAgentID: '',
              shared: false,
              keepRaw: 'never',
              samples: {
                row: [],
                columnar: []
              },
              _depth: 0,
              _row: 0,
              _length: 1,
              _observed: false
            },
            title: 'test',
            value: '34a55'
          },
          {
            data: '',
            key: '',
            label: 'Inline view 2nd',
            payload: {
              id: '',
              userID: '',
              tenantID: '',
              tenantName: '',
              phantomID: '54b9cf94-7a8e-434c-bb3a-632cc81e9eb611',
              description: '',
              publish: false,
              autoCreated: false,
              name: 'test',
              kind: 'json',
              regexpGroupsCEF: false,
              mapping: [],
              extra: [],
              enrichment: [],
              expressions: [],
              xmlKeyAttrs: [],
              xmlArrayKeys: [],
              pairDelimiter: '',
              delimiter: '',
              kvDelimiter: '',
              saveExtra: false,
              packageIntegrationResource: false,
              repositoryPackageID: '',
              eventLogAgentID: '',
              shared: false,
              keepRaw: 'never',
              samples: {
                row: [],
                columnar: []
              },
              _depth: 0,
              _row: 0,
              _length: 1,
              _observed: false
            },
            title: 'test 2',
            value: '34a55'
          }
        ]
      },
      {
        label: 'For this tenant',
        options: [
          {
            data: '1f887dfb-482f-4fea-a793-4cbc2a08e143',
            key: '1f887dfb-482f-4fea-a793-4cbc2a08e143',
            label: 'Tenant view',
            payload: {
              id: '1f887dfb-482f-4fea-a793-4cbc2a08e143',
              name: 'Test',
              kind: 'json',
              expressions: null,
              pairDelimiter: '',
              kvDelimiter: '',
              delimiter: '',
              keepRaw: '',
              mapping: null,
              enrichment: null,
              extra: null,
              xmlKeyAttrs: null,
              xmlArrayKeys: null,
              samples: {
                row: null,
                columnar: null
              },
              saveExtra: false,
              regexpGroupsCEF: false,
              shared: false,
              description: '',
              folderID: '',
              tenantID: '839d4584-3fab-4567-983d-eeaf6aaa9217',
              tenantName: '',
              updatedAt: 1697013573965,
              userID: '7f267fae-9cd1-42c6-a7c7-a9d0501d073c',
              packageIntegrationResource: false,
              repositoryPackageID: '',
              autoCreated: false
            },
            title: 'Test',
            value: '1f887dfb-482f-4fea-a793-4cbc2a08e143'
          }
        ]
      }
    ]
  }
}

type PaletteStory = StoryObj<ThemedPaletteProps>
export const ColorTokens: PaletteStory = {
  args: { source: componentColors.input_select },
  render: args => <ThemedPalette {...args} />
}
