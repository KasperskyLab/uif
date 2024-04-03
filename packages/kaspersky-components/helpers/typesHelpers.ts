export type ToViewProps<BaseType, CssConfig, ToExclude = ''> = Omit<BaseType, keyof ToExclude> & { cssConfig: CssConfig, testAttributes?: TestingAttributes }

export type TestingProps = {
  testId?: string,
  /** @deprecated Use 'testId' prop instead */
  klId?: string,
  /** @deprecated Use 'testId' prop instead */
  componentId?: string,
  /** @deprecated Use 'testId' prop instead */
  dataTestId?: string
}

export type TestingAttributes = {
  'data-component-version'?: string,
  'data-testid'?: string,
  'kl-id'?: string
}
