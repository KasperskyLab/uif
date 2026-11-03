import React from 'react'
import { act } from 'react-dom/test-utils'

import { ITableProps, Table, TableRecord, TableRef } from '..'
import { createMockDataSourceFunction } from '../__mocks__/filtersMockData'

import { TableTestingClass } from './TableTestingClass'
import { withVirtualization } from './virtualMode'

export type TableMode = 'client' | 'server'

export interface ModeConfig {
  mode: TableMode
  description: string
}

/** Пара конфигов для `describe.each` — клиентские данные vs серверный dataSourceFunction. */
export const MODES: ModeConfig[] = [
  { mode: 'client', description: 'Client data' },
  { mode: 'server', description: 'Server data (dataSourceFunction)' }
]

const DEFAULT_TEST_ID = 'test-table'

export interface RenderByModeOptions {
  /** Рендерить через renderElement с доступом к ref (triggerDataSourceFunction, resetSelection и т.п.). */
  withRef?: boolean
  /**
   * Ждать появления строк, когда результат `await`-ят (по умолчанию `true`). См. описание ниже про
   * «thenable» — ожидание срабатывает только при `await renderByMode(...)`.
   */
  waitForData?: boolean
}

export interface RenderByModeResult {
  table: TableTestingClass
  /** Spy над dataSourceFunction — только в серверном режиме. */
  dataSourceFunction?: jest.Mock
  /** Ref таблицы — только при `withRef: true`. */
  ref?: React.MutableRefObject<TableRef | null>
}

export interface RenderByModeRefResult extends RenderByModeResult {
  ref: React.MutableRefObject<TableRef | null>
}

/**
 * Результат `renderByModeSync` — обычный объект, который к тому же можно `await`-ить.
 *
 * - `const { table } = renderByModeSync(...)` — синхронно (клиентские строки уже отрисованы; так же
 *   работают старые серверные тесты, которые сами делают `await table.rows.waitForData()`).
 * - `const { table } = await renderByMode(...)` — дожидается появления строк (централизованный
 *   `waitForData`), что нужно в серверном режиме с async `dataSourceFunction` + debounce.
 *
 * Ключевой момент: ожидание запускается **только** при `await`. Тесты с `jest.useFakeTimers()`,
 * которые не await-ят результат, ничего не ждут (иначе `waitFor` завис бы без прокрутки таймеров).
 */
export type AwaitableRenderResult<T extends RenderByModeResult> = T & PromiseLike<T>

const makeAwaitable = <T extends RenderByModeResult> (result: T, waitForData: boolean): AwaitableRenderResult<T> => ({
  ...result,
  then: <R = T, E = never> (
    onFulfilled?: ((value: T) => R | PromiseLike<R>) | null,
    onRejected?: ((reason: unknown) => E | PromiseLike<E>) | null
  ): PromiseLike<R | E> => {
    const ready = waitForData ? result.table.rows.waitForData() : Promise.resolve()
    return ready.then(() => (onFulfilled ? onFulfilled(result) : (result as unknown as R)), onRejected)
  }
})

/**
 * Рендер одной и той же таблицы в клиентском или серверном режиме от одного набора данных:
 * - `client` → данные уходят в `dataSource`;
 * - `server` → данные оборачиваются в `createMockDataSourceFunction` (jest.fn-spy), `dataSource` пустой.
 *
 * Всё остальное (`columns`, `pagination`, `rowSelection`, `testId`…) переопределяется через `props`.
 * `withRef` переключает на renderElement и возвращает `ref` (нужно, напр., для RowSelection).
 */
export async function renderByMode <T extends TableRecord = TableRecord> (
  mode: TableMode,
  data: T[],
  props: Partial<ITableProps<T>>,
  opts: RenderByModeOptions & { withRef: true }
): Promise<RenderByModeRefResult>
export async function renderByMode <T extends TableRecord = TableRecord> (
  mode: TableMode,
  data: T[],
  props?: Partial<ITableProps<T>>,
  opts?: RenderByModeOptions
): Promise<RenderByModeResult>
export async function renderByMode <T extends TableRecord = TableRecord> (
  mode: TableMode,
  data: T[],
  props: Partial<ITableProps<T>> = {},
  { withRef = false, waitForData = true }: RenderByModeOptions = {}
): Promise<RenderByModeResult> {
  const result = renderByModeSync(mode, data, props, { withRef, waitForData })

  await act(async () => undefined)

  return result
}

export function renderByModeSync <T extends TableRecord = TableRecord> (
  mode: TableMode,
  data: T[],
  props: Partial<ITableProps<T>> = {},
  { withRef = false, waitForData = true }: RenderByModeOptions = {}
): AwaitableRenderResult<RenderByModeResult> {
  const dataSourceFunction = mode === 'server' ? jest.fn(createMockDataSourceFunction(data, props.columns!)) : undefined
  const mergedProps: Partial<ITableProps<T>> = withVirtualization({
    testId: DEFAULT_TEST_ID,
    pagination: { pageSize: 20 },
    dataSource: mode === 'client' ? data : undefined,
    dataSourceFunction,
    ...props
  })

  let result: RenderByModeResult
  if (withRef) {
    const ref: React.MutableRefObject<TableRef | null> = { current: null }
    const testId = (mergedProps.testId as string) ?? DEFAULT_TEST_ID
    const table = TableTestingClass.renderElementSync(<Table {...(mergedProps as ITableProps)} ref={ref} />, { testId })
    result = { table, dataSourceFunction, ref }
  } else {
    const table = TableTestingClass.renderSync(mergedProps)
    result = { table, dataSourceFunction }
  }

  return makeAwaitable(result, waitForData)
}
