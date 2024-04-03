/**
 * Генерирует чиловой хеш для объекта конфигурации.
 *
 * Функция преобразует объект в строку JSON и вычисляет хеш на основе символов строки.
 *
 * @param {Record<string, any>} obj - Объект конфигурации для хеширования.
 * @returns {number} значение хеша.
 *
 */
export function generateConfigHash (obj: Record<string, any>): number {
  const res = JSON.stringify(obj)
  return res.split('').reduce((acc, char) => {
    return ((acc << 5) - acc + char.charCodeAt(0)) | 0
  }, 0)
}
