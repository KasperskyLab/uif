import React from 'react'
import { render } from '@testing-library/react'
import { Severity } from '../Severity'
import { ThemeKey } from '../../../design-system/types'
import { ThemeProvider } from '../../../design-system/theme'
import { useTranslation } from 'react-i18next'
import { renderHook } from '@testing-library/react-hooks'
import { severityTextLocalization } from '../localization'
import { localization } from '../../../helpers/localization'
import { ConfigProvider } from '../../../design-system/context/provider'
import '@testing-library/jest-dom'
import 'jest-styled-components'

describe('Severity ', () => {
  const klId = 'test-severity-id'
  test('should recieve kl-id prop', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={ThemeKey.Light}>
        <Severity mode='positive' klId={klId}>hello</Severity>
      </ThemeProvider>
    )
    expect(getByTestId(klId)).toBeInTheDocument()
  })

  test('render without passing any props', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={ThemeKey.Light}>
        <Severity mode='positive' klId={klId}>hello</Severity>
      </ThemeProvider>
    )

    expect(getByTestId(klId)).toHaveTextContent('hello')
  })

  test('render with icon', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={ThemeKey.Light}>
        <Severity mode='positive' klId={klId} icon="Add">
          hello
        </Severity>
      </ThemeProvider>
    )

    const icon = getByTestId('tag-icon')
    expect(icon).toBeTruthy()
  })

  test('render without icon', () => {
    const { queryByTestId } = render(
      <ThemeProvider theme={ThemeKey.Light}>
        <Severity mode='positive' klId={klId}>hello</Severity>
      </ThemeProvider>
    )

    const icon = queryByTestId('tag-icon')
    expect(icon).not.toBeTruthy()
  })

  test('render without closable icon', () => {
    const { container } = render(
      <ThemeProvider theme={ThemeKey.Light}>
        <Severity mode='positive' klId={klId}>hello</Severity>
      </ThemeProvider>
    )

    const closableIcon = container.querySelector('.anticon-close')
    expect(closableIcon).not.toBeTruthy()
  })

  test('render without l18n', () => {
    // @ts-ignore
    const enSeverityTextStatus = localization.en.translation.severity.positive
    const mode = 'positive'
    const { getByTestId } = render(
      <ConfigProvider theme={ThemeKey.Light} locale='en'>
        <Severity mode={mode} klId={klId}/>
      </ConfigProvider>
    )

    const { result } = renderHook(() => useTranslation())
    const locText = result.current.t(severityTextLocalization[mode])
    expect(enSeverityTextStatus).toEqual(locText)
    expect(getByTestId(klId)).toHaveTextContent(locText)
  })
})
