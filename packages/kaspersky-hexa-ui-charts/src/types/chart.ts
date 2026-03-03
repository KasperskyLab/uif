import { VictoryAxisProps, VictoryChartProps, VictoryGroupProps } from 'victory'
import { BlockProps, VictoryContainerProps } from 'victory-core'

import { CustomTheme } from '../hooks/useChartTheme'

export interface BaseChartProps {
  padding?: BlockProps,
  width?: number,
  height?: number,
  standalone?: boolean,
  colors?: string[],
  theme?: CustomTheme
}

export type VictoryAxisElementProps = VictoryAxisProps & {
  categories: { x: string[], y: string[] | undefined }
};

export type VictoryGroupElementProps = VictoryGroupProps;

export type ContainerBaseProps = VictoryContainerProps &
  Pick<VictoryChartProps, 'singleQuadrantDomainPadding' | 'horizontal' | 'padding' | 'domainPadding' | 'domain'>;
