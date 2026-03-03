import { get, isFunction } from 'lodash'
import { Children, cloneElement, isValidElement, ReactElement, ReactNode } from 'react'

import { VictoryRoles } from '../../../types/victory'

export type RolePropsApplicator = (children: ReactElement) => Record<string, unknown>;

export function applyPropsToChildrenByRole (
  propsByRoles: Partial<Record<VictoryRoles, Record<string, unknown> | RolePropsApplicator>>,
  children?: ReactElement[] | ReactElement
): ReactNode[] {
  return Children.toArray(children).map((child) => {
    if (!isValidElement(child)) {
      return child
    }

    const type = get(child, 'type') as unknown as Record<string, string> | undefined

    const role = get(propsByRoles, type?.role || VictoryRoles.other, propsByRoles.other) as
      | Record<string, unknown>
      | RolePropsApplicator
    const roleProps = isFunction(role) ? role(child) : role
    const props = {
      ...child.props,
      ...roleProps
    }

    return cloneElement(child, props, props.children)
  })
}
