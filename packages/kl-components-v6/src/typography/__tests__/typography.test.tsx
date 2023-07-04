import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { H1, H2, H3, H4, Text } from '../Typography'
import { ThemeKey } from '../../../design-system/types'
import {
  colors,
  getTextSizes,
  HeadingTypes,
  TextTypes
} from '../../../design-system/tokens'
import 'jest-styled-components'
import { ThemeProvider } from '../../../design-system/theme'
import { THEME_CONFIG } from '../../../design-system/theme/themes/config'

describe('Typography - Text', () => {
  const klId = 'test-text-id'
  test('should receive kl-id prop', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={ThemeKey.Light}>
        <Text klId={klId}>hello</Text>
      </ThemeProvider>
    )
    expect(getByTestId(klId)).toBeInTheDocument()
  })

  test('render without passing any props', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={ThemeKey.Light}>
        <Text klId={klId}>hello</Text>
      </ThemeProvider>
    )

    expect(getByTestId(klId)).toHaveTextContent('hello')
  })

  test('render with color lga600', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={ThemeKey.Light}>
        <Text color="lga600" klId={klId}>
          hello
        </Text>
      </ThemeProvider>
    )

    expect(getByTestId(klId)).toHaveTextContent('hello')
    // @ts-ignore
    expect(getByTestId(klId)).toHaveStyleRule({
      color: colors.lga600
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

  test('render with  type link L1', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={ThemeKey.Light}>
        <Text color="cg100" klId={klId} type="L1">
          hello
        </Text>
      </ThemeProvider>
    )

    // @ts-ignore
    expect(getByTestId(klId)).toBeInTheDocument()
  })

  test('render with correctly size (ex: link L1)', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={ThemeKey.Light}>
        <Text color="cg100" klId={klId} type="L1">
          hello
        </Text>
      </ThemeProvider>
    )

    const subheaderStyle = getTextSizes(TextTypes.L1)
    // @ts-ignore
    expect(getByTestId(klId)).toHaveStyleRule({
      'font-family': subheaderStyle.fontFamily,
      'font-size': subheaderStyle.fontSize,
      'font-style': subheaderStyle.fontStyle,
      'font-weight': subheaderStyle.fontWeight,
      'letter-spacing': subheaderStyle.letterSpacing,
      'line-height': subheaderStyle.lineHeight
    })
  })

  test('render with correctly font family', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={ThemeKey.Light}>
        <Text color="cg100" klId={klId}>
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

  test('render with color lga600', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={ThemeKey.Light}>
        <H1 color="lga600" klId={klId}>
          hello
        </H1>
      </ThemeProvider>
    )

    expect(getByTestId(klId)).toHaveTextContent('hello')
    // @ts-ignore
    expect(getByTestId(klId)).toHaveStyleRule({
      color: colors.lga600
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

  test('render with  type subheader S1', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={ThemeKey.Light}>
        <H1 color="cg100" klId={klId} type="S1">
          hello
        </H1>
      </ThemeProvider>
    )

    // @ts-ignore
    expect(getByTestId(klId)).toBeInTheDocument()
  })

  test('render with correctly size (ex: subheader S1)', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={ThemeKey.Light}>
        <H1 color="cg100" klId={klId} type="S1">
          hello
        </H1>
      </ThemeProvider>
    )

    const subheaderStyle = getTextSizes(HeadingTypes.S1)
    // @ts-ignore
    expect(getByTestId(klId)).toHaveStyleRule({
      'font-family': subheaderStyle.fontFamily,
      'font-size': subheaderStyle.fontSize,
      'font-style': subheaderStyle.fontStyle,
      'font-weight': subheaderStyle.fontWeight,
      'letter-spacing': subheaderStyle.letterSpacing,
      'line-height': subheaderStyle.lineHeight
    })
  })

  test('render with correctly font family', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={ThemeKey.Light}>
        <H1 color="cg100" klId={klId}>
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
        <H1 color="cg100" klId={klId}>
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
        <H2 color="cg100" klId={klId}>
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
        <H3 color="cg100" klId={klId}>
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
        <H4 color="cg100" klId={klId}>
          hello
        </H4>
      </ThemeProvider>
    )

    // @ts-ignore
    expect(getByRole('heading', { level: 4 })).toBeInTheDocument()
  })
})
