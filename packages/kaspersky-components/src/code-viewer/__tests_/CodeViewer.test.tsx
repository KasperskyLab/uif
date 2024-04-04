import React from 'react'
import { render, screen } from '@testing-library/react'
import { CodeViewer } from '../CodeViewer'
import { htmlExample } from '../stories/examples'
import { DEFAULT_LANGUAGES } from '../constants'
import { CustomLanguages } from '../types'

const defaultProps = {
  klId: 'test-codeViewer',
  language: DEFAULT_LANGUAGES.html as keyof CustomLanguages,
  initialValue: htmlExample,
  testId: 'test-codeViewer'
}

const getCodeViewer = (klId = defaultProps.klId) => screen.getByTestId(klId)

describe('CodeViewer', () => {
  test('should render', () => {
    render(<CodeViewer {...defaultProps} />)
    expect(getCodeViewer()).toBeInTheDocument()
  })

  test('should recieve klId prop', () => {
    const { container } = render(<CodeViewer {...defaultProps} />)

    expect(container.querySelector(`[kl-id="${defaultProps.klId}"]`)).toBeInTheDocument()
    expect(container.querySelector(`[data-testid="${defaultProps.testId}"]`)).toBeInTheDocument()
  })
})
