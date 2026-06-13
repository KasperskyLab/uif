import { Button } from '@src/button'
import { Field } from '@src/field'
import { Select } from '@src/select'
import { StoryObj } from '@storybook/react'
import React, { useState } from 'react'

import { Sidebar } from '../Sidebar'
import { SidebarProps } from '../types'

type Story = StoryObj<SidebarProps>

const selectOptions = [
  { label: 'test', value: 1 },
  { label: 'Option 2', value: 2 }
]

/**
 * Client repro: Select inside Sidebar (no Field).
 * 1. Click "Open" → Sidebar opens, Select is full width.
 * 2. Open Select dropdown → trigger may collapse to min-content.
 * 3. DevTools: inspect `.ant-select` — styled-components class with
 *    `width: 100%` may disappear after opening.
 */
export const SelectInSidebar: Story = {
  render: () => {
    const [visible, setVisible] = useState(false)

    return (
      <>
        <Button onClick={() => setVisible(true)}>Open</Button>
        <Sidebar
          title="Test"
          visible={visible}
          onClose={() => setVisible(false)}
        >
          <Select
            mode="multiple"
            options={selectOptions}
          />
        </Sidebar>
      </>
    )
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Client repro from Telegram: multiselect in Sidebar without Field. ' +
          'Open the sidebar, then open the select — width may collapse after ' +
          'the dropdown opens. Check DevTools on `.ant-select` for styled-components ' +
          'class with `width: 100%` before/after.'
      }
    }
  }
}

/**
 * Same scenario with Field — reported in product forms inside Sidebar.
 */
export const SelectInSidebarWithField: Story = {
  render: () => {
    const [visible, setVisible] = useState(false)

    return (
      <>
        <Button onClick={() => setVisible(true)}>Open</Button>
        <Sidebar
          title="Test"
          visible={visible}
          onClose={() => setVisible(false)}
        >
          <Field
            labelPosition="before"
            label="Category"
            control={
              <Select
                mode="multiple"
                placeholder="Select"
                options={selectOptions}
              />
            }
          />
        </Sidebar>
      </>
    )
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Sidebar + Field + Select. Use when validating width inside form ' +
          'layouts in drawer content.'
      }
    }
  }
}
