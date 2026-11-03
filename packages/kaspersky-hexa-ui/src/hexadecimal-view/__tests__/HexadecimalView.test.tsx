import { useResizeObserver } from '@helpers/useResizeObserver'
import {
  render,
  waitFor
} from '@testing-library/react'
import React from 'react'

import { BYTES_PER_ROW } from '../constants'
import { HexadecimalView } from '../HexadecimalView'
import type { HexadecimalViewProps } from '../types'

jest.mock('@helpers/useResizeObserver')

const mockUseResizeObserver = useResizeObserver as jest.Mock

const defaultProps: HexadecimalViewProps = {
  // ♥Hexadecimal view♫
  content: '0348657861646563696d616c20766965770e',
  testId: 'hexadecimal-test'
}

const DefaultView = (props: Partial<HexadecimalViewProps>) => (
  <HexadecimalView {...defaultProps} {...props} />
)

describe('HexadecimalView', () => {
  beforeAll(() => {
    window.ResizeObserver =
      window.ResizeObserver ||
      jest.fn().mockImplementation(() => ({
        disconnect: jest.fn(),
        observe: jest.fn(),
        unobserve: jest.fn()
      }))

    global.TextDecoder =
      global.TextDecoder ||
        jest.fn().mockImplementation(() => ({
          decode: jest.fn().mockReturnValue(' Hexadecimal view ')
        }))

    window.Element.prototype.getBoundingClientRect = jest.fn().mockReturnValue({
      width: 1000,
      height: 1000,
      top: 0,
      left: 0,
      bottom: 1000,
      right: 1000
    })
  })

  test('should render', async () => {
    const { baseElement } = render(<DefaultView />)
    expect(baseElement.querySelector(`[data-testid="${defaultProps.testId}"]`)).toBeInTheDocument()
  })

  test('should render 2 rows', async () => {
    const { baseElement } = render(<DefaultView />)
    const rows = baseElement.querySelectorAll(`[data-testid='hexadecimal-hex-row-${defaultProps.testId}']`)
    // since defaultProps.content contains 18 bytes, each line should be at most 16 bytes
    expect(rows.length).toBe(2)
  })

  test('correctly mapping bytes with provided content', () => {
    const { baseElement } = render(<DefaultView />)
    const hexRows = baseElement.querySelectorAll(`[data-testid='hexadecimal-hex-row-${defaultProps.testId}']`)
    let stringified = ''
    for (const row of hexRows) {
      for (const child of row.children) {
        stringified += child.textContent
      }
    }

    expect(stringified).toBe(defaultProps.content)
  })

  test('correctly decoding bytes to text', () => {
    const { baseElement } = render(<DefaultView />)
    const textRows = baseElement.querySelectorAll(`[data-testid='hexadecimal-unicode-row-${defaultProps.testId}']`)
    let stringified = ''
    for (const row of textRows) {
      for (const child of row.children) {
        stringified += child.textContent
      }
    }

    expect(stringified).toBe('♥Hexadecimal view♫')
  })

  describe('resizing row', () => {
    afterEach(() => {
      mockUseResizeObserver.mockClear()
    })

    test.each(Object.entries(BYTES_PER_ROW))(
      'correctly calculates rows at breakpoint "%s"px',
      async (breakpointKey, bytesPerRow) => {
        const mockWidth = parseInt(breakpointKey)

        mockUseResizeObserver.mockReturnValue({ width: mockWidth } as DOMRect)

        const expectedRows = Math.ceil(
          ((defaultProps.content as string).length / 2) / bytesPerRow
        )

        const { baseElement } = render(
          <div style={{ width: mockWidth }}>
            <DefaultView {...defaultProps} />
          </div>
        )

        await waitFor(() => {
          const hexRows = baseElement.querySelectorAll(
            `[data-testid='hexadecimal-hex-row-${defaultProps.testId}']`
          )
          expect(hexRows.length).toBe(expectedRows)
        })
      }
    )
  })
})