import { DomainTuple } from 'victory'

import { ContainerBaseProps, VictoryAxisElementProps } from '../../../types/chart'

export function getDomainFromScale (scale: ContainerBaseProps['scale']): VictoryAxisElementProps['domain'] {
  return {
    x: (scale?.x?.domain() || []) as DomainTuple,
    y: (scale?.y?.domain() || []) as DomainTuple
  }
}
