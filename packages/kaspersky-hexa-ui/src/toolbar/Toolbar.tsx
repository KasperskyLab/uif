import { getClassNameWithTheme } from '@helpers/getClassNameWithTheme'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { useLocalization } from '@helpers/localization/useLocalization'
import { shouldForwardProp } from '@helpers/shouldForwardProp'
import { useImmutableRef } from '@helpers/useImmutableRef'
import { useIntersectionChildren } from '@helpers/useIntersectionChildren'
import { Button } from '@src/button'
import { Dropdown, DropdownItemProps, DropdownProps } from '@src/dropdown'
import { Icon } from '@src/icon'
import { Link } from '@src/link'
import { Space } from '@src/space'
import { Tooltip } from '@src/tooltip'
import { Text } from '@src/typography'
import cn from 'classnames'
import isNumber from 'lodash/isNumber'
import React, { FC, ReactElement, useState } from 'react'
import styled from 'styled-components'

import {
  ArrowDown1,
  Export as ExportIcon,
  Filter as FilterIcon,
  FilterActive,
  Import as ImportIcon,
  ImportExport,
  Menu2,
  Settings21,
  SizeMaximize
} from '@kaspersky/hexa-ui-icons/16'

import {
  AutoDropdownPart,
  ButtonIconWrapper,
  ButtonIndicator,
  DropdownTriggerIconsWrapper,
  StyledBlock,
  ToolbarButton as StyledToolbarButton,
  toolbarCss,
  ToolbarItemWrap,
  ToolbarSearch
} from './toolbarCss'
import { ToolbarSearch as ToolbarCollapsibleSearch } from './ToolbarSearch'
import {
  ToolbarButtonProps,
  ToolbarItemKey,
  ToolbarItemKeyConst,
  ToolbarItems,
  ToolbarProps,
  ToolbarVariantButtonProps,
  ToolbarVariants
} from './types'

export const StyledToolbar = styled.div.withConfig({ shouldForwardProp })`
  ${toolbarCss}
`

const ToolbarButton: FC<Omit<ToolbarButtonProps, 'type'> & ToolbarVariantButtonProps> = ({
  label,
  children,
  tooltip,
  showIndicator,
  iconBefore,
  ...rest
}) => {
  // ToolbarButton is wrapped in a <span> tag to show tooltip even if the button is disabled.
  // See - https://github.com/react-component/tooltip/issues/18#issuecomment-140078802
  return (
    <Tooltip text={tooltip} defaultAlign>
      <span>
        <StyledToolbarButton
          mode="tertiary"
          iconBefore={
            iconBefore && (
              <ButtonIconWrapper>
                {iconBefore}
                {showIndicator && <ButtonIndicator mode="critical" />}
              </ButtonIconWrapper>
            )
          }
          {...rest}
        >
          {label || children}
        </StyledToolbarButton>
      </span>
    </Tooltip>
  )
}

const Divider = () => (
  <hr className="toolbar-divider" />
)

const ToolbarComponentMapping: {
  [key in ToolbarItemKey]: FC<ToolbarItems<key>>
} = {
  [ToolbarItemKeyConst.BUTTON]: (props) => {
    const { type, visible, ...rest } = props
    return <ToolbarButton {...rest} />
  },
  [ToolbarItemKeyConst.LINK]: (props) => {
    const { type, label, ...rest } = props
    return (
      <Link size="medium" {...rest} >
        {label}
      </Link>
    )
  },
  [ToolbarItemKeyConst.ICON]: (props) => {
    const { label, type, icon, onClick, ...rest } = props
    return (
      <Space
        align="center"
        gap={4}
        width="max-content"
        onClick={onClick}
        style={{ cursor: 'pointer' }}
      >
        {icon && <Icon name={icon} size="medium" {...rest} />}
        <Text type="BTM3">{label}</Text>
      </Space>
    )
  },
  [ToolbarItemKeyConst.DROPDOWN]: (props: ToolbarItems<(typeof ToolbarItemKeyConst)['DROPDOWN']>) => {
    const { type, overlay, ...rest } = props
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
          iconAfter={<ArrowDown1 />}
          isPressed={dropdownOpened}
          {...rest}
        />
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
        ? <ToolbarItemWrap data-toolbarkey={itemProps.key} $isHidden={shouldHide}><Item {...itemProps} /></ToolbarItemWrap>
        : <Item {...itemProps} />
    }
    return wrapKeyed
      ? <ToolbarItemWrap data-toolbarkey={(itemProps as ToolbarItems).key} $isHidden={shouldHide}>{children}</ToolbarItemWrap>
      : children
  })
}

const toolbarItemsOverlay = (items: ToolbarItems[]): DropdownItemProps[] => {
  const visibleItems = items.filter(({ visible }) => visible !== false)

  const overlay: DropdownItemProps[] = visibleItems.map((itemProps) => {
    const { children, key, testId, type } = itemProps

    if (type) {
      switch (type) {
        case ToolbarItemKeyConst.BUTTON: {
          const { label, iconBefore, iconAfter, onClick, disabled, tooltip } = itemProps
          return {
            key,
            children: label,
            ...(iconBefore && { componentsBefore: [iconBefore] }),
            ...(iconAfter && { componentsAfter: [iconAfter] }),
            disabled: !!disabled,
            onClick: ({ domEvent }) => { onClick?.(domEvent as React.MouseEvent<HTMLElement, MouseEvent>) },
            testId,
            tooltip
          }
        }
        case ToolbarItemKeyConst.DROPDOWN: {
          const { label, overlay, iconBefore, disabled, tooltip } = itemProps
          return {
            key,
            type: 'submenu',
            title: label,
            ...(iconBefore && { componentsBefore: [iconBefore] }),
            disabled: !!disabled,
            children: overlay,
            testId,
            tooltip
          }
        }
        case ToolbarItemKeyConst.DIVIDER: {
          return {
            key,
            type: 'divider',
            children: null
          }
        }
        default: {
          return { key, children, testId }
        }
      }
    }

    return { key, children, testId }
  })

  if (overlay && overlay[0] && overlay[0].type === 'divider') {
    overlay.splice(0, 1)
  }

  return overlay
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
            gap={4}
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
                overlay={toolbarItemsOverlay(leftVisible.slice(leftLimit, leftVisible.length))}
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
                      overlay={toolbarItemsOverlay(dropdownItems)}
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
            gap={8}
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

Toolbar.Button = (props) => <ToolbarButton mode="tertiary" {...props} />

Toolbar.Search = (props) => <ToolbarSearch {...props} />

Toolbar.CollapsibleSearch = (props) => <ToolbarCollapsibleSearch {...props} />

Toolbar.FilterItem = (props) => <ToolbarButton mode="tertiary" iconBefore={<FilterIcon />} {...props} />

Toolbar.ImportItem = (props) => <ToolbarButton mode="tertiary" iconBefore={<ImportIcon />} {...props} />

Toolbar.ExportItem = (props) => <ToolbarButton mode="tertiary" iconBefore={<ExportIcon />} {...props} />

Toolbar.ImportExportItem = ({ dropdown, ...rest }) => {
  if (dropdown && ('onExport' in rest || 'onImport' in rest)) {
    const { onImport, onExport, ...props } = rest
    const dropdownOverlay: DropdownProps['overlay'] = []
    const [dropdownOpened, setDropdownOpened] = useState(false)

    if (onImport) {
      dropdownOverlay.push({
        componentsBefore: [
          <ImportIcon key="import-action-key" />
        ],
        children: useLocalization('common.import'),
        onClick: onImport
      })
    }

    if (onExport) {
      dropdownOverlay.push({
        componentsBefore: [
          <ExportIcon key="export-action-key" />
        ],
        children: useLocalization('common.export'),
        onClick: onExport
      })
    }

    return <Dropdown
      trigger={['click']}
      testId="toolbar-dropdown-import-export"
      klId="toolbar-dropdown-import-export"
      overlay={dropdownOverlay}
      onVisibleChange={open => setDropdownOpened(open)}
      onOverlayClick={() => setDropdownOpened(false)}
    >
      <DropdownTriggerIconsWrapper>
        <Button mode="tertiary" isPressed={dropdownOpened} iconBefore={<ImportExport />} {...props} />
      </DropdownTriggerIconsWrapper>
    </Dropdown>
  } else {
    return <ToolbarButton mode="tertiary" iconBefore={<ImportExport />} {...rest} />
  }
}

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
