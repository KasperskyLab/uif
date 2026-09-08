import { ThemedPalette, ThemedPaletteProps } from '@design-system/palette'
import { badges } from '@sb/badges'
import { ActionButton } from '@src/action-button'
import { Button } from '@src/button'
import { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import styled from 'styled-components'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'
import { Placeholder } from '@kaspersky/hexa-ui-icons/16'

import MetaData from '../__meta__/meta.json'
import { Modal } from '../Modal'
import { ModalProps } from '../types'

const defaultText = `This is placeholder text. The basic dialog for modals should contain only valuable and
relevant information. Simplify dialogs by removing unnecessary elements or content that
does not support user tasks.`
const defaultIcon = <Placeholder klId="button-icon" />

const meta = {
  title: 'Hexa UI Components/Modal/Stories',
  component: Modal,
  tags: ['!autodocs'],
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    design: MetaData.pixsoView
  }
} satisfies Meta<typeof Modal>

export default meta

type Story = StoryObj<ModalProps>
type DialogArgs = ModalProps & {
  dialog: {
    position: 'left' | 'center' | 'right'
  }
}
type DialogStory = StoryObj<DialogArgs>

const ModalWithActions = (args: ModalProps) => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <Button onClick={() => setVisible(true)}>
        Open Modal
      </Button>
      <Modal
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

const DialogWithPositions = (args: DialogArgs) => {
  const [visible, setVisible] = useState(false)
  const [position, setPosition] = useState(args.dialog.position)
  const modalArgs = {
    ...args,
    dialog: {
      ...args.dialog,
      position
    }
  }

  return (
    <>
      {(['Left', 'Center', 'Right'] as const).map(label => (
        <Button
          key={label}
          onClick={() => {
            setPosition(label.toLowerCase() as DialogArgs['dialog']['position'])
            setVisible(true)
          }}
        >
          {label}
        </Button>
      ))}
      <Modal
        {...(modalArgs as ModalProps)}
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

export const Basic: Story = {
  args: {
    header: 'Modal dialog',
    content: defaultText
  },
  render: ModalWithActions
}

export const WithoutFooter: Story = {
  args: {
    header: 'Modal without footer',
    content: defaultText,
    visible: true
  },
  render: args => <Modal {...args} />
}

export const WithThreeActionButtons: Story = {
  args: {
    header: 'Modal dialog',
    content: defaultText
  },
  render: args => {
    const [visible, setVisible] = useState(false)

    return (
      <>
        <Button onClick={() => setVisible(true)}>
          Open Modal
        </Button>
        <Modal
          {...args}
          visible={visible}
          actions={{
            FIRST_ACTION: { text: 'OK', onClick: () => setVisible(false) },
            SECOND_ACTION: { text: 'Cancel', mode: 'secondary', onClick: () => setVisible(false) },
            THIRD_ACTION: { text: 'Continue', mode: 'secondary', onClick: () => setVisible(false) }
          }}
          onCancel={() => setVisible(false)}
        />
      </>
    )
  }
}

export const WithCustomButtons: Story = {
  args: {
    header: 'Modal dialog',
    content: 'Custom buttons are retained for backwards compatibility.',
    customButtons: Array.from({ length: 12 }).map((_, index) => ({
      onClick: () => alert(index),
      text: index.toString()
    }))
  },
  render: args => {
    const [visible, setVisible] = useState(false)

    return (
      <>
        <Button onClick={() => setVisible(true)}>
          Open Modal
        </Button>
        <Modal {...args} visible={visible} onCancel={() => setVisible(false)} />
      </>
    )
  }
}

export const WithScrollAndLongTitle: Story = {
  args: {
    header: 'Long long long long long long long long long long modal dialog title',
    content: Array(20).fill(defaultText).join(' ')
  },
  render: ModalWithActions
}

const VideoModalContent = styled.div`
  position: relative;
  pointer-events: auto;

  .modal-video-close-button {
    position: absolute;
    top: 10px;
    right: 10px;
  }
`

export const CustomModalRender: Story = {
  render: args => {
    const [visible, setVisible] = useState(false)

    return (
      <>
        <Button onClick={() => setVisible(true)}>
          Open Modal
        </Button>
        <Modal
          {...args}
          visible={visible}
          modalRender={() => (
            <VideoModalContent>
              <ActionButton
                onClick={() => setVisible(false)}
                className="modal-video-close-button"
                mode="filledInverted"
                size="large"
              />
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/J0Hx0Pmfjb0?si=q6pOcK3TNrHBlnI0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </VideoModalContent>
          )}
          onCancel={() => setVisible(false)}
        />
      </>
    )
  }
}

export const WithLoadingAndDisabledButtons: Story = {
  args: {
    header: 'Modal dialog',
    content: defaultText
  },
  render: args => {
    const [visible, setVisible] = useState(false)

    return (
      <>
        <Button onClick={() => setVisible(true)}>
          Open Modal
        </Button>
        <Modal
          {...args}
          visible={visible}
          actions={{
            FIRST_ACTION: { text: 'OK', loading: true, onClick: () => setVisible(false) },
            SECOND_ACTION: {
              text: 'Cancel',
              mode: 'secondary',
              disabled: true,
              iconAfter: defaultIcon,
              onClick: () => setVisible(false)
            }
          }}
          onCancel={() => setVisible(false)}
        />
      </>
    )
  }
}

export const NonClosable: Story = {
  args: {
    header: 'Modal dialog',
    content: defaultText,
    closable: false
  },
  render: ModalWithActions
}

export const Dialog: DialogStory = {
  args: {
    header: 'Dialog modal',
    content: defaultText,
    dialog: {
      position: 'center'
    }
  },
  render: DialogWithPositions
}

type PaletteStory = StoryObj<ThemedPaletteProps>

export const ColorTokens: PaletteStory = {
  args: { source: componentColors.modal },
  render: args => <ThemedPalette {...args} />
}
