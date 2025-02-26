import { getFromProps } from '@helpers/getFromProps'
import styled, { css } from 'styled-components'

import { WeeklyScheduleCssConfig } from './types'
const fromProps = getFromProps<WeeklyScheduleCssConfig>()

export const Board = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  min-height: 350px;
`

export const Container = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`

export const SchedulerMatrix = styled.div`
  gap: 1px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex-grow: 1;
  overflow: hidden;
  border-radius: 4px;
  height: 100%;
`

export const cellCss = css<{
  cssConfig: WeeklyScheduleCssConfig,
  selected: boolean
  }>`
  flex-basis: calc((100% - 23px) / 24);
  cursor: pointer;
  background-color: ${props => (
    props.selected
      ? fromProps('selected.color')(props)
      : fromProps('enabled.color')(props)
  )}
  `

export const TimeCell = styled.div`
  display: flex;
`

export const TimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 22px;
  padding-bottom: 22px;
  margin-right: 8px;
`

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const DayCell = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  height: 20px;
  flex-basis: calc(100% / 7);
`

export const dotCss = css<{
  cssConfig: WeeklyScheduleCssConfig,
  selected?: boolean
  }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  box-sizing: content-box;
  display: inline-block;
  background-color: ${props => (
    props.selected
      ? fromProps('selected.color')(props)
      : fromProps('enabled.color')(props)
  )}
`

export const LegendContainer = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-start;
  align-items: center;
  column-gap: 16px;
`

export const LegendItem = styled.div`
  height: 20px;
  display: flex;
  align-items: center;
  column-gap: 4px;
`
