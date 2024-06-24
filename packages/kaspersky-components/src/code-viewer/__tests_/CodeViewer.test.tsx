import React from 'react'
import { render, screen } from '@testing-library/react'
import { CodeViewer } from '../CodeViewer'
import { DEFAULT_LANGUAGES } from '../constants'
import { CustomLanguages } from '../types'

const defaultProps = {
  klId: 'test-codeViewer',
  language: DEFAULT_LANGUAGES.html as keyof CustomLanguages,
  initialValue: '<html></html',
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

  // GPT 3.5
  test('should use provided initial value', () => {
    render(<CodeViewer {...defaultProps} />)
    const codeWrapper = screen.getByTestId(defaultProps.klId)

    expect(codeWrapper).toHaveTextContent(defaultProps.initialValue)
  })

  test('should have specified classNames', () => {
    render(<CodeViewer {...defaultProps} wrapperClassName="custom-class" />)
    const codeViewer = screen.getByTestId(defaultProps.klId)

    expect(codeViewer).toHaveClass('kl6-code-viewer')
    expect(codeViewer).toHaveClass('custom-class')
  })
})
