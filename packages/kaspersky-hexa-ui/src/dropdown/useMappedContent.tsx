import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { Loader } from '@src/loader'
import cn from 'classnames'
import React, { ReactNode, useMemo } from 'react'
import { v4 as uuid } from 'uuid'

import { DropdownItem } from './DropdownItem'
import { DropdownItemInner } from './DropdownItemInner'
import styles from './styles/Dropdown.module.scss'
import { DropdownItemProps, DropdownProps } from './types'
import { DropdownDivider, DropdownGroup, DropdownInnerActions, DropdownMenu, DropdownSubmenu } from './wrappers'

const mapOverlay = (items: DropdownItemProps[], overlayClassName?: string) => {
  return (
    items.map(({
      key = uuid(),
      type,
      disabled,
      title,
      description,
      tooltip,
      icon,
      componentsAfter,
      componentsBefore,
      children,
      ...props
    }: DropdownItemProps): ReactNode | ReactNode[] => {
      const { testAttributes, ...rest } = useTestAttribute(props)
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
                  icon={icon}
                >
                  {title}
                </DropdownItemInner>
              }
              popupOffset={[16, -10]}
              popupClassName={overlayClassName}
              disabled={disabled}
              className={rest.className}
              {...testAttributes}
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
        case 'innerActions':
          return <DropdownInnerActions>{children}</DropdownInnerActions>
        default:
          return (
            <DropdownItem
              key={key}
              disabled={disabled}
              componentsBefore={componentsBefore}
              componentsAfter={componentsAfter}
              description={description}
              tooltip={tooltip}
              icon={icon}
              {...rest}
              {...testAttributes}
              className={cn(rest.className, {
                [styles.dropdownItemAction]: type === 'action',
                [styles.dropdownItemCustom]: typeof children !== 'string'
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
  onOverlaySelect,
  selectedItemsKeys,
  header,
  footer,
  ...rest
}: DropdownProps) => {
  const content = useMemo(() => {
    if (Array.isArray(overlay)) {
      return (
        <DropdownMenu
          data-testid={testId}
          kl-id={klId}
          className={cn({ [styles.dropdownLoading]: loading })}
          triggerSubMenuAction="click"
          onSelect={onOverlaySelect}
          selectedKeys={selectedItemsKeys}
        >
          {
            loading
              ? <Loader size="medium" />
              : <>
                  {header && mapOverlay([{ ...header, className: cn(header.className, { [styles.dropdownItemStickyHeader]: header.sticky }) }])}
                  {mapOverlay(overlay, overlayClassName)}
                  {footer && mapOverlay([{ ...footer, className: cn(footer.className, { [styles.dropdownItemStickyFooter]: footer.sticky }) }])}
                </>
          }
        </DropdownMenu>
      )
    } else if (typeof overlay === 'function') {
      return React.cloneElement(overlay(), { onSelect: onOverlaySelect })
    } else {
      return React.cloneElement(overlay, { onSelect: onOverlaySelect })
    }
  }, [overlay, loading, klId, testId, overlayClassName, onOverlaySelect, selectedItemsKeys])

  return { overlay: content, overlayClassName, ...rest }
}
