/**
 * Хендлер настройки кнопки (configHook / П.2).
 *
 * Вызывается при каждом ререндере формы (как функция внутри React-компонента).
 * Возвращает объект пропсов для @kaspersky/hexa-ui Button или null — тогда кнопка не рендерится.
 *
 * @param {object} formSlice
 * @param {Record<string, unknown>} formSlice.state — значения интерактивных контролов по их id
 *   (input, checkbox, select, toggle, radio и т.д.; у type: text значения в state нет)
 * @param {{ elements: unknown[] }} formSlice.config — дерево контролов из DSL
 * @param {string} componentType — для кнопки всегда 'Button'
 */
export default function buttonConfigHook(formSlice, componentType) {
  if (componentType !== 'Button') {
    return null
  }

  const { state, config } = formSlice

  // Пример условной видимости: вернуть null, чтобы не монтировать кнопку
  // if (String(state['some-input-id'] ?? '') === 'hide') return null

  // Пример: подпись зависит от поля формы (добавьте input с таким id в DSL)
  // const note = String(state['my-input-id'] ?? '').trim()
  // const text = note ? `Отправить «${note}»` : 'Введите текст в поле выше'

  return {
    mode: 'dangerFilled',
    text: 'Демо: configHook',
    onClick: () => {
      const keys = Object.keys(state)
      const preview =
        keys.length === 0
          ? '(пока пусто — добавьте input/checkbox, state заполняется по id контрола)'
          : keys.map((id) => `${id}: ${JSON.stringify(state[id])}`).join('\n')
      window.alert('Клик из configHook.\n\nformSlice.state:\n' + preview)
    },
  }
}
