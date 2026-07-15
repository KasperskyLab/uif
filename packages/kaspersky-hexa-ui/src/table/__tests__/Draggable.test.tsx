import { render } from '@testing-library/react'
import React from 'react'

import { Table } from '../test-utils/shared'

describe('Table Draggable module', () => {
  it('resets the global body userSelect on unmount when drag-and-drop is enabled', () => {
    document.body.style.userSelect = 'none'

    try {
      const { unmount } = render(<Table useDragDrop />)

      expect(document.body.style.userSelect).toBe('none')

      unmount()

      expect(document.body.style.userSelect).toBe('auto')
    } finally {
      document.body.style.userSelect = ''
    }
  })
})
