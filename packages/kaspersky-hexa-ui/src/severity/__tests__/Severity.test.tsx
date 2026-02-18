import { ConfigProvider } from '@design-system/context'
import { localization } from '@helpers/localization'
import { render } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'
import React from 'react'
import { useTranslation } from 'react-i18next'

import { severityTextLocalization } from '../localization'
import { Severity } from '../Severity'
import { SeverityProps } from '../types'

import '@testing-library/jest-dom'
import 'jest-styled-components'

describe('Severity ', () => {
  const klId = 'test-severity-id'

  const DefaultSeverity = (props: SeverityProps) => (
    <ConfigProvider>
      <Severity {...props} />
    </ConfigProvider>
  )

  test('should render', () => {
    const { container, getByTestId } = render(
      <DefaultSeverity mode="positive" klId={klId} testId="test-id">hello</DefaultSeverity>
    )

    expect(getByTestId(klId)).toBeInTheDocument()
    expect(container.querySelector('[data-testid="test-id"]')).toBeInTheDocument()
  })

  test('render without passing any props', () => {
    const { getByTestId } = render(
      <DefaultSeverity mode="positive" klId={klId}>hello</DefaultSeverity>
    )

    expect(getByTestId(klId)).toHaveTextContent('hello')
  })

  test('render with icon', () => {
    const { getByTestId } = render(
      <DefaultSeverity mode="positive" klId={klId} icon={<div kl-id="tag-icon">Icon</div>}>
        hello
      </DefaultSeverity>
    )

    const icon = getByTestId('tag-icon')
    expect(icon).toBeTruthy()
  })

  test('render without icon', () => {
    const { queryByTestId } = render(
      <DefaultSeverity mode="positive" klId={klId}>hello</DefaultSeverity>
    )

    const icon = queryByTestId('tag-icon')
    expect(icon).not.toBeTruthy()
  })

  test('render without closable icon', () => {
    const { container } = render(
      <DefaultSeverity mode="positive" klId={klId}>hello</DefaultSeverity>
    )

    const closableIcon = container.querySelector('.anticon-close')
    expect(closableIcon).not.toBeTruthy()
  })

  test('render without l18n', () => {
    const enSeverityTextStatus = localization['en-us'].translation.severity.positive
    const mode = 'positive'
    const { getByTestId } = render(<DefaultSeverity mode={mode} klId={klId}/>)

    const { result } = renderHook(() => useTranslation())
    const locText = result.current.t(severityTextLocalization[mode])
    expect(enSeverityTextStatus).toEqual(locText)
    expect(getByTestId(klId)).toHaveTextContent(locText)
  })

  // Codium AI
  test('should render correctly when children is an empty string', () => {
    const { container } = render(<DefaultSeverity mode="medium"></DefaultSeverity>)
    expect(container).toBeInTheDocument()
  })
})
