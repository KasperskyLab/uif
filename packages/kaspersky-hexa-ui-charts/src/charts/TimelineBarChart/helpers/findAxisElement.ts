import { get, isBoolean, isEmpty, isNumber, isString } from 'lodash'
import { Children, ReactElement, ReactNode } from 'react'

import { VictoryAxisElementProps } from '../../../types/chart'
import { VictoryRoles } from '../../../types/victory'

export function findAxisElement (children: ReactNode | ReactNode[]): ReactElement<VictoryAxisElementProps> | undefined {
  return Children.toArray(children).find(isVictoryAxisElement)
}

function isVictoryAxisElement (node: ReactNode): node is ReactElement<VictoryAxisElementProps> {
  if (!node || isString(node) || isNumber(node) || isBoolean(node) || isEmpty(node)) {
    return false
  }

  const type = get(node, 'type') as Record<string, unknown> | undefined

  if (!type) {
    return false
  }

  return type.role === VictoryRoles.axis
}
