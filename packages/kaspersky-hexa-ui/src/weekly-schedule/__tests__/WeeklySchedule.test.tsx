import { checkCellInSelectedArea, parseInitialSchedule, toInitialFormat } from '@src/weekly-schedule/helpers'
import { WeeklySchedule } from '@src/weekly-schedule/WeeklySchedule'
import { act, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'

const testId = 'weekly-schedule-test-id'
const weekSchedule = {
  monday: [],
  tuesday: [],
  wednesday: [],
  thursday: [],
  friday: [],
  saturday: [],
  sunday: []
}

const week = {
  monday: 'Пн',
  tuesday: 'Вт',
  wednesday: 'Ср',
  thursday: 'Чт',
  friday: 'Пт',
  saturday: 'Сб',
  sunday: 'Вс'
}

const legend = {
  selected: 'Разрешено',
  notSelected: 'Запрещено'
}

describe('Weekly schedule', () => {
  describe('Weekly schedule component', () => {
    test('Component rendered', () => {
      const { container } = render(
        <WeeklySchedule
          initialState={weekSchedule}
          onChange={jest.fn()}
          daysOfWeek={week}
          legend={legend}
          testId={testId}
        />
      )
      expect(container.querySelector(`[data-testid="${testId}"]`)).toBeInTheDocument()
    })

    test('OnChange was called if click event', () => {
      const onChangeHandler = jest.fn().mockClear()
      const reference = {
        monday: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        tuesday: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        wednesday: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        thursday: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        friday: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        saturday: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        sunday: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
      const { container } = render(
        <WeeklySchedule
          initialState={weekSchedule}
          onChange={onChangeHandler}
          daysOfWeek={week}
          legend={legend}
          testId={testId}
        />
      )

      const firstCell = container.querySelector('[data-testid="cell-id-0"]')

      act(() => {
        firstCell && userEvent.click(firstCell)
      })

      expect(onChangeHandler).toBeCalledWith(reference)
    })

    test('Check schedule if click on wednesday in 20:00', () => {
      const onChangeHandler = jest.fn().mockClear()
      const reference = {
        monday: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        tuesday: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        wednesday: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        thursday: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        friday: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        saturday: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        sunday: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
      const { container } = render(
        <WeeklySchedule
          initialState={weekSchedule}
          onChange={onChangeHandler}
          daysOfWeek={week}
          legend={legend}
          testId={testId}
        />
      )

      const firstCell = container.querySelector('[data-testid="cell-id-68"]')

      act(() => {
        firstCell && userEvent.click(firstCell)
      })

      expect(onChangeHandler).toBeCalledWith(reference)
    })
  })

  describe('Check utils', () => {
    describe('Check parseInitialSchedule / toInitialFormat', () => {
      test('parse clean initial data to flat array', () => {
        const reference = Array(7 * 24).fill(false)
        const parsedData = parseInitialSchedule(weekSchedule, false)
        expect(parsedData).toEqual(reference)
      })

      test('parse partially filled initial data to flat array', () => {
        const partiallyFilled = {
          monday: [],
          tuesday: [],
          wednesday: [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          thursday: [],
          friday: [],
          saturday: [],
          sunday: []
        }
        const wednesdayIndex = 2 * 24
        const reference = Array(7 * 24).fill(false)
        reference[wednesdayIndex] = true
        reference[wednesdayIndex + 2] = true

        const parsedData = parseInitialSchedule(partiallyFilled, false)
        expect(parsedData).toEqual(reference)
      })

      test('parse full initial data to flat array', () => {
        const initailData = {
          monday: [1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
          tuesday: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
          wednesday: [1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
          thursday: [0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
          friday: [0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
          saturday: [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
          sunday: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0]
        }

        const reference = [true, true, false, false, false, true, false, false, false, false, false, true, false, true, false, false, false, true, false, false, false, false, false, false, true, false, false, false, false, true, false, false, false, false, false, true, false, true, false, false, false, true, false, false, false, false, false, false, true, true, false, false, true, true, false, false, false, false, false, true, false, true, false, false, false, true, false, false, false, false, false, false, false, false, false, true, false, true, false, false, false, false, false, true, false, true, false, false, false, true, false, false, false, false, false, false, false, false, true, false, false, true, false, false, false, false, false, true, false, true, false, false, false, true, false, false, false, false, false, false, false, true, false, false, false, true, false, false, false, false, false, true, false, true, false, false, false, true, false, false, false, false, false, false, true, false, false, false, false, true, false, false, false, false, false, true, false, true, false, false, false, true, false, false, false, false, false, false]
        const parsedData = parseInitialSchedule(initailData, false)

        expect(parsedData).toEqual(reference)
      })

      test('parse clean flat data to initial', () => {
        const reference = {
          monday: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          tuesday: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          wednesday: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          thursday: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          friday: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          saturday: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          sunday: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }
        const componentFormat = Array(7 * 24).fill(false)
        const parsedData = toInitialFormat(componentFormat)
        expect(parsedData).toEqual(reference)
      })

      test('parse full flat data to initial', () => {
        const reference = {
          monday: [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          tuesday: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          wednesday: [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          thursday: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          friday: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          saturday: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          sunday: [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }
        const componentFormat = Array(7 * 24).fill(false)
        componentFormat[0] = true
        componentFormat[2] = true
        componentFormat[24 + 1] = true
        componentFormat[24 * 2 + 2] = true
        componentFormat[24 * 4] = true
        componentFormat[24 * 5 + 1] = true
        componentFormat[24 * 6 + 3] = true

        const parsedData = toInitialFormat(componentFormat)
        expect(parsedData).toEqual(reference)
      })
    })

    describe('Check checkCellInSelectedArea', () => {
      test('Cell in selected area - cell partial in area (left side) ', () => {
        const startCoordinate = { x: 2, y: 4 }
        const endCoordinate = { x: 13, y: 29 }
        const cellSize = {
          y: 5,
          x: 1,
          width: 5,
          height: 10
        }

        const isCellSelected = checkCellInSelectedArea({ cellSize, startCoordinate, endCoordinate })
        expect(isCellSelected).toBeTruthy()
      })

      test('Cell in selected area - cell partial in area (left side) - reverse coordinate', () => {
        const startCoordinate = { x: 4, y: 7 }
        const endCoordinate = { x: 13, y: 20 }
        const cellSize = {
          y: 18,
          x: 11,
          width: 5,
          height: 10
        }

        const isCellSelected = checkCellInSelectedArea({ cellSize, startCoordinate, endCoordinate })
        expect(isCellSelected).toBeTruthy()
      })

      test('Cell in selected area - cell partial in area (right side)', () => {
        const startCoordinate = { x: 15, y: 29 }
        const endCoordinate = { x: 2, y: 4 }
        const cellSize = {
          y: 5,
          x: 1,
          width: 5,
          height: 10
        }

        const isCellSelected = checkCellInSelectedArea({ cellSize, startCoordinate, endCoordinate })
        expect(isCellSelected).toBeTruthy()
      })

      test('Cell in selected area - wholly cell in area', () => {
        const startCoordinate = { x: 1, y: 1 }
        const endCoordinate = { x: 15, y: 20 }
        const cellSize = {
          y: 5,
          x: 3,
          width: 5,
          height: 10
        }

        const isCellSelected = checkCellInSelectedArea({ cellSize, startCoordinate, endCoordinate })
        expect(isCellSelected).toBeTruthy()
      })

      test('Cell outside selected area - on axes X', () => {
        const startCoordinate = { x: 1, y: 1 }
        const endCoordinate = { x: 15, y: 20 }
        const cellSize = {
          y: 18,
          x: 16,
          width: 5,
          height: 10
        }

        const isCellSelected = checkCellInSelectedArea({ cellSize, startCoordinate, endCoordinate })
        expect(isCellSelected).toBeFalsy()
      })

      test('Cell outside selected area - on axes Y', () => {
        const startCoordinate = { x: 1, y: 1 }
        const endCoordinate = { x: 15, y: 20 }
        const cellSize = {
          y: 28,
          x: 14,
          width: 5,
          height: 10
        }

        const isCellSelected = checkCellInSelectedArea({ cellSize, startCoordinate, endCoordinate })
        expect(isCellSelected).toBeFalsy()
      })

      test('Cell in selected area - borders cell', () => {
        const startCoordinate = { x: 1, y: 1 }
        const endCoordinate = { x: 15, y: 20 }
        const cellSize = {
          y: 20,
          x: 15,
          width: 5,
          height: 10
        }

        const isCellSelected = checkCellInSelectedArea({ cellSize, startCoordinate, endCoordinate })
        expect(isCellSelected).toBeTruthy()
      })

      test('Cell in outside area', () => {
        const startCoordinate = { x: 20, y: 29 }
        const endCoordinate = { x: 19, y: 27 }
        const cellSize = {
          y: 5,
          x: 1,
          width: 5,
          height: 10
        }

        const isCellSelected = checkCellInSelectedArea({ cellSize, startCoordinate, endCoordinate })
        expect(isCellSelected).toBeFalsy()
      })
    })
  })
})
