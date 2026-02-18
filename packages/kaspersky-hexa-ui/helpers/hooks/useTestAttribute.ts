import { TestingAttributes, TestingProps } from '@helpers/typesHelpers'

export const useTestAttribute = <P>(props: P & TestingProps): P & { testAttributes: TestingAttributes } => {
  const { testId, klId, componentId, componentType, ...rest } = props

  return {
    testAttributes: {
      'data-component-version': 'v6',
      'data-component-type': componentType,
      'data-testid': testId,
      'kl-id': klId
    },
    ...(rest as P)
  }
}

export const getChildTestProps = (postfix: string, attrs?: TestingAttributes, disableOnlyPostfix?: boolean): TestingProps => {
  const klId = attrs?.['kl-id']
  const testId = attrs?.['data-testid']

  if (disableOnlyPostfix) {
    return {
      klId: klId && `${klId}-${postfix}`,
      testId: testId && `${testId}-${postfix}`
    }
  }

  return {
    klId: klId ? `${klId}-${postfix}` : postfix,
    testId: testId ? `${testId}-${postfix}` : postfix
  }
}

export const getChildTestAttr = (postfix = 'body', attr?: TestingAttributes, disableOnlyPostfix?: boolean): TestingAttributes => {
  const testId = attr?.['data-testid'] || attr?.['kl-id']

  if (disableOnlyPostfix) {
    return {
      'data-testid': testId && `${testId}-${postfix}`
    }
  }

  return {
    'data-testid': testId ? `${testId}-${postfix}` : postfix
  }
}
