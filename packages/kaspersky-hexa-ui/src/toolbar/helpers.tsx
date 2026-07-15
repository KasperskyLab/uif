import { DropdownItemProps } from '@src/dropdown'
import React from 'react'

import { ToolbarToggleDropdown } from './ToolbarItems'
import { ToolbarItemKeyConst, ToolbarItems } from './types'

export function mapToolbarItemsIntoDropdownItems (items: ToolbarItems[]): DropdownItemProps[] {
  const visibleItems = items.filter(({ visible }) => visible !== false)

  const overlay: DropdownItemProps[] = visibleItems.map((itemProps) => {
    const { children, key, testId, klId, type } = itemProps

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
            klId,
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
            klId,
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
        case ToolbarItemKeyConst.TOGGLE: {
          const { text, value, selected, disabled, loading, className, iconBefore, elementAfter, tooltip, onChange, testId } = itemProps
          return {
            key: value,
            type: 'toggle',
            children: (
              <ToolbarToggleDropdown
                iconBefore={iconBefore}
                text={text}
                elementAfter={elementAfter}
                disabled={disabled}
                loading={loading}
              />
            ),
            checked: selected,
            disabled,
            loading,
            tooltip,
            className,
            onChange: () => {
              onChange?.(value, !selected)
            },
            testId
          }
        }
        default: {
          return { key, children, testId, klId }
        }
      }
    }

    return { key, children, testId, klId }
  })

  if (overlay && overlay[0] && overlay[0].type === 'divider') {
    overlay.splice(0, 1)
  }

  return overlay
}
