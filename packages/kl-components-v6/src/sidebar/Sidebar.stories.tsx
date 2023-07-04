import React, { useState } from 'react'

import Meta from './__meta__/meta.json'
import { ISidebarProps, SidebarSize } from './types'
import { Sidebar } from './Sidebar'

import { badges } from '../../.storybook/badges'
import { withMeta } from '../../helpers/hocs/MetaComponent/withMeta'
import { Button } from '../button'
import { Text } from '../typography'
import styled from 'styled-components'
import { Size } from '../../design-system/types'

export default {
  title: 'Organisms/Sidebar',
  component: Sidebar,
  parameters: {
    badges: [badges.stable, badges.needsDesignReview],
    docs: {
      page: withMeta(Meta)
    }
  }
}

const SidebarWithButton = (props: ISidebarProps & { buttonText?: string }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>{props.buttonText || 'Open'}</Button>
      <Sidebar
        visible={isOpen}
        onClose={() => setIsOpen(false)}
        title='Sidebar'
        {...props}
      >
        <Text>Content</Text>
      </Sidebar>
    </>
  )
}

const SidebarTemplate = ({ onClose, ...props }: ISidebarProps) => {
  return (
    <SidebarWithButton {...props}/>
  )
}

export const Basic = SidebarTemplate.bind({})

const WithoutOverlayTemplate = ({ onClose, ...props }: ISidebarProps) => {
  return (
    <SidebarWithButton mask={false} {...props} />
  )
}

export const WithoutOverlay = WithoutOverlayTemplate.bind({})

const SidebarsContainer = styled.div`
  display: flex;
  gap: 12px;
`

const SizesTemplate = ({ onClose, ...props }: ISidebarProps) => {
  const sizes: SidebarSize[] = [Size.ExtraSmall, Size.Small, Size.Medium, Size.Large]

  return (
    <SidebarsContainer>
      {sizes.map(size => (
        <SidebarWithButton key={size} size={size} buttonText={size} {...props} />
      ))}
    </SidebarsContainer>
  )
}

export const Sizes = SizesTemplate.bind({})

const FooterContainer = styled.div`
  display: flex;
  gap: 12px;
`

const WithFooterTemplate = ({ onClose, ...props }: ISidebarProps) => {
  return (
    <SidebarWithButton footer={(
      <FooterContainer>
        <Button mode='secondary'>Cancel</Button>
        <Button>
          OK
        </Button>
      </FooterContainer>
    )} {...props} />
  )
}

export const WithFooter = WithFooterTemplate.bind({})
