import { Theme } from '@design-system/types'

export type ToViewProps<BaseType, CssConfig, ToExclude = ''> = Omit<BaseType, keyof ToExclude> & { cssConfig: CssConfig, testAttributes?: TestingAttributes }

export type TestingProps = {
  /** Actual identifier for autotesting, will be passed to HTML attribute data-testid */
  testId?: string,
  /** @deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, will be passed to HTML attribute kl-id */
  klId?: string,
  /** @deprecated Use 'testId' prop instead */
  componentId?: string,
  /** @deprecated Use 'testId' prop instead */
  dataTestId?: string,
  componentType?: string
}

export type TestingAttributes = {
  'data-component-version'?: string,
  'data-testid'?: string,
  'kl-id'?: string,
  'data-component-type'?: string
}

export type ThemeProps = {
  /** Custom theme */
  theme?: Theme
}

export const validationStatuses = ['default', 'error', 'success'] as const
export type ValidationStatus = typeof validationStatuses[number]

export function assertUnreachable (unknownType: never, message: string) {
  console.error(message)
}

export type MakePartial<T, PartialKeys extends keyof T> = Omit<T, PartialKeys> & Partial<Pick<T, PartialKeys>>

export type MakeRequired<T, RequiredKeys extends keyof T> = Omit<T, RequiredKeys> & Required<Pick<T, RequiredKeys>>
