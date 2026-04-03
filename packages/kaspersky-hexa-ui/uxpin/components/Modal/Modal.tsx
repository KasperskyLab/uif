import React from 'react'

import { Modal as HexaModal } from '@src/modal'
import { ModalProps } from '@src/modal/types'

const Modal = ({
  content = 'Modal content',
  header = 'Modal title',
  visible = true,
  ...props
}: ModalProps): JSX.Element => (
  <HexaModal content={content} header={header} visible={visible} {...props} />
)

export default Modal
