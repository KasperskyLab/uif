import React, {
  FC,
  JSXElementConstructor,
  PropsWithChildren,
  ReactElement
} from 'react'
import {
  ToolbarCssConfig,
  ToolbarItemKey,
  ToolbarItems,
  ToolbarProps
} from './types'
import { useThemedToolbar } from './useThemedToolbar'
import styled from 'styled-components'
import { toolbarCss } from './toolbarCss'
import { Space } from '../space'
import { Button } from '../button'
import { Link } from '../link'
import { Icon } from '../icon'
import { Dropdown } from '../dropdown'
import { Text } from '../typography'
import {
  IconFilter,
  IconFilterActive,
  IconSettings,
  IconSizeMaximize
} from './icons'
import { IButtonProps } from '../button/types'

export const StyledToolbar = styled.div.withConfig({
  shouldForwardProp: (prop) => !['cssConfig', 'componentId'].includes(prop)
})`
  ${toolbarCss}
`

export const Toolbar: FC<PropsWithChildren<ToolbarProps>> & {
  FilterItem: React.FC<IButtonProps>,
  FilterActiveItem: React.FC<IButtonProps>,
  SettingsItem: React.FC<IButtonProps>,
  ScaleItem: React.FC<IButtonProps>
} = (rawProps) => {
  const props = useThemedToolbar(rawProps)
  return <ToolbarView data-component-id={props.componentId} {...props} />
}

const ToolbarComponentMapping: {
  [key in ToolbarItemKey]: React.FC<ToolbarItems<key>>;
} = {
  [ToolbarItemKey.BUTTON]: (props) => {
    const { label, type, ...rest } = props
    return (
      <Button mode="tertiary" {...rest}>
        {label}
      </Button>
    )
  },
  [ToolbarItemKey.LINK]: (props) => {
    const { type, label, ...rest } = props

    return (
      <Link type="L4" {...rest}>
        {label}
      </Link>
    )
  },
  [ToolbarItemKey.ICON]: (props) => {
    const { label, type, icon, onClick, ...rest } = props
    return (
      <Space
        align="center"
        size={4}
        width="max-content"
        onClick={onClick}
        style={{ cursor: 'pointer' }}
      >
        {icon && <Icon name={icon} size="medium" {...rest} />}
        <Text type="BTM3">{label}</Text>
      </Space>
    )
  },

  [ToolbarItemKey.DROPDOWN]: (props: ToolbarItems<ToolbarItemKey.DROPDOWN>) => {
    const { label, type, children, overlay, ...rest } = props
    return (
      <Dropdown
        trigger={['click']}
        overlay={
          children as ReactElement<any, string | JSXElementConstructor<any>>
        }
        {...rest}
      >
        <Button mode="tertiary" {...rest}>
          {label}
        </Button>
      </Dropdown>
    )
  },
  [ToolbarItemKey.CHILDREN]: (props) => {
    const { children } = props
    return children as ReactElement<any, any> | null
  }
}

const toolbarItemsRender = (items: ToolbarItems[]) => {
  return items.map((itemProps) => {
    const { type, children } = itemProps
    if (type) {
      const Item = ToolbarComponentMapping[type] as React.FC<unknown>
      return <Item {...itemProps} />
    }
    return children
  })
}

export const ToolbarView: FC<
ToolbarProps & { cssConfig: ToolbarCssConfig }
> = ({ left, right, sticky, leftLimit = 4, ...rest }) => {
  return (
    <StyledToolbar {...rest} className={ Number(sticky) > -1000 ? 'sticky' : 'toolbar-wrapper'}>
      {left && (
        <Space size={25} align="center" direction="horizontal" width="initial">
          {toolbarItemsRender(left.slice(0, leftLimit))}
          {left.length > leftLimit && (
            <Dropdown
              trigger={['click']}
              klId="toolbar-dropdown"
              overlay={
                toolbarItemsRender(
                  left.slice(leftLimit, left.length)
                ).reduce((acc: React.ReactNode[], value) => {
                  return [...acc, { children: value }]
                }, []) as unknown as ReactElement<
                any,
                string | JSXElementConstructor<any>
                >
              }
            >
              <Button
                mode="tertiary"
                klId="toolbar-dropdown-button"
                icon={<Icon name="Menu02" size="small" />}
              ></Button>
            </Dropdown>
          )}
        </Space>
      )}
      {right && (
        <Space size={25} align="center" direction="horizontal" width="initial">
          {toolbarItemsRender(right)}
        </Space>
      )}
    </StyledToolbar>
  )
}

Toolbar.FilterItem = (props) => (
  <Button mode="tertiary" {...props}>
    <IconFilter componentId="icon-filter" />
  </Button>
)
Toolbar.FilterActiveItem = (props) => (
  <Button mode="tertiary" {...props}>
    <IconFilterActive componentId="icon-filter-active" />
  </Button>
)
Toolbar.SettingsItem = (props) => (
  <Button mode="tertiary" {...props}>
    <IconSettings componentId="icon-settings" />
  </Button>
)
Toolbar.ScaleItem = (props) => (
  <Button mode="tertiary" {...props}>
    <IconSizeMaximize componentId="icon-size-maximize" />
  </Button>
)
