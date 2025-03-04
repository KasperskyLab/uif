import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { ActionButton } from '@src/action-button'
import { Dropdown } from '@src/dropdown'
import { Link } from '@src/link'
import { Text } from '@src/typography'
import React, { FC } from 'react'
import styled from 'styled-components'

import { Menu3 } from '@kaspersky/hexa-ui-icons/16'

import { breadcrumbsCss, StyledBreadcrumbsSeparator, StyledDropdownMenuItem } from './breadcrumbsCss'
import { BreadcrumbsCssConfig, BreadcrumbsItemProps, BreadcrumbsProps, BreadcrumbsViewProps, Route } from './types'
import { useThemedBreadcrumbs } from './useThemedBreadcrumbs'

export const MAX_ITEMS = 5
export const ITEMS_BEFORE_COLLAPSE = 1
export const ITEMS_AFTER_COLLAPSE = 2
export const SEPARATOR = '/'

const StyledBreadcrumbs = styled.nav.withConfig({
  shouldForwardProp: (prop) => !['cssConfig'].includes(prop)
})`${breadcrumbsCss}`

export const Breadcrumbs: FC<BreadcrumbsProps> = (rawProps: BreadcrumbsProps) => {
  const themedProps = useThemedBreadcrumbs(rawProps)
  const props = useTestAttribute(themedProps)
  return <BreadcrumbsView {...props} />
}

const BreadcrumbsItem = ({ route, isLastItem, size, cssConfig }: BreadcrumbsItemProps) => (
  <>
    {size === 'medium' && isLastItem
      ? <Text type={size === 'medium' ? 'BTM3' : 'BTM4' }>{route.name}</Text>
      : <BreadcrumbsItemLink route={route} />
    }
    {!isLastItem && <BreadcrumbsSeparator cssConfig={cssConfig} />}
  </>
)

const BreadcrumbsItemLink = ({ route }: { route: Route }) => (
  <Link href={route.url} onClick={route.onClick} disabled={route.disabled}>{route.name}</Link>
)

const BreadcrumbsSeparator = ({ cssConfig }: { cssConfig: BreadcrumbsCssConfig }) => (
  <StyledBreadcrumbsSeparator cssConfig={cssConfig}>{SEPARATOR}</StyledBreadcrumbsSeparator>
)

const BreadcrumbsView = ({
  routes = [],
  size = 'medium',
  testAttributes,
  cssConfig,
  ...rest
}: BreadcrumbsViewProps) => (
  <StyledBreadcrumbs cssConfig={cssConfig} {...testAttributes} {...rest}>
    {routes.length <= MAX_ITEMS
      ? routes.map((route, index, { length }) =>
          <BreadcrumbsItem route={route} key={route.url} isLastItem={length - 1 === index} cssConfig={cssConfig} size={size} />
        )
      : <>
          {routes.slice(0, ITEMS_BEFORE_COLLAPSE).map((route) =>
            <BreadcrumbsItem key={route.url} route={route} cssConfig={cssConfig} size={size} />
          )}
          <Dropdown overlay={routesToDropdownOverlay(routes, cssConfig)}>
            <ActionButton icon={<Menu3 />} size={size === 'medium' ? 'large' : 'medium' } />
          </Dropdown>
          <BreadcrumbsSeparator cssConfig={cssConfig} />
          {routes.slice(-ITEMS_AFTER_COLLAPSE).map((route, index, { length }) =>
            <BreadcrumbsItem key={route.url} route={route} isLastItem={length - 1 === index} cssConfig={cssConfig} size={size} />
          )}
        </>
    }
  </StyledBreadcrumbs>
)

const routesToDropdownOverlay = (routes: Route[], cssConfig: BreadcrumbsCssConfig) => {
  return (
    <Dropdown.Menu>
      {routes.map((route, index, { length }) => (
        <StyledDropdownMenuItem
          key={route.name}
          cssConfig={cssConfig}
          disabled={route.disabled}
          className={length - 1 === index ? 'ant-dropdown-menu-item-selected' : ''}
        >
          <BreadcrumbsItemLink route={route} />
        </StyledDropdownMenuItem>
      ))}
    </Dropdown.Menu>
  )
}
