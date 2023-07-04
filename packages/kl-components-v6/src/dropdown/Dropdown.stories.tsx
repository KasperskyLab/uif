import React, { CSSProperties, useRef } from 'react'
import styled from 'styled-components'
import { badges } from '../../.storybook/badges'
import { withMeta } from '../../helpers/hocs/MetaComponent/withMeta'
import { Button } from '../button'
import { Icon } from '../icon'
import { Link } from '../link'
import { Text } from '../typography'
import Meta from './__meta__/meta.json'
import { Dropdown } from './Dropdown'
import { IDropdownProps, Placement } from './types'

export default {
  title: 'Atoms/Dropdown',
  component: Dropdown,
  parameters: {
    badges: [badges.stable, badges.needsDesignReview],
    docs: {
      page: withMeta(Meta)
    }
  }
}

const items = [
  {
    children: (
      <Link target="_blank" href="#">
        1st menu item
      </Link>
    )
  },
  {
    children: <Button>2nd menu item</Button>
  },
  {
    children: <Text type="BTR3">3rd menu item</Text>,
    disabled: true
  }
]

const DropdownTemplate = ({ overlay = items, ...rest }: IDropdownProps) => {
  return (
    <Dropdown trigger={['click']} overlay={overlay} {...rest}>
      <Button>Trigger Dropdown</Button>
    </Dropdown>
  )
}

export const Basic = DropdownTemplate.bind({})

const HoverTemplate = ({ overlay = items, ...rest }: IDropdownProps) => {
  return (
    <Dropdown trigger={['hover']} overlay={overlay} {...rest}>
      <Button>Hover</Button>
    </Dropdown>
  )
}

export const Hover = HoverTemplate.bind({})

const DisabledTemplate = ({ overlay = items, ...rest }: IDropdownProps) => {
  return (
    <Dropdown trigger={['hover']} overlay={overlay} disabled {...rest}>
      <Button>Trigger Dropdown</Button>
    </Dropdown>
  )
}

export const Disabled = DisabledTemplate.bind({})

const DropdownsContainer = styled.div`
  display: flex;
  gap: 12px;
`

const PlacementsTemplate = ({ overlay = items, ...rest }: IDropdownProps) => {
  const placements: Placement[] = [
    'topLeft',
    'topRight',
    'topCenter',
    'bottomLeft',
    'bottomRight',
    'bottomCenter'
  ]

  return (
    <DropdownsContainer>
      {placements.map((placement) => (
        <Dropdown
          trigger={['hover']}
          overlay={overlay}
          placement={placement}
          {...rest}
        >
          <Button>{placement}</Button>
        </Dropdown>
      ))}
    </DropdownsContainer>
  )
}

export const Placements = PlacementsTemplate.bind({})

const ContextMenuTemplate = ({ overlay = items, ...rest }: IDropdownProps) => {
  return (
    <>
      <Dropdown trigger={['click']} overlay={overlay} {...rest}>
        <Button
          mode="tertiary"
          icon={<Icon name="Menu03" size="small" />}
          {...rest}
        />
      </Dropdown>
    </>
  )
}

export const ContextMenu = ContextMenuTemplate.bind({})

const ScrollableContainer = styled.div`
  height: 500px;
  overflow: auto;
  border: 1px solid gray;
`

const ContentContainer = styled.div`
  height: 2000px;
  padding: 20px;
`

const WithinScrollableContainerTemplate = ({
  overlay = items,
  shouldUsePortal = false,
  ...rest
}) => {
  return (
    <ScrollableContainer>
      <ContentContainer>
        <Dropdown
          trigger={['click']}
          overlay={overlay}
          shouldUsePortal={shouldUsePortal}
          {...rest}
        >
          <Button>Click me and scroll my container</Button>
        </Dropdown>
      </ContentContainer>
    </ScrollableContainer>
  )
}

export const WithinScrollableContainer = WithinScrollableContainerTemplate.bind(
  {}
)

const CustomPopupContainerTemplate = ({ overlay = items, ...rest }) => {
  const containerRef = useRef<HTMLDivElement | null>(null)

  const containerStyle: CSSProperties = {
    padding: '20px',
    border: '1px solid green'
  }

  const hiddenContainer: CSSProperties = {
    overflow: 'hidden',
    height: '50px',
    border: '1px solid gray'
  }

  return (
    <div style={containerStyle} ref={containerRef}>
      <span>popup container</span>
      <div style={hiddenContainer}>
        <Dropdown
          trigger={['click']}
          overlay={overlay}
          getPopupContainer={() => containerRef.current as HTMLElement}
          {...rest}
        >
          <Button>Click</Button>
        </Dropdown>
        <span>overflow: hidden</span>
      </div>
    </div>
  )
}

export const CustomPopupContainer = CustomPopupContainerTemplate.bind({})
