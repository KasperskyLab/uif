import { test, expect } from '@playwright/test'

/**
 * E2E: Отмена/повтор и клавиатурные сочетания.
 * Непокрытые ранее сценарии из TESTING-GAPS.md
 */
test.describe('Отмена / Повтор (Undo / Redo)', () => {
  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => {
      ;(window as unknown as { __E2E_DEMO__?: boolean }).__E2E_DEMO__ = true
    })
    await page.goto('/')
    await expect(page.getByTestId('form-canvas')).toBeVisible()
  })

  test('после добавления контрола Ctrl+Z отменяет действие', async ({ page }) => {
    const canvas = page.getByTestId('form-canvas')
    await page.getByTestId('palette-text').dblclick()
    await expect(canvas.getByText('Текст')).toBeVisible()

    await page.keyboard.press('Control+z')
    await expect(canvas.getByText('Текст')).not.toBeVisible()
  })

  test('после Undo, Ctrl+Shift+Z восстанавливает действие', async ({ page }) => {
    const canvas = page.getByTestId('form-canvas')
    await page.getByTestId('palette-button').dblclick()
    await expect(canvas.getByRole('button', { name: 'Кнопка' })).toBeVisible()

    await page.keyboard.press('Control+z')
    await expect(canvas.getByRole('button', { name: 'Кнопка' })).not.toBeVisible()

    await page.keyboard.press('Control+Shift+z')
    await expect(canvas.getByRole('button', { name: 'Кнопка' })).toBeVisible()
  })

  test('кнопка «↩» отменяет действие', async ({ page }) => {
    const canvas = page.getByTestId('form-canvas')
    await page.getByTestId('palette-text').dblclick()
    await expect(canvas.getByText('Текст')).toBeVisible()

    const undoBtn = page.getByRole('button').filter({ has: page.locator('text=↩') })
    await undoBtn.click()
    await expect(canvas.getByText('Текст')).not.toBeVisible()
  })

  test('кнопка «↪» повторяет отменённое действие', async ({ page }) => {
    const canvas = page.getByTestId('form-canvas')
    await page.getByTestId('palette-text').dblclick()
    await expect(canvas.getByText('Текст')).toBeVisible()

    const undoBtn = page.getByRole('button').filter({ has: page.locator('text=↩') })
    await undoBtn.click()
    await expect(canvas.getByText('Текст')).not.toBeVisible()

    const redoBtn = page.getByRole('button').filter({ has: page.locator('text=↪') })
    await redoBtn.click()
    await expect(canvas.getByText('Текст')).toBeVisible()
  })
})

test.describe('Клавиатурные сочетания', () => {
  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => {
      ;(window as unknown as { __E2E_DEMO__?: boolean }).__E2E_DEMO__ = true
    })
    await page.goto('/')
    await expect(page.getByTestId('form-canvas')).toBeVisible()
  })

  test('Delete удаляет выбранный контрол', async ({ page }) => {
    const canvas = page.getByTestId('form-canvas')
    await page.getByTestId('palette-text').dblclick()
    await expect(canvas.getByText('Текст')).toBeVisible()

    await canvas.locator('.control-wrap').first().click()
    await page.keyboard.press('Delete')
    await expect(canvas.locator('.control-wrap')).toHaveCount(0)
  })

  test('Ctrl+C / Ctrl+V копирует и вставляет контрол', async ({ page }) => {
    const canvas = page.getByTestId('form-canvas')
    await page.getByTestId('palette-button').dblclick()
    await expect(canvas.locator('.control-wrap')).toHaveCount(1)

    await canvas.locator('.control-wrap').first().click()
    await page.waitForTimeout(100)
    await page.keyboard.press('Control+c')
    await page.waitForTimeout(100)
    await page.keyboard.press('Control+v')

    await expect(canvas.locator('.control-wrap')).toHaveCount(2)
  })

  test('Ctrl+D дублирует контрол', async ({ page }) => {
    const canvas = page.getByTestId('form-canvas')
    await page.getByTestId('palette-button').dblclick()
    await expect(canvas.locator('.control-wrap')).toHaveCount(1)

    await canvas.locator('.control-wrap').first().click()
    await page.keyboard.press('Control+d')
    await expect(canvas.locator('.control-wrap')).toHaveCount(2)
  })

  test('Escape снимает выделение — можно повторно кликнуть на контрол', async ({ page }) => {
    const canvas = page.getByTestId('form-canvas')
    await page.getByTestId('palette-text').dblclick()
    const control = canvas.locator('.control-wrap').first()
    await control.click()

    await page.keyboard.press('Escape')
    await page.waitForTimeout(100)

    await control.click()
    await expect(canvas.locator('.control-wrap').first()).toBeVisible()
  })
})
