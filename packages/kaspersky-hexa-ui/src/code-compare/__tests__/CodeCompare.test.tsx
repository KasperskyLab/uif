import { CodeCompare } from '@src/index'
import { render } from '@testing-library/react'
import React from 'react'

describe('CodeCompare', () => {
  it('should render', () => {
    const { container } = render(<CodeCompare
      newVersion={{ label: '', value: '' }}
      oldVersion={{ label: '', value: '' }}
      oldValue="oldValue"
      newValue="newValue"
      options={[]}
    />)

    expect(container.querySelector('.diff-code-delete')).toBeInTheDocument()
    expect(container.querySelector('.diff-code-insert')).toBeInTheDocument()
  })
})
