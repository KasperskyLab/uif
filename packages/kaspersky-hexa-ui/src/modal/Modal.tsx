import useDimension from '@helpers/hooks/useDimension'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { ActionButton } from '@src/action-button'
import { Button } from '@src/button'
import { Space } from '@src/space'
import { Modal as AntdModal } from 'antd'
import React, { FC, useEffect, useMemo, useRef, useState } from 'react'
import styled from 'styled-components'

import {
  Kira,
  StatusDangerOutline1,
  StatusOkOutline,
  StatusWarningOutline
} from '@kaspersky/hexa-ui-icons/24'

import {
  getMaskStyle,
  ModalContent,
  modalCss,
  ModalGlobalStyles,
  StyledIcon
} from './modalCss'
import { ModalMode, ModalProps, ModalViewProps } from './types'
import { useThemedModal } from './useThemedModal'

const StyledModal = styled(AntdModal).withConfig({
  shouldForwardProp: (prop) => !['cssConfig'].includes(prop)
})`${modalCss}`

export const Modal: FC<ModalProps> = (rawProps: ModalProps) => {
  const themedProps = useThemedModal(rawProps)
  const props = useTestAttribute(themedProps)
  return <ModalView {...props} />
}

const ModalView: FC<ModalViewProps> = (props: ModalViewProps) => {
  const {
    mode = 'default',
    header,
    content,
    actions,
    cssConfig,
    visible,
    centered = true,
    closable = true,
    testAttributes,
    customButtons
  } = props

  const iconMap = useMemo((): { [key in Exclude<ModalMode, 'default'>]: React.FC; } => {
    return {
      warning: () => <StatusWarningOutline testId="modal-warning-icon" klId="icon-warning" />,
      error: () => <StatusDangerOutline1 testId="modal-error-icon" klId="icon-error" />,
      success: () => <StatusOkOutline testId="modal-success-icon" klId="icon-success" />,
      ai: () => <Kira testId="modal-ai-icon" klId="icon-ai" />
    }
  }, [])

  const IconComponent = useMemo(() => mode !== 'default' && iconMap[mode], [iconMap, mode])

  const titleRef = useRef<HTMLDivElement>(null)
  const footerRef = useRef<HTMLDivElement>(null)

  const { height: titleHeight } = useDimension(titleRef, [visible])
  const { height: footerHeight } = useDimension(footerRef, [visible])

  useEffect(() => {
    if (visible && footerRef.current) {
      const firstFooterButton: HTMLButtonElement | null = footerRef.current.querySelector('button')

      setTimeout(() => {
        firstFooterButton?.focus()
      })
    }
  }, [visible])

  const titleMemoized = useMemo(() => {
    return (
      <div ref={titleRef}>
        {IconComponent && (
          <StyledIcon cssConfig={cssConfig}>
            <IconComponent />
          </StyledIcon>
        )}
        {header}
      </div>
    )
  }, [header, IconComponent, cssConfig])

  const footerMemoized = useMemo(() => {
    if (!actions && !customButtons) {
      return null
    }
    return (
      <div ref={footerRef}>
        <Space direction="horizontal" gap={8}>
          {actions?.FIRST_ACTION && (
            <Button size="medium" {...actions.FIRST_ACTION}>
              {actions.FIRST_ACTION.text}
            </Button>
          )}
          {actions?.SECOND_ACTION && (
            <Button size="medium" mode="secondary" {...actions.SECOND_ACTION}>
              {actions.SECOND_ACTION.text}
            </Button>
          )}
          {actions?.THIRD_ACTION && (
            <Button size="medium" mode="secondary" {...actions.THIRD_ACTION}>
              {actions.THIRD_ACTION.text}
            </Button>
          )}
          {customButtons && customButtons.map(({ text, ...rest }, i) => (
            <Button
              key={`modalCustomButton${i}`}
              size="medium"
              mode="secondary"
              {...rest}
            >
              {text}
            </Button>
          ))}
        </Space>
      </div>
    )
  }, [actions, customButtons])

  const [showTopBorder, setShowTopBorder] = useState(false)
  const [showBottomBorder, setShowBottomBorder] = useState(false)

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement

    const bottom = target.scrollHeight - target.scrollTop === target.clientHeight
    setShowBottomBorder(!bottom)

    const top = target.scrollTop === 0
    setShowTopBorder(!top)
  }

  return (
    <>
      <ModalGlobalStyles
        cssConfig={cssConfig}
        titleHeight={titleHeight}
        footerHeight={footerHeight}
        showTopBorder={showTopBorder}
        showBottomBorder={showBottomBorder}
        closable={closable}
      />
      <StyledModal
        title={titleMemoized}
        footer={footerMemoized}
        mask
        maskClosable={false}
        maskStyle={getMaskStyle(cssConfig)}
        keyboard={false}
        centered={centered}
        closable={closable}
        closeIcon={<ActionButton _wrapInSpan size="large" />}
        {...testAttributes}
        {...props}
        cssConfig={cssConfig}
        titleHeight={titleHeight}
        footerHeight={footerHeight}
        showTopBorder={showTopBorder}
        showBottomBorder={showBottomBorder}
      >
        <ModalContent
          cssConfig={cssConfig}
          titleHeight={titleHeight}
          footerHeight={footerHeight}
          onScroll={handleScroll}
        >
          {content}
        </ModalContent>
      </StyledModal>
    </>
  )
}

Modal.displayName = 'Modal'
