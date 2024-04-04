import React, { FC, ReactElement, useRef, useState } from 'react'
import styled from 'styled-components'
import {
  ToolbarItemKey,
  ToolbarItemKeyConst,
  ToolbarItems,
  ToolbarViewProps,
  ToolbarVariants,
  ToolbarProps,
  StyledToolbarProps
} from './types'
import {
  Filter,
  FilterActive,
  Settings21,
  SizeMaximize,
  Menu2,
  ArrowDown1,
  Filter as FilterIcon
} from '@kaspersky/icons/16'
import { useThemedToolbar } from './useThemedToolbar'
import {
  toolbarCss,
  StyledBlock,
  AutoDropdownPart,
  ToolbarItemWrap,
  ToolbarButton,
  ToolbarSearch
} from './toolbarCss'
import { ToolbarSearch as ToolbarCollapsibleSearch } from './ToolbarSearch'
import { Space } from '@src/space'
import { Link } from '@src/link'
import { Icon } from '@src/icon'
import { Dropdown } from '@src/dropdown'
import { DropdownItemProps } from '@src/dropdown/types'
import { Text } from '@src/typography'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { useIntersectionChildren } from '@helpers/useIntersectionChildren'
import { shouldForwardProp } from '@helpers/shouldForwardProp'
import { isNumber } from 'lodash'

export const StyledToolbar = styled.div.withConfig({ shouldForwardProp })<StyledToolbarProps>`
  ${toolbarCss}
`

const Divider = () => (
  <hr className='toolbar-divider' />
)

export const Toolbar: FC<ToolbarProps> & ToolbarVariants = (rawProps: ToolbarProps) => {
  const themedProps = useThemedToolbar(rawProps)
  const props = useTestAttribute(themedProps)
  return <ToolbarView {...props} />
}

const ToolbarComponentMapping: {
  [key in ToolbarItemKey]: FC<ToolbarItems<key>>;
} = {
  [ToolbarItemKeyConst.BUTTON]: (props) => {
    const { label, type, ...rest } = props
    return (
      <ToolbarButton mode='tertiary' {...rest}>
        {label}
      </ToolbarButton>
    )
  },
  [ToolbarItemKeyConst.LINK]: (props) => {
    const { type, label, ...rest } = props
    return (
      <Link size='medium' {...rest} >
        {label}
      </Link>
    )
  },
  [ToolbarItemKeyConst.ICON]: (props) => {
    const { label, type, icon, onClick, ...rest } = props
    return (
      <Space
        align='center'
        size={4}
        width='max-content'
        onClick={onClick}
        style={{ cursor: 'pointer' }}
      >
        {icon && <Icon name={icon} size='medium' {...rest} />}
        <Text type='BTM3'>{label}</Text>
      </Space>
    )
  },
  [ToolbarItemKeyConst.DROPDOWN]: (props: ToolbarItems<(typeof ToolbarItemKeyConst)['DROPDOWN']>) => {
    const { label, type, children, overlay, ...rest } = props
    const [dropdownOpened, setDropdownOpened] = useState(false)
    return (
      <Dropdown
        trigger={['click']}
        overlay={overlay}
        onVisibleChange={open => setDropdownOpened(open)}
        onOverlayClick={() => setDropdownOpened(false)}
        {...rest}
      >
        <ToolbarButton
          mode='tertiary'
          iconAfter={<ArrowDown1 />}
          isPressed={dropdownOpened}
          {...rest}
        >
          {label}
        </ToolbarButton>
      </Dropdown>
    )
  },
  [ToolbarItemKeyConst.DIVIDER]: () => {
    return <Divider />
  },
  [ToolbarItemKeyConst.CHILDREN]: (props) => {
    const { children } = props
    return children as ReactElement<any, any> | null
  }
}

const toolbarItemsRender = (items: ToolbarItems[], wrapKeyed = false, hasIntersection = false, lastFittingItemIndex = 0) => {
  const visibleItems = items.filter(({ visible }) => visible !== false)
  return visibleItems.map((itemProps, index) => {
    const { type, children } = itemProps
    const shouldHide =
                hasIntersection && index > lastFittingItemIndex
    if (type) {
      const Item = ToolbarComponentMapping[type] as FC<unknown>
      return wrapKeyed
        ? <ToolbarItemWrap data-toolbarkey={itemProps.key} isHidden={shouldHide}><Item {...itemProps} /></ToolbarItemWrap>
        : <Item {...itemProps} />
    }
    return wrapKeyed
      ? <ToolbarItemWrap data-toolbarkey={(itemProps as ToolbarItems).key} isHidden={shouldHide}>{children}</ToolbarItemWrap>
      : children
  })
}

const toolbarItemsOverlay = (items: ToolbarItems[]): DropdownItemProps[] => {
  const visibleItems = items.filter(({ visible }) => visible !== false)

  const overlay: DropdownItemProps[] = visibleItems.map((itemProps) => {
    const { type, children } = itemProps
    if (type) {
      switch (type) {
        case ToolbarItemKeyConst.BUTTON: {
          const { label, iconBefore, iconAfter, onClick, disabled, key } = itemProps
          return {
            key: key,
            children: label,
            ...(iconBefore && { componentsBefore: [iconBefore] }),
            ...(iconAfter && { componentsAfter: [iconAfter] }),
            disabled: !!disabled,
            onClick: ({ domEvent }) => { onClick?.(domEvent as React.MouseEvent<HTMLElement, MouseEvent>) }
          }
        }
        case ToolbarItemKeyConst.DROPDOWN: {
          const { label, overlay, iconBefore, disabled, key } = itemProps
          return {
            key: key,
            type: 'submenu',
            title: label,
            ...(iconBefore && { componentsBefore: [iconBefore] }),
            disabled: !!disabled,
            children: overlay
          }
        }
        case ToolbarItemKeyConst.DIVIDER: {
          const { key } = itemProps
          return {
            key: key,
            type: 'divider',
            children: null
          }
        }
        default: {
          const { key } = itemProps
          return { key: key, children: children }
        }
      }
    }
    const { key } = itemProps
    return { key: key, children: children }
  })

  if (overlay && overlay[0] && overlay[0].type === 'divider') {
    overlay.splice(0, 1)
  }

  return overlay
}

const INTERSECTION_PADDING = 36

const ToolbarView: FC<ToolbarViewProps> = ({
  componentId,
  left = [],
  styleLeft,
  leftLimit = 4,
  right,
  styleRight,
  sticky,
  testAttributes,
  autoDropdown = false,
  ...props
}: ToolbarViewProps) => {
  const leftVisible = left.filter(el => el.visible !== false)
  const [dropdownOpened, setDropdownOpened] = useState(false)

  const containerRef = useRef<HTMLDivElement>(null)

  const lastFittingItemIndex = useIntersectionChildren(containerRef, INTERSECTION_PADDING)
  const hasIntersection = isNumber(lastFittingItemIndex)
  const shouldShowMoreButton =
    hasIntersection && lastFittingItemIndex < leftVisible.length - 1

  const dropdownItems = hasIntersection
    ? leftVisible.slice(lastFittingItemIndex + 1, leftVisible.length)
    : []

  return (
    <>
      <StyledToolbar
        {...testAttributes}
        {...props}
        className={Number(sticky) > -1000 ? 'sticky' : 'toolbar-wrapper'}
        autoDropdown={autoDropdown}
      >
        {leftVisible.length > 0 && (
          <StyledBlock
            size={4}
            align='center'
            direction='horizontal'
            width='initial'
            wrap='nowrap'
            side='left'
            style={styleLeft}
            oneElement={false}
            autoDropdown={autoDropdown}
            ref={containerRef}
          >
            {toolbarItemsRender(autoDropdown ? leftVisible : leftVisible.slice(0, leftLimit), autoDropdown, hasIntersection, lastFittingItemIndex)}
            {leftVisible.length > leftLimit && !autoDropdown && (
              <Dropdown
                trigger={['click']}
                testId='toolbar-rest-items'
                klId='toolbar-dropdown'
                overlay={toolbarItemsOverlay(leftVisible.slice(leftLimit, leftVisible.length))}
              >
                <ToolbarButton
                  mode='tertiary'
                  testId='toolbar-show-rest-items'
                  klId='toolbar-dropdown-button'
                  iconBefore={<Menu2 />}
                />
              </Dropdown>
            )}
            {autoDropdown
              ? (
                <AutoDropdownPart isHidden={!shouldShowMoreButton}>
                  <Dropdown
                    trigger={['click']}
                    testId='toolbar-rest-items'
                    klId='toolbar-dropdown'
                    overlay={toolbarItemsOverlay(dropdownItems)}
                    onVisibleChange={open => setDropdownOpened(open)}
                    onOverlayClick={() => setDropdownOpened(false)}
                  >
                    <ToolbarButton
                      mode='tertiary'
                      testId='toolbar-show-rest-items'
                      klId='toolbar-dropdown-button'
                      iconBefore={<Menu2 />}
                      isPressed={dropdownOpened}
                    />
                  </Dropdown>
                </AutoDropdownPart>
                )
              : null
            }
          </StyledBlock>
        )}
        {right && (
          <StyledBlock
            size={8}
            align='center'
            direction='horizontal'
            width='initial'
            wrap='nowrap'
            side='right'
            style={styleRight}
            oneElement={!left && right.length === 1}
            oneElementSelector='span.ant-input-affix-wrapper'
            autoDropdown={autoDropdown}
          >
            {toolbarItemsRender(right)}
          </StyledBlock>
        )}
      </StyledToolbar>
    </>
  )
}

Toolbar.Search = (props) => <ToolbarSearch {...props} />

Toolbar.CollapsibleSearch = (props) => <ToolbarCollapsibleSearch {...props} />

Toolbar.FilterItem = (props) => <ToolbarButton mode='tertiary' iconBefore={<Filter />} {...props} />

Toolbar.FilterActiveItem = (props) => <ToolbarButton mode='tertiary' iconBefore={<FilterActive />} {...props} />

Toolbar.SettingsItem = (props) => <ToolbarButton mode='tertiary' iconBefore={<Settings21 />} {...props} />

Toolbar.FilterSidebar = (props) => <ToolbarButton mode='tertiary' iconBefore={<FilterIcon />} {...props} />

Toolbar.ScaleItem = (props) => <ToolbarButton mode='tertiary' iconBefore={<SizeMaximize />} {...props} />

Toolbar.Divider = Divider

Toolbar.displayName = 'Toolbar'
Toolbar.Search.displayName = 'Toolbar.Search'
Toolbar.CollapsibleSearch.displayName = 'Toolbar.CollapsibleSearch'
Toolbar.FilterItem.displayName = 'Toolbar.FilterItem'
Toolbar.FilterActiveItem.displayName = 'Toolbar.FilterActiveItem'
Toolbar.SettingsItem.displayName = 'Toolbar.SettingsItem'
Toolbar.FilterSidebar.displayName = 'Toolbar.FilterSidebar'
Toolbar.ScaleItem.displayName = 'Toolbar.ScaleItem'
Toolbar.Divider.displayName = 'Toolbar.Divider'
