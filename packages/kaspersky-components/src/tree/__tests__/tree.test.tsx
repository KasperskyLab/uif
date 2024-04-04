import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ConfigProvider } from '@design-system/context'
import { TreeList, TreeNav } from '@src/tree'
import { DataNode, Key, TreeListProps } from '../types'
import { getNodes, hasUncheckedChildren, sortCheckedKeys } from '../utils'

type Temp = {
  key: string,
  checkable?: boolean,
  children?: Temp[]
}

function getTreeData (data: Temp[]) {
  const mapItem = (item: Temp): DataNode => ({
    checkable: item.checkable,
    children: item.children ? item.children.map(mapItem) : undefined,
    // @ts-ignore
    'data-testid': `test-id-${item.key}`,
    key: item.key,
    title: item.key
  })

  return data.map(mapItem)
}

function getKeys (nodes: DataNode[]) {
  const out: Key[] = []

  for (const node of nodes) {
    out.push(node.key)

    if (node.children) {
      out.push(...getKeys(node.children))
    }
  }

  return out
}

const treeData = getTreeData([
  {
    key: '0-0',
    children: [
      {
        key: '0-0-0',
        children: [
          {
            key: '0-0-0-0'
          },
          {
            key: '0-0-0-1'
          }
        ]
      }
    ]
  }
])

const defaultProps = {
  defaultExpandedKeys: getKeys(treeData),
  mode: 'multipleChoice',
  testId: 'test-id',
  treeData
} as const

const getByComponentId = (container: HTMLElement, klId = defaultProps.testId) => container.querySelector(
  `[data-testid="${klId}"]`
)

function queryTreeNode (container: HTMLElement, key: string) {
  return container.querySelector(`[data-testid="test-id-${key}"]`) as HTMLElement
}

function queryCheckbox (container: HTMLElement, key: string) {
  return queryTreeNode(container, key).querySelector(':scope > .ant-tree-checkbox')
}

const DefaultTree = (props: Partial<TreeListProps>) => (
  <ConfigProvider>
    <TreeList {...defaultProps} {...props} />
  </ConfigProvider>
)

describe('Tree', () => {
  const clickOnNodeCheckbox = async (container: HTMLElement, key: string) => {
    await userEvent.click(queryCheckbox(container, key) as HTMLElement)
  }

  describe('utils', () => {
    describe('hasUncheckedChildren', () => {
      const nodes = getNodes(treeData)

      it.each([
        [nodes['0-0-0-0'], new Set([]), false],
        [nodes['0-0-0'], new Set(['0-0-0-0', '0-0-0-1']), false],
        [nodes['0-0-0'], new Set(['0-0-0-0']), true]
      ])('%#', (node, checked, expected) => {
        expect(hasUncheckedChildren(node, checked)).toBe(expected)
      })
    })

    describe('sortCheckedKeys', () => {
      it.each([
        [['0-0-0-0'], { checked: ['0-0-0-0'], halfChecked: [] }],
        [['0-0-0', '0-0-0-0'], { checked: ['0-0-0-0'], halfChecked: ['0-0-0'] }],
        [['0-0-0', '0-0-0-0', '0-0-0-1'], { checked: ['0-0-0', '0-0-0-0', '0-0-0-1'], halfChecked: [] }]
      ])('%#', (keys, expected) => {
        expect(sortCheckedKeys(treeData, keys)).toEqual(expected)
      })
    })
  })

  test('should render', () => {
    const { container } = render(<DefaultTree />)

    expect(getByComponentId(container)).toBeInTheDocument()
    expect(container.querySelector('[data-testid="test-id"]')).toBeInTheDocument()
  })

  test('should be disabled with disabled true', () => {
    const { container } = render(<DefaultTree disabled />)
    const disabledItem = container?.querySelectorAll('.ant-tree-list-holder-inner .ant-tree-treenode')

    expect(disabledItem[0]).toHaveClass('ant-tree-treenode-disabled')
  })

  describe('checkChildren = true', () => {
    it.each([
      ['should check a single node', '0-0-0-0', ['0-0-0-0']],
      ['should check the node and it\'s children', '0-0-0', ['0-0-0', '0-0-0-0', '0-0-0-1']]
    ])('%s', async (name, keyToBeClicked, expected) => {
      const onCheck = jest.fn()
      const { container } = render(<DefaultTree onCheck={onCheck} />)

      await clickOnNodeCheckbox(container, keyToBeClicked)

      expect(onCheck).toBeCalledWith(expected, expect.anything())
    })

    it.each([
      ['should uncheck a single node 1', ['0-0-0-0'], '0-0-0-0', []],
      ['should uncheck a single node 2', ['0-0-0-0', '0-0-0-1'], '0-0-0-0', ['0-0-0-1']],
      ['should uncheck the node and it\'s children', ['0-0-0', '0-0-0-0', '0-0-0-1'], '0-0-0', []]
    ])('%s', async (name, defaultCheckedKeys, keyToBeClicked, expected) => {
      const onCheck = jest.fn()
      const { container } = render(
        <DefaultTree
          defaultCheckedKeys={defaultCheckedKeys}
          onCheck={onCheck}
        />
      )

      await clickOnNodeCheckbox(container, keyToBeClicked)

      expect(onCheck).toBeCalledWith(expected, expect.anything())
    })
  })

  describe('checkChildren = false', () => {
    it('should check a single node only', async () => {
      const onCheck = jest.fn()
      const { container } = render(<DefaultTree checkChildren={false} onCheck={onCheck} />)

      await clickOnNodeCheckbox(container, '0-0-0')

      expect(onCheck).toBeCalledWith(['0-0-0'], expect.anything())
    })

    it('should uncheck a single node only', async () => {
      const onCheck = jest.fn()
      const { container } = render(
        <DefaultTree
          checkChildren={false}
          defaultCheckedKeys={['0-0-0', '0-0-0-0', '0-0-0-1']}
          onCheck={onCheck}
        />
      )

      await clickOnNodeCheckbox(container, '0-0-0')

      expect(onCheck).toBeCalledWith(['0-0-0-0', '0-0-0-1'], expect.anything())
    })
  })

  describe('should check no more than a single node', () => {
    it.each([
      [['0-0-0-0'], ['0-0-0-0']],
      [['0-0-0', '0-0-0-0', '0-0-0-1'], ['0-0-0-1']]
    ])('%#', async (keysToBeClicked, expected) => {
      const onCheck = jest.fn()
      const { container } = render(<DefaultTree mode="singleChoice" onCheck={onCheck} />)

      for (const key of keysToBeClicked) {
        await clickOnNodeCheckbox(container, key)
      }

      expect(onCheck).toHaveBeenLastCalledWith(expected, expect.anything())
    })
  })

  it('should not crash if checked key is not in treeData', async () => {
    const { container } = render(<DefaultTree defaultCheckedKeys={['non-existent-key']} />)

    expect(container.querySelector('[data-testid="test-id"]')).toBeInTheDocument()
  })

  it('should not have the checking icon if the node is not checkable', () => {
    const treeData = getTreeData([
      {
        key: '0-0',
        checkable: false,
        children: [
          {
            key: '0-0-0'
          }
        ]
      }
    ])
    const { container } = render(<DefaultTree treeData={treeData} />)

    expect(queryCheckbox(container, '0-0')).not.toBeInTheDocument()
    expect(queryCheckbox(container, '0-0-0')).toBeInTheDocument()
  })

  it('should show checkbox', async () => {
    const { container } = render(<DefaultTree />)

    expect(container.querySelector('input[type="checkbox"]')).toBeInTheDocument()
    expect(container.querySelector('input[type="radio"]')).not.toBeInTheDocument()
  })

  it('should show radio', async () => {
    const { container } = render(<DefaultTree mode="singleChoice" />)

    expect(container.querySelector('input[type="checkbox"]')).not.toBeInTheDocument()
    expect(container.querySelector('input[type="radio"]')).toBeInTheDocument()
  })

  it('tree list single choice can\'t be unchecked', async () => {
    const onCheck = jest.fn()
    const { container } = render(<DefaultTree mode="singleChoice" defaultCheckedKeys={['0-0']} onCheck={onCheck} />)

    await clickOnNodeCheckbox(container, '0-0')

    expect(onCheck).not.toHaveBeenCalled()
    expect(container.querySelector('.ant-tree-checkbox-checked')).toBeInTheDocument()
  })

  describe('TreeNav', () => {
    it('should not have the checking icon if only a single node can be checked', async () => {
      const { container } = render(<TreeNav treeData={treeData} />)

      expect(container.querySelector('input[type="checkbox"]')).not.toBeInTheDocument()
      expect(container.querySelector('input[type="radio"]')).not.toBeInTheDocument()
    })
  })
})
