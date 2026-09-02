import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import { ExpandableContent } from '../ExpandableContent'
import { useWatchOverflow } from '@helpers/overflowWatcher'

// jsdom has no layout, so scrollWidth/clientWidth are always 0 and nothing would
// ever read as clipped. The watcher is stubbed so the clipped state can be driven
// directly, which is the only input the component has.
jest.mock('@helpers/overflowWatcher', () => ({
  useWatchOverflow: jest.fn()
}))

const mockedWatch = useWatchOverflow as jest.Mock
const reportClipped = (clipped: boolean) => {
  mockedWatch.mockImplementation((_ref: unknown, onMeasured: (v: boolean) => void) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useLayoutEffect(() => { onMeasured(clipped) })
  })
}

describe('ExpandableContent', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    reportClipped(false)
  })

  it('renders its children', () => {
    const { container } = render(<ExpandableContent><span className="child">text</span></ExpandableContent>)

    expect(container.querySelector('.child')).toBeInTheDocument()
  })

  it('keeps the toggle out of the DOM while the content fits', () => {
    const { container } = render(<ExpandableContent>short</ExpandableContent>)

    expect(container.querySelector('.hexa-ui-expander')).not.toBeInTheDocument()
    expect(container.firstElementChild).toHaveAttribute('data-hide')
  })

  it('reveals the toggle once the content overflows', () => {
    reportClipped(true)
    const { container } = render(<ExpandableContent>a very long value</ExpandableContent>)

    expect(container.querySelector('.hexa-ui-expander')).toBeInTheDocument()
    expect(container.firstElementChild).not.toHaveAttribute('data-hide')
  })

  it('renders the toggle as one native button and nothing more', () => {
    reportClipped(true)
    const { container } = render(<ExpandableContent>a very long value</ExpandableContent>)
    const expander = container.querySelector('.hexa-ui-expander') as HTMLButtonElement

    // The toggle is an ActionButton; the point of this component is that it stays
    // light, so the button must still be the element carrying the class, with only
    // its icon inside it and no wrapper of its own.
    expect(expander.tagName).toBe('BUTTON')
    expect(expander.type).toBe('button')
    expect(expander.parentElement).toBe(container.firstElementChild)
    expect(expander.children).toHaveLength(1)
    expect(expander.firstElementChild?.tagName.toLowerCase()).toBe('svg')
  })

  it('reflects the expanded state on the toggle for assistive tech', () => {
    reportClipped(true)
    const { container } = render(<ExpandableContent>a very long value</ExpandableContent>)
    const expander = container.querySelector('.hexa-ui-expander') as HTMLElement

    expect(expander).toHaveAttribute('aria-expanded', 'false')
    expect(expander).toHaveAttribute('aria-label', 'Expand')

    fireEvent.click(expander)

    expect(expander).toHaveAttribute('aria-expanded', 'true')
    expect(expander).toHaveAttribute('aria-label', 'Collapse')
  })

  it('toggles expanded state and reports it', () => {
    reportClipped(true)
    const onExpand = jest.fn()
    const { container } = render(<ExpandableContent onExpand={onExpand}>a very long value</ExpandableContent>)
    const root = container.firstElementChild as HTMLElement
    const expander = container.querySelector('.hexa-ui-expander') as HTMLElement

    fireEvent.click(expander)
    expect(onExpand).toHaveBeenLastCalledWith(true)
    expect(root).toHaveAttribute('data-expanded')
    expect(root).toHaveAttribute('data-hide')

    fireEvent.click(expander)
    expect(onExpand).toHaveBeenLastCalledWith(false)
    expect(root).not.toHaveAttribute('data-expanded')
  })

  it('does not let a cell click through when the toggle is used', () => {
    reportClipped(true)
    const onRowClick = jest.fn()
    const { container } = render(
      <div onClick={onRowClick}>
        <ExpandableContent>a very long value</ExpandableContent>
      </div>
    )

    fireEvent.click(container.querySelector('.hexa-ui-expander') as HTMLElement)
    expect(onRowClick).not.toHaveBeenCalled()
  })

  it('suppresses the synthesised click when the toggle is activated with Enter', () => {
    reportClipped(true)
    const onExpand = jest.fn()
    const { container } = render(<ExpandableContent onExpand={onExpand}>a very long value</ExpandableContent>)
    const expander = container.querySelector('.hexa-ui-expander') as HTMLElement

    // The toggle is a native button, so the browser activates it on Enter by
    // synthesising a click of its own. Handling the keydown as well would toggle
    // twice and land back where it started, which is why the default is prevented.
    // jsdom does not synthesise that click, so the guard is what gets asserted.
    const handled = fireEvent.keyDown(expander, { key: 'Enter' })

    expect(onExpand).toHaveBeenCalledTimes(1)
    expect(onExpand).toHaveBeenCalledWith(true)
    expect(handled).toBe(false) // defaultPrevented
  })

  it('applies the gradient hooks the table styles rely on', () => {
    reportClipped(true)
    const { container } = render(<ExpandableContent useGradient>a very long value</ExpandableContent>)

    expect(container.firstElementChild).toHaveClass('expandable-gradient')
  })
})
