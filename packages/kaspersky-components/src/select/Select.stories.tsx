import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import styled from 'styled-components'
import { Select, Option } from './Select'
import { SelectProps } from './types'
import MetaData from './__meta__/meta.json'
import { badges } from '@sb/badges'
import { sbHideControls } from '@helpers/storybookHelpers'
import { withMeta } from '@helpers/hocs/MetaComponent/withMeta'
import Docs from './SelectDocs'
import { Toggle } from '@src/toggle'
import { Label } from '@src/label'
import { Link } from '@src/link'
import { P, Text } from '@src/typography'
import { Tag } from '@src/tag'
import { Space } from '@src/space'
import { Add, Cancel1 } from '@kaspersky/icons/16'

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
  title: 'Molecules/Select',
  component: Select,
  argTypes: {
    ...sbHideControls(['theme'])
  },
  args: {
    error: false,
    placeholder: 'Select',
    defaultValue: 1,
    options: opts,
    testId: 'select-test-id',
    klId: 'select-kl-id'
  },
  parameters: {
    badges: [badges.stable, badges.needsDesignReview],
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

export const WithIcons: Story = {
  render: (args: SelectProps) => {
    const Allowed: React.FC<{ selected?: boolean }> = ({ selected }) => (
      <Space size={4}>
        <Add color={selected ? '#1DA189' : 'black'} />
        Allowed
      </Space>
    )

    const Blocked: React.FC<{ selected?: boolean }> = ({ selected }) => (
      <Space size={4} color="black">
        <Cancel1 color={selected ? '#B21A35' : 'black'} />
        Blocked
      </Space>
    )

    return (
      <Select {...args}>
        <Option value={1} label={<Allowed selected />}>
          <Allowed />
        </Option>
        <Option value={2} label={<Blocked selected />}>
          <Blocked />
        </Option>
      </Select>
    )
  },
  args: {
    options: undefined
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
    renderFooter: () => (
      <div style={{ padding: '8px 12px' }}>
        <Link href="#">Terms and Conditions</Link>
      </div>
    )
  }
}

export const WithHeader: Story = {
  args: {
    renderHeader: () => (
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

export const Tags: Story = {
  render: (args: SelectProps) => {
    return (
      <div style={{ width: '550px' }}>
        <P>Tags mode</P>
        <Label htmlFor={args.id}>
          <Select
            {...args}
          />
        </Label>
        <P>Tags mode with allowNonUniqueValues</P>
        <Label htmlFor={args.id + '1'}>
          <Select
            id={args.id + '1'}
            {...args}
            allowNonUniqueValues={true}
            defaultValue={['MyTag', 'MyTag']}
          />
        </Label>
      </div>
    )
  },
  args: {
    getPopupContainer: () => document.body,
    mode: 'tags',
    tagRender: (props) => <Tag truncation={{ maxChars: 30 }} {...props} />,
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
    <Wrapper>
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
