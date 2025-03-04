import { ThemedPalette, ThemedPaletteProps } from '@design-system/palette'
import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { sbHideControls } from '@sb/helpers'
import { ActionButton } from '@src/action-button'
import { Button } from '@src/button'
import { ButtonMode } from '@src/button/types'
import { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import styled from 'styled-components'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'
import { Placeholder } from '@kaspersky/hexa-ui-icons/16'

import MetaData from '../__meta__/meta.json'
import { Modal } from '../Modal'
import { ModalProps } from '../types'

const defaultText = `This is place holder text. The basic dialog for modals should contain only valuable and 
relevant information. Simplify dialogs by removing unnecessary elements or content that 
does not support user tasks. If you find that the number of required elements for your design 
are making the dialog excessively large, then try a different design solution. `
const defaultIcon = <Placeholder klId="button-icon" />

type WithButtonProps = {
  firstButtonText: string,
  secondButtonText: string,
  thirdButtonText: string,
  firstButtonMode: ButtonMode,
  secondButtonMode: ButtonMode,
  thirdButtonMode: ButtonMode
} & ModalProps

const meta: Meta<WithButtonProps> = {
  title: 'Hexa UI Components/Modal',
  component: Modal,
  argTypes: {
    firstButtonText: { control: { type: 'text' } },
    firstButtonMode: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary', 'dangerFilled', 'dangerOutlined']
    },
    secondButtonText: { control: { type: 'text' } },
    secondButtonMode: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary', 'dangerFilled', 'dangerOutlined']
    },
    thirdButtonText: { control: { type: 'text' } },
    thirdButtonMode: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary', 'dangerFilled', 'dangerOutlined']
    },
    ...sbHideControls(['theme', 'actions'])
  },
  args: {
    header: 'Modal dialog',
    content: defaultText,
    mode: 'default',
    size: 'small',
    firstButtonText: 'OK',
    firstButtonMode: 'primary',
    secondButtonText: 'Cancel',
    secondButtonMode: 'secondary',
    thirdButtonText: 'Cancel',
    thirdButtonMode: 'secondary',
    testId: 'modal-test-id',
    klId: 'modal-kl-id'
  },
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    docs: {
      page: withMeta(MetaData)
    },
    design: MetaData.figmaView
  }
}
export default meta

type Story = StoryObj<WithButtonProps>

const ModalDefaultStory = (args: WithButtonProps) => {
  const { firstButtonText, firstButtonMode, secondButtonText, secondButtonMode, ...rest } = args
  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  const ActionsButtons: ModalProps['actions'] = {
    FIRST_ACTION: {
      text: firstButtonText,
      mode: firstButtonMode,
      onClick: handleOk
    },
    SECOND_ACTION: {
      text: secondButtonText,
      mode: secondButtonMode,
      onClick: handleCancel
    }
  }

  return (
    <>
      <Button onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        {...rest}
        visible={isModalOpen}
        actions={ActionsButtons}
        onCancel={handleCancel}
      />
    </>
  )
}

export const Basic: Story = {
  render: ModalDefaultStory.bind({})
}

export const WithThreeActionButtons: Story = {
  render: (args: WithButtonProps) => {
    const {
      firstButtonText,
      firstButtonMode,
      secondButtonText,
      secondButtonMode,
      thirdButtonText,
      thirdButtonMode,
      ...rest
    } = args

    const [isModalOpen, setIsModalOpen] = useState(false)

    const showModal = () => {
      setIsModalOpen(true)
    }

    const handleOk = () => {
      setIsModalOpen(false)
    }

    const handleCancel = () => {
      setIsModalOpen(false)
    }

    const ActionsButtons: ModalProps['actions'] = {
      FIRST_ACTION: {
        text: firstButtonText,
        mode: firstButtonMode,
        onClick: handleOk
      },
      SECOND_ACTION: {
        text: secondButtonText,
        mode: secondButtonMode,
        onClick: handleCancel
      },
      THIRD_ACTION: {
        text: thirdButtonText,
        mode: thirdButtonMode,
        onClick: handleCancel
      }
    }

    return (
      <>
        <Button onClick={showModal}>
          Open Modal
        </Button>
        <Modal
          {...rest}
          visible={isModalOpen}
          actions={ActionsButtons}
          onCancel={handleCancel}
        />
      </>
    )
  }
}

export const WithCustomButtons: Story = {
  render: (args: WithButtonProps) => {
    const {
      firstButtonText,
      firstButtonMode,
      secondButtonText,
      secondButtonMode,
      thirdButtonText,
      thirdButtonMode,
      ...rest
    } = args

    const [isModalOpen, setIsModalOpen] = useState(false)

    const showModal = () => {
      setIsModalOpen(true)
    }

    const handleCancel = () => {
      setIsModalOpen(false)
    }

    return (
      <>
        <Button onClick={showModal}>
          Open Modal
        </Button>
        <Modal
          {...rest}
          visible={isModalOpen}
          onCancel={handleCancel}
        />
      </>
    )
  },
  args: {
    content: 'Buttons are used for backwards compatibility, when using custom buttons it is recommended not to use actions prop',
    customButtons: Array.from({ length: 12 }).map((_, index) => ({
      onClick: () => alert(index),
      text: index.toString()
    }))
  }
}

export const WithScrollAndLongTitle: Story = {
  render: ModalDefaultStory.bind({}),
  args: {
    header: 'Long long long long long long long long long long modal dialog title',
    content: Array(20).join(defaultText)
  }
}

export const CustomModalRender: Story = {
  render: (args: ModalProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const showModal = () => {
      setIsModalOpen(true)
    }

    const handleCancel = () => {
      setIsModalOpen(false)
    }

    const ModalContent = styled.div`
      & {
        position: relative;
        pointer-events: auto;
  
        .modal-video-close-button {
          position: absolute;
          top: 10px;
          right: 10px;
        }
      }
    `

    return (
      <>
        <Button onClick={showModal}>
          Open Modal
        </Button>
        <Modal
          {...args}
          visible={isModalOpen}
          modalRender={() => (
            <ModalContent>
              <ActionButton
                onClick={handleCancel}
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
              ></iframe>
            </ModalContent>
          )}
          onCancel={handleCancel}
        />
      </>
    )
  }
}

export const WithLoadingAndDisableButtons: Story = {
  render: (args: WithButtonProps) => {
    const {
      firstButtonText,
      firstButtonMode,
      secondButtonText,
      secondButtonMode,
      thirdButtonText,
      thirdButtonMode,
      ...rest
    } = args

    const [isModalOpen, setIsModalOpen] = useState(false)

    const showModal = () => {
      setIsModalOpen(true)
    }

    const handleOk = () => {
      setIsModalOpen(false)
    }

    const handleCancel = () => {
      setIsModalOpen(false)
    }

    const ActionsButtons: ModalProps['actions'] = {
      FIRST_ACTION: {
        text: firstButtonText,
        mode: firstButtonMode,
        loading: true,
        onClick: handleOk
      },
      SECOND_ACTION: {
        text: secondButtonText,
        mode: secondButtonMode,
        disabled: true,
        iconAfter: defaultIcon,
        onClick: handleCancel
      }
    }

    return (
      <>
        <Button onClick={showModal}>
          Open Modal
        </Button>
        <Modal
          {...rest}
          visible={isModalOpen}
          actions={ActionsButtons}
          onCancel={handleCancel}
        />
      </>
    )
  }
}

export const NonClosable: Story = {
  render: ModalDefaultStory.bind({}),
  args: {
    closable: false
  }
}

type PaletteStory = StoryObj<ThemedPaletteProps>
export const ColorTokens: PaletteStory = {
  args: { source: componentColors.modal },
  render: args => <ThemedPalette {...args} />
}
