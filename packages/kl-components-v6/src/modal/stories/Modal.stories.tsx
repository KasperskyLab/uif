import React, { useState } from 'react'
import { badges } from '../../../.storybook/badges'
import { Button } from '../../button'
import { Modal } from '../Modal'
import { ModalProps } from '../types'
import { withMeta } from '../../../helpers/hocs/MetaComponent/withMeta'
import { useTheme } from '../../../design-system/theme/hooks'
import { Story } from '@storybook/react'
import { StoryLayout } from '../../../.storybook/StoryComponents'
import MetaData from '../__meta__/meta.json'

export default {
  title: 'Molecules/Modal',
  component: Modal,
  parameters: {
    badges: [badges.stable, badges.needsDesignReview],
    docs: {
      page: withMeta(MetaData)
    }
  }
}

export const Default: Story<ModalProps> = (args) => {
  const theme = useTheme()

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
      text: 'OK',
      onClick: handleOk
    },
    SECOND_ACTION: {
      text: 'Cancel',
      onClick: handleCancel
    }
  }

  return (
    <StoryLayout theme={theme.key}>
      <Button mode="primaryBlack" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        {...args}
        visible={isModalOpen}
        actions={ActionsButtons}
        onCancel={handleCancel}
      />
    </StoryLayout>
  )
}

Default.argTypes = {
  header: {
    defaultValue: 'Modal dialog',
    control: { type: 'text' }
  },
  content: {
    defaultValue: `This is place holder text. The basic dialog for modals should contain only valuable and 
    relevant information. Simplify dialogs by removing unnecessary elements or content that 
    does not support user tasks. If you find that the number of required elements for your design 
    are making the dialog excessively large, then try a different design solution.`,
    control: { type: 'text' }
  },
  mode: {
    defaultValue: 'default',
    control: { type: 'select' }
  }
}
