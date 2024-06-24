import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Tag from '../Tag'
import { ThemeKey } from '../../../design-system/types'
import 'jest-styled-components'
import { ThemeProvider } from '../../../design-system/theme'

describe('Tag ', () => {
  const klId = 'test-tag-id'

  test('should recieve kl-id prop', () => {
    const { container, getByTestId } = render(
      <ThemeProvider theme={ThemeKey.Light}>
        <Tag klId={klId} testId="test-id">hello</Tag>
      </ThemeProvider>
    )

    expect(getByTestId(klId)).toBeInTheDocument()
    expect(container.querySelector('[data-testid="test-id"]')).toBeInTheDocument()
  })

  test('should render icon if passed', async () => {
    const { findByTestId } = render(
      <ThemeProvider theme={ThemeKey.Light}>
        <Tag icon={<div kl-id="test-icon">Icon</div>}>hello</Tag>
      </ThemeProvider>
    )
    const iconElement = await findByTestId('test-icon')
    expect(iconElement).toBeInTheDocument()
  })

  test('should render invalid icon when tag is invalid', () => {
    const { container } = render(
      <Tag invalid>Tag invalid</Tag>
    )
    const invalidIcon = container.querySelector('.tag-invalid-icon')
    expect(invalidIcon).toBeInTheDocument()
  })

  test('should call onClose when close button is clicked', () => {
    const onCloseMock = jest.fn()
    const { container } = render(
      <ThemeProvider theme={ThemeKey.Light}>
        <Tag testId="test-tag-id" closable onClose={onCloseMock}>
          hello
        </Tag>
      </ThemeProvider>
    )

    const closeButton = container.querySelector('.kl-action-button')
    closeButton && fireEvent.click(closeButton)
    expect(onCloseMock).toHaveBeenCalled()
  })

  test('should not call onClose when tag is disabled', () => {
    const onCloseMock = jest.fn()
    const { container } = render(
      <ThemeProvider theme={ThemeKey.Light}>
        <Tag testId="test-tag-id" closable disabled onClose={onCloseMock}>
          hello
        </Tag>
      </ThemeProvider>
    )

    const closeButton = container.querySelector('.kl-action-button')
    closeButton && fireEvent.click(closeButton)
    expect(onCloseMock).not.toHaveBeenCalled()
  })

  test('render without passing any props', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={ThemeKey.Light}>
        <Tag klId={klId}>hello</Tag>
      </ThemeProvider>
    )

    expect(getByTestId(klId)).toHaveTextContent('hello')
  })

  test('render without icon', () => {
    const { queryByTestId } = render(
      <ThemeProvider theme={ThemeKey.Light}>
        <Tag klId={klId}>hello</Tag>
      </ThemeProvider>
    )

    const icon = queryByTestId('tag-icon')
    expect(icon).not.toBeTruthy()
  })

  test('should render with closable icon when closable is true', () => {
    const { container } = render(
      <ThemeProvider theme={ThemeKey.Light}>
        <Tag klId={klId} closable>
          hello
        </Tag>
      </ThemeProvider>
    )

    const closeIcon = container.querySelector('.kl-action-button')
    expect(closeIcon).toBeInTheDocument()
  })

  // Codium AI
  it('should truncate content when exceeding maxChars', () => {
    const longText = 'This is a very long text'
    const { getByText } = render(
      <ThemeProvider theme={ThemeKey.Light}>
        <Tag truncation={{ maxChars: 20 }}>{longText}</Tag>
      </ThemeProvider>
    )
    expect(getByText('This is a very lo...')).toBeInTheDocument()
  })

  it('should handle non-string children content', () => {
    const { getByText } = render(
      <ThemeProvider theme={ThemeKey.Light}>
        <Tag><span>Non-string Content</span></Tag>
      </ThemeProvider>
    )
    expect(getByText('Non-string Content')).toBeInTheDocument()
  })

  it('should not truncate content when not exceeding maxChar', () => {
    const longText = 'This is a very long text'
    const { getByText } = render(
      <ThemeProvider theme={ThemeKey.Light}>
        <Tag truncation={{ maxChars: 50 }}>{longText}</Tag>
      </ThemeProvider>
    )
    expect(getByText(longText)).toBeInTheDocument()
  })

  it('should not render close button when closable is false', () => {
    const { container } = render(
      <ThemeProvider theme={ThemeKey.Light}>
        <Tag>Non-closable Tag</Tag>
      </ThemeProvider>
    )
    const closeButton = container.querySelector('.kl-action-button')
    expect(closeButton).not.toBeInTheDocument()
  })
})
