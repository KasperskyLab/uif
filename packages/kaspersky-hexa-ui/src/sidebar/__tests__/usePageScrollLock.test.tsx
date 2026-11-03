import { render } from '@testing-library/react'
import React from 'react'

import { Sidebar } from '../Sidebar'

/**
 * Sidebars open on top of one another, so the page is locked by the first and released
 * only by the last.
 */
describe('page scroll lock', () => {
  beforeEach(() => {
    document.body.style.overflow = ''
    document.body.style.width = ''
  })

  const locked = () => document.body.style.overflow === 'hidden'

  it('leaves the page alone while nothing is open', () => {
    render(<Sidebar visible={false} />)

    expect(locked()).toBe(false)
  })

  it('holds the page while a sidebar is open and hands it back on close', () => {
    const { rerender } = render(<Sidebar visible />)
    expect(locked()).toBe(true)

    rerender(<Sidebar visible={false} />)
    expect(locked()).toBe(false)
  })

  it('keeps holding it until the last of several closes', () => {
    const first = render(<Sidebar visible />)
    const second = render(<Sidebar visible />)
    expect(locked()).toBe(true)

    first.unmount()
    expect(locked()).toBe(true)

    second.unmount()
    expect(locked()).toBe(false)
  })

  it('restores whatever the page had set itself', () => {
    document.body.style.overflow = 'scroll'

    const { rerender } = render(<Sidebar visible />)
    expect(locked()).toBe(true)

    rerender(<Sidebar visible={false} />)
    expect(document.body.style.overflow).toBe('scroll')
  })

  it('does not touch the page for a sidebar with no mask', () => {
    render(<Sidebar visible mask={false} />)

    expect(locked()).toBe(false)
  })
})
