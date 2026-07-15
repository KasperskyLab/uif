import { Button } from '@src/button'
import { Dropdown, DropdownProps } from '@src/dropdown'
import { IconResolver } from '@src/icon'
import { Link } from '@src/link'
import { Space } from '@src/space'
import { ToggleButton } from '@src/toggle-button'
import { Tooltip } from '@src/tooltip'
import { Text } from '@src/typography'
import cn from 'classnames'
import { FC, ReactElement, useState } from 'react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

import { ArrowDown1, Export, Import, ImportExport } from '@kaspersky/hexa-ui-icons/16'

import {
  ButtonIconWrapper,
  ButtonIndicator,
  DropdownTriggerIconsWrapper,
  ToolbarButton as StyledToolbarButton
} from './toolbarCss'
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

const WrapperToggleDropdown = styled(Space)<{ $disabled?: boolean; $loading?: boolean }>`
  color: var(--fg--neutral--primary);
  ${props => (props.$disabled || props.$loading) && `
    color: var(--fg--neutral--tertiary);
    .text-toggle {
      color: var(--fg--neutral--tertiary);
    }
  `}
`

export const ToolbarButton: FC<Omit<ToolbarButtonProps, 'type'> & ToolbarVariantButtonProps> = ({
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
        <DropdownTriggerIconsWrapper>
          <Button mode="tertiary" isPressed={dropdownOpened} iconBefore={<ImportExport />} {...props} />
        </DropdownTriggerIconsWrapper>
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
    <WrapperToggleDropdown
      gap="dependent"
      $loading={loading}
      $disabled={disabled}
    >
      {iconBefore}
      <Text className="text-toggle">{text}</Text>
      {elementAfter}
    </WrapperToggleDropdown>
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
