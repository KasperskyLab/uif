import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { LayoutPreset, LayoutPresetKey } from '@src/field/types'
import {
  Button,
  Field,
  FieldProps,
  FieldSet,
  H3,
  H4,
  SegmentedButton,
  SegmentedButtonOption,
  Select,
  Space,
  Tag,
  Textbox,
  Toggle
} from '@src/index'
import { KeyValueProps } from '@src/key-value'
import { Meta, StoryObj } from '@storybook/react-webpack5'
import React, { useState } from 'react'
import styled from 'styled-components'

import { Placeholder } from '@kaspersky/hexa-ui-icons/16'

import MetaData from './meta.json'
import { FieldSetItem, FieldSetProps } from './types'

const meta: Meta<FieldSetProps> = {
  title: 'Hexa UI Components/FieldSet',
  component: FieldSet,
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    docs: {
      page: withMeta(MetaData)
    }
  }
}
export default meta

type Story = StoryObj<FieldSetProps>

const getOptions = (number: number, componentName: string) => (
  Array.from({ length: number }).map((_, index) => ({
    label: `${componentName} option ${index + 1}`,
    value: `${index + 1}`
  }))
)

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`

const LayoutSwitcher = styled(Space)`
  > * {
    width: auto
  }
`

export const Basic: Story = {
  render: (args: FieldSetProps) => {
    const viewItems: SegmentedButtonOption[] = [
      { text: 'labelPosition: top', value: 'top' },
      { text: 'labelPosition: before', value: 'before' },
      { text: 'gridLayout', value: 'grid' }
    ]
    const [view, setView] = useState<string[]>(['top'])
    const [gridPreset, setGridPreset] = useState<LayoutPresetKey>(LayoutPreset.p_3_6)

    const isGrid = view[0] === 'grid'

    return (
      <Container>
        <LayoutSwitcher>
          <SegmentedButton items={viewItems} value={view} onChange={setView} />  
          {isGrid && (
            <Select 
              options={Object.values(LayoutPreset).map(x => ({ label: x, value: x }))} 
              onChange={setGridPreset}
              style={{ width: 125 }}
              value={gridPreset}
            />
          )}
        </LayoutSwitcher>

        <FieldSet
          {...args}
          labelPosition={!isGrid ? view[0] as FieldProps['labelPosition'] : undefined}
          gridPreset={isGrid ? gridPreset : undefined}
        />
      </Container>
    )
  },
  args: {
    items: [
      {
        label: 'textbox',
        control: {
          component: 'textbox',
          placeholder: 'hello'
        }
      },
      {
        label: 'textbox-masked',
        control: {
          component: 'textbox-masked',
          maskOptions: {
            mask: 'NUM.NUM.NUM.NUM',
            blocks: {
              NUM: {
                mask: /^[0-9]{1,3}$/
              }
            }
          },
          placeholder: 'hello'
        }
      },
      {
        label: 'textbox-number',
        control: {
          component: 'textbox-number',
          placeholder: '123'
        }
      },
      {
        label: 'textbox-password',
        control: {
          component: 'textbox-password',
          value: '123'
        }
      },
      {
        label: 'textbox-textarea',
        control: {
          component: 'textbox-textarea',
          placeholder: 'hello',
          showCount: true,
          maxLength: 1000
        }
      },
      {
        label: 'select',
        control: {
          component: 'select',
          options: getOptions(4, 'Select'),
          value: '1'
        }
      },
      {
        label: 'multiselect',
        control: {
          component: 'select',
          mode: 'multiple',
          options: getOptions(4, 'Multiselect'),
          value: ['1']
        }
      },
      {
        label: 'search',
        control: {
          component: 'search',
          placeholder: 'search'
        }
      },
      {
        label: 'calendar',
        control: {
          component: 'calendar'
        }
      },
      {
        label: 'range-picker',
        control: {
          component: 'range-picker'
        }
      },
      {
        label: 'time-input',
        control: {
          component: 'time-input'
        }
      },
      {
        label: 'code-viewer',
        control: {
          component: 'code-viewer',
          language: 'html'
        }
      },
      {
        label: 'button',
        control: {
          component: 'button',
          text: 'Button text',
          mode: 'secondary'
        }
      },
      {
        label: 'split-button',
        control: {
          component: 'split-button',
          text: 'Split button text',
          items: [{ children: 'Option 1' }, { children: 'Option 2' }]
        }
      },
      {
        label: 'uploader',
        control: {
          component: 'uploader',
          size: 'small',
          description: 'You can add up to 3 TXT, DOC, DOCX files up to 2 MB in size.'
        }
      },
      {
        label: 'segmented-button',
        control: {
          component: 'segmented-button',
          value: ['1'],
          onChange: (e: string[]) => e,
          size: 'large',
          items: getOptions(3, 'SegmentedButton').map(item => ({ text: item.label, value: item.value }))
        }
      },
      {
        label: 'toggle-button-group',
        control: {
          component: 'toggle-button-group',
          value: ['1'],
          onChange: (e: string[]) => e,
          items: getOptions(3, 'ToggleButtonGroup').map(item => ({ text: item.label, value: item.value }))
        }
      },
      {
        label: 'checkbox',
        control: {
          component: 'checkbox',
          children: 'Single checkbox'
        }
      },
      {
        label: 'checkbox-group',
        control: {
          component: 'checkbox-group',
          options: getOptions(4, 'Checkbox')
        }
      },
      {
        label: 'radio',
        control: {
          component: 'radio',
          options: getOptions(4, 'Radio'),
          vertical: true
        }
      },
      {
        label: 'toggle',
        control: {
          component: 'toggle',
          text: 'Toggle label text'
        }
      },
      {
        label: 'link',
        control: {
          component: 'link',
          children: 'Link text'
        }
      },
      {
        label: 'status',
        control: {
          component: 'status',
          icon: <Placeholder />,
          label: 'Status text'
        }
      },
      {
        label: 'status-group (only vertical)',
        control: {
          component: 'status-group',
          items: Array.from({ length: 5 }, (_, index) => ({ label: `Status ${index + 1}`, icon: <Placeholder /> }))
        }
      },
      {
        label: 'tag-group horizontal',
        control: {
          component: 'tag-group',
          items: [
            <Tag key={0} label="Tag text 1"/>,
            ...Array.from({ length: 19 }, (_, index) => ({
              label: `Tag text ${index + 2}`
            }))
          ]
        }
      },
      {
        label: 'tag-group vertical',
        control: {
          component: 'tag-group',
          orientation: 'vertical',
          items: Array.from({ length: 5 }, (_, index) => ({
            label: `Tag text ${index + 1}`
          }))
        }
      },
      {
        label: 'Text',
        control: {
          component: 'text',
          children: 'Text'
        }
      },
      {
        label: 'custom control',
        control: <>
          <Textbox.Number value={150} style={{ maxWidth: 150 }} />
          {' / '}
          <Select 
            options={[
              { label: 'KB', value: 'KB' },
              { label: 'MB', value: 'MB' },
              { label: 'GB', value: 'GB' }
            ]}
            style={{ width: 75 }}
            value="MB"
          />
        </>
      }
    ]
  }
}

export const WaysToDeclareComponent: Story = {
  render: () => (
    <Container>
      <H3>Look in code! dev only</H3>
      <FieldSet items={[
        {
          label: 'JSON-like',
          message: 'зашибись! классно!',
          messageMode: 'success',
          control: {
            component: 'textbox',
            validationStatus: 'success',
            value: 'its better to declare like this'
          }
        },
        {
          label: 'JSON-like field, JSX control',
          message: 'сомнительно, но окээээй',
          messageMode: 'warning',
          control: <Textbox value="its ok, but common props (disabled)"/>
        },
        <Field
          key="JSX Field and control"
          label="JSX Field and control"
          message="мы все в этом виноваты"
          messageMode="error"
          control={<Textbox validationStatus="error" />}
        />
      ]}/>
    </Container>
  )
}

export const OverrideCommonStyles: Story = {
  args: {
    labelPosition: 'before',
    items: [
      {
        label: 'default control',
        control: { component: 'textbox' }
      },
      {
        label: 'custom layout',
        gridLayout: {
          firstCol: '123px',
          secondCol: '456px'
        },
        control: { component: 'textbox' }

      },
      {
        label: 'default control',
        control: {
          component: 'toggle',
          text: 'some button'
        }
      },
      {
        label: 'another custom layout',
        labelPosition: 'top',
        control: { component: 'textbox' }

      },
      {
        label: 'default control',
        control: {
          component: 'button',
          text: 'some button'
        }
      }
    ]
  }
}

export const ReducedMargin: Story = {
  args: {
    labelPosition: 'before',
    items: [
      {
        label: 'input-like',
        control: { component: 'textbox' }
      },
      {
        label: 'text-like',
        control: { component: 'text', children: 'Text' }
      },
      {
        label: 'text-like',
        control: { component: 'status', label: 'Reduced margin before label-like element' }
      },
      {
        label: 'text-like',
        control: { component: 'link', children: 'Link' }
      },
      {
        label: 'input-like',
        control: { component: 'select' }
      },
      {
        label: 'input-like',
        marginBefore: '32px',
        control: { component: 'textbox-textarea', value: 'custom margin' }
      },
      {
        label: 'input-like',
        marginBefore: 48,
        control: { component: 'search', value: 'custom margin' }
      }
    ]
  }
}

const FieldSetsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 12px;
`

export const Disabled: Story = {
  render: (args: FieldSetProps) => {
    const [commonDisabled, setCommonDisabled] = useState<boolean>(false)
    const [buttonDisabled, setButtonDisabled] = useState<boolean>(false)
    const items: FieldSetItem[] = [
      {
        label: 'button',
        control: {
          component: 'button',
          disabled: buttonDisabled,
          text: 'button',
          mode: 'secondary'
        }
      },
      {
        label: 'textbox',
        control: {
          component: 'textbox',
          value: 'textbox'
        }
      }
    ]

    return (
      <FieldSetsContainer>
        <H4>Look in code how to disable component manually</H4>
        <Toggle onChange={setButtonDisabled}>
          {`disable only button: ${commonDisabled.toString()}`}
        </Toggle>
        <Toggle onChange={setCommonDisabled}>
          {`disable all: ${commonDisabled.toString()}`}
        </Toggle>
        <FieldSet {...args} items={items} disabled={commonDisabled} labelPosition="before" />
      </FieldSetsContainer>
    )
  }
}

export const KeyValueMapper: StoryObj<KeyValueProps> = {
  render: (args: KeyValueProps) => {
    return <FieldSet.KeyValueMapper {...args} />
  },
  args: {
    gridLayout: { cols: ['200px', '400px'] },
    keyTooltip: 'tooltip',
    keyRequired: true,
    rowHeight: 123123,
    padding: 12,
    keysMargin: 123123,
    wrapperClasses: {
      keyClassName: 'class1',
      valueClassName: 'class2'
    },
    data: [
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
      }
    ]
  }
}
