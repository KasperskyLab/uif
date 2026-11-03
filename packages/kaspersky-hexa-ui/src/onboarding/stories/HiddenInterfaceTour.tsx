import { Table } from '@src/table'
import mockData from '@src/table/__mocks__/table-mock-data.json'
import { columns } from '@src/table/stories/_commonConstants'
import { Meta, StoryObj } from '@storybook/react'
import React, { useEffect, useMemo, useRef, useState } from 'react'

import { Onboarding } from '../Onboarding'
import { InteractiveTourStep } from '../types'

const tableId = 'onboarding-table'
const sidebar = `.${tableId}-table-settings-sidebar`

const selectors = {
  column: `[data-testid="${tableId}-table-header-dropdown-age-title"]`,
  dropdown: `[data-testid="${tableId}-table-header-dropdown-age-popup"]`,
  filter: `[data-testid="${tableId}-table-header-dropdown-age-popup"] [data-testid="${tableId}-table-header-dropdown-0-filters"]`,
  settings: '#onboarding-table-example [data-testid="table-settings"]',
  country: `${sidebar} [data-testid="selector-item-country"]`,
  save: `${sidebar} [data-testid="table-settings-save"]`,
  cancel: `${sidebar} [data-testid="table-settings-cancel"]`
}

const findVisible = (selector: string): HTMLElement | null => {
  const element = document.querySelector<HTMLElement>(selector)

  if (!element?.getClientRects().length) return null
  if (element.closest('.ant-drawer:not(.ant-drawer-open)')) return null

  const style = getComputedStyle(element)
  const moving = element.closest('.ant-drawer-content-wrapper')
    ?.getAnimations()
    .some(animation => animation.playState === 'running')

  return style.display === 'none' || style.visibility === 'hidden' || moving
    ? null
    : element
}

const closeDropdown = () => {
  document.body.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }))
}

const waitFor = async (ready: () => boolean, signal: AbortSignal) => {
  const deadline = performance.now() + 5000

  while (!signal.aborted && !ready()) {
    if (performance.now() > deadline) {
      throw new Error('Table tour target did not appear')
    }

    await new Promise(requestAnimationFrame)
  }

  if (signal.aborted) {
    throw new Error('Table tour preparation cancelled')
  }
}

const dataSource = mockData.slice(0, 12).map((row, index) => ({
  ...row,
  age: 20 + index,
  date: `2026-09-${String(index + 1).padStart(2, '0')}`
}))

type TableView = 'table' | 'dropdown' | 'sidebar'

const stepDefinitions: (InteractiveTourStep & {
  target: string,
  view: TableView
})[] = [
  {
    target: selectors.column,
    view: 'table',
    title: 'Фильтры колонки',
    text: 'Нажмите заголовок Age или Next, чтобы открыть дропдаун с фильтрами.',
    placement: 'bottom'
  },
  {
    target: selectors.filter,
    view: 'dropdown',
    title: 'Фильтр в дропдауне',
    text: 'Выберите фильтр или нажмите Next, чтобы перейти к настройкам таблицы.',
    placement: 'right'
  },
  {
    target: selectors.settings,
    view: 'table',
    title: 'Настройки таблицы',
    text: 'Нажмите шестерёнку или Next, чтобы открыть настройки колонок.',
    placement: 'bottom-end'
  },
  {
    target: selectors.country,
    view: 'sidebar',
    title: 'Видимость колонок',
    text: 'Попробуйте отключить Country или нажмите Next.',
    placement: 'left'
  },
  {
    target: selectors.save,
    view: 'sidebar',
    title: 'Применение настроек',
    text: 'Нажмите Apply, чтобы применить настройки и завершить тур.',
    placement: 'left'
  }
]

export const TableOnboardingDemo = () => {
  const [visible, setVisible] = useState(true)

  const tour = useRef({
    active: false,
    clicked: null as string | null,
    preparation: new AbortController(),
    stopStep: () => {}
  })

  const stop = () => {
    tour.current.active = false
    tour.current.clicked = null
    tour.current.stopStep()
    tour.current.preparation.abort()
  }

  useEffect(() => {
    // Клик по подсказке не должен закрывать дропдаун до обработки Next.
    const protectTooltip = (event: MouseEvent) => {
      if (
        tour.current.active &&
        event.target instanceof Element &&
        event.target.closest('.hexa-ui-interactive-tour')
      ) {
        event.stopImmediatePropagation()
      }
    }

    window.addEventListener('mousedown', protectTooltip, true)

    return () => {
      window.removeEventListener('mousedown', protectTooltip, true)
      stop()
    }
  }, [])

  const steps = useMemo<InteractiveTourStep[]>(() => (
    stepDefinitions.map(({ view, ...step }) => ({
      ...step,
      beforeStep: async () => {
        const state = tour.current

        state.stopStep()
        state.preparation.abort()
        state.preparation = new AbortController()

        const { signal } = state.preparation
        const clicked = state.clicked
        state.clicked = null

        // Сначала закрываем дропдаун, затем открываем сайдбар.
        if (view !== 'dropdown') {
          closeDropdown()
          await waitFor(() => !findVisible(selectors.dropdown), signal)
        }

        if (view !== 'sidebar') {
          findVisible(selectors.cancel)?.click()
        }

        // После клика пользователя повторно нажимать триггер не нужно.
        if (
          view === 'sidebar' &&
          clicked !== selectors.settings &&
          !findVisible(selectors.cancel)
        ) {
          findVisible(selectors.settings)?.click()
        }

        if (
          view === 'dropdown' &&
          clicked !== selectors.column &&
          !findVisible(selectors.dropdown)
        ) {
          findVisible(selectors.column)?.click()
        }

        await waitFor(() => !!findVisible(step.target), signal)
      }
    }))
  ), [])

  const onStepChange = (_index: number, step: InteractiveTourStep) => {
    tour.current.stopStep()

    const target = step.target
    if (typeof target !== 'string') return

    let advancing = false
    let frame = 0

    const advance = (clicked = false) => {
      if (!tour.current.active || advancing) return

      advancing = true
      tour.current.stopStep()
      tour.current.clicked = clicked ? target : null

      // Даём штатному обработчику элемента выполнить действие.
      frame = requestAnimationFrame(() => {
        if (tour.current.active) {
          document.querySelector<HTMLButtonElement>(
            '[data-testid="table-onboarding-tour"] [data-action="primary"]'
          )?.click()
        }
      })
    }

    const onClick = (event: MouseEvent) => {
      if (
        event.target instanceof Node &&
        document.querySelector(target)?.contains(event.target)
      ) {
        advance(true)
      }
    }

    const observer = new MutationObserver(() => {
      if (!findVisible(target)) advance()
    })

    observer.observe(document.body, {
      subtree: true,
      childList: true,
      attributes: true,
      attributeFilter: ['class', 'style', 'hidden']
    })

    window.addEventListener('click', onClick, true)

    tour.current.stopStep = () => {
      observer.disconnect()
      window.removeEventListener('click', onClick, true)
      cancelAnimationFrame(frame)
    }
  }

  return (
    <div id="onboarding-table-example">
      <Table
        testId={tableId}
        columns={columns}
        dataSource={dataSource}
        rowSelection={{}}
        pagination={{ pageSize: 10, showSizeChanger: true }}
        toolbar={{
          showColumns: true,
          showGrouping: true,
          showSettingsSearch: true
        }}
      />

      <Onboarding
        variant="tour"
        testId="table-onboarding"
        visible={visible}
        header="Возможности таблицы"
        content="Посмотрите, как пользоваться фильтрами колонок и настройками таблицы."
        onTryNow={() => {
          tour.current.active = true
          setVisible(false)
        }}
        onSkip={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        tour={{
          steps,
          onStepChange,
          zIndex: 2000,
          onFinish: reason => {
            stop()
            closeDropdown()

            if (reason === 'closed') {
              findVisible(selectors.cancel)?.click()
            }
          }
        }}
      />
    </div>
  )
}
