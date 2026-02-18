import { configure } from '@testing-library/react'
import '@testing-library/jest-dom'

configure({ testIdAttribute: 'kl-id' })

beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn()
    }))
  })
  window.ResizeObserver =
    window.ResizeObserver ||
    jest.fn().mockImplementation(() => ({
      disconnect: jest.fn(),
      observe: jest.fn(),
      unobserve: jest.fn()
    }))

  // omit 2nd argument to silence jsdom 'not implemented' warnings
  const getComputedStyle = window.getComputedStyle

  window.getComputedStyle = (...args) => getComputedStyle(args[0])
})
