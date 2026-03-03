import { ReactNode } from 'react'

export enum LegendItemType {
  Row,
  Divider,
}

export type TLegendItemRow<T = any> = {
  kind: LegendItemType.Row,
  title: ReactNode,
  tooltip?: ReactNode,
  icon?: ReactNode,
  value?: number | ReactNode,
  color?: string,
  selected?: boolean,
  payload?: T
};

export type TLegendItemDivider = {
  kind: LegendItemType.Divider
};

export type TLegendItem<T = any> = TLegendItemDivider | TLegendItemRow<T>;
