import { test, expect } from '@playwright/test'

/**
 * E2E: Предпросмотр формы и экспорт кода.
 * Непокрытые ранее сценарии из TESTING-GAPS.md
 */
test.describe('Предпросмотр формы', () => {
  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => {
      ;(window as unknown as { __E2E_DEMO__?: boolean }).__E2E_DEMO__ = true
    })
    await page.goto('/')
    await expect(page.getByTestId('form-canvas')).toBeVisible()
  })

  test('открытие предпросмотра показывает FormPreview и кнопку «Назад к редактору»', async ({ page }) => {
    await page.getByRole('button', { name: 'Предпросмотр' }).click()
    await expect(page.getByText(/Предпросмотр:/i)).toBeVisible()
    await expect(page.getByRole('button', { name: 'Назад к редактору' })).toBeVisible()
  })

  test('кнопка «Назад к редактору» возвращает в редактор', async ({ page }) => {
    await page.getByRole('button', { name: 'Предпросмотр' }).click()
    await expect(page.getByText(/Предпросмотр:/i)).toBeVisible()
    await page.getByRole('button', { name: 'Назад к редактору' }).click()
    await expect(page.getByTestId('form-canvas')).toBeVisible()
    await expect(page.getByText(/Форма:/i)).toBeVisible()
  })

  test('в предпросмотре отображаются контролы формы', async ({ page }) => {
    await page.getByTestId('palette-component-Text').dblclick()
    await page.getByRole('button', { name: 'Предпросмотр' }).click()
    await expect(page.getByText(/\[text-/)).toBeVisible()
  })
})

test.describe('Экспорт кода', () => {
  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => {
      ;(window as unknown as { __E2E_DEMO__?: boolean }).__E2E_DEMO__ = true
    })
    await page.goto('/')
    await expect(page.getByTestId('form-canvas')).toBeVisible()
  })

  test('открытие диалога экспорта показывает «Экспорт DSL»', async ({ page }) => {
    await page.getByRole('button', { name: 'Экспорт кода' }).click()
    await expect(page.getByText('Экспорт DSL')).toBeVisible()
    await expect(page.getByRole('button', { name: 'JS модуль (.js)' })).toBeVisible()
    await expect(page.getByRole('button', { name: 'JSON' })).toBeVisible()
  })

  test('переключение между «JS модуль» и «JSON» меняет содержимое', async ({ page }) => {
    await page.getByTestId('palette-button').dblclick()
    await page.getByRole('button', { name: 'Экспорт кода' }).click()

    const jsContent = page.locator('pre').first()
    await expect(jsContent).toContainText('export default')
    await expect(jsContent).toContainText('elements')

    await page.getByRole('button', { name: 'JSON' }).click()
    await expect(page.locator('pre').first()).toContainText('"elements"')
  })

  test('кнопка «Копировать» копирует код в буфер обмена', async ({ page }) => {
    await page.getByRole('button', { name: 'Экспорт кода' }).click()
    await page.getByRole('button', { name: 'Копировать' }).click()
    await expect(page.getByText('Скопировано!')).toBeVisible()
  })

  test('экспортированный JS содержит корректную структуру', async ({ page }) => {
    await page.getByTestId('palette-component-Text').dblclick()
    await page.getByRole('button', { name: 'Экспорт кода' }).click()
    const pre = page.locator('pre').first()
    await expect(pre).toContainText('export default')
    await expect(pre).toContainText('name')
    await expect(pre).toContainText('elements')
  })
})
