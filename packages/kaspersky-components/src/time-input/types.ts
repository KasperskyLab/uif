import { Theme } from '../../design-system/types'

export type ITimeInput = {
  format?: string,
  klId?: string,
  theme?: Theme,
  defaultValue?: Date,
  value?: Date,
  onChange?: (value: Date | null, dateString: string) => void | undefined
}
