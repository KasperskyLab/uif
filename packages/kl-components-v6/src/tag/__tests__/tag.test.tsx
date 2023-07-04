import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Tag from '../Tag'
import { ThemeKey } from '../../../design-system/types'
import 'jest-styled-components'
import { ThemeProvider } from '../../../design-system/theme'
import { themeColors } from '../../../design-system/tokens'

describe('Tag ', () => {
  const klId = 'test-tag-id'
  test('should recieve kl-id prop', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={ThemeKey.Light}>
        <Tag klId={klId}>hello</Tag>
      </ThemeProvider>
    )
    expect(getByTestId(klId)).toBeInTheDocument()
  })

  test('render without passing any props', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={ThemeKey.Light}>
        <Tag klId={klId}>hello</Tag>
      </ThemeProvider>
    )

    expect(getByTestId(klId)).toHaveTextContent('hello')
  })

  test('render with color marina', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={ThemeKey.Light}>
        <Tag backgroundColor='marina' klId={klId}>
          hello
        </Tag>
      </ThemeProvider>
    )

    expect(getByTestId(klId)).toHaveTextContent('hello')
    // @ts-ignore
    expect(getByTestId(klId)).toHaveStyleRule({
      color: themeColors.tags.marina
    })
  })

  test('render with icon', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={ThemeKey.Light}>
        <Tag klId={klId} icon='Add'>
          hello
        </Tag>
      </ThemeProvider>
    )

    const icon = getByTestId('tag-icon')
    expect(icon).toBeTruthy()
  })

  test('render without icon', () => {
    const { queryByTestId } = render(
      <ThemeProvider theme={ThemeKey.Light}>
        <Tag klId={klId}>
          hello
        </Tag>
      </ThemeProvider>
    )

    const icon = queryByTestId('tag-icon')
    expect(icon).not.toBeTruthy()
  })

  test('render with closable icon', () => {
    const { container } = render(
      <ThemeProvider theme={ThemeKey.Light}>
        <Tag klId={klId} closable>
          hello
        </Tag>
      </ThemeProvider>
    )

    const closableIcon = container.querySelector('.anticon-close')
    expect(closableIcon).toBeTruthy()
  })

  test('render without closable icon', () => {
    const { container } = render(
      <ThemeProvider theme={ThemeKey.Light}>
        <Tag klId={klId}>
          hello
        </Tag>
      </ThemeProvider>
    )

    const closableIcon = container.querySelector('.anticon-close')
    expect(closableIcon).not.toBeTruthy()
  })
})
