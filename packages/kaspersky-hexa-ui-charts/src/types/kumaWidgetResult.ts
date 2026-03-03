export interface IWidgetDataRecord {
  // metric и value перепутаны в KUMA
  metric: number, // ось Y, значение
  previousMetric?: number, // ось Y, значение в предыдущем периоде
  value: string | number | Date, // ось X в обычных графиках, подкатегории в стекируемых графиках (название ряда/series)
  enrichedValue?: string,
  category?: string | number | Date, // ось X в стекируемых графиках
  enrichedCategory?: string | Date,
  color?: string
}

export type TKumaWidgetNoMetricDataRecord = Omit<Record<string, unknown>, 'category'> & {
  category: string | number | Date
}

export interface IWidgetResult {
  data: IWidgetDataRecord[] | TKumaWidgetNoMetricDataRecord[]
}
