import { badges } from '@sb/badges'
import {
  buildStoryArgTypesFromComponents,
  getControlsInclude
} from '@sb/components/Documentation'
import { Button } from '@src/button'
import { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'

import MetaData from '../__meta__/meta.json'
import { Modal as ModalComponent } from '../Modal'
import { ModalProps } from '../types'

import {
  defaultArgs,
  modalPropPresentation
} from './Modal.controls'

export const modalStorySettings: Meta<ModalProps> = {
  argTypes: buildStoryArgTypesFromComponents(
    ModalComponent,
    modalPropPresentation
  ),
  args: {
    ...defaultArgs,
    testId: 'modal-test-id',
    klId: 'modal-kl-id'
  },
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    design: MetaData.pixsoView
  }
}

const meta = {
  title: 'Hexa UI Components/Modal',
  component: ModalComponent,
  tags: ['!autodocs'],
  includeStories: ['Playground'],
  excludeStories: ['modalStorySettings'],
  ...modalStorySettings
} satisfies Meta<ModalProps>

export default meta

type Story = StoryObj<ModalProps>

export const Playground: Story = {
  name: 'Playground',
  parameters: {
    controls: {
      include: getControlsInclude(modalPropPresentation),
      sort: 'none'
    }
  },
  render: args => {
    const [visible, setVisible] = useState(false)

    return (
      <>
        <Button onClick={() => setVisible(true)}>
          Open Modal
        </Button>
        <ModalComponent
          {...args}
          visible={visible}
          actions={{
            FIRST_ACTION: {
              text: 'OK',
              onClick: () => setVisible(false)
            },
            SECOND_ACTION: {
              text: 'Cancel',
              mode: 'secondary',
              onClick: () => setVisible(false)
            }
          }}
          onCancel={() => setVisible(false)}
        />
      </>
    )
  }
}
