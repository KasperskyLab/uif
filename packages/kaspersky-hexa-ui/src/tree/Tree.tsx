import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { ActionButton } from '@src/action-button'
import { Checkbox } from '@src/checkbox'
import { Radio } from '@src/radio'
import { Tree as TreeAntd, TreeNodeProps, TreeProps } from 'antd'
import React, { FC, MouseEventHandler } from 'react'
import styled from 'styled-components'

import { SettingsGear } from '@kaspersky/hexa-ui-icons/16'
import { ArrowDownSolid } from '@kaspersky/hexa-ui-icons/8'

import { Loader } from '../loader'

import { treeCss } from './treeCss'
import { DataNode, ITreeProps, Key, TreeCheckEvent } from './types'
import {
  checkNode,
  getParents,
  hasRecursiveChildren,
  hasUncheckedChildren,
  sortCheckedKeys,
  uncheckNode
} from './utils'

const CustomCheckboxIcon = ({ checked, disabled, invalid }: { checked?: boolean, disabled?: boolean, invalid?: boolean }) => (
  <>
    <Checkbox className="kl-v6-checkbox-icon-normal" checked={checked} disabled={disabled} invalid={invalid} />
    <Checkbox className="kl-v6-checkbox-icon-indeterminate" disabled={disabled} indeterminate invalid={invalid} />
  </>
)

const CustomRadioIcon = ({ checked, disabled, invalid, testId }: { checked?: boolean, disabled?: boolean, invalid?: boolean, testId?: string }) => (
  <Radio
    disabled={disabled}
    value={checked ? '1' : '2'}
    invalid={invalid}
    testId={testId}
    options={[
      { label: '', value: '1' }
    ]}
  />
)

export const TreeNodeCheckIcon = ({
  checkable,
  checked,
  disabled,
  multiple,
  invalid,
  ...props
}: { checkable?: boolean, checked?: boolean, disabled?: boolean, multiple?: boolean, invalid?: boolean, 'data-testid'?: string }) => {
  if (checkable === false) {
    return null
  }

  if (!multiple) {
    return <CustomRadioIcon checked={checked} disabled={disabled} invalid={invalid} testId={props['data-testid'] ? `${props['data-testid']}-radio` : undefined} />
  }

  return <CustomCheckboxIcon checked={checked} disabled={disabled} invalid={invalid} />
}

export const Spinner = styled(({ className }) => {
  return (
    <span className={className}>
      <Loader size="small" />
    </span>
  )
})`
  width: 0;
  height: 0;
  display: block;

  > .ant-spin {
    transform: translate(calc(-100% - 4px), -1px);
  }
`

const StyledTreeView = styled(TreeAntd)`
  ${treeCss}

  .ant-tree-icon__customize:has(${Spinner}:last-child) {
    width: 0;
    margin-right: -4px;
  }
`

/** @deprecated Use TreeList or TreeNav instead */
export const Tree: FC<ITreeProps> = ({
  checkChildren = true,
  checkStrictly = false,
  checkable = false,
  checkedKeys,
  defaultCheckedKeys,
  disabled = false,
  draggable = false,
  invalid = false,
  multiple = true,
  onCheck,
  onActionClick,
  selectable = false,
  treeData,
  allowUncheck = true,
  checkParents = false,
  showLine = false,
  interactive = false,
  ...props
}) => {
  const { testAttributes } = useTestAttribute(props)
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

        let parent = parents[node.key]

        if (checkParents) {
          while (parent) {
            checked.delete(parent.key)
            halfChecked.delete(parent.key)

            if (hasRecursiveChildren(parent, checked, false)) {
              halfChecked.add(parent.key)
            } else {
              checked.add(parent.key)
            }

            parent = parents[parent.key]
          }
        } else {
          while (parent) {
            if (
              halfChecked.has(parent.key) &&
              !hasUncheckedChildren(parent, checked)
            ) {
              checked.add(parent.key)
              halfChecked.delete(parent.key)

              parent = parents[parent.key]
            } else {
              break
            }
          }
        }
      }
    } else {
      if (!allowUncheck) {
        return
      }

      uncheckNode(node, checkChildren, checked, halfChecked)

      let parent = parents[node.key]

      if (checkParents) {
        while (parent) {
          checked.delete(parent.key)

          if (hasRecursiveChildren(parent, checked, true)) {
            halfChecked.add(parent.key)
          } else {
            halfChecked.delete(parent.key)
          }

          parent = parents[parent.key]
        }
      } else {
        while (parent) {
          if (
            halfChecked.has(parent.key) &&
            !hasUncheckedChildren(parent, checked)
          ) {
            checked.add(parent.key)
            halfChecked.delete(parent.key)

            parent = parents[parent.key]
          } else {
            break
          }
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
      interactive={interactive}
      checkedKeys={treeCheckedKeys}
      disabled={disabled}
      icon={(props: TreeNodeProps) => {
        // AntdTreeNodeAttribute type is wrong, it actually can have 'checkable' prop
        // TODO move Spinner to switcherIcon for antd >= 4.20.0
        return (
          <>
            {props.loading && <Spinner />}
            <TreeNodeCheckIcon {...props} disabled={props.disabled || disabled} multiple={multiple} invalid={invalid} />
          </>
        )
      }}
      invalid={invalid}
      // @ts-ignore
      onCheck={checkStrictly ? onCheck : onCheckFn}
      selectable={selectable}
      showIcon={checkable}
      switcherIcon={<ArrowDownSolid />}
      treeData={treeData}
      titleRender={(node: any) => {
        const handleActionClick: MouseEventHandler = (e) => {
          e.stopPropagation()
          onActionClick?.(node)
        }
        return (
          <span className="hexa-ui-tree-node-title">
            <span>{node.title}</span>
            {onActionClick && node._action !== false && (
              <ActionButton
                className="hexa-ui-tree-node-action"
                icon={<SettingsGear />}
                onClick={handleActionClick}
              />
            )}
          </span>
        )
      }}
      {...testAttributes}
      {...props}
      showLine={showLine}
      motion={false}
    />
  )
}
