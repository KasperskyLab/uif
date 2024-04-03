import React, { useMemo, ReactNode } from 'react'
import cn from 'classnames'
import { v4 as uuid } from 'uuid'
import { DropdownItemProps, DropdownViewProps } from './types'
import { DropdownMenu, DropdownSubmenu, DropdownGroup, DropdownDivider } from './Dropdown'
import { DropdownItem } from './DropdownItem'
import { DropdownItemInner } from './DropdownItemInner'
import { Loader } from '@src/loader'

const mapOverlay = (items: DropdownItemProps[], overlayClassName?: string) => {
  return (
    items.map(({
      type,
      disabled,
      title,
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
          triggerSubMenuAction='click'
        >
          {
            loading
              ? <Loader size='medium'/>
              : mapOverlay(overlay, overlayClassName)
          }
        </DropdownMenu>
  ), [overlay, loading, klId, testId, overlayClassName])

  return { overlay: content, overlayClassName, ...rest }
}
