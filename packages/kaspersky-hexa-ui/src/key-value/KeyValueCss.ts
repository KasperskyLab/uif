import { SPACES } from '@design-system/theme'
import { LabelPosition } from '@design-system/tokens'
import { getFromProps } from '@helpers/getFromProps'
import { shouldForwardProp } from '@helpers/shouldForwardProp'
import styled from 'styled-components'

import { KeyValueCssConfig, KeyValueProps, KeyValueViewProps } from './types'

const fromProps = getFromProps<KeyValueCssConfig>()

export const KeyValueWrapper = styled.div<{ labelPosition: LabelPosition, gridLayout: KeyValueProps['gridLayout'] }>`
  ${({ gridLayout }) => {
    if (gridLayout) {
      let styles = 'display: grid;'
      if (gridLayout.cols) styles += `grid-template-columns: ${gridLayout.cols.join(' ')};`
      if (gridLayout.rows) styles += `grid-template-rows: ${gridLayout.rows.join(' ')};`
      return styles
    }
  return 'display: flex;'
  }}
  ${({ labelPosition }) => {
    switch (labelPosition) {
      case 'right':
        return { flexDirection: 'row-reverse' }
      case 'top':
        return { flexDirection: 'column' }
      case 'aside':
        return { flexDirection: 'row' }
      case 'none':
        return { flexDirection: 'row' }
      default:
        return { flexDirection: 'row' }
    }
  }}
`

export const KeyValueComponent = styled.div.withConfig<
  Pick<KeyValueViewProps, 'padding' | 'gridLayout'>
>({ shouldForwardProp })`
  display: flex;
  flex-direction: column;

  ${({ padding }) => `
    gap: ${padding}px;
  `}
  
  ${props => props.gridLayout && 'width: 100%;'}
`

export const Key = styled.div.withConfig<{
  cssConfig: KeyValueCssConfig,
  keysMargin: number,
  labelPosition: LabelPosition,
  verticalOffset: number,
  gridLayout: boolean
}>({ shouldForwardProp })`
  display: flex;
  align-items: start;
  color: ${fromProps('enabled.keyColor')};
  
  ${props => !(props.labelPosition === 'top' || props.gridLayout) && 'min-width: 235px; max-width: 235px;'}

  ${props => props.labelPosition === 'right' && `margin-left: ${SPACES[10]}px;`}

  ${props => `
    margin-right: ${props.keysMargin}px;
    margin-top: ${props.verticalOffset}px;
  `}
`

export const Value = styled.div.withConfig({ shouldForwardProp })`
  display: flex;
  align-items: start;
  white-space: pre-wrap;
  color: ${fromProps('enabled.valueColor')};
`
