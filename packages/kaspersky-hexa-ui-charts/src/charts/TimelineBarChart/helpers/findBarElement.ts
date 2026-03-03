import { get, isBoolean, isEmpty, isNumber, isString } from 'lodash'
import { Children, isValidElement, ReactElement, ReactNode } from 'react'
import { VictoryGroupProps } from 'victory'

import { VictoryRoles } from '../../../types/victory'

export function findBarElement (children: ReactNode | ReactNode[]): ReactElement<VictoryGroupProps> | undefined {
  for (const ch of Children.toArray(children)) {
    if (isVictoryBarElement(ch)) {
      return ch
    }

    if (isValidElement(ch) && ch.props.children) {
      return findBarElement(ch.props.children)
    }
  }
}

function isVictoryBarElement (node: ReactNode): node is ReactElement<VictoryGroupProps> {
  if (!node || isString(node) || isNumber(node) || isBoolean(node) || isEmpty(node)) {
    return false
  }

  const type = get(node, 'type') as Record<string, unknown> | undefined

  if (!type) {
    return false
  }

  return type.role === VictoryRoles.bar
}
