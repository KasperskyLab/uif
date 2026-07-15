import { useClickOutside } from '@helpers/hooks/useClickOutside'
import { Button } from '@src/button'
import { Field } from '@src/field'
import { Textbox } from '@src/input'
import { Popover } from '@src/popover'
import { Space } from '@src/space'
import React, { useRef, useState } from 'react'

import { useRichTextEditorContext } from '../../RichTextEditorContext'
import { isBlockActive } from '../../Toolbar'
import { CustomPluginActionProps } from '../../types'

import { unwrapLink, wrapLink } from './helpers'
import styles from './LinkPopup.module.scss'

const defaultButtonText = { ok: 'OK', cancel: 'Cancel' }

type ButtonText = { ok?: string, cancel?: string }

export interface LinkPopupProps extends CustomPluginActionProps {
  label?: string,
  Component: JSX.Element;
  buttonText?: ButtonText
}

export const LinkPopup = ({
  editor,
  format,
  Component,
  label = 'Address',
  buttonText = defaultButtonText
}: LinkPopupProps) => {
  const editorContainer = useRichTextEditorContext()
  const [show, setShow] = useState(false)
  const [address, setAddress] = useState('')
  const containerRef = useRef<HTMLDivElement | null>(null)

  const closePopup = () => {
    setShow(false)
    setAddress('')
  }

  const openPopup = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation()

    if (isBlockActive(editor, format, 'type')) {
      unwrapLink(editor)
      return
    }
    setShow(true)
  }

  const handleClick = () => {
    closePopup()
    wrapLink(address, editor)
  }

  useClickOutside(containerRef, closePopup)

  return (
    <Popover
      width={300}
      visible={show}
      destroyTooltipOnHide
      content={
        (
          <Space direction="vertical" justify="start" align="left" gap={16} ref={containerRef}>
            <Field
              labelPosition="top"
              label={label}
              control={
                <Textbox autoFocus value={address} showClearButton onChange={setAddress} />
              }
            />
            <Space direction="horizontal" justify="start" align="left" gap={8}>
              <Button onClick={handleClick}>{buttonText.ok}</Button>
              <Button onClick={closePopup} mode="secondary">{buttonText.cancel}</Button>
            </Space>
          </Space>
        )
      }
      getPopupContainer={(triggerNode) => editorContainer?.container.current || triggerNode}
    >
      <div className={styles.linkPopupChildrenWrapper} onClick={openPopup}>
        {Component}
      </div>
    </Popover>
  )
}
