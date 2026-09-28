import { Button } from '@src/button'
import { Dropdown, DropdownProps } from '@src/dropdown'
import { IconResolver } from '@src/icon'
import { Indicator } from '@src/indicator'
import { Link } from '@src/link'
import { Space } from '@src/space'
import { ToggleButton } from '@src/toggle-button'
import { Tooltip } from '@src/tooltip'
import { Text } from '@src/typography'
import cn from 'classnames'
import { FC, ReactElement, useState } from 'react'
import React from 'react'
import { useTranslation } from 'react-i18next'

import { ArrowDown1, Export, Import, ImportExport } from '@kaspersky/hexa-ui-icons/16'

import styles from './Toolbar.module.scss'
import {
  ImportExportButtonProps,
  ImportExportDropdownProps,
  ToolbarButtonProps,
  ToolbarItemKey,
  ToolbarItemKeyConst,
  ToolbarItems,
  ToolbarToggleButtonProps,
  ToolbarVariantButtonProps
} from './types'

export const ToolbarButton: FC<Omit<ToolbarButtonProps, 'type'> & ToolbarVariantButtonProps> = ({
  label,
  children,
  tooltip,
  showIndicator,
  iconBefore,
  className,
  ...rest
}) => {
  // ToolbarButton is wrapped in a <span> tag to show tooltip even if the button is disabled.
  // See - https://github.com/react-component/tooltip/issues/18#issuecomment-140078802
  return (
    <Tooltip text={tooltip} defaultAlign>
      <span>
        <Button
          mode="tertiary"
          iconBefore={
            iconBefore && (
              <span className={styles.buttonIconWrapper}>
                {iconBefore}
                {showIndicator && <Indicator className={styles.buttonIndicator} mode="critical" />}
              </span>
            )
          }
          className={cn(styles.toolbarButton, rest.isPressed && styles.buttonPressed, className)}
          {...rest}
        >
          {label || children}
        </Button>
      </span>
    </Tooltip>
  )
}

export const DropdownItem: FC<ToolbarItems<(typeof ToolbarItemKeyConst)['DROPDOWN']>> = (props) => {
  const { type, overlay, visible, ...rest } = props
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
}

export const ImportExportItemButton: FC<ImportExportButtonProps | ImportExportDropdownProps> = ({ dropdown, ...rest }) => {
  if (dropdown && ('onExport' in rest || 'onImport' in rest)) {
    const { onImport, onExport, buttonExportText, buttonImportText, ...props } = rest
    const dropdownOverlay: DropdownProps['overlay'] = []
    const [dropdownOpened, setDropdownOpened] = useState(false)
    const { t } = useTranslation()

    if (onImport) {
      dropdownOverlay.push({
        componentsBefore: [
          <Import key="import-action-key" />
        ],
        children: buttonImportText || t('common.import'),
        onClick: onImport
      })
    }

    if (onExport) {
      dropdownOverlay.push({
        componentsBefore: [
          <Export key="export-action-key" />
        ],
        children: buttonExportText || t('common.export'),
        onClick: onExport
      })
    }

    return (
      <Dropdown
        trigger={['click']}
        testId="toolbar-dropdown-import-export"
        klId="toolbar-dropdown-import-export"
        overlay={dropdownOverlay}
        onVisibleChange={open => setDropdownOpened(open)}
        onOverlayClick={() => setDropdownOpened(false)}
      >
        <Button
          mode="tertiary"
          iconBefore={<ImportExport />}
          {...props}
          isPressed={dropdownOpened}
          className={cn(dropdownOpened && styles.buttonPressed, props.className)}
        />
      </Dropdown>
    )
  } else {
    return <ToolbarButton mode="tertiary" iconBefore={<ImportExport />} {...rest} />
  }
}

export const ToolbarIcon: FC<ToolbarItems<(typeof ToolbarItemKeyConst)['ICON']>> = (props) => {
  const { label, type, icon, onClick, visible, ...rest } = props
  return (
    <Space
      align="center"
      gap="dependent"
      width="max-content"
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    >
      {icon && <IconResolver name={icon} size="medium" {...rest} />}
      <Text type="BTM3">{label}</Text>
    </Space>
  )
}

export const ToolbarLink: FC<ToolbarItems<(typeof ToolbarItemKeyConst)['LINK']>> = (props) => {
  const { type, label, visible, ...rest } = props
  return (
    <Link size="medium" {...rest} >
      {label}
    </Link>
  )
}

export const ToolbarToggleButton: FC<ToolbarItems<(typeof ToolbarItemKeyConst)['TOGGLE']>> = ({
  className,
  ...rest
}) => {
  return (
    <ToggleButton
      {...rest}
      className={cn('hexa-ui-toolbar-toggle-button', className)}
    />
  )
}

export const ToolbarToggleDropdown = ({
  iconBefore,
  text,
  elementAfter,
  loading,
  disabled
}: Pick<ToolbarToggleButtonProps, 'iconBefore' | 'text' | 'elementAfter' | 'loading' | 'disabled'>) => {
  return (
    <Space
      gap="dependent"
      className={cn(
        styles.wrapperToggleDropdown,
        (disabled || loading) && styles.wrapperToggleDropdownDisabled
      )}
    >
      {iconBefore}
      <Text className="text-toggle">{text}</Text>
      {elementAfter}
    </Space>
  )
}

export const Divider = () => (
  <hr className="toolbar-divider" />
)

export const ToolbarComponentMapping: {
  [key in ToolbarItemKey]: FC<ToolbarItems<key>>
} = {
  [ToolbarItemKeyConst.BUTTON]: (props) => {
    const { type, visible, ...rest } = props
    return <ToolbarButton {...rest} />
  },
  [ToolbarItemKeyConst.TOGGLE]: (props) => {
    const { type, visible, ...rest } = props
    return <ToolbarToggleButton type="toggleButton" {...rest} />
  },
  [ToolbarItemKeyConst.LINK]: ToolbarLink,
  [ToolbarItemKeyConst.ICON]: ToolbarIcon,
  [ToolbarItemKeyConst.DROPDOWN]: DropdownItem,
  [ToolbarItemKeyConst.DIVIDER]: Divider,
  [ToolbarItemKeyConst.CHILDREN]: (props) => {
    const { children } = props
    return children as ReactElement<any, any> | null
  }
}