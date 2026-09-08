import { useResizeObserver } from '@helpers/useResizeObserver'
import { fireEvent, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'

import { ExpandableText } from '../ExpandableText'
import { isEllipsisActive } from '../helpers'

jest.mock('@helpers/useResizeObserver', () => ({
  useResizeObserver: jest.fn()
}))

jest.mock('../helpers', () => ({
  isEllipsisActive: jest.fn()
}))

const mockedUseResizeObserver = useResizeObserver as jest.Mock
const mockedIsEllipsisActive = isEllipsisActive as jest.Mock

describe('ExpandableText', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    mockedUseResizeObserver.mockReturnValue({ width: 100, height: 20 })
    mockedIsEllipsisActive.mockReturnValue(false)
  })

  it('should receive qa props', () => {
    const { container } = render(<ExpandableText klId="kl-id" testId="test-id">text</ExpandableText>)

    expect(container.querySelector('[kl-id="kl-id"]')).toBeInTheDocument()
    expect(container.querySelector('[data-testid="test-id"]')).toBeInTheDocument()
  })

  // Codium AI
  it('should handle empty children prop gracefully', () => {
    const { container } = render(<ExpandableText />)
    expect(container.querySelector('span')).toBeInTheDocument()
    expect(container.querySelector('span')?.textContent).toBe('')
  })

  it('should handle non-string children prop gracefully', () => {
    const { container } = render(<ExpandableText><div className="sample-text">Sample Text</div></ExpandableText>)
    expect(container.querySelector('span')).toBeInTheDocument()
    expect(container.querySelector('.sample-text')).toBeInTheDocument()
  })

  describe('clipping state', () => {
    it('should not apply clipped class when text is not truncated', () => {
      mockedIsEllipsisActive.mockReturnValue(false)
      const { container } = render(<ExpandableText>text</ExpandableText>)
      const root = container.firstElementChild

      expect(root).not.toHaveClass('expandable-text-clipped')
      expect(root).toHaveAttribute('data-hide', 'true')
    })

    it('should apply clipped class when text is truncated', () => {
      mockedIsEllipsisActive.mockReturnValue(true)
      const { container } = render(<ExpandableText>very long text that gets truncated</ExpandableText>)
      const root = container.firstElementChild

      expect(root).toHaveClass('expandable-text-clipped')
      expect(root).not.toHaveAttribute('data-hide')
    })

    it('should collapse expanded state automatically when text stops being clipped', () => {
      const onExpand = jest.fn()
      mockedIsEllipsisActive.mockReturnValue(false)
      render(<ExpandableText onExpand={onExpand}>text</ExpandableText>)

      expect(onExpand).toHaveBeenCalledWith(false)
    })

    it('should remove clipped state and hide the arrow when the container is resized to fit the text', () => {
      mockedIsEllipsisActive.mockReturnValue(true)
      const { container, rerender } = render(<ExpandableText>very long text that gets truncated</ExpandableText>)
      const root = container.firstElementChild as HTMLElement

      expect(root).toHaveClass('expandable-text-clipped')

      // simulate the container growing: ResizeObserver fires with new dimensions
      // and the text no longer overflows
      mockedIsEllipsisActive.mockReturnValue(false)
      mockedUseResizeObserver.mockReturnValue({ width: 500, height: 20 })
      rerender(<ExpandableText>very long text that gets truncated</ExpandableText>)

      expect(root).not.toHaveClass('expandable-text-clipped')
      expect(root).toHaveAttribute('data-hide', 'true')
    })
  })

  describe('expand/collapse interaction', () => {
    it('should toggle expanded state and data-hide, calling onExpand on each click', () => {
      mockedIsEllipsisActive.mockReturnValue(true)
      const onExpand = jest.fn()
      const { container } = render(<ExpandableText onExpand={onExpand}>very long text that gets truncated</ExpandableText>)
      const root = container.firstElementChild as HTMLElement
      const expander = container.querySelector('.hexa-ui-expander') as HTMLElement

      expect(root).not.toHaveAttribute('data-hide')

      fireEvent.click(expander)
      expect(root).toHaveClass('expandable-text-expanded')
      expect(root).toHaveAttribute('data-hide', 'true')
      expect(onExpand).toHaveBeenLastCalledWith(true)

      fireEvent.click(expander)
      expect(root).not.toHaveClass('expandable-text-expanded')
      expect(root).not.toHaveAttribute('data-hide')
      expect(onExpand).toHaveBeenLastCalledWith(false)
    })

    it('should expand on Enter keydown', () => {
      mockedIsEllipsisActive.mockReturnValue(true)
      const onExpand = jest.fn()
      const { container } = render(<ExpandableText onExpand={onExpand}>text</ExpandableText>)
      const expander = container.querySelector('.hexa-ui-expander') as HTMLElement
      fireEvent.keyDown(expander, { key: 'Enter' })
      expect(onExpand).toHaveBeenCalledWith(true)
    })

    it('should stop click propagation to parent so outer handlers are not triggered', () => {
      mockedIsEllipsisActive.mockReturnValue(true)
      const parentClick = jest.fn()
      const { container } = render(
        <div onClick={parentClick}>
          <ExpandableText>text</ExpandableText>
        </div>
      )

      const expander = container.querySelector('.hexa-ui-expander') as HTMLElement
      fireEvent.click(expander)

      expect(parentClick).not.toHaveBeenCalled()
    })
  })

  describe('gradient mode', () => {
    it('should not add gradient class by default', () => {
      const { container } = render(<ExpandableText>text</ExpandableText>)
      const root = container.firstElementChild
      expect(root).not.toHaveClass('expandable-gradient')
    })

    it('should add gradient class when useGradient is true', () => {
      const { container } = render(<ExpandableText useGradient>text</ExpandableText>)
      const root = container.firstElementChild
      expect(root).toHaveClass('expandable-gradient')
    })
  })

  describe('structure', () => {
    it('should apply external className to the root element', () => {
      const { container } = render(<ExpandableText className="external-class">text</ExpandableText>)
      const root = container.firstElementChild
      expect(root).toHaveClass('external-class')
    })

    it('should be keyboard-focusable', () => {
      const { container } = render(<ExpandableText>text</ExpandableText>)
      const root = container.firstElementChild
      expect(root).toHaveAttribute('tabIndex', '0')
    })
  })
})