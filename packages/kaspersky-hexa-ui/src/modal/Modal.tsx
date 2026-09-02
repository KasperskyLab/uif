import { getClassNameWithTheme } from '@helpers/getClassNameWithTheme'
import useDimension from '@helpers/hooks/useDimension'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { ActionButton } from '@src/action-button'
import { Button } from '@src/button'
import { Space } from '@src/space'
import AntdModal from 'antd/es/modal'
import cn from 'classnames'
import React, {
  CSSProperties,
  FC,
  useEffect,
  useMemo,
  useState
} from 'react'

import {
  Kira,
  StatusDangerOutline1,
  StatusOkOutline,
  StatusWarningOutline
} from '@kaspersky/hexa-ui-icons/24'

import styles from './Modal.module.scss'
import {
  ModalMode,
  ModalProps
} from './types'

const iconMap: Record<Exclude<ModalMode, 'default'>, React.FC> = {
  warning: () => <StatusWarningOutline testId="modal-warning-icon" klId="icon-warning" />,
  error: () => <StatusDangerOutline1 testId="modal-error-icon" klId="icon-error" />,
  success: () => <StatusOkOutline testId="modal-success-icon" klId="icon-success" />,
  ai: () => <Kira testId="modal-ai-icon" klId="icon-ai" />
}

type ModalStyle = CSSProperties & {
  '--modal-title-height': string,
  '--modal-footer-height': string
}

export const Modal: FC<ModalProps> = (rawProps: ModalProps) => {
  const {
    mode = 'default',
    header,
    content,
    actions,
    dialog,
    visible,
    centered = true,
    closable = true,
    testAttributes,
    customButtons,
    style,
    className,
    wrapClassName,
    closeIcon = <ActionButton _wrapInSpan size="large" />,
    size = 'small',
    ...rest
  } = useTestAttribute(rawProps)

  const resolvedSize = dialog ? 'small' : size
  const IconComponent = useMemo(() => mode !== 'default' && iconMap[mode], [iconMap, mode])

  const [titleElement, setTitleElement] = useState<HTMLDivElement | null>(null)
  const [footerElement, setFooterElement] = useState<HTMLDivElement | null>(null)

  const { height: titleHeight } = useDimension(titleElement, [visible])
  const { height: footerHeight } = useDimension(footerElement, [visible])

  useEffect(() => {
    if (!visible || !footerElement) {
      return
    }

    const firstFooterButton: HTMLButtonElement | null = footerElement.querySelector('button')
    const timeoutId = window.setTimeout(() => {
      firstFooterButton?.focus()
    })

    return () => window.clearTimeout(timeoutId)
  }, [visible, footerElement])

  const titleMemoized = useMemo(() => (
    <div ref={setTitleElement} className={styles.title}>
      {IconComponent && (
        <span className={styles.icon}>
          <IconComponent />
        </span>
      )}
      {header}
    </div>
  ), [header, IconComponent])

  const footerMemoized = useMemo(() => {
    if (!actions && !customButtons) {
      return null
    }

    return (
      <div ref={setFooterElement}>
        <Space direction="horizontal" gap={8}>
          {actions?.FIRST_ACTION && (
            <Button
              size="medium"
              {...actions.FIRST_ACTION}
              mode={
                mode === 'error' && !actions.FIRST_ACTION.mode
                  ? 'dangerFilled'
                  : actions.FIRST_ACTION.mode
              }
            >
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
          {customButtons?.map(({ text, ...buttonProps }, index) => (
            <Button
              key={`modalCustomButton${index}`}
              size="medium"
              mode="secondary"
              {...buttonProps}
            >
              {text}
            </Button>
          ))}
        </Space>
      </div>
    )
  }, [actions, customButtons, mode])

  const [showTopBorder, setShowTopBorder] = useState(false)
  const [showBottomBorder, setShowBottomBorder] = useState(false)

  useEffect(() => {
    if (!visible) {
      setShowTopBorder(false)
      setShowBottomBorder(false)
    }
  }, [visible])

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const target = event.currentTarget
    setShowBottomBorder(target.scrollHeight - target.scrollTop > target.clientHeight)
    setShowTopBorder(target.scrollTop !== 0)
  }

  const modalStyle: ModalStyle = {
    ...style,
    '--modal-title-height': `${titleHeight}px`,
    '--modal-footer-height': `${footerHeight}px`
  }

  return (
    <AntdModal
      {...rest}
      {...testAttributes}
      visible={visible}
      title={titleMemoized}
      footer={footerMemoized}
      mask={!dialog}
      maskClosable={false}
      keyboard={false}
      centered={centered}
      closable={closable}
      closeIcon={closeIcon}
      width="none"
      className={cn(
        getClassNameWithTheme(className, rest.theme),
        'hexa-ui-modal',
        styles.modal,
        styles[resolvedSize],
        styles[mode],
        {
          [styles.dialog]: dialog,
          [styles.closable]: closable,
          [styles.showTopBorder]: showTopBorder,
          [styles.showBottomBorder]: showBottomBorder,
          [styles.withoutFooter] : !footerMemoized
        }
      )}
      wrapClassName={cn(
        wrapClassName,
        styles.modalWrap,
        {
          [styles.dialogWrap]: dialog,
          [styles[dialog?.position ?? '']]: dialog
        }
      )}
      style={modalStyle}
    >
      <div className={styles.modalContent} onScroll={handleScroll}>
        {content}
      </div>
    </AntdModal>
  )
}

Modal.displayName = 'Modal'
