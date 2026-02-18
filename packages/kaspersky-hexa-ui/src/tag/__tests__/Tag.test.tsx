import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import '@testing-library/jest-dom'
import Tag from '../Tag'
import 'jest-styled-components'

describe('Tag ', () => {
  const klId = 'test-tag-id'
  const testId = 'test-tag-id'

  test('should recieve kl-id prop', () => {
    const { container, getByTestId } = render(
      <Tag klId={klId} testId={testId}>hello</Tag>
    )

    expect(getByTestId(klId)).toBeInTheDocument()
    expect(container.querySelector(`[data-testid="${testId}"]`)).toBeInTheDocument()
  })

  test('should render icon if passed', async () => {
    const { findByTestId } = render(
      <Tag icon={<div kl-id="test-icon">Icon</div>}>hello</Tag>
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
    const { getByTestId } = render(
      <Tag klId={klId} closable onClose={onCloseMock}>
        hello
      </Tag>
    )

    const closeButton = getByTestId(`${klId}-close-icon`)
    closeButton && fireEvent.click(closeButton)
    expect(onCloseMock).toHaveBeenCalled()
  })

  test('should not call onClose when tag is disabled', () => {
    const onCloseMock = jest.fn()
    const { getByTestId } = render(
      <Tag klId={klId} closable disabled onClose={onCloseMock}>
        hello
      </Tag>
    )

    const closeButton = getByTestId(`${klId}-close-icon`)
    closeButton && fireEvent.click(closeButton)
    expect(onCloseMock).not.toHaveBeenCalled()
  })

  test('render without passing any props', () => {
    const { getByTestId } = render(
      <Tag klId={klId}>hello</Tag>
    )

    expect(getByTestId(klId)).toHaveTextContent('hello')
  })

  test('render without icon', () => {
    const { queryByTestId } = render(
      <Tag klId={klId}>hello</Tag>
    )

    const icon = queryByTestId('tag-icon')
    expect(icon).not.toBeTruthy()
  })

  test('should render with closable icon when closable is true', () => {
    const { getByTestId } = render(
      <Tag klId={klId} closable>
        hello
      </Tag>
    )

    const closeButton = getByTestId(`${klId}-close-icon`)
    expect(closeButton).toBeInTheDocument()
  })

  // Codium AI
  it('should truncate content when exceeding maxChars', () => {
    const longText = 'This is a very long text'
    const { getByText } = render(
      <Tag truncation={{ maxChars: 20 }}>{longText}</Tag>
    )
    expect(getByText('This is a very lo...')).toBeInTheDocument()
  })

  it('should handle non-string children content', () => {
    const { getByText } = render(
      <Tag><span>Non-string Content</span></Tag>
    )
    expect(getByText('Non-string Content')).toBeInTheDocument()
  })

  it('should not truncate content when not exceeding maxChar', () => {
    const longText = 'This is a very long text'
    const { getByText } = render(
      <Tag truncation={{ maxChars: 50 }}>{longText}</Tag>
    )
    expect(getByText(longText)).toBeInTheDocument()
  })

  it('should not render close button when closable is false', () => {
    const { queryByTestId } = render(
      <Tag>Non-closable Tag</Tag>
    )

    const closeButton = queryByTestId(`${klId}-close-icon`)
    expect(closeButton).not.toBeInTheDocument()
  })
})
