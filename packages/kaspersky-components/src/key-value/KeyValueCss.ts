import styled from 'styled-components'
import { SPACES } from '@design-system/theme'
import { LabelPosition } from '@design-system/tokens'
import { getFromProps } from '@helpers/getFromProps'
import { KeyValueCssConfig, KeyValueProps, KeyValueViewProps } from './types'
import { shouldForwardProp } from '@helpers/shouldForwardProp'

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
  ${props => props.gridLayout && 'width: 100%;'}
  
  // временное решение до полноценного рефактора Field KeyValue FieldSet
  ${({ padding }) => `
    ${KeyValueWrapper} { margin: ${padding}px 0; }
  `}
`

export const Key = styled.div<{
  cssConfig: KeyValueCssConfig,
  keysMargin: number,
  labelPosition: LabelPosition,
  verticalOffset: number,
  gridLayout: boolean
}>`
  display: flex;
  align-items: start;
  color: ${fromProps('normal.keyColor')};
  
  ${props => !(props.labelPosition === 'top' || props.gridLayout) && 'min-width: 235px;'}

  ${props => props.labelPosition === 'right' && `margin-left: ${SPACES[10]}px;`}

  ${props => `
    margin-right: ${props.keysMargin}px;
    margin-top: ${props.verticalOffset}px;
  `}
`

export const Value = styled.div`
  display: flex;
  align-items: start;
  color: ${fromProps('normal.valueColor')};
`
