import { CodeCompare } from '@src/index'
import { configure, render, screen, within } from '@testing-library/react'
import React from 'react'

configure({ testIdAttribute: 'data-testid' })
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

  it('selects should be in readonly mode', () => {
    render(
      <CodeCompare
        newVersion={{ label: 'v2', value: 'v2' }}
        oldVersion={{ label: 'v1', value: 'v1' }}
        oldValue="oldValue"
        newValue="newValue"
        options={[
          { label: 'v1', value: 'v1' },
          { label: 'v2', value: 'v2' }
        ]}
        readOnly
      />
    )

    const oldSelectContainer = screen.getByTestId('old-version-select')
    const newSelectContainer = screen.getByTestId('new-version-select')

    const oldInput = within(oldSelectContainer).getByRole('combobox')
    const newInput = within(newSelectContainer).getByRole('combobox')

    expect(oldInput).toHaveAttribute('readonly')
    expect(newInput).toHaveAttribute('readonly')
  })
})
