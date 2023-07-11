import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeKey } from '../../../design-system/types/ThemeKey'
import { ConfigProvider } from '../../../design-system/context'
import { Tree } from '../Tree'
import { ITreeProps } from '../types'

const defaultProps = {
  componentId: 'tree-test-id',
  treeData: [
    {
      title: 'Drive C',
      key: 'tree-test-key'
    }
  ]
}

const getByComponentId = (container: HTMLElement, klId = defaultProps.componentId) => container.querySelector(
  `[data-component-id="${klId}"]`
)

const DefaultTree = (props: ITreeProps) => (
  <ConfigProvider theme={ThemeKey.Light} locale='en'>
    <Tree {...defaultProps} {...props} />
  </ConfigProvider>
)

describe('Tree', () => {
  test('should render', () => {
    const { container } = render(<DefaultTree />)
    expect(getByComponentId(container)).toBeInTheDocument()
  })

  test('should be disabled with disabled true', () => {
    const { container } = render(<DefaultTree disabled />)
    const disabledItem = container?.querySelector('.ant-tree-list-holder-inner')?.querySelectorAll('.ant-tree-treenode')
    expect(disabledItem?.[0]).toHaveClass('ant-tree-treenode-disabled')
  })

  test('should be selected when click', () => {
    const { container } = render(<DefaultTree />)
    const element = container?.querySelector('.ant-tree-node-content-wrapper')
    fireEvent.click(screen.getByText(/Drive C/i))
    expect(element).toHaveClass('ant-tree-node-selected')
  })
})
