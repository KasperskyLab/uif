import { get } from 'lodash'
import { Domain, Helpers } from 'victory'

import { ContainerBaseProps, VictoryAxisElementProps } from '../../../types/chart'

export type GetScaleArgs = Required<
  Pick<VictoryAxisElementProps, 'padding' | 'width' | 'height' | 'categories'> &
    Pick<ContainerBaseProps, 'domainPadding' | 'scale' | 'horizontal' | 'singleQuadrantDomainPadding'>
>;

export type GetDomainArgs = Pick<
  ContainerBaseProps,
  'domainPadding' | 'width' | 'height' | 'singleQuadrantDomainPadding' | 'scale'
> &
  Pick<VictoryAxisElementProps, 'categories' | 'padding'>;

export function getScale ({
  scale,
  horizontal,
  singleQuadrantDomainPadding,
  padding,
  domainPadding,
  width,
  height,
  categories
}: GetScaleArgs): GetScaleArgs['scale'] {
  const range = {
    x: Helpers.getRange({ padding, width, height }, 'x'),
    y: Helpers.getRange({ padding, width, height }, 'y')
  }
  const domain = getDomain({
    scale,
    domainPadding,
    categories,
    padding,
    width,
    height,
    singleQuadrantDomainPadding
  })

  return {
    x: scale.x
      ?.copy()
      .domain(get(domain, 'x') || scale.x.domain())
      .range(horizontal ? range.y : range.x),
    y: scale.y
      ?.copy()
      .domain(get(domain, 'y') || scale.y.domain())
      .range(horizontal ? range.x : range.y)
  }
}

function getDomain (props: GetDomainArgs): VictoryAxisElementProps['domain'] {
  return {
    x: Domain.formatDomain(props.scale?.x?.domain(), props, 'x'),
    y: Domain.formatDomain(props.scale?.y?.domain(), props, 'y')
  }
}
