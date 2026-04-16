import { test, expect } from '@playwright/test'

/**
 * Комплексный сценарий для исследования UI редактора форм UISB.
 * Создаёт скриншоты на каждом важном шаге и проверяет работоспособность функций.
 */

test.describe('Исследование UI редактора UISB', () => {
  test('полный тур по функциям редактора с скриншотами', async ({ page }) => {
    // Шаг 1: Открываем приложение БЕЗ demo-режима (для скриншота начального состояния)
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    await page.screenshot({ path: 'e2e-screenshots/01-initial-state.png', fullPage: true })
    console.log('✓ Скриншот 1: Начальное состояние приложения')

    // Проверяем, что видим запрос на выбор каталога
    const hasDirectoryPicker = await page.getByText(/выберите каталог/i).isVisible().catch(() => false)
    console.log(`Видно ли приглашение выбрать каталог: ${hasDirectoryPicker}`)

    // Шаг 2: Включаем demo-режим через addInitScript и перезагружаем
    // ВАЖНО: __E2E_DEMO__ должен быть установлен ПЕРЕД загрузкой приложения
    await page.addInitScript(() => {
      ;(window as any).__E2E_DEMO__ = true
    })
    await page.reload()
    await page.waitForLoadState('networkidle')
    await page.screenshot({ path: 'e2e-screenshots/02-demo-mode-enabled.png', fullPage: true })
    console.log('✓ Скриншот 2: Demo-режим включён, страница перезагружена')

    // Проверяем, что редактор открылся
    await expect(page.getByTestId('form-canvas')).toBeVisible({ timeout: 5000 })
    await expect(page.getByText(/Форма:/i)).toBeVisible()
    console.log('✓ Редактор форм открыт')

    // Шаг 3: Исследуем панель палитры слева
    const palettePanel = page.locator('[class*="palette"]').first()
    await expect(palettePanel).toBeVisible()
    
    // Ищем заголовок "Разметка" или любой другой заголовок группы
    const hasLayoutHeading = await page.getByRole('heading', { name: /Разметка/i }).isVisible().catch(() => false)
    console.log(`Найден заголовок "Разметка": ${hasLayoutHeading}`)
    
    // Прокручиваем палитру, чтобы показать все группы
    await page.screenshot({ path: 'e2e-screenshots/03-palette-top.png', fullPage: true })
    console.log('✓ Скриншот 3: Панель палитры (верх)')

    // Подсчитываем количество элементов палитры
    const paletteItems = await page.locator('[data-testid^="palette-"]').count()
    console.log(`Всего элементов в палитре: ${paletteItems}`)

    // Проверяем наличие основных типов контролов
    const expectedControls = [
      { testId: 'palette-grid', name: 'Сетка' },
      { testId: 'palette-table', name: 'Таблица' },
      { testId: 'palette-tabs', name: 'Табы' },
      { testId: 'palette-button', name: 'Кнопка' },
      { testId: 'palette-text', name: 'Текст' },
      { testId: 'palette-input', name: 'Поле ввода' },
    ]

    for (const ctrl of expectedControls) {
      const visible = await page.getByTestId(ctrl.testId).isVisible().catch(() => false)
      console.log(`  - ${ctrl.name} (${ctrl.testId}): ${visible ? '✓ виден' : '✗ не найден'}`)
    }

    // Прокручиваем палитру вниз, чтобы показать больше элементов
    const paletteContainer = page.locator('[class*="palette"]').first()
    await paletteContainer.evaluate(el => el.scrollTo(0, el.scrollHeight / 3))
    await page.waitForTimeout(300)
    await page.screenshot({ path: 'e2e-screenshots/04-palette-middle.png', fullPage: true })
    console.log('✓ Скриншот 4: Панель палитры (середина)')

    await paletteContainer.evaluate(el => el.scrollTo(0, el.scrollHeight))
    await page.waitForTimeout(300)
    await page.screenshot({ path: 'e2e-screenshots/05-palette-bottom.png', fullPage: true })
    console.log('✓ Скриншот 5: Панель палитры (низ)')

    // Возвращаемся наверх палитры
    await paletteContainer.evaluate(el => el.scrollTo(0, 0))
    await page.waitForTimeout(300)

    // Шаг 4: Проверяем холст (canvas)
    const canvas = page.getByTestId('form-canvas')
    await expect(canvas).toBeVisible()
    const canvasControlsBefore = await canvas.locator('.control-wrap').count()
    console.log(`Контролов на холсте до добавления: ${canvasControlsBefore}`)

    // Шаг 5: Добавляем текстовый элемент двойным кликом
    const textPaletteItem = page.getByTestId('palette-text')
    await expect(textPaletteItem).toBeVisible()
    await textPaletteItem.dblclick()
    await page.waitForTimeout(300)
    await page.screenshot({ path: 'e2e-screenshots/06-text-added.png', fullPage: true })
    console.log('✓ Скриншот 6: Добавлен текстовый элемент')

    // Проверяем, что контрол добавился
    const canvasControlsAfterText = await canvas.locator('.control-wrap').count()
    console.log(`Контролов после добавления текста: ${canvasControlsAfterText}`)
    expect(canvasControlsAfterText).toBe(canvasControlsBefore + 1)

    // Шаг 6: Добавляем кнопку
    const buttonPaletteItem = page.getByTestId('palette-button')
    await expect(buttonPaletteItem).toBeVisible()
    await buttonPaletteItem.dblclick()
    await page.waitForTimeout(300)
    await page.screenshot({ path: 'e2e-screenshots/07-button-added.png', fullPage: true })
    console.log('✓ Скриншот 7: Добавлена кнопка')

    // Шаг 7: Добавляем поле ввода
    const textboxPaletteItem = page.getByTestId('palette-input')
    await expect(textboxPaletteItem).toBeVisible()
    await textboxPaletteItem.dblclick()
    await page.waitForTimeout(300)
    await page.screenshot({ path: 'e2e-screenshots/08-textbox-added.png', fullPage: true })
    console.log('✓ Скриншот 8: Добавлено поле ввода')

    // Шаг 8: Добавляем чекбокс
    const checkboxPaletteItem = page.getByTestId('palette-checkbox')
    await expect(checkboxPaletteItem).toBeVisible()
    await checkboxPaletteItem.dblclick()
    await page.waitForTimeout(300)
    await page.screenshot({ path: 'e2e-screenshots/09-checkbox-added.png', fullPage: true })
    console.log('✓ Скриншот 9: Добавлен чекбокс')

    // Шаг 9: Проверяем панель свойств справа
    // Кликаем на первый контрол, чтобы увидеть его свойства
    const firstControl = canvas.locator('.control-wrap').first()
    await firstControl.click()
    await page.waitForTimeout(300)
    await page.screenshot({ path: 'e2e-screenshots/10-properties-panel.png', fullPage: true })
    console.log('✓ Скриншот 10: Панель свойств (первый контрол выделен)')

    // Проверяем наличие панели свойств
    const hasPropertiesPanel = await page.locator('[class*="properties"]').isVisible().catch(() => false)
    console.log(`Панель свойств видна: ${hasPropertiesPanel}`)

    // Шаг 10: Добавляем контейнер Grid
    const gridPaletteItem = page.getByTestId('palette-grid')
    await expect(gridPaletteItem).toBeVisible()
    await gridPaletteItem.dblclick()
    await page.waitForTimeout(300)
    await page.screenshot({ path: 'e2e-screenshots/11-grid-added.png', fullPage: true })
    console.log('✓ Скриншот 11: Добавлена сетка (Grid)')

    // Шаг 11: Добавляем табы
    const tabsPaletteItem = page.getByTestId('palette-tabs')
    await expect(tabsPaletteItem).toBeVisible()
    await tabsPaletteItem.dblclick()
    await page.waitForTimeout(300)
    await page.screenshot({ path: 'e2e-screenshots/12-tabs-added.png', fullPage: true })
    console.log('✓ Скриншот 12: Добавлены табы')

    // Шаг 12: Добавляем таблицу
    const tablePaletteItem = page.getByTestId('palette-table')
    await expect(tablePaletteItem).toBeVisible()
    await tablePaletteItem.dblclick()
    await page.waitForTimeout(300)
    await page.screenshot({ path: 'e2e-screenshots/13-table-added.png', fullPage: true })
    console.log('✓ Скриншот 13: Добавлена таблица')

    // Финальный скриншот с полной формой
    await page.screenshot({ path: 'e2e-screenshots/14-final-form.png', fullPage: true })
    console.log('✓ Скриншот 14: Финальное состояние формы')

    // Итоговая статистика
    const finalControlsCount = await canvas.locator('.control-wrap').count()
    console.log(`\n=== ИТОГОВАЯ СТАТИСТИКА ===`)
    console.log(`Всего контролов на холсте: ${finalControlsCount}`)
    console.log(`Элементов в палитре: ${paletteItems}`)
    console.log(`Все скриншоты сохранены в папке e2e-screenshots/`)

    // Проверяем финальное количество
    expect(finalControlsCount).toBeGreaterThanOrEqual(7)
  })

  test('проверка структуры UI и доступности элементов', async ({ page }) => {
    await page.addInitScript(() => {
      ;(window as any).__E2E_DEMO__ = true
    })
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    // Проверяем основные панели
    console.log('\n=== СТРУКТУРА UI ===')

    // Левая панель (палитра)
    const paletteExists = await page.locator('[class*="palette"]').first().isVisible()
    console.log(`Левая панель (палитра): ${paletteExists ? '✓' : '✗'}`)

    // Центральная панель (холст)
    const canvasExists = await page.getByTestId('form-canvas').isVisible()
    console.log(`Центральная панель (холст): ${canvasExists ? '✓' : '✗'}`)

    // Правая панель (свойства) - может быть видна только при выделении контрола
    const propertiesExists = await page.locator('[class*="properties"]').isVisible().catch(() => false)
    console.log(`Правая панель (свойства): ${propertiesExists ? '✓ (видна)' : 'скрыта (норма, если нет выделения)'}`)

    // Заголовок формы
    const formTitleExists = await page.getByText(/Форма:/i).isVisible()
    console.log(`Заголовок формы: ${formTitleExists ? '✓' : '✗'}`)

    await page.screenshot({ path: 'e2e-screenshots/20-ui-structure.png', fullPage: true })
    console.log('✓ Скриншот структуры UI сохранён')
  })
})
