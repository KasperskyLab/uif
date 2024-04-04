import React, { FC } from 'react'
import styled from 'styled-components'
import { Tree as TreeAntd, TreeProps, TreeNodeProps } from 'antd'
import { useThemedTree } from './useThemedTree'
import { DataNode, Key, ITreeProps, TreeViewProps, TreeCheckEvent } from './types'
import { treeCss } from './treeCss'
import { Checkbox } from '@src/checkbox'
import { Radio } from '@src/radio'
import { ArrowDownSolid } from '@kaspersky/icons/8'
import { checkNode, getParents, hasUncheckedChildren, sortCheckedKeys, uncheckNode } from './utils'
import { Loader } from '../loader'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'

const CustomCheckboxIcon = ({ checked }: { checked: boolean | undefined }) => (
  <>
    <Checkbox className="kl-v6-checkbox-icon-normal" checked={checked} />
    <Checkbox className="kl-v6-checkbox-icon-indeterminate" indeterminate />
  </>
)

const CustomRadioIcon = () => (
  <Radio
    value='1'
    options={[
      { label: '', value: '1' },
      { label: '', value: '2' }
    ]}
  />
)

export const TreeNodeCheckIcon = ({
  checkable,
  checked,
  multiple
}: { checkable?: boolean, checked?: boolean, multiple?: boolean }) => {
  if (checkable === false) {
    return null
  }

  if (!multiple) {
    return <CustomRadioIcon />
  }

  return <CustomCheckboxIcon checked={checked} />
}

export const Spinner = styled(({ className }) => {
  return (
    <span className={className}>
      <Loader size="small" />
    </span>
  )
})`
  width: 0;
  display: inline-block;

  > .ant-spin {
    transform: translate(calc(-100% - 4px), -1px);
  }
`

const StyledTreeView = styled(TreeAntd).withConfig({
  shouldForwardProp: (prop) => !['cssConfig'].includes(prop)
})`
  ${treeCss}

  .ant-tree-icon__customize:has(${Spinner}:last-child) {
    width: 0;
    margin-right: -4px;
  }
`

export const TreeView: FC<TreeViewProps> = ({
  checkChildren = true,
  checkStrictly = false,
  checkable = false,
  checkedKeys,
  defaultCheckedKeys,
  disabled = false,
  draggable = false,
  multiple = true,
  onCheck,
  selectable = false,
  showLine = false,
  treeData,
  testAttributes,
  allowUncheck = true,
  ...props
}) => {
  const parents = React.useMemo(() => getParents(treeData), [treeData])
  const [nonStrictlyCheckedKeys, setNonStrictlyCheckedKeys] = React.useState<{ checked: Key[], halfChecked: Key[]}>(
    () => sortCheckedKeys(treeData, defaultCheckedKeys)
  )
  const treeCheckedKeys = React.useMemo(
    () => {
      if (!multiple) {
        return [...nonStrictlyCheckedKeys.checked, ...nonStrictlyCheckedKeys.halfChecked]
      }

      if (!checkStrictly) {
        return nonStrictlyCheckedKeys
      }

      return checkedKeys
    },
    [multiple, checkStrictly, nonStrictlyCheckedKeys, checkedKeys]
  )

  React.useEffect(() => {
    if (checkStrictly || !checkedKeys) {
      return
    }

    setNonStrictlyCheckedKeys(sortCheckedKeys(treeData, checkedKeys))
  }, [checkStrictly, checkedKeys, treeData])

  const onCheckFn = (_: any, event: TreeCheckEvent) => {
    const checked = new Set<Key>(nonStrictlyCheckedKeys.checked)
    const halfChecked = new Set<Key>(nonStrictlyCheckedKeys.halfChecked)
    const node: DataNode = event.node

    if (event.checked && !halfChecked.has(node.key)) {
      if (!multiple) {
        checked.clear()
        halfChecked.clear()
        checkNode(node, false, checked, halfChecked)
      } else {
        checkNode(node, checkChildren, checked, halfChecked)

        // mark eligible halfChecked parents as checked
        let parent = parents[node.key]

        while (parent) {
          if (halfChecked.has(parent.key) && !hasUncheckedChildren(parent, checked)) {
            checked.add(parent.key)
            halfChecked.delete(parent.key)

            parent = parents[parent.key]
          } else {
            break
          }
        }
      }
    } else {
      if (!allowUncheck) {
        return
      }

      uncheckNode(node, checkChildren, checked, halfChecked)

      // mark checked parents as half checked
      let parent = parents[node.key]

      while (parent) {
        if (checked.has(parent.key)) {
          checked.delete(parent.key)
          halfChecked.add(parent.key)

          parent = parents[parent.key]
        } else {
          break
        }
      }
    }

    const checkedKeys = Array.from(checked)
    const halfCheckedKeys = Array.from(halfChecked)

    setNonStrictlyCheckedKeys({ checked: checkedKeys, halfChecked: halfCheckedKeys })

    if (onCheck) {
      onCheck([...checkedKeys, ...halfCheckedKeys], event)
    }
  }

  return (
    <StyledTreeView
      draggable={draggable as TreeProps['draggable']}
      checkStrictly
      checkable={checkable}
      checkedKeys={treeCheckedKeys}
      disabled={disabled}
      icon={(props: TreeNodeProps) => {
        // AntdTreeNodeAttribute type is wrong, it actually can have 'checkable' prop
        // TODO move Spinner to switcherIcon for antd >= 4.20.0
        return (
          <>
            {props.loading && <Spinner />}
            <TreeNodeCheckIcon {...props} multiple={multiple} />
          </>
        )
      }}
      // @ts-ignore
      onCheck={checkStrictly ? onCheck : onCheckFn}
      selectable={checkable ? false : selectable}
      showIcon={checkable}
      showLine={showLine}
      switcherIcon={<ArrowDownSolid />}
      treeData={treeData}
      {...testAttributes}
      {...props}
      motion={false}
    />
  )
}

/** @deprecated Use TreeList or TreeNav instead */
export const Tree = (rawProps: ITreeProps): JSX.Element => {
  const themedProps = useThemedTree(rawProps)
  const props = useTestAttribute(themedProps)
  return <TreeView {...props} />
}
