import { Loader } from '@src/loader'
import cn from 'classnames'
import React, { ReactNode, useMemo } from 'react'
import { v4 as uuid } from 'uuid'

import { DropdownDivider, DropdownGroup, DropdownMenu, DropdownSubmenu } from './Dropdown'
import { DropdownItem } from './DropdownItem'
import { DropdownItemInner } from './DropdownItemInner'
import { DropdownItemProps, DropdownViewProps } from './types'

const mapOverlay = (items: DropdownItemProps[], overlayClassName?: string) => {
  return (
    items.map(({
      type,
      disabled,
      title,
      description,
      tooltip,
      componentsAfter,
      componentsBefore,
      children,
      ...rest
    }: DropdownItemProps): ReactNode | ReactNode[] => {
      const key = uuid()
      switch (type) {
        case 'submenu':
          return (
            <DropdownSubmenu
              key={key}
              title={
                <DropdownItemInner
                  type={type}
                  description={description}
                  tooltip={tooltip}
                  componentsBefore={componentsBefore}
                  componentsAfter={componentsAfter}
                >
                  {title}
                </DropdownItemInner>
              }
              popupOffset={[16, -10]}
              popupClassName={overlayClassName}
              disabled={disabled}
            >
              {mapOverlay(children as DropdownItemProps[], overlayClassName)}
            </DropdownSubmenu>
          )
        case 'group':
          return <>
            <DropdownGroup data-dropdown-item-group>{title}</DropdownGroup>
            {mapOverlay(children as DropdownItemProps[], overlayClassName)}
          </>
        case 'divider':
          return <DropdownDivider />
        default:
          return (
            <DropdownItem
              key={key}
              disabled={disabled}
              componentsBefore={componentsBefore}
              componentsAfter={componentsAfter}
              description={description}
              tooltip={tooltip}
              {...rest}
              className={cn(rest.className, {
                'kl6-dropdown-item-action': type === 'action',
                'kl6-dropdown-item-custom': typeof children !== 'string'
              })}
            >
              {children}
            </DropdownItem>
          )
      }
    })
  )
}

export const useMappedContent = ({
  overlay,
  loading,
  testId,
  klId,
  overlayClassName,
  ...rest
}: DropdownViewProps) => {
  const content = useMemo(() => (
    !Array.isArray(overlay)
      ? overlay
      : <DropdownMenu
          data-testid={testId}
          kl-id={klId}
          className={cn({ 'kl6-dropdown-loading': loading })}
          triggerSubMenuAction="click"
        >
          {
            loading
              ? <Loader size="medium"/>
              : mapOverlay(overlay, overlayClassName)
          }
        </DropdownMenu>
  ), [overlay, loading, klId, testId, overlayClassName])

  return { overlay: content, overlayClassName, ...rest }
}
