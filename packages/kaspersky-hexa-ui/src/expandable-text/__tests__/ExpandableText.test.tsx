
import { act, fireEvent, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'

import { ExpandableText } from '../ExpandableText'
import { useWatchOverflow } from '@helpers/overflowWatcher'

// Clipping is decided by ExpandableContent's overflow watcher, which reads real
// geometry. jsdom has no layout, so the watcher is stubbed and the answer is driven
// directly — it is the component's only input.
jest.mock('@helpers/overflowWatcher', () => ({
  useWatchOverflow: jest.fn()
}))

const mockedWatch = useWatchOverflow as jest.Mock

// The stub keeps the reporter the component handed it, so a test can deliver a
// later notification the way a real resize would.
let reporters: Array<(value: boolean) => void> = []
let clippedNow = false

const reportClipped = (clipped: boolean) => {
  clippedNow = clipped
  act(() => { reporters.forEach(onMeasured => onMeasured(clipped)) })
}

describe('ExpandableText', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    reporters = []
    clippedNow = false
    mockedWatch.mockImplementation((_ref: unknown, onMeasured: (value: boolean) => void) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      React.useLayoutEffect(() => {
        if (!reporters.includes(onMeasured)) reporters.push(onMeasured)
        onMeasured(clippedNow)
      }, [])
    })
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
      clippedNow = false
      const { container } = render(<ExpandableText>text</ExpandableText>)
      const root = container.firstElementChild

      expect(root).not.toHaveClass('expandable-text-clipped')
      expect(root).toHaveAttribute('data-hide', 'true')
      // The arrow was previously always rendered and merely hidden with CSS; it is
      // absolutely positioned, so keeping it out of the DOM costs nothing visually
      // and saves a button plus an icon per cell.
      expect(container.querySelector('.hexa-ui-expander')).not.toBeInTheDocument()
    })

    it('should apply clipped class when text is truncated', () => {
      clippedNow = true
      const { container } = render(<ExpandableText>very long text that gets truncated</ExpandableText>)
      const root = container.firstElementChild

      expect(root).toHaveClass('expandable-text-clipped')
      expect(root).not.toHaveAttribute('data-hide')
    })

    it('should collapse expanded state automatically when text stops being clipped', () => {
      const onExpand = jest.fn()
      clippedNow = false
      render(<ExpandableText onExpand={onExpand}>text</ExpandableText>)

      expect(onExpand).toHaveBeenCalledWith(false)
    })

    it('should remove clipped state and hide the arrow when the container is resized to fit the text', () => {
      reportClipped(true)
      const { container, rerender } = render(<ExpandableText>very long text that gets truncated</ExpandableText>)
      const root = container.firstElementChild as HTMLElement

      expect(root).toHaveClass('expandable-text-clipped')

      // the container grows and the watcher reports that the text now fits
      reportClipped(false)
      rerender(<ExpandableText>very long text that gets truncated</ExpandableText>)

      expect(root).not.toHaveClass('expandable-text-clipped')
      expect(root).toHaveAttribute('data-hide', 'true')
    })
  })

  describe('expand/collapse interaction', () => {
    it('should toggle expanded state and data-hide, calling onExpand on each click', () => {
      clippedNow = true
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

    it('exposes the toggle as a real button so the keyboard reaches it', () => {
      clippedNow = true
      const { container } = render(<ExpandableText>text</ExpandableText>)
      const expander = container.querySelector('.hexa-ui-expander') as HTMLButtonElement

      // A native button is activated by Enter and Space by the browser itself, so
      // no key handler of our own is needed for it.
      expect(expander.tagName).toBe('BUTTON')
      expect(expander.type).toBe('button')
      expect(expander).toHaveAttribute('aria-expanded', 'false')
    })

    it('should stop click propagation to parent so outer handlers are not triggered', () => {
      clippedNow = true
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