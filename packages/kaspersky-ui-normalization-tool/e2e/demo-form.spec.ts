import { test, expect } from '@playwright/test'

test.describe('Демо-форма (e2e режим)', () => {
  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => {
      ;(window as unknown as { __E2E_DEMO__?: boolean }).__E2E_DEMO__ = true
    })
    await page.goto('/')
  })

  test('открывается редактор с пустой формой', async ({ page }) => {
    await expect(page.getByText(/Форма:.*E2E Demo/i)).toBeVisible()
    await expect(page.getByRole('heading', { name: /Разметка/i })).toBeVisible()
  })

  test('двойной клик по «Текст» в палитре добавляет контрол на холст', async ({ page }) => {
    const paletteText = page.getByTestId('palette-text')
    await expect(paletteText).toBeVisible()
    await paletteText.dblclick()
    const canvas = page.getByTestId('form-canvas')
    await expect(canvas.getByText(/\[text-/)).toBeVisible()
  })

  test('двойной клик по «Кнопка» добавляет кнопку на холст', async ({ page }) => {
    await page.getByTestId('palette-button').dblclick()
    const canvas = page.getByTestId('form-canvas')
    await expect(canvas.getByRole('button', { name: 'Кнопка' })).toBeVisible()
  })
})
