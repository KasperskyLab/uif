import { ThemedPalette, ThemedPaletteProps } from '@design-system/palette'
import { TextReducer } from '@helpers/components/TextReducer'
import { validationStatuses } from '@helpers/typesHelpers'
import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { sbHideControls } from '@sb/helpers'
import { Accordion, AccordionPanel } from '@src/accordion'
import { ActionButton } from '@src/action-button'
import { Button } from '@src/button'
import { CodeViewer } from '@src/code-viewer'
import { Field } from '@src/field'
import { FieldSet } from '@src/field-set'
import { Textbox } from '@src/input'
import { Link } from '@src/link'
import { SectionMessage } from '@src/section-message'
import { Sidebar } from '@src/sidebar'
import { Space } from '@src/space'
import { Status } from '@src/status'
import { Toggle } from '@src/toggle'
import { P, Text } from '@src/typography'
import { Meta, StoryObj } from '@storybook/react-webpack5'
import React, { useState } from 'react'
import styled from 'styled-components'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'
import { Add, Cancel1, Delete, Edit, Placeholder } from '@kaspersky/hexa-ui-icons/16'

import MetaData from '../__meta__/meta.json'
import { MultiSelectCheckBox } from '../helpers'
import { Select } from '../Select'
import { OptionType, SelectProps } from '../types'

import { tagsWithActions } from './codeExamples'
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
  value: index + 1,
  ...(index % 5 === 0 ? { description: `description default text #${index + 1}` } : {})
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
    klId: 'select-kl-id',
    dropdownMaxHeight: 256
  },
  parameters: {
    actions: { argTypesRegex: '^(on.*)' },
    badges: [badges.stable, badges.reviewedByDesign],
    docs: {
      page: withMeta(MetaData, Docs)
    },
    design: MetaData.pixsoView
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
              id: args.id + '1',
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

const OptionWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
`

const StyledSelect = styled(Select)`
  width: 300px;
  margin: 20px 0;
`

export const TagsWithActions: Story = {
  render: (args: SelectProps) => {
    const [options, setOptions] = useState<OptionType[]>(opts)
    const [editingTag, setEditingTag] = useState<OptionType | null>(null)
    const [hoveringOption, setHoveringOption] = useState<number | null>(null)

    const handleEdit = (selectedOpt: OptionType) => (e: any) => {
      e.stopPropagation()
      setEditingTag(selectedOpt)
    }

    const handleDelete = (selectedOpt: OptionType) => (e: any) => {
      e.stopPropagation()
      setOptions(prevOptions => {
        return prevOptions.filter(opt => opt.value !== selectedOpt.value)
      })
    }

    const handleTagNameChange = (value: string) => {
      setEditingTag(prev => {
        return {
          ...prev,
          label: value
        }
      })
    }

    const handleTagRename = () => {
      if (!editingTag) return

      setOptions((prevOptions) => {
        return prevOptions.map(opt => {
          if (opt.value === editingTag.value) {
            return editingTag
          } else {
            return opt
          }
        })
      })
      setEditingTag(null)
    }

    return (
      <div style={{ width: '1000px' }}>
        <SectionMessage
          style={{ width: '600px' }}
          mode="info"
          closable={false}
        >
          <Text>The story demonstrates the possibilities of customizing select options by passing them directly to component via React.Children.</Text>
          <Text>Этот пример демонстрирует возможность кастомизации опций селекта путем их прямой передачи в компонент через React.Children.</Text>
        </SectionMessage>
        <StyledSelect
          {...args}
        >
          {options.map((opt) => {
            return (
              <Select.Option
                key={opt.value}
                value={opt.value}
                label={opt.label}
                style={{ paddingRight: 5 }}
                onMouseEnter={() => setHoveringOption(opt.value)}
                onMouseLeave={() => setHoveringOption(null)}
              >
                <OptionWrapper>
                  <div style={{ width: '100%', paddingRight: 58, display: 'flex', alignItems: 'center' }}>
                    <MultiSelectCheckBox />
                    <TextReducer>
                      {opt.label}
                    </TextReducer>
                  </div>
                  <div style={{
                    position: 'absolute',
                    right: 0,
                    display: 'flex',
                    gap: '4px',
                    visibility: opt.value === hoveringOption ? 'visible' : 'hidden'
                  }}>
                    <ActionButton icon={<Edit />} onClick={handleEdit(opt)}/>
                    <ActionButton icon={<Delete />} onClick={handleDelete(opt)}/>
                  </div>
                </OptionWrapper>
              </Select.Option>
            )
          })}
        </StyledSelect>
        <Sidebar
          size="extraSmall"
          visible={Boolean(editingTag)}
          onClose={() => setEditingTag(null)}
          title="Edit tag"
          footer={
            <Button onClick={handleTagRename}>Apply</Button>
          }
        >
          <Field label="Tag name" control={<Textbox value={editingTag?.label} onChange={handleTagNameChange} />}/>
        </Sidebar>
        <Accordion withBorder={false}>
          <AccordionPanel key={1} title="Code example">
            <CodeViewer
              initialValue={tagsWithActions}
              // @ts-ignore
              language="typescript"
              readonly
              width={1000}
              height={500}
            />
          </AccordionPanel>
        </Accordion>
      </div>
    )
  },
  args: {
    allowClear: true,
    mode: 'tags',
    options: undefined
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
