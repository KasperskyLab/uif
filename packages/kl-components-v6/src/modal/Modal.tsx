import React, { useMemo, useRef } from 'react'
import { ModalProps, ModalMode, ModalCssConfig } from './types'
import styled from 'styled-components'
import {
  ModalContent,
  modalCss,
  IconStyled,
  SpaceBox,
  ModalGlobalStyles
} from './modalCss'
import { useThemeModal } from './useThemeModal'
import { Modal as AntdModal } from 'antd'
import { Button } from '../button'
import { Space } from '../space'
import useDimension from '../../helpers/hooks/useDimension'
import { IconWarning, IconInfo } from './assets/icons'

export const IconMap: {
  [key in Exclude<ModalMode, 'default'>]: React.FC | null;
} = {
  warning: () => <IconWarning componentId="icon-warning" />,
  error: () => <IconInfo componentId="icon-error" />
}

const StyledModal = styled(AntdModal).withConfig({
  shouldForwardProp: (prop) =>
    !['cssConfig', 'noIcon', 'componentId'].includes(prop)
})`
  ${modalCss}
`

export const Modal = (rawProps: ModalProps): JSX.Element => {
  const props = useThemeModal(rawProps)
  return (
    <ModalView data-component-id={props.componentId} {...props} />
  )
}

export const ModalView: React.FC<
ModalProps & {
  cssConfig: ModalCssConfig
}
> = (props): JSX.Element => {
  const {
    mode,
    noIcon,
    header,
    content,
    actions,
    cssConfig,
    visible,
    withOverlay
  } = props
  const IconComponent = mode !== 'default' && IconMap[mode]
  const ref = useRef<HTMLDivElement>(null)
  const { height } = useDimension(ref, [visible])

  const titleMemoized = useMemo(() => {
    return (
      <>
        {!noIcon && IconComponent && (
          <IconStyled cssConfig={cssConfig} mode={mode}>
            {<IconComponent />}
          </IconStyled>
        )}

        {header}
      </>
    )
  }, [header, noIcon, mode])

  const footerMemoized = useMemo(() => {
    return (
      actions && (
        <>
          <Space size={4} direction="horizontal">
            {actions.FIRST_ACTION && (
              <Button
                size="medium"
                {...actions.FIRST_ACTION}
              >
                {actions.FIRST_ACTION.text}
              </Button>
            )}
            {actions.SECOND_ACTION && (
              <Button mode="secondary" size="medium" {...actions.SECOND_ACTION}>
                {actions.SECOND_ACTION.text}
              </Button>
            )}
          </Space>
        </>
      )
    )
  }, [actions])

  return (
    <>
      <ModalGlobalStyles cssConfig={cssConfig} height={height} />
      <StyledModal
        title={titleMemoized}
        footer={footerMemoized}
        mask={withOverlay}
        {...props}
      >
        <SpaceBox size={8} direction="vertical" align="flex-start" width="auto">
          <ModalContent ref={ref} height={height}>
            {content}
          </ModalContent>
        </SpaceBox>
      </StyledModal>
    </>
  )
}

Modal.displayName = 'Modal'
