import { CSSProperties, ReactNode } from 'react'

export enum LegendItemType {
  Row,
  Divider,
}

export type TLegendItemRow<T = any> = {
  kind: LegendItemType.Row,
  title: ReactNode,
  titleType?: 'BTR3' | 'BTM3',
  tooltip?: ReactNode,
  icon?: ReactNode,
  value?: number | ReactNode,
  valueType?: 'MTR3' | 'BTR3',
  color?: string,
  selected?: boolean,
  checked?: boolean,
  payload?: T,
  // style?: CSSProperties,
  className?: string
};

export type TLegendItemDivider = {
  kind: LegendItemType.Divider
};

export type TLegendItem<T = any> = TLegendItemDivider | TLegendItemRow<T>;
