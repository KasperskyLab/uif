import { ConfigProvider } from '@design-system/context'
import { ThemeKey } from '@design-system/types'
import {
  fireEvent,
  render,
  screen,
  waitFor,
  within
} from '@testing-library/react'
import React, { FC, ReactElement, ReactNode } from 'react'
import { act } from 'react-dom/test-utils'

import { ITableProps, Table as BaseTable, TableColumn, TableRecord } from '..'
import { generatedData, tableColumns } from '../__mocks__/filtersMockData'

import {
  addFilter,
  applyFilters,
  DROPDOWN_PREFIX,
  getFilterChip,
  openDropdown,
  openFiltersSidebar
} from './helpers'

export interface TableTestingClassOptions {
  /** testId, переданный в таблицу — префикс для дропдаунов колонок, сортировки и select-all чекбокса */
  testId?: string
  /** klId, переданный в таблицу */
  klId?: string
}

/** testId по умолчанию, если инстанс отрисован без testId (совпадает с префиксом `table-` внутри таблицы) */
const DEFAULT_TEST_ID = 'table'

/** Дефолтная обёртка провайдеров для таблицы — единый ConfigProvider (тема + локаль en-us). */
export const TestProviders: FC<{ children: ReactNode }> = ({ children }) => (
  <ConfigProvider theme={ThemeKey.Light} locale="en-us">{children}</ConfigProvider>
)

/**
 * Дефолтная таблица для тестов: `BaseTable` с данными из `filtersMockData`
 * (`tableColumns` + `generatedData`) под {@link TestProviders}. Любой проп переопределяется
 * через `props`. Используется в {@link TableTestingClass.render} и для `rerender` в тестах.
 */
export const TestTable = <T extends TableRecord = TableRecord> (props: Partial<ITableProps<T>>) => (
  <TestProviders>
    <BaseTable<T> {...props} />
  </TestProviders>
)

type SortDirection = 'asc' | 'desc'

/** Описание фильтра для поиска его чипа (совместимо с объектами UnitedFilter). */
export interface FilterChipQuery {
  name?: string
  dataIndex?: string
  condition: string
  value?: string | number | null
}

/**
 * Page-object для юнит-тестов таблицы (@testing-library/react).
 *
 * Собирает все переиспользуемые ручки над одним отрендеренным инстансом таблицы в
 * неймспейсы (`rows`, `selection`, `sorting`, `filters`, `columns`, `pagination`,
 * `toolbar`, `contextMenu`) по образцу e2e page-object.
 *
 * Синхронные `get`/`click`/`is`; `async` — только там, где нужен `findBy`/`waitFor`
 * (открытие дропдаунов/меню, ожидание загрузки данных).
 *
 * Важно: элементы внутри DOM-дерева таблицы (строки, чекбоксы, пагинация, тулбар,
 * заголовки) ищутся scoped через `within(container)`, а оверлеи в порталах
 * (дропдауны колонок, меню select-all, сайдбар фильтров, контекст-меню) — через
 * глобальный `screen`, т.к. они рендерятся в `document.body`.
 *
 * @example
 * const table = TableTestingClass.render({ dataSource, columns, testId: 'my-table' })
 * expect(table.rows.getCount()).toBe(3)
 * table.selection.toggleRow(1)
 * await table.sorting.sortBy('name', 'asc')
 */
export class TableTestingClass {
  readonly container: HTMLElement
  readonly testId: string
  readonly klId?: string

  private _rerender?: (ui: ReactElement) => void
  private _unmount?: () => void

  constructor (container: HTMLElement, opts: TableTestingClassOptions = {}) {
    this.container = container
    this.testId = opts.testId ?? DEFAULT_TEST_ID
    this.klId = opts.klId
  }

  /**
   * Рендерит {@link TestTable} (BaseTable с дефолтными данными из filtersMockData) и возвращает harness.
   * `testId` подставляется в пропы, чтобы селекторы дропдаунов/сортировки работали.
   */
  static render <T extends TableRecord = TableRecord> (props: Partial<ITableProps<T>> = {}, opts: TableTestingClassOptions = {}): TableTestingClass {
    const testId = opts.testId ?? (props.testId as string | undefined) ?? DEFAULT_TEST_ID
    const klId = opts.klId ?? (props.klId as string | undefined)
    const result = render(<TestTable testId={testId} klId={klId} {...props} />)
    const harness = new TableTestingClass(result.container, { testId, klId })
    harness._rerender = result.rerender
    harness._unmount = result.unmount
    return harness
  }

  /**
   * Рендерит произвольный элемент (кастомный компонент, `ref`, stateful-обёртку) под
   * дефолтной обёрткой провайдеров ({@link TestProviders} — ConfigProvider) и возвращает harness.
   * `rerender` сохраняет ту же обёртку.
   */
  static renderElement (ui: ReactElement, opts: TableTestingClassOptions = {}): TableTestingClass {
    const result = render(ui, { wrapper: TestProviders })
    const harness = new TableTestingClass(result.container, opts)
    harness._rerender = result.rerender
    harness._unmount = result.unmount
    return harness
  }

  // --- Корневые ручки ------------------------------------------------------

  /** Инстанс таблицы по её testId, затем по klId (или `.ant-table` в крайнем случае). */
  getInstance (): HTMLElement | null {
    return (
      this.query(`[data-testid="${this.testId}"]`) ??
      (this.klId ? this.query(`[kl-id="${this.klId}"]`) : null) ??
      this.query('.ant-table')
    )
  }

  /** Перерисовать текущий инстанс с новым деревом (проксирует `rerender` из `render()`). */
  rerender (ui: ReactElement): void {
    if (!this._rerender) {
      throw new Error('TableTestingClass.rerender недоступен: harness создан без результата render()')
    }
    this._rerender(ui)
  }

  /** Размонтировать инстанс (проксирует `unmount` из `render()`). */
  unmount (): void {
    if (!this._unmount) {
      throw new Error('TableTestingClass.unmount недоступен: harness создан без результата render()')
    }
    this._unmount()
  }

  /** Тело таблицы со скроллом (`.ant-table-body`). */
  getBody (): HTMLElement | null {
    return this.query('.ant-table-body')
  }

  /** Scoped `querySelector` в пределах контейнера таблицы. */
  query<E extends Element = HTMLElement> (selector: string): E | null {
    return this.container.querySelector<E>(selector)
  }

  /** Scoped `querySelectorAll` в пределах контейнера таблицы. */
  queryAll<E extends Element = HTMLElement> (selector: string): E[] {
    return Array.from(this.container.querySelectorAll<E>(selector))
  }

  /** Scoped-обёртка `within(container)` — для in-DOM элементов таблицы. */
  get scoped (): ReturnType<typeof within> {
    return within(this.container)
  }

  // --- rows: строки и ячейки ----------------------------------------------

  readonly rows = {
    /** Все data-строки таблицы (`.ant-table-row`). */
    getAll: (): HTMLTableRowElement[] => this.queryAll<HTMLTableRowElement>('.ant-table-row'),

    /** Количество отрисованных строк. */
    getCount: (): number => this.rows.getAll().length,

    /** Строка по индексу. */
    getAt: (index: number): HTMLTableRowElement | undefined => this.rows.getAll()[index],

    /** Строка по ключу (`tr[data-row-key="..."]`). */
    getByKey: (key: string | number): HTMLTableRowElement | null =>
      this.query<HTMLTableRowElement>(`tr[data-row-key="${key}"]`),

    /**
     * Дождаться появления строки по ключу и вернуть её. Замена ручным
     * `await waitFor(() => expect(rows.getByKey(...)).not.toBeNull())`.
     */
    findByKey: async (key: string | number): Promise<HTMLTableRowElement> => (
      await waitFor(() => {
        const row = this.rows.getByKey(key)
        if (!row) throw new Error(`TableTestingClass: строка с ключом "${key}" не найдена`)
        return row
      }, { timeout: 5000 })
    ),

    /** Дождаться появления хотя бы `min` строк (для server/async data source). */
    waitForData: async (min = 1): Promise<void> => {
      await waitFor(() => {
        expect(this.rows.getCount()).toBeGreaterThanOrEqual(min)
      }, { timeout: 5000 })
    },

    /** Иконка раскрытия строки (дерево/аккордеон) — `hexa-ui-table-row-expand-icon` внутри строки. */
    getExpandIcon: (key: string | number): HTMLElement | null =>
      this.rows.getByKey(key)?.querySelector<HTMLElement>('[data-testid="hexa-ui-table-row-expand-icon"]') ?? null,

    /** Кликнуть по иконке раскрытия строки. */
    clickExpandIcon: (key: string | number): void => {
      fireEvent.click(this.rows.getExpandIcon(key)!)
    },

    /** Раскрыта ли строка — по атрибуту `data-expanded` её иконки раскрытия. */
    isRowExpanded: (key: string | number): boolean =>
      this.rows.getExpandIcon(key)?.getAttribute('data-expanded') === 'true',

    /** Ячейка по координатам (строка, колонка). */
    getCell: (rowIndex: number, colIndex: number): HTMLTableCellElement | undefined =>
      this.rows.getAt(rowIndex)?.querySelectorAll('td')[colIndex] as HTMLTableCellElement | undefined,

    /** Текст ячейки по координатам (trim). */
    getCellText: (rowIndex: number, colIndex: number): string =>
      this.rows.getCell(rowIndex, colIndex)?.textContent?.trim() ?? '',

    /** Текст n-й ячейки по всем строкам — для проверок сортировки. */
    getColumnValues: (colIndex: number): string[] =>
      this.rows.getAll().map(row => row.querySelectorAll('td')[colIndex]?.textContent?.trim() ?? ''),

    /** Заголовки групп (`.group-title-row`). */
    getGroupTitles: (): string[] =>
      this.queryAll('.group-title-row')
        .map(el => el.textContent)
        .filter((text): text is string => !!text)
  }

  // --- selection: выбор строк / чекбоксы ----------------------------------

  private get headerCheckboxId (): string {
    return `${this.testId || this.klId || DEFAULT_TEST_ID}-select-all-checkbox`
  }

  readonly selection = {
    /** Все чекбоксы строк и шапки в таблице (`.ant-checkbox-input`). */
    getCheckboxes: (): HTMLElement[] => this.queryAll('.ant-checkbox-input'),

    /** Чекбокс строки (`table-row__select-${key}`). */
    getRowCheckbox: (key: string | number): HTMLElement | null =>
      this.scoped.queryByTestId(`table-row__select-${key}`),

    /** Клик по чекбоксу строки. */
    toggleRow: (key: string | number): void => {
      fireEvent.click(this.scoped.getByTestId(`table-row__select-${key}`))
    },

    /** Отмечен ли чекбокс строки. */
    isRowChecked: (key: string | number): boolean => {
      const checkbox = this.scoped.getByTestId(`table-row__select-${key}`) as HTMLInputElement
      return checkbox.checked ?? checkbox.querySelector('input')?.checked ?? false
    },

    /** Чекбокс в шапке (`${testId}-select-all-checkbox` → `[role="checkbox"]`). */
    getHeaderCheckbox: (): Element | null =>
      this.scoped.getByTestId(this.headerCheckboxId).querySelector('[role="checkbox"]'),

    /** Обёртка чекбокса шапки или `null`, если его нет (без исключения — для проверок отсутствия). */
    queryHeaderCheckbox: (): HTMLElement | null =>
      this.scoped.queryByTestId(this.headerCheckboxId),

    /** Открыть меню шапки (select-all / current-page / deselect) и дождаться пунктов. */
    openHeaderMenu: async (): Promise<void> => {
      fireEvent.click(this.selection.getHeaderCheckbox()!)
      await waitFor(() => {
        expect(screen.getByTestId('select-all')).toBeInTheDocument()
      }, { timeout: 2000 })
    },

    /** Выбрать все строки. */
    selectAll: async (): Promise<void> => {
      await this.selection.openHeaderMenu()
      fireEvent.click(await screen.findByTestId('select-all'))
    },

    /** Выбрать строки текущей страницы. */
    selectCurrentPage: async (): Promise<void> => {
      await this.selection.openHeaderMenu()
      fireEvent.click(await screen.findByTestId('select-current-page'))
    },

    /** Снять весь выбор. */
    deselectAll: async (): Promise<void> => {
      await this.selection.openHeaderMenu()
      fireEvent.click(await screen.findByTestId('deselect-all'))
    }
  }

  // --- header + sorting: дропдаун колонки и сортировка --------------------

  private columnDropdownTestId (postfix: string): string {
    return `${this.testId}-${DROPDOWN_PREFIX}-${postfix}`
  }

  readonly header = {
    /**
     * Открыть дропдаун колонки, вернуть popup (реиспользует helpers.openDropdown).
     * Если задан `attribute` (колонка с sortingAttributes) — дополнительно раскрыть его подменю.
     */
    openColumnDropdown: async (dataIndex: string, attribute?: string): Promise<HTMLElement> => {
      const popup = await openDropdown(dataIndex, this.testId)
      if (attribute) {
        const attributeItem = await screen.findByTestId(
          `${this.testId}-${DROPDOWN_PREFIX}-${dataIndex}-sorting-${attribute}`
        )
        fireEvent.click(attributeItem.querySelector('div') ?? attributeItem)
      }
      return popup
    },

    /** Стрелка-триггер дропдауна в заголовке колонки (`...-arrow-${dataIndex}`). */
    getDropdownArrow: (dataIndex: string): HTMLElement | null =>
      this.query(`[data-testid="${this.columnDropdownTestId(`arrow-${dataIndex}`)}"]`),

    /** Popup дропдауна колонки (в портале, `...-${dataIndex}-popup`). */
    getDropdown: (dataIndex: string): HTMLElement | null =>
      document.querySelector(`[data-testid="${this.columnDropdownTestId(`${dataIndex}-popup`)}"]`),

    /** Закрыт ли дропдаун (popup отсутствует или скрыт классом `ant-dropdown-hidden`). */
    isDropdownClosed: (dataIndex: string): boolean => {
      const popup = this.header.getDropdown(dataIndex)
      if (!popup) return true
      return popup.parentElement?.classList.contains('ant-dropdown-hidden') ?? true
    }
  }

  private sortItemTestId (dataIndex: string, direction: SortDirection, attribute?: string): string {
    const postfix = attribute ? `${attribute}-${direction}` : direction
    return `${this.testId}-${DROPDOWN_PREFIX}-${dataIndex}-sorting-${postfix}`
  }

  readonly sorting = {
    /** Отсортировать колонку (опц. по атрибуту): открыть дропдаун и кликнуть пункт сортировки. */
    sortBy: async (dataIndex: string, direction: SortDirection, attribute?: string): Promise<void> => {
      await this.header.openColumnDropdown(dataIndex, attribute)
      const item = await screen.findByTestId(this.sortItemTestId(dataIndex, direction, attribute))
      fireEvent.click(item)
    },

    /** Активна ли сортировка колонки в заданном направлении (класс выбранного пункта). */
    isActive: async (dataIndex: string, direction: SortDirection, attribute?: string): Promise<boolean> => {
      await this.header.openColumnDropdown(dataIndex, attribute)
      const item = await screen.findByTestId(this.sortItemTestId(dataIndex, direction, attribute))
      return item.classList.contains('ant-dropdown-menu-item-selected')
    }
  }

  // --- filters: сайдбар-фильтры -------------------------------------------

  readonly filters = {
    /** Открыть сайдбар фильтров (кнопка `table-filter-sidebar`). */
    openSidebar: (): void => openFiltersSidebar(this.container),

    /** Элемент сайдбара фильтров (`${testId}-filters-sidebar`, в портале). */
    getSidebar: (): HTMLElement | null =>
      document.querySelector(`[data-testid="${this.testId}-filters-sidebar"]`),

    /** Добавить пустой фильтр (кнопка «Add», обёрнуто в act). */
    add: async (): Promise<void> => {
      await act(async () => { addFilter() })
    },

    /** Применить фильтры (кнопка «Apply»). */
    apply: (): void => applyFilters(),

    /** Отменить фильтрацию (кнопка «Cancel»). */
    cancel: (): void => { fireEvent.click(screen.getByText('Cancel')) },

    /** Очистить все фильтры (кнопка «Clear all»). */
    clearAll: (): void => { fireEvent.click(screen.getByText('Clear all')) },

    /** Задать значение фильтра по индексу (`filter-item-value-${index}`). */
    setValue: (index: number, value: string): void => {
      fireEvent.change(screen.getByTestId(`filter-item-value-${index}`), { target: { value } })
    },

    /** Удалить фильтр по индексу (`table-filter-item-${index}-close-icon`). */
    remove: (index: number): void => {
      fireEvent.click(screen.getByTestId(`table-filter-item-${index}-close-icon`))
    },

    /** Все элементы фильтров в сайдбаре. */
    getItems: (): HTMLElement[] => screen.queryAllByRole('filter'),

    /** Элемент фильтра по индексу. */
    getItem: (index: number): HTMLElement | undefined => this.filters.getItems()[index],

    /** Селект свойства (колонки) фильтра по индексу (`filter-item-property-select-${index}`). */
    getPropertySelect: (index: number): HTMLElement | null =>
      this.filters.getItemPart(index, `filter-item-property-select-${index}`),

    /** Селект условия фильтра по индексу (`filter-item-condition-select-${index}`). */
    getConditionSelect: (index: number): HTMLElement | null =>
      this.filters.getItemPart(index, `filter-item-condition-select-${index}`),

    /** Селект значения фильтра по индексу (`filter-item-value-select-${index}`, для enum). */
    getValueSelect: (index: number): HTMLElement | null =>
      this.filters.getItemPart(index, `filter-item-value-select-${index}`),

    /** Внутренний элемент фильтра по testId (свойство/условие/значение). */
    getItemPart: (index: number, testId: string): HTMLElement | null =>
      this.filters.getItem(index)?.querySelector(`[data-testid="${testId}"]`) ?? null,

    /** Элемент выбранного значения селекта фильтра (`.ant-select-selection-item`). */
    getSelectedItem: (index: number, testId: string): HTMLElement | null =>
      this.filters.getItemPart(index, testId)?.querySelector('.ant-select-selection-item') ?? null,

    /** Текст выбранного значения селекта фильтра. */
    getSelectedText: (index: number, testId: string): string | null =>
      this.filters.getSelectedItem(index, testId)?.textContent ?? null,

    /** Количество фильтров в сайдбаре. */
    getCount: (): number => this.filters.getItems().length,

    /** Чип активного фильтра по объекту фильтра (`table-active-filter-...`). */
    getChip: (filter: FilterChipQuery): HTMLElement | null =>
      getFilterChip((filter.name ?? filter.dataIndex)!, filter.condition, filter.value!)
  }

  // --- columnFilters: фильтры в дропдауне колонки -------------------------

  readonly columnFilters = {
    /**
     * Опция фильтра в дропдауне колонки. Для enum — `...-${dataIndex}-enum-filter-${value}`,
     * для кастомных — `...-${value}-filters`. При `multiple` возвращает `.ant-checkbox`.
     */
    getOption: (dataIndex: string, value: string, multiple = false, isEnum = false): HTMLElement | null => {
      const testId = isEnum
        ? this.columnDropdownTestId(`${dataIndex}-enum-filter-${value}`)
        : this.columnDropdownTestId(`${value}-filters`)
      const element = document.querySelector<HTMLElement>(`[data-testid="${testId}"]`)
      if (!element) return null
      return multiple ? element.querySelector<HTMLElement>('.ant-checkbox') : element
    },

    /** Кликнуть по опции фильтра в дропдауне колонки. */
    selectFilter: (dataIndex: string, value: string, multiple = false, isEnum = false): void => {
      fireEvent.click(this.columnFilters.getOption(dataIndex, value, multiple, isEnum)!)
    },

    /** Выбрана ли опция (checkbox-checked для multiple, menu-item-selected — иначе). */
    isOptionSelected: (dataIndex: string, value: string, multiple = false, isEnum = false): boolean => {
      const element = this.columnFilters.getOption(dataIndex, value, multiple, isEnum)
      if (!element) return false
      return multiple
        ? element.classList.contains('ant-checkbox-checked')
        : element.classList.contains('ant-dropdown-menu-item-selected')
    }
  }

  // --- columnSettings: диалог настроек колонок ----------------------------

  readonly columnSettings = {
    /** Открыть диалог настроек колонок (кнопка `table-settings`). */
    open: async (): Promise<HTMLElement> => {
      const button = await waitFor(() => {
        const el = this.toolbar.getSettingsButton()
        if (!el) throw new Error('TableTestingClass: кнопка настроек колонок (table-settings) не найдена')
        return el
      })
      fireEvent.click(button)
      return button
    },

    /** Чекбокс видимости колонки в настройках (`selector-item-${dataIndex}`). */
    getCheckbox: (dataIndex: string): HTMLInputElement | null =>
      document.querySelector<HTMLInputElement>(`[data-testid="selector-item-${dataIndex}"] input[type="checkbox"]`),

    /** Видима ли колонка (отмечен ли её чекбокс). */
    isVisible: (dataIndex: string): boolean => Boolean(this.columnSettings.getCheckbox(dataIndex)?.checked),

    /** Задизейблен ли чекбокс колонки (напр. при `hideColumnAvailable: false` / `onlyForFiltering`). */
    isCheckboxDisabled: (dataIndex: string): boolean => Boolean(this.columnSettings.getCheckbox(dataIndex)?.disabled),

    /** Переключить видимость колонки. */
    toggleColumnVisibility: (dataIndex: string): void => {
      fireEvent.click(this.columnSettings.getCheckbox(dataIndex)!)
    },

    /** Чекбокс «Выбрать все» в диалоге настроек (`.select-all-item`). */
    getSelectAllCheckbox: (): HTMLInputElement | null =>
      document.querySelector<HTMLInputElement>('.select-all-item input[type="checkbox"]'),

    /** Задизейблен ли чекбокс «Выбрать все» (нет ни одной выбираемой колонки). */
    isSelectAllDisabled: (): boolean => Boolean(this.columnSettings.getSelectAllCheckbox()?.disabled),

    /** Кликнуть по чекбоксу «Выбрать все». */
    toggleSelectAll: (): void => {
      fireEvent.click(this.columnSettings.getSelectAllCheckbox()!)
    },

    /** Применить изменения настроек колонок (кнопка «Apply»). */
    apply: (): void => { fireEvent.click(screen.getByText('Apply')) },

    /** Отменить изменения настроек колонок (кнопка «Cancel»). */
    cancel: (): void => { fireEvent.click(screen.getByText('Cancel')) },

    /** Сбросить настройки колонок («Reset settings» → подтверждение «Reset»). */
    reset: (): void => {
      fireEvent.click(screen.getByText('Reset settings'))
      fireEvent.click(screen.getByText('Reset'))
    }
  }

  // --- columns: шапка / ширина / ресайз -----------------------------------

  readonly columns = {
    /** Заголовки колонок (`th`). */
    getHeaders: (): HTMLTableCellElement[] => this.queryAll<HTMLTableCellElement>('th'),

    /** Текст всех заголовков колонок (trim) — для проверки видимости колонок в самой таблице. */
    getHeaderTitles: (): string[] =>
      this.columns.getHeaders().map(th => th.textContent?.trim() ?? ''),

    /** Отрисован ли в таблице заголовок колонки, содержащий данный текст. */
    hasHeader: (title: string): boolean =>
      this.columns.getHeaderTitles().some(text => text.includes(title)),

    /** Отрисованная ширина колонки из `colgroup col`. */
    getWidthFromColgroup: (index = 0): number => {
      const col = this.queryAll<HTMLTableColElement>('colgroup col')[index]
      return Number.parseInt(col?.style.width || col?.getAttribute('width') || '0', 10)
    },

    /** Ресайз колонки: перетащить хендл `.resizing-handle-container` на `deltaX` пикселей. */
    resize: (index: number, deltaX: number): void => {
      const handle = this.queryAll<HTMLElement>('.resizing-handle-container')[index]
      fireEvent.mouseDown(handle, { clientX: 0 })
      fireEvent.mouseMove(document, { clientX: deltaX })
      fireEvent.mouseUp(document)
    }
  }

  // --- pagination ----------------------------------------------------------

  readonly pagination = {
    /** Корневой элемент пагинации (`table-pagination`). */
    getRoot: (): HTMLElement | null => this.scoped.queryByTestId('table-pagination'),

    /** Айтем пагинации по номеру страницы (`.ant-pagination-item-${page}` внутри пагинации). */
    getItem: (page: number): HTMLElement | null => {
      const root = this.pagination.getRoot() ?? this.container
      return root.querySelector<HTMLElement>(`.ant-pagination-item-${page}`)
    },

    /** Число строк по счётчику `[data-testid="total"]` (парсинг «Total N»). */
    getTotal: (): number => {
      const text = screen.queryByTestId('total')?.textContent ?? ''
      const match = text.match(/Total (\d+)/)
      return match ? Number.parseInt(match[1], 10) : -1
    },

    /** Номер активной страницы (`.ant-pagination-item-active`). */
    getActivePage: (): number => {
      const active = this.query('.ant-pagination-item-active')
      return active ? Number.parseInt(active.textContent ?? '0', 10) : -1
    },

    /** Активна ли страница с данным номером (класс `ant-pagination-item-active`). */
    isActivePage: (page: number): boolean =>
      Boolean(this.pagination.getItem(page)?.classList.contains('ant-pagination-item-active')),

    /** Перейти на страницу по номеру. */
    goToPage: (page: number): void => {
      fireEvent.click(this.pagination.getItem(page) ?? screen.getByTitle(String(page)))
    },

    /** Следующая страница. */
    next: (): void => {
      fireEvent.click(screen.getByTitle('Next Page'))
    },

    /** Предыдущая страница. */
    prev: (): void => {
      fireEvent.click(screen.getByTitle('Previous Page'))
    },

    /** Существует ли страница с данным номером. */
    hasPage: (page: number): boolean => Boolean(this.pagination.getItem(page)),

    /**
     * Проверить, что таблица показывает `total` строк: последняя страница есть,
     * следующей за ней нет, и счётчик «Total N» совпадает.
     */
    expectTotal: (total: number, pageSize: number): void => {
      const lastPage = Math.ceil(total / pageSize)
      expect(this.pagination.getItem(lastPage)).toBeInTheDocument()
      expect(this.pagination.getItem(lastPage + 1)).not.toBeInTheDocument()
      expect(this.pagination.getTotal()).toBe(total)
    }
  }

  // --- toolbar -------------------------------------------------------------

  readonly toolbar = {
    /** Корневой элемент тулбара (`table-toolbar`). */
    getRoot: (): HTMLElement | null => this.toolbar.getButton('table-toolbar'),

    /**
     * Элемент тулбара по data-testid (явный атрибут, не зависит от testing-library configure).
     */
    getButton: (testId: string): HTMLElement | null =>
      this.query(`[data-testid="${testId}"]`),

    /** Кнопка «Обновить» (`table-refresh-button`). */
    getRefreshButton: (): HTMLElement | null => this.toolbar.getButton('table-refresh-button'),

    /** Кнопка настроек колонок (`table-settings`). */
    getSettingsButton: (): HTMLElement | null => this.toolbar.getButton('table-settings'),

    /** Кнопка сайдбара фильтров (`table-filter-sidebar`). */
    getFilterSidebarButton: (): HTMLElement | null => this.toolbar.getButton('table-filter-sidebar'),

    /** Кнопка импорта/экспорта (`table-import-export`). */
    getImportExportButton: (): HTMLElement | null => this.toolbar.getButton('table-import-export'),

    /** Поиск (`table-search`). */
    getSearch: (): HTMLElement | null => this.toolbar.getButton('table-search'),

    /** Кастомный элемент тулбара (`item-${id}`). */
    getCustomItem: (id: string | number): HTMLElement | null => this.toolbar.getButton(`item-${id}`)
  }

  // --- search: строка поиска в тулбаре -------------------------------------

  readonly search = {
    /** Инпут поиска (`table-search` — testId стоит прямо на input). */
    getInput: (): HTMLInputElement | null =>
      this.query<HTMLInputElement>('[data-testid="table-search"]') ??
      this.query<HTMLInputElement>('[data-testid="table-search"] input'),

    /** Ввести значение в поиск (`fireEvent.change`). Требует `toolbar.showSearch`. */
    type: (value: string): void => {
      const input = this.search.getInput()
      if (!input) {
        throw new Error('TableTestingClass: инпут поиска (table-search) не найден. Включите toolbar.showSearch')
      }
      fireEvent.change(input, { target: { value } })
    },

    /** Нажать Enter в поиске (клиентский поиск применяется по Enter, серверный — на ввод). */
    submit: (): void => {
      const input = this.search.getInput()
      if (!input) {
        throw new Error('TableTestingClass: инпут поиска (table-search) не найден. Включите toolbar.showSearch')
      }
      fireEvent.keyDown(input, { key: 'Enter', code: 'Enter', keyCode: 13, charCode: 13 })
    },

    /** Очистить поиск (пустое значение). */
    clear: (): void => this.search.type('')
  }

  // --- contextMenu ---------------------------------------------------------

  readonly contextMenu = {
    /** Вызвать контекст-меню по ячейке строки с индексом `rowIndex` (right-click). */
    openOnCell: (rowIndex: number, colIndex = 0): void => {
      fireEvent.contextMenu(this.rows.getCell(rowIndex, colIndex)!)
    },

    /** Вызвать контекст-меню по ячейке строки с ключом `key` (right-click). */
    openOnRow: (key: string | number, colIndex = 0): void => {
      fireEvent.contextMenu(this.rows.getByKey(key)!.querySelectorAll('td')[colIndex])
    },

    /** Дождаться появления контекст-меню (`table-context-menu`). */
    getMenu: (): Promise<HTMLElement> => screen.findByTestId('table-context-menu'),

    /** Текущий элемент контекст-меню (sync, `table-context-menu`). */
    getMenuElement: (): HTMLElement | null =>
      document.querySelector('[data-testid="table-context-menu"]'),

    /** Действие контекст-меню по его data-testid внутри меню. */
    getAction: (testId: string): HTMLElement | null =>
      this.contextMenu.getMenuElement()?.querySelector(`[data-testid="${testId}"]`) ?? null,

    /** Число выбранных строк из текста меню («Selected: N») или `null`, если его нет. */
    getSelectedCount: (): number | null => {
      const match = this.contextMenu.getMenuElement()?.textContent?.match(/Selected:\s*(\d+)/)
      return match ? Number.parseInt(match[1], 10) : null
    },

    /** Клик по действию контекст-меню по его data-testid. */
    clickAction: async (testId: string): Promise<void> => {
      const menu = await this.contextMenu.getMenu()
      fireEvent.click(within(menu).getByTestId(testId))
    }
  }
}
