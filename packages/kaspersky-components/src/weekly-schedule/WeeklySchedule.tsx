import styled from 'styled-components'
import React, { FC, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { ScheduleHeader } from '@src/weekly-schedule/components/ScheduleHeader'
import { ScheduleLegend } from '@src/weekly-schedule/components/ScheduleLegend'
import { ScheduleTimeColumn } from '@src/weekly-schedule/components/ScheduleTimeColumn'
import {
  Coordinate,
  WeeklyScheduleProps,
  WeeklyScheduleViewProps
} from '@src/weekly-schedule/types'
import { useThemedWeeklySchedule } from '@src/weekly-schedule/useThemedWeeklySchedule'
import { Board, cellCss, Container, SchedulerMatrix } from './weeklyScheduleCss'
import { checkCellInSelectedArea, parseInitialSchedule, toInitialFormat } from '@src/weekly-schedule/helpers'

const DAYS = 7
const HOURS = 24
const defaultCell = false
const defaultItems = Array(DAYS * HOURS).fill(defaultCell)
const defaultArray = new Array<HTMLDivElement>(DAYS * HOURS)

const Cell = styled.div.withConfig({
  shouldForwardProp: prop => !['cssConfig'].includes(prop)
})`${cellCss}`

export const WeeklySchedule: FC<WeeklyScheduleProps> = (rawProps: WeeklyScheduleProps) => {
  const props: WeeklyScheduleViewProps = useThemedWeeklySchedule(rawProps)
  return <WeeklyScheduleView {...props} />
}

export const WeeklyScheduleView: FC<WeeklyScheduleViewProps> = ({
  initialState,
  onChange,
  daysOfWeek,
  legend,
  cssConfig,
  testId,
  ...props
}: WeeklyScheduleViewProps) => {
  const cellRefs = useRef<HTMLDivElement[]>([...defaultArray])

  const [cellState, setCellState] = useState<boolean[]>([...defaultItems])
  const [draftCellState, setDraftCellState] = useState<boolean[]>([...defaultItems])

  const [isStartSelected, setIsStartSelected] = useState<boolean>(false)
  const [typeSelected, setTypeSelected] = useState<boolean>(false)
  const [isEndSelected, setIsEndSelected] = useState<boolean>(false)

  const [startCoordinate, setStartCoordinate] = useState<Coordinate>({ x: null, y: null })
  const [endCoordinate, setEndCoordinate] = useState<Coordinate>({ x: null, y: null })

  useLayoutEffect(() => {
    const parsedSchedule = parseInitialSchedule(initialState, defaultCell)
    setCellState(parsedSchedule)
    setDraftCellState(parsedSchedule)
  }, [])

  useEffect(() => {
    if (isEndSelected) {
      setCellState([...draftCellState])
      setEndCoordinate({ x: null, y: null })
      setStartCoordinate({ x: null, y: null })
      setIsStartSelected(false)
      setIsEndSelected(false)
      const parsedData = toInitialFormat(draftCellState)
      onChange(parsedData)
    }
  }, [isEndSelected])

  useEffect(() => {
    if (endCoordinate.x !== null && endCoordinate.y !== null) {
      updateCellState()
    }
  }, [endCoordinate])

  const onMouseMove = (e: MouseEvent) => {
    e.preventDefault()
    setEndCoordinate({ x: e.clientX, y: e.clientY })
  }

  const onMouseUp = () => {
    setIsEndSelected(true)
    window.document.removeEventListener('mousemove', onMouseMove)
    window.document.removeEventListener('mouseup', onMouseUp)
  }

  const addEventListener = () => {
    window.document.addEventListener('mousemove', onMouseMove)
    window.document.addEventListener('mouseup', onMouseUp)
  }

  const mouseDownHandler = (e: React.MouseEvent, index: number) => {
    if (e.button !== 0 || e.nativeEvent.button !== 0) {
      return
    }
    setStartCoordinate({ x: e.clientX, y: e.clientY })
    setIsStartSelected(true)
    setTypeSelected(!cellState[index])
    const newState = [...draftCellState]
    newState[index] = !cellState[index]
    setDraftCellState(newState)
    addEventListener()
  }

  const updateCellState = () => {
    const draftState = [...cellState]

    cellRefs.current.forEach((cell: HTMLDivElement, index: number) => {
      const cellRect = cell.getBoundingClientRect()
      const cellSize = {
        x: cellRect.x,
        y: cellRect.y,
        width: cellRect.width,
        height: cellRect.height
      }
      const cellInSelectedArea = checkCellInSelectedArea({ cellSize, startCoordinate, endCoordinate })

      if (cellInSelectedArea) {
        draftState[index] = typeSelected
      }
    })

    setDraftCellState(draftState)
  }

  return (
    <Board
      data-testid={testId}
      {...props}
    >
      <ScheduleTimeColumn/>
      <Container>
        <ScheduleHeader daysOfWeek={daysOfWeek}/>
        <SchedulerMatrix>
          {
            defaultItems.map((_, i) => {
              return (<Cell
                  cssConfig={cssConfig}
                  onMouseDown={ (e) => mouseDownHandler(e, i) }
                  ref={(el: HTMLDivElement) => (cellRefs.current[i] = el)}
                  key={`${i}`}
                  selected={isStartSelected ? draftCellState[i] : cellState[i]}
                  data-testid={`cell-id-${i}`}
                />
              )
            })
          }
        </SchedulerMatrix>
        <ScheduleLegend legend={legend} cssConfig={cssConfig}/>
      </Container>
  </Board>
  )
}
