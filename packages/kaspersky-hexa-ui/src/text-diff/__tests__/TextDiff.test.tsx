import { render, screen } from '@testing-library/react'
import React from 'react'

import { TextDiff } from '../TextDiff'
import styles from '../TextDiff.module.scss'
import { TextDiffProps } from '../types'

const defaultProps = {
  klId: 'text-diff-test',
  testId: 'text-diff-test'
}
const defaultText = 'Some text diff'

const DefaultTextDiff = (props: TextDiffProps) => <TextDiff {...defaultProps} {...props} />

describe('TextDiff', () => {
  const testId = defaultProps.testId
  const testIdNew = `${testId}-new`
  const testIdOld = `${testId}-old`

  test('should render and recieve QA props', () => {
    const { container } = render(<DefaultTextDiff />)
    expect(container.querySelector(`[kl-id="${testId}"]`)).toBeInTheDocument()
    expect(container.querySelector(`[data-testid="${testId}"]`)).toBeInTheDocument()
  })

  test('should render new and old text', () => {
    const { rerender } = render(<DefaultTextDiff newText={defaultText} />)
    expect(screen.getByTestId(testIdNew)).toBeInTheDocument()
    expect(screen.queryByTestId(testIdOld)).not.toBeInTheDocument()

    rerender(<DefaultTextDiff oldText={defaultText} />)
    expect(screen.queryByTestId(testIdNew)).not.toBeInTheDocument()
    expect(screen.getByTestId(testIdOld)).toBeInTheDocument()

    rerender(<DefaultTextDiff newText={defaultText} oldText={defaultText} />)
    expect(screen.getByTestId(testIdNew)).toBeInTheDocument()
    expect(screen.getByTestId(testIdOld)).toBeInTheDocument()
  })

  test('should apply correct styles based on textType', () => {
    const { rerender } = render(<DefaultTextDiff newText={defaultText} textType="BTM3" />)
    expect(screen.getByTestId(testIdNew)).toHaveClass(styles.btm3)

    rerender(<DefaultTextDiff newText={defaultText} textType="H5" />)
    expect(screen.getByTestId(testIdNew)).toHaveClass(styles.h5)
  })

  test('should pass className prop', () => {
    const className = 'textDiff-test-class'
    render(<DefaultTextDiff className={className} />)
    expect(screen.getByTestId(testId)).toHaveClass(className)
  })
})
