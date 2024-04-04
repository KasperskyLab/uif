import React, { useState } from 'react'
import styled from 'styled-components'
import { Meta, StoryObj } from '@storybook/react'
import { badges } from '@sb/badges'
import MetaData from './meta.json'
import { withMeta } from '@helpers/hocs/MetaComponent/withMeta'
import { FieldSet, Textbox, SegmentedButton, H3 } from '@src/index'
import { FieldSetProps, FieldSetItem } from './types'
import { SegmentedButtonOption } from '@src/segmented-button/types'
import { FieldProps } from '@src/field/types'

const meta: Meta<FieldSetProps> = {
  title: 'Molecules/FieldSet',
  component: FieldSet,
  parameters: {
    badges: [badges.stable, badges.dev],
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

export const Basic: Story = {
  render: (args: FieldSetProps) => {
    const viewItems: SegmentedButtonOption[] = [
      { text: 'labelPosition: top', value: 'top' },
      { text: 'labelPosition: before', value: 'before' },
      { text: 'gridLayout', value: 'grid' }
    ]
    const [view, setView] = useState<string[]>(['top'])

    const items: FieldSetItem[] = [
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
        label: 'button '.repeat(20),
        control: {
          component: 'button',
          text: 'Button text',
          mode: 'secondary'
        }
      },
      {
        label: 'segmented-button',
        control: {
          component: 'segmented-button',
          value: ['1'],
          onChange: (e) => e,
          size: 'large',
          items: getOptions(3, 'SegmentedButton').map(item => ({ text: item.label, value: item.value }))
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
          label: 'Status text'
        }
      },
      {
        label: 'Text',
        control: {
          component: 'text',
          children: 'Text'
        }
      }
    ]

    return (
      <Container>
        <SegmentedButton items={viewItems} value={view} onChange={setView}/>
        <FieldSet
          {...args}
          items={items}
          labelPosition={((view[0] === 'top' || view[0] === 'before' || undefined) && view[0]) as FieldProps['labelPosition']}
          gridLayout={(view[0] === 'grid' && { firstCol: '123px', secondCol: '456px' }) as FieldProps['gridLayout']}
        />
      </Container>
    )
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
            valid: true,
            value: 'its better to declare like this'
          }
        },
        {
          label: 'JSON-like field, JSX control',
          message: 'сомнительно, но окээээй',
          messageMode: 'warning',
          control: <Textbox value='its ok, but common props (disabled)'/>
        },
        {
          label: 'JSX Field and control',
          message: 'мы все в этом виноваты',
          messageMode: 'error',
          control: {
            component: 'textbox',
            invalid: true
          }
        }
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
        label: 'label-like',
        control: { component: 'checkbox', children: 'Reduced margin before label-like element' }
      },
      {
        label: 'label-like',
        control: { component: 'toggle', children: 'Toggle' }
      },
      {
        label: 'label-like',
        control: { component: 'text', children: 'Some text' }
      },
      {
        label: 'input-like',
        control: { component: 'select' }
      },
      {
        label: 'label-like',
        control: { component: 'status', label: 'Status text' }
      },
      {
        label: 'input-like',
        control: { component: 'search' }
      },
      {
        label: 'input-like',
        marginBefore: '32px',
        control: { component: 'textbox-textarea', value: 'custom margin' }
      }
    ]
  }
}
