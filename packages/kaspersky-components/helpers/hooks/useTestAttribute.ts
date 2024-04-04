import { TestingProps, TestingAttributes } from '@helpers/typesHelpers'

export const useTestAttribute = <P>(props: P & TestingProps): P & { testAttributes: TestingAttributes } => {
  const { testId, klId, componentId, ...rest } = props

  return {
    testAttributes: {
      'data-component-version': 'v6',
      'data-testid': testId,
      'kl-id': klId
    },
    ...(rest as P)
  }
}
