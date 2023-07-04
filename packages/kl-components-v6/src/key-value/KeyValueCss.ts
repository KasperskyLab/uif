import styled, { css } from 'styled-components'
import { SPACES } from '../../design-system/theme/themes/variables'
import { getTextSizes, textLevels } from '../../design-system/tokens'
import { getFromProps } from '../../helpers/getFromProps'
import { KeyContainerStyledProps, KeyValueCssConfig, KeyValueStyledProps, ValueContainerStyledProps } from './types'

const fromProps = getFromProps<KeyValueCssConfig>()

export const KeyValueComponent = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${SPACES[12]}px;
  ${getTextSizes(textLevels.BTM3)};
`
export const keysContainerCss = css<KeyContainerStyledProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-right: ${({ margin }) => margin}px;
`
export const valuesContainerCss = css<ValueContainerStyledProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: ${SPACES[6]}px;
  flex-grow: 1;
`

export const KeysContainer = styled.div<KeyContainerStyledProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-right: ${(props) => props.margin}px;
`

export const Key = styled.div<Omit<KeyValueStyledProps, 'data' | 'componentId'>>`
  height: ${({ rowHeight }) => rowHeight}px;
  display: flex;
  align-items: center;
  color: ${fromProps('normal.keyColor')};
`
export const Value = styled.div<Omit<KeyValueStyledProps, 'data' | 'componentId'>>`
  height: ${({ rowHeight }) => rowHeight}px;
  display: flex;
  align-items: center;
  color: ${fromProps('normal.valueColor')};
`
