import { SVGAttributes } from 'react'

export interface IconProps extends SVGAttributes<SVGElement> {
  [key: string]: any,
  componentId: string,
  color?: string
}
