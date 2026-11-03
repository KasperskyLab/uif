import { MockRow } from '../../../__mocks__/filtersMockData'
import { TableStore } from '../../../context/tableStore'

import { DemoBackend, ids } from './fixtures'

export const tableId = 'presets-how-it-works'
const test = (id: string) => `[data-testid="${id}"]`
const sidebar = `.${tableId}-table-settings-sidebar`
export const selectors = {
  root: '#presets-how-it-works-example',
  presets: `#presets-how-it-works-example ${test('table-presets')}`,
  menu: test(`${tableId}-presets-menu`),
  view: test(`${tableId}-select-table-view`),
  settings: `#presets-how-it-works-example ${test('table-settings')}`,
  columnsTab: `${sidebar} ${test('table-settings-columns-tab')}`,
  trainee: `${sidebar} ${test('selector-item-isTrainee')}`,
  apply: `${sidebar} ${test('table-settings-save')}`,
  cancelSettings: `${sidebar} ${test('table-settings-cancel')}`,
  reset: `${sidebar} ${test('table-settings-modal-reset')}`,
  resetConfirm: test('table-settings-reset'),
  create: test(`${tableId}-create-table-preset`),
  update: test(`${tableId}-update-table-preset`),
  name: `${test('table-preset-name')} input, input${test('table-preset-name')}`,
  confirm: '.ant-modal-content ' + test('modal-confirm'),
  cancelModal: '.ant-modal-content ' + test('modal-cancel'),
  rename: test('rename-table-preset'),
  delete: test('delete-table-preset'),
  custom: test('tour-inspect-preset'),
  budgetCustom: test('tour-budget-preset-action'),
  teamAction: test('tour-team-action'),
  budgetAction: test('tour-budget-action'),
  header: test(`${tableId}-table-header-dropdown-fullname-title`),
  headerMenu: test(`${tableId}-table-header-dropdown-fullname-popup`),
  sort: test(`${tableId}-table-header-dropdown-fullname-sorting-asc`),
  resize: `#presets-how-it-works-example th:has(${test(`${tableId}-table-header-dropdown-fullname-title`)}) .resizing-handle-container`,
  tourNext: test('presets-how-it-works-onboarding-tour') + ' [data-action="primary"]'
}

export const presetRow = (id: string) => `${selectors.menu} [data-menu-id$="-${id}"]`
export const actions = (id: string) => `${presetRow(id)} ${test('preset-actions')}`

export const findVisible = (selector: string): HTMLElement | undefined => (
  Array.from(document.querySelectorAll<HTMLElement>(selector)).find(element => {
    if (!element.getClientRects().length) return false
    if (element.closest('.ant-dropdown-hidden, .ant-select-dropdown-hidden, .ant-drawer:not(.ant-drawer-open)')) return false
    if (element.closest('[class*="slide-up-leave"], [class*="zoom-leave"], [class*="fade-leave"]')) return false
    const surface = element.closest('.ant-modal, .ant-drawer-content-wrapper, .ant-dropdown')
    const moving = surface?.getAnimations().some(animation => animation.pending || animation.playState === 'running')
    if (moving) return false
    const style = getComputedStyle(element)
    return style.display !== 'none' && style.visibility !== 'hidden'
  })
)

export const createDriver = (
  getStore: () => TableStore<MockRow> | null,
  getBackend: () => DemoBackend
) => {
  let signal = new AbortController().signal
  let replaying = false
  const frame = () => new Promise<void>(resolve => requestAnimationFrame(() => resolve()))
  const wait = async (ready: () => boolean, description: string) => {
    const currentSignal = signal
    const deadline = performance.now() + 4000
    while (!currentSignal.aborted) {
      if (ready()) return
      if (performance.now() > deadline) throw new Error(`Не удалось выполнить шаг: ${description}`)
      await frame()
    }
    throw new DOMException('Tour stopped', 'AbortError')
  }
  const waitForTarget = async (selector: string) => {
    let previous: HTMLElement | undefined
    let bounds = ''
    let stableFrames = 0
    await wait(() => {
      const element = findVisible(selector)
      if (!element) { previous = undefined; stableFrames = 0; return false }
      const rect = element.getBoundingClientRect()
      const nextBounds = [rect.x, rect.y, rect.width, rect.height].map(value => Math.round(value * 10)).join(':')
      stableFrames = previous === element && bounds === nextBounds ? stableFrames + 1 : 0
      previous = element
      bounds = nextBounds
      return stableFrames >= 3
    }, `появление и завершение анимации ${selector}`)
    return findVisible(selector)!
  }
  const pause = async (duration = 1200) => {
    if (replaying) return
    const until = performance.now() + duration
    await wait(() => performance.now() >= until, 'пауза демонстрации')
  }
  const state = () => {
    const store = getStore()
    if (!store) throw new Error('Таблица ещё не готова')
    return store.getSnapshot()
  }
  const click = async (selector: string) => {
    const element = await waitForTarget(selector)
    if ((element as HTMLButtonElement).disabled) throw new Error(`Действие недоступно: ${selector}`)
    element.click()
    await frame()
  }
  const closeMenus = async () => {
    // Controlled dropdowns are closed through their own triggers. An outside
    // event alone can be consumed by a nested menu or an active tour tooltip.
    if (findVisible(selectors.menu)) findVisible(selectors.presets)?.click()
    if (findVisible(selectors.headerMenu)) findVisible(selectors.header)?.click()
    document.body.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }))
    await frame()
    await wait(() => !findVisible(selectors.menu) && !findVisible(selectors.headerMenu), 'закрытие меню')
  }
  const openMenu = async () => {
    if (findVisible(selectors.cancelSettings)) await click(selectors.cancelSettings)
    if (!findVisible(selectors.menu)) await click(selectors.presets)
    await wait(() => !!findVisible(selectors.menu), 'открытие меню пресетов')
  }
  const openSettings = async () => {
    await closeMenus()
    if (!findVisible(selectors.cancelSettings)) await click(selectors.settings)
    await click(selectors.columnsTab)
    await wait(() => !!findVisible(selectors.trainee), 'настройки колонок')
  }
  const setTrainee = async (show: boolean) => {
    await openSettings()
    const input = findVisible(selectors.trainee)!.querySelector<HTMLInputElement>('input')!
    if (input.checked !== show) { input.click(); await frame() }
  }
  const apply = async () => {
    if (findVisible(selectors.apply)) await click(selectors.apply)
    await wait(() => !state().showColumnsSelector, 'применение колонок')
  }
  const selectPreset = async (id: string) => {
    if (state().presets.currentPreset?.id === id && !state().presets.isPresetDirty) {
      await closeMenus()
      return
    }
    await openMenu()
    if (state().presets.currentPreset?.id !== id) await click(presetRow(id))
    await wait(() => state().presets.currentPreset?.id === id && !state().presets.isPresetDirty, 'применение пресета')
    await closeMenus()
  }
  const openActions = async (id = ids.created) => {
    if (findVisible(actions(id)) && findVisible(selectors.rename)) return
    await closeMenus()
    await openMenu()
    if (!findVisible(selectors.rename)) await click(actions(id))
    await wait(() => !!findVisible(selectors.rename), 'действия пресета')
  }
  const inputName = async (name: string) => {
    const input = await waitForTarget(selectors.name) as HTMLInputElement
    // Use the native setter so React receives a real input change.
    Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')!.set!.call(input, name)
    input.dispatchEvent(new Event('input', { bubbles: true }))
    await frame()
  }
  const saveForm = async (fallbackName: string) => {
    if (!findVisible(selectors.confirm)) return
    if (!state().presets.isCreatePresetOpen && !state().presets.presetToRename) {
      await wait(() => !findVisible(selectors.confirm), 'закрытие формы')
      return
    }
    if (findVisible(selectors.confirm)?.classList.contains('ant-btn-loading')) {
      await wait(() => !findVisible(selectors.confirm), 'завершение сохранения')
      return
    }
    const input = findVisible(selectors.name) as HTMLInputElement | undefined
    if (input && !input.value.trim()) await inputName(fallbackName)
    await click(selectors.confirm)
    await wait(() => !findVisible(selectors.confirm), 'сохранение формы')
  }
  const resize = async () => {
    await closeMenus()
    const oldWidth = state().presets.columnsState?.fullname?.width
    const handle = findVisible(selectors.resize)
    if (!handle) throw new Error('Не найден маркер изменения ширины')
    const x = handle.getBoundingClientRect().left
    handle.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, clientX: x, button: 0 }))
    await frame()
    document.dispatchEvent(new MouseEvent('mousemove', { bubbles: true, clientX: x + 120, buttons: 1 }))
    await frame()
    document.dispatchEvent(new MouseEvent('mouseup', { bubbles: true, clientX: x + 120 }))
    await wait(() => state().presets.columnsState?.fullname?.width !== oldWidth, 'изменение ширины')
    await wait(() => state().presets.columnsState?.fullname?.isUserDefinedWidth === true, 'ручная ширина')
    if (state().presets.isPresetDirty) throw new Error('Изменение только ширины включило индикатор')
  }
  const tableSnapshot = () => JSON.stringify({
    presetId: state().presets.currentPresetId,
    columns: state().presets.columnsState,
    sorting: state().sorting,
    groupBy: state().groupBy,
    filters: state().filterApi?.getRootGroupFilters()
  })
  const switchView = async (id: string) => {
    await openMenu()
    if (state().presets.currentView?.id !== id) {
      const selector = `${selectors.view} .ant-select-selector`
      const element = findVisible(selector)!
      if (!findVisible('.ant-select-dropdown:not(.ant-select-dropdown-hidden)')) {
        element.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }))
      }
      await click(`.ant-select-dropdown [data-value="${id}"]`)
    }
    await wait(() => state().presets.currentView?.id === id && !state().presets.isPresetDirty, 'смена view')
  }

  return {
    state,
    wait,
    waitForTarget,
    pause,
    click,
    closeMenus,
    openMenu,
    openSettings,
    setTrainee,
    apply,
    selectPreset,
    openActions,
    inputName,
    saveForm,
    resize,
    switchView,
    tableSnapshot,
    backend: getBackend,
    begin: (nextSignal: AbortSignal, isReplay = false) => { signal = nextSignal; replaying = isReplay },
    frame
  }
}
export type TourDriver = ReturnType<typeof createDriver>
