/**
 * Генерирует 10 случайных форм в папке jsons. Запуск: node scripts/generate-random-forms.js
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OUT_DIR = path.join(__dirname, '..', 'jsons')

const NAMES = [
  'Регистрация', 'Опрос', 'Настройки', 'Профиль', 'Заказ', 'Обратная связь',
  'Логин', 'Фильтры', 'Поиск', 'Карточка товара'
]

const BUTTON_MODES = ['primary', 'secondary', 'tertiary', 'dangerFilled', 'dangerOutlined']
const LABEL_POSITIONS = ['after', 'before']
const META_COMPONENTS = ['Button', 'Text', 'Textbox', 'Badge', 'Tag', 'Link', 'H6']

function id(prefix) {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`
}

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

function randInt(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1))
}

function elements(count) {
  const types = [
    'button', 'text', 'input', 'checkbox', 'radio', 'select', 'toggle', 'meta'
  ]
  const out = []
  for (let i = 0; i < count; i++) {
    const type = pick(types)
    const cid = id(type)
    switch (type) {
      case 'button':
        out.push({
          type: 'button',
          id: cid,
          ...(Math.random() > 0.5 && { configHook: 'handlers/button.js' })
        })
        break
      case 'text':
        out.push({
          type: 'text',
          id: cid,
          text: pick(['Подпись', 'Описание', 'Инструкция', 'Заголовок'])
        })
        break
      case 'input':
        out.push({
          type: 'input',
          id: cid,
          text: pick(['Имя', 'Email', 'Телефон', 'Адрес']),
          value: '',
          placeholder: pick(['Введите значение', '...', 'Не обязательно'])
        })
        break
      case 'checkbox':
        out.push({
          type: 'checkbox',
          id: cid,
          text: pick(['Согласен с условиями', 'Подписаться', 'Запомнить']),
          checked: Math.random() > 0.5
        })
        break
      case 'radio':
        out.push({
          type: 'radio',
          id: cid,
          options: [
            { label: 'Вариант A', value: 'a' },
            { label: 'Вариант B', value: 'b' },
            { label: 'Вариант C', value: 'c' }
          ],
          value: pick(['a', 'b', 'c']),
          vertical: Math.random() > 0.5
        })
        break
      case 'select':
        out.push({
          type: 'select',
          id: cid,
          options: [
            { label: 'Опция 1', value: '1' },
            { label: 'Опция 2', value: '2' },
            { label: 'Опция 3', value: '3' }
          ],
          placeholder: 'Выберите...',
          mode: Math.random() > 0.8 ? 'multiple' : undefined
        })
        break
      case 'toggle':
        out.push({
          type: 'toggle',
          id: cid,
          text: pick(['Включить', 'Уведомления', 'Тёмная тема']),
          checked: Math.random() > 0.5,
          labelPosition: pick(LABEL_POSITIONS)
        })
        break
      case 'meta':
        out.push({
          type: 'meta',
          id: cid,
          componentId: pick(META_COMPONENTS),
          props: { text: pick(['Мета', 'Бейдж', 'Ссылка']), mode: 'primary' }
        })
        break
      default:
        out.push({ type: 'text', id: cid, text: 'Текст' })
    }
  }
  return out
}

function toJsSource(form) {
  const esc = (v) => JSON.stringify(v)
  const elLines = form.elements.map((el) => {
    const entries = Object.entries(el).filter(([, v]) => v !== undefined)
    const inner = entries.map(([k, v]) => {
      const val = k === 'configHook' && typeof v === 'string'
        ? `() => import("./${v.replace(/\\/g, '/')}")`
        : JSON.stringify(v)
      return `      ${esc(k)}: ${val}`
    }).join(',\n')
    return `    {\n${inner}\n    }`
  }).join(',\n')
  return `export default {
  name: ${esc(form.name)},
  id: ${esc(form.id)},
  elements: [
${elLines}
  ]
}
`
}

function generateForms() {
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true })
  const usedNames = new Set()
  for (let n = 1; n <= 10; n++) {
    let name = pick(NAMES)
    while (usedNames.has(name)) name = pick(NAMES)
    usedNames.add(name)
    const form = {
      name,
      id: `form-${Date.now()}-${n}-${Math.random().toString(36).slice(2, 6)}`,
      elements: elements(randInt(2, 6))
    }
    const filename = `form-random-${n}.js`
    const filepath = path.join(OUT_DIR, filename)
    fs.writeFileSync(filepath, toJsSource(form), 'utf8')
    console.log('Created', filename)
  }
}

generateForms()
