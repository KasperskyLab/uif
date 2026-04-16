import { test, expect } from '@playwright/test'

/**
 * E2E: Редактирование свойств, Шаблоны, Ряд (row).
 * Непокрытые ранее сценарии из TESTING-GAPS.md
 */
test.describe('Редактирование свойств', () => {
  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => {
      ;(window as unknown as { __E2E_DEMO__?: boolean }).__E2E_DEMO__ = true
    })
    await page.goto('/')
    await expect(page.getByTestId('form-canvas')).toBeVisible()
  })

  test('клик по контролу показывает панель свойств', async ({ page }) => {
    const canvas = page.getByTestId('form-canvas')
    await page.getByTestId('palette-input').dblclick()
    await canvas.locator('.control-wrap').first().click()
    await expect(page.getByText('Имя поля (fieldName)')).toBeVisible()
  })

  test('изменение fieldName через панель обновляет контрол', async ({ page }) => {
    const canvas = page.getByTestId('form-canvas')
    await page.getByTestId('palette-input').dblclick()
    await canvas.locator('.control-wrap').first().click()

    const fieldNameInput = page.getByPlaceholder('например: email')
    await fieldNameInput.fill('email')
    await expect(canvas.getByText('email')).toBeVisible()
  })

  test('добавление правила валидации required показывает звёздочку', async ({ page }) => {
    const canvas = page.getByTestId('form-canvas')
    await page.getByTestId('palette-input').dblclick()
    await canvas.locator('.control-wrap').first().click()

    await page.getByRole('button', { name: 'Добавить правило' }).click()
    await expect(page.getByText('Привязка данных')).toBeVisible()
    await expect(page.locator('text=Привязка данных').locator('..')).toContainText('*')
  })
})

test.describe('Шаблоны', () => {
  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => {
      ;(window as unknown as { __E2E_DEMO__?: boolean }).__E2E_DEMO__ = true
    })
    await page.goto('/')
    await expect(page.getByTestId('form-canvas')).toBeVisible()
  })

  test('выбор шаблона «Форма входа» добавляет элементы на холст', async ({ page }) => {
    const canvas = page.getByTestId('form-canvas')
    await page.getByRole('button', { name: 'Форма входа' }).click()
    await expect(canvas.getByText('Вход в систему')).toBeVisible()
    await expect(canvas.getByPlaceholder('Email')).toBeVisible()
  })

  test('выбор шаблона «Форма регистрации» загружает структуру', async ({ page }) => {
    const canvas = page.getByTestId('form-canvas')
    await page.getByRole('button', { name: 'Форма регистрации' }).click()
    await expect(canvas.getByText('Регистрация')).toBeVisible()
  })
})

test.describe('Ряд (Row) контейнер', () => {
  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => {
      ;(window as unknown as { __E2E_DEMO__?: boolean }).__E2E_DEMO__ = true
    })
    await page.goto('/')
    await expect(page.getByTestId('form-canvas')).toBeVisible()
  })

  test('двойной клик по «Ряд» добавляет ряд на холст', async ({ page }) => {
    const canvas = page.getByTestId('form-canvas')
    const beforeCount = await canvas.locator('.control-wrap').count()
    const paletteRow = page.locator('.controls-palette-item').filter({ hasText: /^Ряд$/ })
    await paletteRow.scrollIntoViewIfNeeded()
    await paletteRow.dblclick()
    await expect(canvas.locator('.control-wrap')).toHaveCount(beforeCount + 1)
  })

  test('редактирование свойств row (gap, align) через панель', async ({ page }) => {
    const canvas = page.getByTestId('form-canvas')
    const paletteRow = page.locator('.controls-palette-item').filter({ hasText: /^Ряд$/ })
    await paletteRow.scrollIntoViewIfNeeded()
    await paletteRow.dblclick()
    await canvas.locator('.control-wrap').first().click()

    await expect(page.getByText('Отступ (gap, px)')).toBeVisible()
    await expect(page.getByText('Выравнивание')).toBeVisible()
    const gapInput = page.locator('input[type="number"]').first()
    await gapInput.fill('12')
    await expect(gapInput).toHaveValue('12')
  })
})
