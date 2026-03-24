import { test, expect } from '@playwright/test'

/**
 * Сценарии: добавление каждого компонента из панели слева на форму (двойной клик).
 * Состав палитры — по getPaletteGroups() / HEXA_PALETTE_GROUPS в коде.
 */
const LAYOUT_ITEMS = [
  { testId: 'palette-grid', name: 'Сетка' },
  { testId: 'palette-table', name: 'Таблица' },
  { testId: 'palette-tabs', name: 'Табы' },
]

/** Соответствие componentId → тип в DSL (data-testid палитры: palette-<type>). */
const COMPONENT_ID_TO_DSL_TYPE: Record<string, string> = {
  Text: 'text', P: 'p', Heading: 'heading', ExpandableText: 'expandableText', Link: 'link', FormLabel: 'formLabel', Label: 'label', HelpMessage: 'helpMessage', Markdown: 'markdown', CodeViewer: 'codeViewer',
  Button: 'button', ActionButton: 'actionButton', SegmentedButton: 'segmentedButton', SegmentedControl: 'segmentedControl',
  Textbox: 'input', Search: 'search', Checkbox: 'checkbox', Radio: 'radio', Select: 'select', Toggle: 'toggle', Calendar: 'calendar', TimeInput: 'timeInput',
  Badge: 'badge', Tag: 'tag', Chip: 'chip', KeyValue: 'keyValue', InformationCard: 'informationCard', StatusCard: 'statusCard', Severity: 'severity', Status: 'status', Indicator: 'indicator',
  Alert: 'alert', SectionMessage: 'sectionMessage', Loader: 'loader', ProgressBar: 'progressBar', Tooltip: 'tooltip', Popover: 'popover',
  Breadcrumbs: 'breadcrumbs', Pagination: 'pagination', PageHeader: 'pageHeader', Accordion: 'accordion', Divider: 'divider', Space: 'space',
  Card: 'card', Field: 'field', FieldSet: 'fieldSet', Dropdown: 'dropdown', Scrollbar: 'scrollbar',
}

const HEXA_IDS = Object.keys(COMPONENT_ID_TO_DSL_TYPE)

const OTHER_ITEMS = [
  { testId: 'palette-toolbar', name: 'Тулбар' },
  { testId: 'palette-icon', name: 'Иконка' },
]

const ALL_ITEMS: { testId: string; name: string }[] = [
  ...LAYOUT_ITEMS,
  ...HEXA_IDS.map((id) => ({ testId: `palette-${COMPONENT_ID_TO_DSL_TYPE[id]}`, name: id })),
  ...OTHER_ITEMS,
]

test.describe('Добавление каждого компонента палитры на форму', () => {
  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => {
      ;(window as unknown as { __E2E_DEMO__?: boolean }).__E2E_DEMO__ = true
    })
    await page.goto('/')
    await expect(page.getByTestId('form-canvas')).toBeVisible()
  })

  for (const item of ALL_ITEMS) {
    test(`двойной клик по «${item.name}» добавляет контрол на холст`, async ({ page }) => {
      const paletteItem = page.getByTestId(item.testId)
      await expect(paletteItem).toBeVisible({ timeout: 5000 })
      const canvas = page.getByTestId('form-canvas')
      const controlWrapsBefore = await canvas.locator('.control-wrap').count()
      await paletteItem.dblclick()
      await expect(canvas.locator('.control-wrap')).toHaveCount(controlWrapsBefore + 1, { timeout: 5000 })
    })
  }
})
