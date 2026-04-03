import { Indicator } from '@src/indicator'
import { NavDivider } from '@src/menu'
import { NavItemData } from '@src/menu/types'
import React from 'react'
import styled from 'styled-components'

import {
  ArrowRightMini,
  Browser,
  Folder,
  Placeholder,
  SettingsGear,
  Shield,
  UserGroup
} from '@kaspersky/hexa-ui-icons/16'

export type MenuItemState = 'enabled' | 'disabled' | 'active' | 'hover' | 'divider'

export type UXPinMenuItemProps = {
  /** Allows showing expanded nested items in preview */
  collapsible?: boolean,
  /** Renders item as a non-interactive section header */
  header?: boolean,
  /** Preview state */
  state?: MenuItemState,
  /** Shows an icon before the label */
  elementBefore?: boolean,
  /** Slot for the icon before the label */
  elementBeforeSlot?: React.ReactNode,
  /** Item label */
  label?: string,
  /** Shows secondary description text */
  description?: boolean,
  /** Description text */
  descriptionText?: string,
  /** Shows notification indicator */
  notification?: boolean,
  /** Shows an icon after the label */
  elementAfter?: boolean,
  /** Slot for the icon after the label */
  elementAfterSlot?: React.ReactNode,
  children?: React.ReactNode
}

type MenuItemComponent = React.FC<UXPinMenuItemProps> & {
  uxpinRole?: string
}

const MENU_ITEM_ROLE = 'hexa-uxpin-menu-item'

const hasMenuItemShape = (props: Record<string, unknown> = {}): boolean => (
  'label' in props ||
  'collapsible' in props ||
  'header' in props ||
  'elementBefore' in props ||
  'elementBeforeSlot' in props ||
  'description' in props ||
  'descriptionText' in props ||
  'notification' in props ||
  'elementAfter' in props ||
  'elementAfterSlot' in props ||
  'state' in props
)

const resolvePreviewStateClassName = (state: MenuItemState): string => {
  switch (state) {
    case 'active':
      return 'active'
    case 'disabled':
      return 'disabled'
    case 'hover':
      return 'hover'
    default:
      return 'enabled'
  }
}

export const resolveMenuItemChildren = (
  children: React.ReactNode
): Array<React.ReactElement<UXPinMenuItemProps>> => {
  const menuItems: Array<React.ReactElement<UXPinMenuItemProps>> = []

  React.Children.forEach(children, (child) => {
    if (!child) {
      return
    }

    if (isUXPinMenuItemElement(child)) {
      menuItems.push(child)
      return
    }

    if (
      React.isValidElement<{ children?: React.ReactNode }>(child) &&
      child.props?.children
    ) {
      menuItems.push(...resolveMenuItemChildren(child.props.children))
    }
  })

  return menuItems
}

const resolveElementBefore = (
  elementBefore?: boolean,
  elementBeforeSlot?: React.ReactNode
): React.ReactNode => {
  if (!elementBefore) {
    return null
  }

  return elementBeforeSlot ?? <Placeholder />
}

const buildElementAfter = ({
  elementAfter,
  elementAfterSlot,
  notification
}: UXPinMenuItemProps): React.ReactNode => {
  const trailingElements: React.ReactNode[] = []

  if (notification) {
    trailingElements.push(<Indicator key="notification" mode="critical" />)
  }

  if (elementAfter) {
    trailingElements.push(
      <React.Fragment key="element-after">
        {elementAfterSlot ?? <Placeholder />}
      </React.Fragment>
    )
  }

  if (!trailingElements.length) {
    return undefined
  }

  return <>{trailingElements}</>
}

const buildStateKey = (
  element: React.ReactElement<UXPinMenuItemProps>,
  path: string,
  index: number
): string => {
  const ownKey = typeof element.key === 'string' && element.key.length
    ? element.key
    : `index-${index}`

  return `${path}__${ownKey}`
}

const MenuDividerComponent = (): JSX.Element => <NavDivider />

export const menuItemElementsToNavItems = (
  children: React.ReactNode,
  depth = 1,
  parentPath = 'uxpin-menu-item'
): NavItemData[] => (
  resolveMenuItemChildren(children).map((element, index) => {
    const {
      children: nestedChildren,
      collapsible,
      description,
      descriptionText,
      elementAfter,
      elementAfterSlot,
      elementBefore,
      elementBeforeSlot,
      header = false,
      label = `Menu item ${index + 1}`,
      notification,
      state = 'enabled'
    } = element.props
    const itemStateKey = buildStateKey(element, parentPath, index)

    if (state === 'divider') {
      return {
        key: itemStateKey,
        component: MenuDividerComponent
      }
    }

    if (header) {
      return {
        key: label,
        state: itemStateKey,
        isCaption: true,
        isRoot: depth === 1
      }
    }

    const items = menuItemElementsToNavItems(nestedChildren, depth + 1, itemStateKey)

    return {
      key: label,
      state: itemStateKey,
      icon: resolveElementBefore(elementBefore, elementBeforeSlot) || undefined,
      description: description ? descriptionText : undefined,
      elementAfter: buildElementAfter({ elementAfter, elementAfterSlot, notification }),
      active: state === 'active',
      disabled: state === 'disabled',
      itemClass: state === 'hover' ? 'uxpin-menu-item-hover' : undefined,
      isRoot: depth === 1,
      expanded: collapsible ?? Boolean(items.length),
      items: items.length ? items : undefined
    }
  })
)

export const isUXPinMenuItemElement = (
  node: React.ReactNode
): node is React.ReactElement<UXPinMenuItemProps> => (
  React.isValidElement(node) &&
  (
    (node.type as MenuItemComponent)?.uxpinRole === MENU_ITEM_ROLE ||
    (node.type as { displayName?: string })?.displayName === 'MenuItem' ||
    (node.type as { name?: string })?.name === 'MenuItem' ||
    hasMenuItemShape((node.props as Record<string, unknown>) || {})
  )
)

export const isPlaceholderMenuItemElement = (
  node: React.ReactElement<UXPinMenuItemProps>
): boolean => {
  const {
    children,
    description = false,
    elementAfter = false,
    elementBefore = false,
    header = false,
    label = 'Menu item',
    notification = false,
    state = 'enabled'
  } = node.props

  return (
    React.Children.count(children) === 0 &&
    !description &&
    !elementAfter &&
    !elementBefore &&
    !header &&
    !notification &&
    label === 'Menu item' &&
    state === 'enabled'
  )
}

const PreviewRoot = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 100%;

  .preview-entry {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    min-height: 32px;
    padding: 6px 8px;
    border-radius: 8px;
    color: var(--menu_item--text--label--enabled);
    background: transparent;
    box-sizing: border-box;
  }

  .preview-entry.header {
    color: var(--menu--text--heading);
    font-size: 12px;
    line-height: 16px;
    padding-top: 0;
    padding-bottom: 0;
  }

  .preview-children {
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding-left: 24px;
  }

  .preview-children .preview-children {
    padding-left: 28px;
  }

  .preview-entry.active {
    color: var(--menu_item--text--label--enabled_selected);
    background: var(--menu_item--bg--enabled_selected);
  }

  .preview-entry.disabled {
    color: var(--menu_item--text--label--disabled);
    background: var(--menu_item--bg--disabled);
  }

  .preview-entry.hover {
    background: var(--menu_item--bg--hover);
  }

  .preview-icon,
  .preview-props {
    display: flex;
    align-items: center;
    min-height: 20px;
  }

  .preview-labels {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    min-width: 0;
    gap: 2px;
  }

  .preview-label {
    line-height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .preview-description {
    font-size: 12px;
    line-height: 16px;
    color: var(--menu_item--text--label--disabled);
  }

  .preview-props {
    gap: 2px;
  }

  .preview-divider {
    height: 1px;
    margin: 4px 8px;
    background: var(--divider--bg--light);
  }
`

const MenuItem: MenuItemComponent = ({
  children,
  collapsible,
  description = false,
  descriptionText = 'Description',
  elementAfter = false,
  elementAfterSlot,
  elementBefore = false,
  elementBeforeSlot,
  header = false,
  label = 'Menu item',
  notification = false,
  state = 'enabled'
}: UXPinMenuItemProps): JSX.Element => {
  const previewChildren = resolveMenuItemChildren(children)
  const hasNestedItems = previewChildren.length > 0
  const showExpandedChildren = collapsible ?? hasNestedItems

  if (state === 'divider') {
    return (
      <PreviewRoot>
        <div className="preview-divider" />
      </PreviewRoot>
    )
  }

  if (header) {
    return (
      <PreviewRoot>
        <div className="preview-entry header">
          <div className="preview-labels">
            <span className="preview-label">{label}</span>
          </div>
        </div>
      </PreviewRoot>
    )
  }

  return (
    <PreviewRoot>
      <div className={`preview-entry ${resolvePreviewStateClassName(state)}`}>
        {elementBefore && (
          <div className="preview-icon">
            {elementBeforeSlot ?? <Placeholder />}
          </div>
        )}
        <div className="preview-labels">
          <span className="preview-label">{label}</span>
          {description && <span className="preview-description">{descriptionText}</span>}
        </div>
        <div className="preview-props">
          {notification && <Indicator mode="critical" />}
          {elementAfter && (elementAfterSlot ?? <Placeholder />)}
          {hasNestedItems && <ArrowRightMini />}
        </div>
      </div>
      {showExpandedChildren && hasNestedItems && (
        <div className="preview-children">
          {previewChildren}
        </div>
      )}
    </PreviewRoot>
  )
}

MenuItem.uxpinRole = MENU_ITEM_ROLE
MenuItem.displayName = 'MenuItem'

MenuItem.defaultProps = {
  collapsible: false,
  header: false,
  state: 'enabled',
  elementBefore: false,
  label: 'Menu item',
  description: false,
  descriptionText: 'Description',
  notification: false,
  elementAfter: false
}

export const defaultMenuItemChildren = (
  <>
    <MenuItem
      label="Overview"
      elementBefore
      elementBeforeSlot={<Browser />}
      state="active"
    />
    <MenuItem
      label="Monitoring & reporting"
      elementBefore
      elementBeforeSlot={<Browser />}
      notification
      collapsible
    >
      <MenuItem label="Dashboard" state="active" />
      <MenuItem label="Reports" />
      <MenuItem label="Notifications" notification />
    </MenuItem>
    <MenuItem
      label="Assets (Devices)"
      elementBefore
      elementBeforeSlot={<Shield />}
      description
      descriptionText="Nested navigation"
      collapsible
    >
      <MenuItem label="Policies & profiles" />
      <MenuItem label="Tasks" />
      <MenuItem label="Managed devices" />
    </MenuItem>
    <MenuItem
      label="Users & roles"
      elementBefore
      elementBeforeSlot={<UserGroup />}
      collapsible
    >
      <MenuItem label="Users" />
      <MenuItem label="Roles" />
      <MenuItem label="Groups" elementBefore elementBeforeSlot={<Folder />} />
    </MenuItem>
    <MenuItem
      label="Settings"
      elementBefore
      elementBeforeSlot={<SettingsGear />}
      elementAfter
      elementAfterSlot={<Placeholder />}
    />
  </>
)

export const defaultFooterMenuItemChildren = (
  <>
    <MenuItem
      label="Settings"
      elementBefore
      elementBeforeSlot={<SettingsGear />}
    />
  </>
)

export default MenuItem
