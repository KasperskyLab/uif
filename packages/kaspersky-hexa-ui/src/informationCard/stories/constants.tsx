import { Badge } from '@src/badge'
import { Button } from '@src/button'
import { Checkbox } from '@src/checkbox'
import { Radio } from '@src/radio'
import { Space } from '@src/space'
import { Tag } from '@src/tag'
import { Toggle } from '@src/toggle'
import React, { ReactNode } from 'react'
import styled from 'styled-components'

import { Connection } from '@kaspersky/hexa-ui-icons/32'

export const leftSideVariantOptions = [
  'none',
  'icon',
  'iconWithBadge'
] as const

export const rightCornerVariantOptions = [
  'none',
  'checkbox',
  'toggle',
  'radio'
] as const

export const contentVariantOptions = [
  'none',
  'tags'
] as const

export const footerVariantOptions = [
  'none',
  'actions'
] as const

type PropsWithDisabled = {
  disabled?: boolean
}

const StyledIconWithBadge = styled.div`
  position: relative;
`

const StyledBadge = styled(Badge)`
  position: absolute;
  top: 0;
  right: -8px;
`

export const IconWithBadge = () => {
  return (
    <StyledIconWithBadge>
      <Connection />
      <StyledBadge count={9} mode="high" />
    </StyledIconWithBadge>
  )
}

const DefaultFooter = ({ disabled }: PropsWithDisabled) => (
  <Space gap={16} direction="horizontal">
    <Button mode="primary" disabled={disabled}>First</Button>
    <Button mode="secondary" disabled={disabled}>Second</Button>
  </Space>
)

const DefaultChildren = ({ disabled }: PropsWithDisabled) => (
  <>
    <Tag mode="purple" interactive outlined disabled={disabled}>Custom content</Tag>
    <Tag mode="violet" interactive outlined disabled={disabled}>More custom content</Tag>
  </>
)

export const resolveLeftSideVariant = (
  variant: (typeof leftSideVariantOptions)[number]
): ReactNode => {
  if (variant === 'icon') {
    return <Connection />
  }

  if (variant === 'iconWithBadge') {
    return <IconWithBadge />
  }

  return undefined
}

export const resolveRightCornerVariant = (
  variant: (typeof rightCornerVariantOptions)[number],
  disabled?: boolean
): ReactNode => {
  if (variant === 'checkbox') {
    return <Checkbox disabled={disabled} checked />
  }

  if (variant === 'toggle') {
    return <Toggle disabled={disabled} checked />
  }

  if (variant === 'radio') {
    return <Radio disabled={disabled} options={[{ label: '', value: '' }]} />
  }

  return undefined
}

export const resolveContentVariant = (
  variant: (typeof contentVariantOptions)[number],
  disabled?: boolean
): ReactNode => {
  if (variant === 'tags') {
    return <DefaultChildren disabled={disabled} />
  }

  return undefined
}

export const resolveFooterVariant = (
  variant: (typeof footerVariantOptions)[number],
  disabled?: boolean
): ReactNode => {
  if (variant === 'actions') {
    return <DefaultFooter disabled={disabled} />
  }

  return undefined
}
