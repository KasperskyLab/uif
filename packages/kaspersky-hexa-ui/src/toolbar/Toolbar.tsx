import { getClassNameWithTheme } from '@helpers/getClassNameWithTheme'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { shouldForwardProp } from '@helpers/shouldForwardProp'
import { useImmutableRef } from '@helpers/useImmutableRef'
import { useIntersectionChildren } from '@helpers/useIntersectionChildren'
import { Dropdown } from '@src/dropdown'
import { Search } from '@src/search'
import cn from 'classnames'
import isNumber from 'lodash/isNumber'
import React, { FC, useState } from 'react'
import styled from 'styled-components'

import {
  Export as ExportIcon,
  Filter as FilterIcon,
  FilterActive,
  Import as ImportIcon,
  Menu2,
  Settings21,
  SizeMaximize
} from '@kaspersky/hexa-ui-icons/16'

import { mapToolbarItemsIntoDropdownItems } from './helpers'
import {
  AutoDropdownPart,
  StyledBlock,
  toolbarCss,
  ToolbarItemWrap
} from './toolbarCss'
import {
  Divider,
  ImportExportItemButton,
  ToolbarButton,
  ToolbarComponentMapping
} from './ToolbarItems'
import { ToolbarSearch as ToolbarCollapsibleSearch } from './ToolbarSearch'
import {
  ToolbarItems,
  ToolbarProps,
  ToolbarVariants
} from './types'

const StyledToolbar = styled.div.withConfig({ shouldForwardProp })`
  ${toolbarCss}
`

const toolbarItemsRender = (items: ToolbarItems[], wrapKeyed = false, hasIntersection = false, lastFittingItemIndex = 0) => {
  const visibleItems = items.filter(({ visible }) => visible !== false)
  return visibleItems.map((itemProps, index) => {
    const { type, children } = itemProps
    const shouldHide =
      hasIntersection && index > lastFittingItemIndex
    if (type) {
      const Item = ToolbarComponentMapping[type] as FC<unknown>
      return wrapKeyed
        ? (
            <ToolbarItemWrap
              data-toolbarkey={itemProps.key}
              $isHidden={shouldHide}
              data-hidden={shouldHide}
            >
              <Item {...itemProps} />
            </ToolbarItemWrap>
          )
        : <Item {...itemProps} />
    }
    return wrapKeyed
      ? (
          <ToolbarItemWrap
            data-toolbarkey={(itemProps as ToolbarItems).key}
            $isHidden={shouldHide}
            data-hidden={shouldHide}
          >
            {children}
          </ToolbarItemWrap>
        )
      : children
  })
}

const INTERSECTION_PADDING = 36

export const Toolbar: FC<ToolbarProps> & ToolbarVariants = (props: ToolbarProps) => {
  const {
    autoDropdown = false,
    left = [],
    leftLimit = 4,
    right,
    styleLeft,
    styleRight,
    sticky,
    testAttributes,
    ...rest
  } = useTestAttribute(props)

  const leftVisible = left.filter(el => el.visible !== false)
  const [dropdownOpened, setDropdownOpened] = useState(false)

  const [containerRef, setContainerRef] = useImmutableRef<HTMLDivElement>()

  const lastFittingItemIndex = useIntersectionChildren(containerRef, INTERSECTION_PADDING, undefined, undefined, 0)
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
        {...rest}
        className={cn(
          getClassNameWithTheme(props),
          Number(sticky) > -1000 ? 'sticky' : 'toolbar-wrapper'
        )}
        $sticky={sticky}
        $autoDropdown={autoDropdown}
      >
        {leftVisible.length > 0 && (
          <StyledBlock
            gap="dependent"
            align="center"
            direction="horizontal"
            width="initial"
            wrap="nowrap"
            $side="left"
            style={styleLeft}
            $oneElement={false}
            $autoDropdown={autoDropdown}
            ref={setContainerRef}
          >
            {toolbarItemsRender(autoDropdown ? leftVisible : leftVisible.slice(0, leftLimit), autoDropdown, hasIntersection, lastFittingItemIndex)}
            {leftVisible.length > leftLimit && !autoDropdown && (
              <Dropdown
                trigger={['click']}
                testId="toolbar-rest-items"
                klId="toolbar-dropdown"
                overlay={mapToolbarItemsIntoDropdownItems(leftVisible.slice(leftLimit, leftVisible.length))}
                selectedItemsKeys={[]}
              >
                <ToolbarButton
                  mode="tertiary"
                  testId="toolbar-show-rest-items"
                  klId="toolbar-dropdown-button"
                  iconBefore={<Menu2 />}
                />
              </Dropdown>
            )}
            {autoDropdown
              ? (
                  <AutoDropdownPart $isHidden={!shouldShowMoreButton}>
                    <Dropdown
                      trigger={['click']}
                      testId="toolbar-rest-items"
                      klId="toolbar-dropdown"
                      overlay={mapToolbarItemsIntoDropdownItems(dropdownItems)}
                      onVisibleChange={open => setDropdownOpened(open)}
                      onOverlayClick={() => setDropdownOpened(false)}
                      selectedItemsKeys={[]}
                    >
                      <ToolbarButton
                        mode="tertiary"
                        testId="toolbar-show-rest-items"
                        klId="toolbar-dropdown-button"
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
            gap="dependent"
            align="center"
            direction="horizontal"
            width="initial"
            wrap="nowrap"
            $side="right"
            style={styleRight}
            $oneElement={!left && right.length === 1}
            $oneElementSelector="span.ant-input-affix-wrapper"
            $autoDropdown={autoDropdown}
          >
            {toolbarItemsRender(right)}
          </StyledBlock>
        )}
      </StyledToolbar>
    </>
  )
}

Toolbar.defaultProps = {
  leftLimit: 4
}

Toolbar.Button = (props) => <ToolbarButton mode="tertiary" {...props} />

Toolbar.Search = (props) => <Search showClearButton {...props} />

Toolbar.CollapsibleSearch = (props) => <ToolbarCollapsibleSearch {...props} />

Toolbar.FilterItem = (props) => <ToolbarButton mode="tertiary" iconBefore={<FilterIcon />} {...props} />

Toolbar.ImportItem = (props) => <ToolbarButton mode="tertiary" iconBefore={<ImportIcon />} {...props} />

Toolbar.ExportItem = (props) => <ToolbarButton mode="tertiary" iconBefore={<ExportIcon />} {...props} />

Toolbar.ImportExportItem = (props) => <ImportExportItemButton {...props} />

Toolbar.FilterActiveItem = (props) => <ToolbarButton mode="tertiary" iconBefore={<FilterActive />} {...props} />

Toolbar.SettingsItem = (props) => <ToolbarButton mode="tertiary" iconBefore={<Settings21 />} {...props} />

Toolbar.FilterSidebar = (props) => <ToolbarButton mode="tertiary" iconBefore={<FilterIcon />} {...props} />

Toolbar.ScaleItem = (props) => <ToolbarButton mode="tertiary" iconBefore={<SizeMaximize />} {...props} />

Toolbar.Divider = Divider

Toolbar.displayName = 'Toolbar'
Toolbar.Button.displayName = 'Toolbar.Button'
Toolbar.ExportItem.displayName = 'Toolbar.ExportItem'
Toolbar.Search.displayName = 'Toolbar.Search'
Toolbar.CollapsibleSearch.displayName = 'Toolbar.CollapsibleSearch'
Toolbar.FilterItem.displayName = 'Toolbar.FilterItem'
Toolbar.FilterActiveItem.displayName = 'Toolbar.FilterActiveItem'
Toolbar.ImportItem.displayName = 'Toolbar.ImportItem'
Toolbar.ImportExportItem.displayName = 'Toolbar.ImportExportItem'
Toolbar.SettingsItem.displayName = 'Toolbar.SettingsItem'
Toolbar.FilterSidebar.displayName = 'Toolbar.FilterSidebar'
Toolbar.ScaleItem.displayName = 'Toolbar.ScaleItem'
Toolbar.Divider.displayName = 'Toolbar.Divider'
