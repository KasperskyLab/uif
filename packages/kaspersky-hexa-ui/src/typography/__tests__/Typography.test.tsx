import '@testing-library/jest-dom'

import 'jest-styled-components'
import { ThemeProvider } from '@design-system/theme'
import { THEME_CONFIG } from '@design-system/theme/themes/config'
import { ThemeKey } from '@design-system/types'
import { render } from '@testing-library/react'
import React from 'react'

import { productColors } from '@kaspersky/hexa-ui-core/colors/js'

import { H1, H2, H3, H4, H5, H6, Text } from '../Typography'

describe('Typography - Text', () => {
  const klId = 'test-text-id'

  test('should render', () => {
    const { container, getByTestId } = render(
      <ThemeProvider theme={ThemeKey.Light}>
        <Text klId={klId} testId="test-id">hello</Text>
      </ThemeProvider>
    )

    expect(getByTestId(klId)).toBeInTheDocument()
    expect(container.querySelector('[data-testid="test-id"]')).toBeInTheDocument()
  })

  test('render without passing any props', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={ThemeKey.Light}>
        <Text klId={klId}>hello</Text>
      </ThemeProvider>
    )

    expect(getByTestId(klId)).toHaveTextContent('hello')
  })

  test('render with color secondary', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={ThemeKey.Light}>
        <Text color="secondary" klId={klId}>
          hello
        </Text>
      </ThemeProvider>
    )

    expect(getByTestId(klId)).toHaveTextContent('hello')
    // @ts-ignore
    expect(getByTestId(klId)).toHaveStyleRule({
      color: productColors.text.secondary
    })
  })

  test('render with theme color', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={ThemeKey.Light}>
        <Text themedColor="primary" klId={klId}>
          hello
        </Text>
      </ThemeProvider>
    )

    // @ts-ignore
    expect(getByTestId(klId)).toHaveStyleRule({
      color: THEME_CONFIG[ThemeKey.Light].colors.textIconsElements.primary
    })
  })

  test('render with correctly font family', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={ThemeKey.Light}>
        <Text color="primary" klId={klId}>
          hello
        </Text>
      </ThemeProvider>
    )

    // @ts-ignore
    expect(getByTestId(klId)).toHaveStyleRule({
      ' font-family': 'Kaspersky Sans'
    })
  })
})

describe('Typography - Heading', () => {
  const klId = 'h1-test-id'
  test('should receive kl-id prop', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={ThemeKey.Light}>
        <H1 klId={klId}>hello</H1>
      </ThemeProvider>
    )
    expect(getByTestId(klId)).toBeInTheDocument()
  })

  test('render without passing any props', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={ThemeKey.Light}>
        <H1 klId={klId}>hello</H1>
      </ThemeProvider>
    )

    expect(getByTestId(klId)).toHaveTextContent('hello')
  })

  test('render with color primary', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={ThemeKey.Light}>
        <H1 color="primary" klId={klId}>
          hello
        </H1>
      </ThemeProvider>
    )

    expect(getByTestId(klId)).toHaveTextContent('hello')
    // @ts-ignore
    expect(getByTestId(klId)).toHaveStyleRule({
      color: productColors.text.primary
    })
  })

  test('render with theme color', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={ThemeKey.Light}>
        <H1 themedColor="primary" klId={klId}>
          hello
        </H1>
      </ThemeProvider>
    )

    // @ts-ignore
    expect(getByTestId(klId)).toHaveStyleRule({
      color: THEME_CONFIG[ThemeKey.Light].colors.textIconsElements.primary
    })
  })

  test('render with correctly font family', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={ThemeKey.Light}>
        <H1 color="primary" klId={klId}>
          hello
        </H1>
      </ThemeProvider>
    )

    // @ts-ignore
    expect(getByTestId(klId)).toHaveStyleRule({
      ' font-family': 'Kaspersky Sans'
    })
  })

  test('render H1 with correctly semantic tag', () => {
    const { getByRole } = render(
      <ThemeProvider theme={ThemeKey.Light}>
        <H1 color="primary" klId={klId}>
          hello
        </H1>
      </ThemeProvider>
    )

    // @ts-ignore
    expect(getByRole('heading', { level: 1 })).toBeInTheDocument()
  })

  test('render H2 with correctly semantic tag', () => {
    const { getByRole } = render(
      <ThemeProvider theme={ThemeKey.Light}>
        <H2 color="primary" klId={klId}>
          hello
        </H2>
      </ThemeProvider>
    )

    // @ts-ignore
    expect(getByRole('heading', { level: 2 })).toBeInTheDocument()
  })

  test('render H3 with correctly semantic tag', () => {
    const { getByRole } = render(
      <ThemeProvider theme={ThemeKey.Light}>
        <H3 color="primary" klId={klId}>
          hello
        </H3>
      </ThemeProvider>
    )

    // @ts-ignore
    expect(getByRole('heading', { level: 3 })).toBeInTheDocument()
  })

  test('render H4 with correctly semantic tag', () => {
    const { getByRole } = render(
      <ThemeProvider theme={ThemeKey.Light}>
        <H4 color="primary" klId={klId}>
          hello
        </H4>
      </ThemeProvider>
    )

    // @ts-ignore
    expect(getByRole('heading', { level: 4 })).toBeInTheDocument()
  })

  test('render H5 with correctly semantic tag', () => {
    const { getByRole } = render(
      <ThemeProvider theme={ThemeKey.Light}>
        <H5 color="primary" klId={klId}>
          hello
        </H5>
      </ThemeProvider>
    )

    // @ts-ignore
    expect(getByRole('heading', { level: 5 })).toBeInTheDocument()
  })

  test('render H6 with correctly semantic tag', () => {
    const { getByRole } = render(
      <ThemeProvider theme={ThemeKey.Light}>
        <H6 color="primary" klId={klId}>
          hello
        </H6>
      </ThemeProvider>
    )

    // @ts-ignore
    expect(getByRole('heading', { level: 6 })).toBeInTheDocument()
  })
})
