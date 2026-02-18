import { ValidationStatus } from '@helpers/typesHelpers'
import { css, FlattenInterpolation } from 'styled-components'

import { selectCss } from '../select/selectCss'
import { treeCss } from '../tree/treeCss'

import { TreeSelectCssConfig, TreeSelectViewProps } from './types'

function interpolateCss<T> (css: FlattenInterpolation<T>, props: Omit<T, 'theme'>) {
  return css
    .map(x => {
      while (typeof x === 'function') {
        x = x(props as T)
      }

      return x
    })
    .join('')
}

function interpolateSelectCss (props: TreeSelectViewProps) {
  return interpolateCss(selectCss, { cssConfig: props.cssConfig.select, validationStatus: props.validationStatus || 'default' })
}

function interpolateTreeCss (props: TreeSelectViewProps) {
  const newProps = {
    checkable: !!props.treeCheckable,
    cssConfig: props.cssConfig.tree,
    disableNodeBg: true
  }

  return interpolateCss(treeCss, newProps).replace(/ant-tree/g, 'ant-select-tree')
}

export const treeSelectCss = css<{
  cssConfig: TreeSelectCssConfig,
  validationStatus?: ValidationStatus,
  disableNodeBg?: boolean,
  selectable?: boolean,
  checkable?: boolean
}>`
  ${interpolateSelectCss}
  ${interpolateTreeCss}
  
  &&.has-non-empty-search > .ant-select-clear {
    right: 12px;
  }
  
  &.select-show-search .ant-select-arrow {
    transform: rotate(0);
  }
`
