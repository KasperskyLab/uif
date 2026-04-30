import React from 'react'
import {
  Accordion,
  ActionButton,
  Alert,
  Badge,
  Breadcrumbs,
  Button,
  Calendar,
  Card,
  Checkbox,
  Chip,
  CodeViewer,
  Divider,
  Dropdown,
  ExpandableText,
  Field,
  FieldSet,
  FormLabel,
  Heading,
  HelpMessage,
  Indicator,
  InformationCard,
  KeyValue,
  Label,
  Link,
  Loader,
  Markdown,
  P,
  PageHeader,
  Pagination,
  Popover,
  ProgressBar,
  Radio,
  Scrollbar,
  Search,
  SectionMessage,
  SegmentedButton,
  SegmentedControl,
  Select,
  Severity,
  Space,
  Status,
  StatusCard,
  Tag,
  Text,
  Textbox,
  TimeInput,
  Toggle,
  Tooltip,
} from '@kaspersky/hexa-ui'
import {
  Add,
  ArrowDown1,
  Calendar as CalendarIcon,
  CheckedSquare,
  Clock,
  Code,
  Component,
  Cursor,
  Delete,
  Document,
  Dot,
  ExpandDown,
  Folder,
  Help,
  Key,
  Line,
  Link as LinkIcon,
  Loader as LoaderIcon,
  Menu,
  Message,
  OnlineOfflineToggle,
  RadioButton,
  ResizeInput,
  Search as SearchIcon,
  StatusInfoOutline,
  Tag as TagIcon,
  Text as TextIcon,
} from '@kaspersky/hexa-ui-icons/16'
import type { ControlDescriptor } from '../types'
import type { ExtraUiControl, ExtraUiDslType } from '../../types/form-dsl'
import { getComponentIdFromDslType } from '../../types/form-dsl'
import { SelectWithOptionWidth } from '../../components/SelectWithOptionWidth'

/* ─── Карта компонентов Hexa UI. Заголовки H1–H6 объединены в один компонент Heading с пропом type. ─── */

const cast = (c: unknown) => c as React.ComponentType<Record<string, unknown>>

const HEXA_COMPONENT_MAP: Record<string, React.ComponentType<Record<string, unknown>>> = {
  Accordion: cast(Accordion),
  ActionButton: cast(ActionButton),
  Alert: cast(Alert),
  Badge: cast(Badge),
  Breadcrumbs: cast(Breadcrumbs),
  Button,
  Calendar: cast(Calendar),
  Card: cast(Card),
  Checkbox,
  Chip: cast(Chip),
  CodeViewer: cast(CodeViewer),
  Divider,
  Dropdown: cast(Dropdown),
  ExpandableText: cast(ExpandableText),
  Field: cast(Field),
  FieldSet: cast(FieldSet),
  FormLabel: cast(FormLabel),
  Heading: cast(Heading),
  HelpMessage: cast(HelpMessage),
  Indicator,
  InformationCard: cast(InformationCard),
  KeyValue: cast(KeyValue),
  Label: cast(Label),
  Link,
  Loader,
  Markdown: cast(Markdown),
  P: cast(P),
  PageHeader: cast(PageHeader),
  Pagination: cast(Pagination),
  Popover: cast(Popover),
  ProgressBar: cast(ProgressBar),
  Radio: cast(Radio),
  Scrollbar: cast(Scrollbar),
  Search: cast(Search),
  SectionMessage: cast(SectionMessage),
  SegmentedButton: cast(SegmentedButton),
  SegmentedControl: cast(SegmentedControl),
  Select,
  Severity: cast(Severity),
  Space,
  Status: cast(Status),
  StatusCard: cast(StatusCard),
  Tag,
  Text,
  Textbox,
  TimeInput: cast(TimeInput),
  Toggle,
  Tooltip: cast(Tooltip),
}

/** Иконки палитры Hexa UI по смыслу компонента (из @kaspersky/hexa-ui-icons/16). */
const HEXA_PALETTE_ICONS: Record<string, React.ComponentType<Record<string, unknown>>> = {
  Accordion: ExpandDown,
  ActionButton: Cursor,
  Alert: StatusInfoOutline,
  Badge: Dot,
  Breadcrumbs: Line,
  Button: Cursor,
  Calendar: CalendarIcon as unknown as React.ComponentType<Record<string, unknown>>,
  Card: Document,
  Checkbox: CheckedSquare,
  Chip: TagIcon as unknown as React.ComponentType<Record<string, unknown>>,
  CodeViewer: Code,
  Divider: Line,
  Dropdown: ArrowDown1,
  ExpandableText: ExpandDown,
  Field: ResizeInput,
  FieldSet: Folder,
  FormLabel: TextIcon,
  Heading: TextIcon,
  HelpMessage: Help,
  Indicator: Dot,
  InformationCard: Document,
  KeyValue: Key,
  Label: TextIcon,
  Link: LinkIcon as unknown as React.ComponentType<Record<string, unknown>>,
  Loader: LoaderIcon as unknown as React.ComponentType<Record<string, unknown>>,
  Markdown: TextIcon,
  P: TextIcon,
  PageHeader: Document,
  Pagination: ArrowDown1,
  Popover: Message,
  ProgressBar: Line,
  Radio: RadioButton,
  Scrollbar: ArrowDown1,
  Search: SearchIcon as unknown as React.ComponentType<Record<string, unknown>>,
  SectionMessage: Message,
  SegmentedButton: Menu,
  SegmentedControl: Menu,
  Select: ArrowDown1,
  Severity: StatusInfoOutline,
  Space: Line,
  Status: Dot,
  StatusCard: Document,
  Tag: TagIcon as unknown as React.ComponentType<Record<string, unknown>>,
  Text: TextIcon,
  Textbox: ResizeInput,
  TimeInput: Clock,
  Toggle: OnlineOfflineToggle,
  Tooltip: Help,
}

export function getHexaPaletteIcon(componentId: string): React.ComponentType {
  return HEXA_PALETTE_ICONS[componentId] ?? Component
}

/* ─── Схема props (без дубликатов H1–H6: один Heading с выбором уровня) ─── */

interface PropDef {
  key: string
  label: string
  type: 'string' | 'boolean' | 'select' | 'number'
  options?: string[]
  defaultValue?: string
}

const COMPONENT_PROPS: Record<string, PropDef[]> = {
  Accordion: [
    { key: 'disabled', label: 'Disabled', type: 'boolean' },
    { key: 'accordion', label: 'Одна панель', type: 'boolean', defaultValue: 'true' },
  ],
  ActionButton: [
    { key: 'children', label: 'Текст', type: 'string', defaultValue: 'Действие' },
    { key: 'mode', label: 'Режим', type: 'select', options: ['filled', 'ghost', 'ghostInverted', 'outline'], defaultValue: 'filled' },
    { key: 'size', label: 'Размер', type: 'select', options: ['small', 'medium', 'large'], defaultValue: 'medium' },
    { key: 'disabled', label: 'Disabled', type: 'boolean' },
  ],
  Alert: [
    { key: 'children', label: 'Текст', type: 'string', defaultValue: 'Уведомление' },
    { key: 'mode', label: 'Режим', type: 'select', options: ['info', 'success', 'warning', 'error'], defaultValue: 'info' },
    { key: 'closable', label: 'Закрываемый', type: 'boolean' },
  ],
  Badge: [
    { key: 'count', label: 'Число', type: 'number', defaultValue: '5' },
    { key: 'text', label: 'Текст', type: 'string' },
    { key: 'mode', label: 'Режим', type: 'select', options: ['neutral', 'info', 'new', 'update', 'in-progress', 'resolved', 'positive', 'accent', 'low', 'medium', 'high', 'in-incident', 'critical'], defaultValue: 'neutral' },
    { key: 'size', label: 'Размер', type: 'select', options: ['medium', 'large'], defaultValue: 'medium' },
    { key: 'showZero', label: 'Показывать 0', type: 'boolean' },
  ],
  Breadcrumbs: [
    { key: 'separator', label: 'Разделитель', type: 'string', defaultValue: '/' },
  ],
  Button: [
    { key: 'text', label: 'Текст', type: 'string', defaultValue: 'Кнопка' },
    { key: 'mode', label: 'Режим', type: 'select', options: ['primary', 'secondary', 'tertiary', 'dangerFilled', 'dangerOutlined'], defaultValue: 'primary' },
    { key: 'size', label: 'Размер', type: 'select', options: ['small', 'medium', 'large'], defaultValue: 'medium' },
    { key: 'disabled', label: 'Disabled', type: 'boolean' },
    { key: 'loading', label: 'Loading', type: 'boolean' },
  ],
  Calendar: [
    { key: 'disabled', label: 'Disabled', type: 'boolean' },
  ],
  Card: [
    { key: 'children', label: 'Содержимое', type: 'string', defaultValue: 'Содержимое карточки' },
    { key: 'selected', label: 'Selected', type: 'boolean' },
    { key: 'disabled', label: 'Disabled', type: 'boolean' },
    { key: 'interactive', label: 'Interactive', type: 'boolean' },
  ],
  Checkbox: [
    { key: 'children', label: 'Текст', type: 'string', defaultValue: 'Чекбокс' },
    { key: 'checked', label: 'Checked', type: 'boolean' },
    { key: 'disabled', label: 'Disabled', type: 'boolean' },
  ],
  Chip: [
    { key: 'label', label: 'Текст', type: 'string', defaultValue: 'Chip' },
    { key: 'counter', label: 'Счётчик', type: 'number' },
    { key: 'size', label: 'Размер', type: 'select', options: ['medium', 'large'], defaultValue: 'medium' },
    { key: 'disabled', label: 'Disabled', type: 'boolean' },
  ],
  CodeViewer: [
    { key: 'code', label: 'Код', type: 'string', defaultValue: 'console.log("hello")' },
    { key: 'language', label: 'Язык', type: 'select', options: ['javascript', 'typescript', 'json', 'xml', 'html', 'css', 'python', 'bash', 'sql'], defaultValue: 'javascript' },
  ],
  Divider: [
    { key: 'mode', label: 'Режим', type: 'select', options: ['normal', 'light', 'bold', 'onLight', 'inverted'], defaultValue: 'normal' },
    { key: 'direction', label: 'Направление', type: 'select', options: ['horizontal', 'vertical'], defaultValue: 'horizontal' },
  ],
  Dropdown: [
    { key: 'disabled', label: 'Disabled', type: 'boolean' },
  ],
  ExpandableText: [
    { key: 'children', label: 'Текст', type: 'string', defaultValue: 'Длинный текст, который можно свернуть/развернуть...' },
    { key: 'expandedDefault', label: 'Раскрыт', type: 'boolean' },
  ],
  Field: [
    { key: 'label', label: 'Метка', type: 'string', defaultValue: 'Поле' },
    { key: 'description', label: 'Описание', type: 'string' },
    { key: 'required', label: 'Обязательное', type: 'boolean' },
    { key: 'disabled', label: 'Disabled', type: 'boolean' },
  ],
  FieldSet: [
    { key: 'title', label: 'Заголовок', type: 'string', defaultValue: 'Группа полей' },
  ],
  FormLabel: [
    { key: 'label', label: 'Метка', type: 'string', defaultValue: 'Метка' },
    { key: 'required', label: 'Обязательное', type: 'boolean' },
    { key: 'disabled', label: 'Disabled', type: 'boolean' },
  ],
  Heading: [
    { key: 'children', label: 'Текст', type: 'string', defaultValue: 'Заголовок' },
    { key: 'type', label: 'Уровень', type: 'select', options: ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'], defaultValue: 'H3' },
  ],
  HelpMessage: [
    { key: 'children', label: 'Текст', type: 'string', defaultValue: 'Подсказка' },
    { key: 'mode', label: 'Режим', type: 'select', options: ['default', 'error', 'success'], defaultValue: 'default' },
  ],
  Indicator: [
    { key: 'mode', label: 'Режим', type: 'select', options: ['accent', 'not-active', 'new', 'update', 'inProgress', 'resolved', 'inIncident', 'high', 'critical', 'medium', 'info', 'positive', 'low'], defaultValue: 'accent' },
    { key: 'border', label: 'Граница', type: 'boolean' },
  ],
  InformationCard: [
    { key: 'title', label: 'Заголовок', type: 'string', defaultValue: 'Информация' },
    { key: 'children', label: 'Содержимое', type: 'string', defaultValue: 'Описание' },
  ],
  KeyValue: [
    { key: 'contentKey', label: 'Ключ', type: 'string', defaultValue: 'Параметр' },
    { key: 'children', label: 'Значение', type: 'string', defaultValue: 'Значение' },
  ],
  Label: [
    { key: 'children', label: 'Текст', type: 'string', defaultValue: 'Метка' },
    { key: 'required', label: 'Обязательное', type: 'boolean' },
    { key: 'disabled', label: 'Disabled', type: 'boolean' },
  ],
  Link: [
    { key: 'text', label: 'Текст', type: 'string', defaultValue: 'Ссылка' },
    { key: 'href', label: 'URL', type: 'string', defaultValue: '#' },
    { key: 'target', label: 'Target', type: 'select', options: ['_self', '_blank', '_parent'] },
    { key: 'size', label: 'Размер', type: 'select', options: ['medium', 'large', 'noSize'], defaultValue: 'medium' },
    { key: 'disabled', label: 'Disabled', type: 'boolean' },
  ],
  Loader: [
    { key: 'size', label: 'Размер', type: 'select', options: ['extraSmall', 'small', 'medium', 'large'], defaultValue: 'medium' },
    { key: 'mode', label: 'Режим', type: 'select', options: ['default', 'inverted'], defaultValue: 'default' },
    { key: 'centered', label: 'Центрировать', type: 'boolean' },
  ],
  Markdown: [
    { key: 'value', label: 'Markdown-текст', type: 'string', defaultValue: '**Жирный** и _курсив_' },
  ],
  P: [
    { key: 'children', label: 'Текст', type: 'string', defaultValue: 'Абзац текста' },
    { key: 'type', label: 'Тип', type: 'select', options: ['BTR2', 'BTR3', 'BTR4', 'BTR5', 'BTM3', 'BTM4'], defaultValue: 'BTR3' },
  ],
  PageHeader: [
    { key: 'title', label: 'Заголовок', type: 'string', defaultValue: 'Заголовок страницы' },
  ],
  Pagination: [
    { key: 'total', label: 'Всего записей', type: 'number', defaultValue: '100' },
    { key: 'pageSize', label: 'На странице', type: 'number', defaultValue: '10' },
    { key: 'current', label: 'Текущая страница', type: 'number', defaultValue: '1' },
  ],
  Popover: [
    { key: 'children', label: 'Содержимое триггера', type: 'string', defaultValue: 'Наведите' },
    { key: 'content', label: 'Содержимое поповера', type: 'string', defaultValue: 'Popover-контент' },
  ],
  ProgressBar: [
    { key: 'track', label: 'Прогресс (%)', type: 'number', defaultValue: '60' },
    { key: 'mode', label: 'Цвет', type: 'select', options: ['critical', 'warning', 'success', 'accent', 'neutralBold', 'neutralSubtle', 'orange', 'grass', 'violet', 'purple', 'coldgray'], defaultValue: 'accent' },
    { key: 'size', label: 'Размер', type: 'select', options: ['small', 'medium', 'large'], defaultValue: 'medium' },
    { key: 'background', label: 'Фон', type: 'boolean', defaultValue: 'true' },
    { key: 'width', label: 'Ширина (px)', type: 'number', defaultValue: '200' },
  ],
  Radio: [
    { key: 'disabled', label: 'Disabled', type: 'boolean' },
  ],
  Scrollbar: [
    { key: 'children', label: 'Содержимое', type: 'string', defaultValue: 'Скроллируемый контент' },
  ],
  Search: [
    { key: 'placeholder', label: 'Placeholder', type: 'string', defaultValue: 'Поиск...' },
    { key: 'disabled', label: 'Disabled', type: 'boolean' },
  ],
  SectionMessage: [
    { key: 'children', label: 'Текст', type: 'string', defaultValue: 'Сообщение' },
    { key: 'title', label: 'Заголовок', type: 'string' },
    { key: 'mode', label: 'Режим', type: 'select', options: ['error', 'success', 'info', 'warning'], defaultValue: 'info' },
    { key: 'closable', label: 'Закрываемый', type: 'boolean' },
  ],
  SegmentedButton: [
    { key: 'size', label: 'Размер', type: 'select', options: ['small', 'medium', 'large'], defaultValue: 'medium' },
  ],
  SegmentedControl: [
    { key: 'size', label: 'Размер', type: 'select', options: ['small', 'medium', 'large'], defaultValue: 'medium' },
  ],
  Select: [
    { key: 'placeholder', label: 'Placeholder', type: 'string', defaultValue: 'Выберите...' },
    { key: 'disabled', label: 'Disabled', type: 'boolean' },
  ],
  Severity: [
    { key: 'children', label: 'Текст', type: 'string', defaultValue: 'Критический' },
    { key: 'mode', label: 'Уровень', type: 'select', options: ['critical', 'high', 'medium', 'low', 'info', 'positive'], defaultValue: 'critical' },
  ],
  Space: [
    { key: 'size', label: 'Размер', type: 'number', defaultValue: '8' },
    { key: 'direction', label: 'Направление', type: 'select', options: ['horizontal', 'vertical'], defaultValue: 'horizontal' },
  ],
  Status: [
    { key: 'label', label: 'Текст', type: 'string', defaultValue: 'Новый' },
    { key: 'mode', label: 'Режим', type: 'select', options: ['default', 'not-active', 'new', 'update', 'inProgress', 'resolved', 'inIncident', 'high', 'critical', 'medium', 'info', 'positive', 'low'], defaultValue: 'new' },
  ],
  StatusCard: [
    { key: 'title', label: 'Заголовок', type: 'string', defaultValue: 'Статус' },
    { key: 'children', label: 'Содержимое', type: 'string', defaultValue: 'Описание статуса' },
  ],
  Tag: [
    { key: 'children', label: 'Текст', type: 'string', defaultValue: 'Тег' },
    { key: 'mode', label: 'Цвет', type: 'select', options: ['neutral', 'purple', 'grey', 'marina', 'red', 'marengo', 'emerald', 'orange', 'yellow', 'violet', 'grass'], defaultValue: 'neutral' },
    { key: 'size', label: 'Размер', type: 'select', options: ['small', 'medium'], defaultValue: 'medium' },
    { key: 'outlined', label: 'Outlined', type: 'boolean' },
    { key: 'closable', label: 'Закрываемый', type: 'boolean' },
    { key: 'interactive', label: 'Interactive', type: 'boolean' },
  ],
  Text: [
    { key: 'children', label: 'Текст', type: 'string', defaultValue: 'Текст' },
    { key: 'type', label: 'Тип', type: 'select', options: ['BTR2', 'BTR3', 'BTR4', 'BTR5', 'BTM2', 'BTM3', 'BTM4', 'BTM5', 'MTR3', 'MTR4', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6'], defaultValue: 'BTR3' },
    { key: 'color', label: 'Цвет', type: 'select', options: ['primary', 'secondary'] },
  ],
  Textbox: [
    { key: 'value', label: 'Value', type: 'string' },
    { key: 'placeholder', label: 'Placeholder', type: 'string', defaultValue: 'Введите текст' },
    { key: 'disabled', label: 'Disabled', type: 'boolean' },
    { key: 'readOnly', label: 'Read only', type: 'boolean' },
  ],
  TimeInput: [
    { key: 'disabled', label: 'Disabled', type: 'boolean' },
  ],
  Toggle: [
    { key: 'text', label: 'Текст', type: 'string', defaultValue: 'Переключатель' },
    { key: 'checked', label: 'Checked', type: 'boolean' },
    { key: 'disabled', label: 'Disabled', type: 'boolean' },
  ],
  Tooltip: [
    { key: 'children', label: 'Содержимое триггера', type: 'string', defaultValue: 'Наведите' },
    { key: 'text', label: 'Текст тултипа', type: 'string', defaultValue: 'Подсказка' },
  ],
}

/** Дефолтные props для компонента (для палитры и смены типа). Экспортируется для registry. */
export function getHexaDefaultProps(componentId: string): Record<string, string> {
  const schema = COMPONENT_PROPS[componentId]
  if (!schema) return {}
  const result: Record<string, string> = {}
  for (const p of schema) {
    if (p.defaultValue != null) result[p.key] = p.defaultValue
  }
  return result
}

/** Группы палитры по семантике (Hexa UI). Один блок палитры — только семантические группы Hexa и разметка; дубликатов нет. */
export const HEXA_PALETTE_GROUPS: { group: string; componentIds: string[] }[] = [
  { group: 'Текст и типографика', componentIds: ['Text', 'P', 'Heading', 'ExpandableText', 'Link', 'FormLabel', 'Label', 'HelpMessage', 'Markdown', 'CodeViewer'] },
  { group: 'Кнопки и действия', componentIds: ['Button', 'ActionButton', 'SegmentedButton', 'SegmentedControl'] },
  { group: 'Ввод данных', componentIds: ['Textbox', 'Search', 'Checkbox', 'Radio', 'Select', 'Toggle', 'Calendar', 'TimeInput'] },
  { group: 'Отображение данных и статусы', componentIds: ['Badge', 'Tag', 'Chip', 'KeyValue', 'InformationCard', 'StatusCard', 'Severity', 'Status', 'Indicator'] },
  { group: 'Обратная связь', componentIds: ['Alert', 'SectionMessage', 'Loader', 'ProgressBar', 'Tooltip', 'Popover'] },
  { group: 'Навигация и структура', componentIds: ['Breadcrumbs', 'Pagination', 'PageHeader', 'Accordion', 'Divider', 'Space'] },
  { group: 'Контейнеры и карточки', componentIds: ['Card', 'Field', 'FieldSet', 'Dropdown', 'Scrollbar'] },
]

/* ─── Безопасные URL (защита от XSS) ─── */
const SAFE_URL_SCHEMES = ['http:', 'https:', 'mailto:', 'tel:', '#']

function isSafeHref(value: string): boolean {
  const s = value.trim().toLowerCase()
  if (!s) return true
  if (s.startsWith('#') || s.startsWith('/') || s.startsWith('./') || s.startsWith('../')) return true
  try {
    const url = new URL(value, 'https://x')
    return SAFE_URL_SCHEMES.some((scheme) => url.protocol === scheme)
  } catch {
    return false
  }
}

function sanitizeHexaProp(key: string, value: unknown): unknown {
  if (key !== 'href' && key !== 'src' && key !== 'url') return value
  const s = typeof value === 'string' ? value : String(value ?? '')
  return isSafeHref(s) ? s : '#'
}

function coercePropValue(v: string): string | number | boolean | object {
  if (v === 'true') return true
  if (v === 'false') return false
  const n = Number(v)
  if (v !== '' && !Number.isNaN(n)) return n
  try {
    const parsed = JSON.parse(v)
    if (typeof parsed === 'object' && parsed !== null) return parsed
  } catch (_) { }
  return v
}

/* ─── Дескрипторы для типов с props (alert, heading, dropdown и т.д.). componentId выводится из типа DSL. ─── */

function buildCanvasPreview(componentId: string, control: ExtraUiControl): React.ReactNode {
  const Comp = HEXA_COMPONENT_MAP[componentId]
  if (!Comp) return <Text type="BTR3">Компонент «{componentId}»</Text>
  const builtProps: Record<string, unknown> = {}
  for (const [k, v] of Object.entries(control.props || {})) {
    const raw = k === 'children' ? v : coercePropValue(v)
    builtProps[k] = sanitizeHexaProp(k, raw)
  }
  if (componentId === 'Loader') {
    builtProps.spinning = true
  }
  if (componentId === 'SegmentedControl') {
      if (!builtProps.tabsData || !Array.isArray(builtProps.tabsData) || (builtProps.tabsData as unknown[]).length === 0) {
        builtProps.tabsData = [
          { name: 'tab1', content: 'content1', text: 'Вкладка 1' },
          { name: 'tab2', content: 'content2', text: 'Вкладка 2' },
        ]
      }
      if (!builtProps.contentData || typeof builtProps.contentData !== 'object') {
        builtProps.contentData = {
          content1: () => <Text type="BTR3">Содержимое 1</Text>,
          content2: () => <Text type="BTR3">Содержимое 2</Text>,
        }
      }
      if (builtProps.className === undefined || builtProps.className === null) {
        builtProps.className = ''
      }
    }
  if (componentId === 'SegmentedButton') {
      if (!builtProps.items || !Array.isArray(builtProps.items) || (builtProps.items as unknown[]).length === 0) {
        builtProps.items = [
          { value: 'opt1', text: 'Вариант 1' },
          { value: 'opt2', text: 'Вариант 2' },
        ]
      }
      if (!Array.isArray(builtProps.value)) {
        builtProps.value = []
      }
      if (typeof builtProps.onChange !== 'function') {
        builtProps.onChange = () => {}
      }
    }
  if (componentId === 'Radio') {
    if (!builtProps.options || !Array.isArray(builtProps.options) || (builtProps.options as unknown[]).length === 0) {
      builtProps.options = [
        { label: 'Вариант 1', value: 'v1' },
        { label: 'Вариант 2', value: 'v2' },
      ]
    }
  }
  if (componentId === 'FieldSet') {
    if (!builtProps.items || !Array.isArray(builtProps.items)) {
      builtProps.items = []
    }
  }
  if (componentId === 'Dropdown') {
    if (builtProps.overlay === undefined || builtProps.overlay === null) {
      builtProps.overlay = [{ children: 'Пункт меню' }]
    } else if (Array.isArray(builtProps.overlay) && (builtProps.overlay as unknown[]).length === 0) {
      builtProps.overlay = [{ children: 'Пункт меню' }]
    }
    if (builtProps.children === undefined || builtProps.children === null || builtProps.children === '') {
      builtProps.children = 'Меню'
    }
  }
  return <Comp {...builtProps} disabled={control.props?.disabled === 'true' || undefined} />
}

function buildPropsEditor(componentId: string, control: ExtraUiControl, onUpdate: (patch: Partial<ExtraUiControl>) => void, selectCloseKey?: number, onSelectClose?: () => void): React.ReactNode {
  const schema = COMPONENT_PROPS[componentId] ?? []
  const customEntries = Object.entries(control.props ?? {}).filter(
    ([k]) => !schema.some((s) => s.key === k)
  )
  const setProps = (next: Record<string, string>) => onUpdate({ props: next })
  const setProp = (key: string, value: string) => setProps({ ...control.props, [key]: value })
  const removeProp = (key: string) => {
    const next = { ...control.props }
    delete next[key]
    setProps(next)
  }

  return (
    <>
      {schema.length > 0 && (
          <div style={{ width: '100%' }}>
            <Text type="BTR3" style={{ display: 'block', marginBottom: 4 }}>Свойства</Text>
            <Space size={8} direction="vertical" style={{ width: '100%' }}>
              {schema.map((def) => {
                const val = control.props?.[def.key] ?? ''
                if (def.type === 'boolean') {
                  return (
                    <Checkbox
                      key={def.key}
                      checked={val === 'true'}
                      onChange={(e) => setProp(def.key, e.target.checked ? 'true' : 'false')}
                    >
                      {def.label}
                    </Checkbox>
                  )
                }
                if (def.type === 'select' && def.options) {
                  const opts = def.options.map((o) => ({ value: o, label: o }))
                  return (
                    <div key={def.key}>
                      <Text type="BTR3" style={{ display: 'block', marginBottom: 4 }}>{def.label}</Text>
                      <SelectWithOptionWidth options={opts}>
                        <Select
                          key={`hexa-prop-${def.key}-${selectCloseKey ?? 0}`}
                          options={opts}
                          value={val || undefined}
                          placeholder={def.defaultValue ?? 'Выберите'}
                          onChange={(v) => {
                            setProp(def.key, (v as string) ?? '')
                            onSelectClose?.()
                          }}
                          getPopupContainer={() => document.body}
                        />
                      </SelectWithOptionWidth>
                    </div>
                  )
                }
                return (
                  <div key={def.key}>
                    <Text type="BTR3" style={{ display: 'block', marginBottom: 4 }}>{def.label}</Text>
                    <Textbox
                      value={val}
                      onChange={(v) => setProp(def.key, v)}
                      placeholder={def.defaultValue ?? ''}
                    />
                  </div>
                )
              })}
            </Space>
          </div>
        )}

        <div style={{ width: '100%', marginTop: 8 }}>
          <Text type="BTR3" style={{ display: 'block', marginBottom: 4 }}>Дополнительные props</Text>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left', padding: '4px 6px', borderBottom: '1px solid #e7e7e9' }}>Ключ</th>
                <th style={{ textAlign: 'left', padding: '4px 6px', borderBottom: '1px solid #e7e7e9' }}>Значение</th>
                <th style={{ width: 32, padding: '4px 6px', borderBottom: '1px solid #e7e7e9' }} />
              </tr>
            </thead>
            <tbody>
              {customEntries.map(([k, v], i) => (
                <tr key={i}>
                  <td style={{ padding: '2px 6px', borderBottom: '1px solid #eee', verticalAlign: 'middle' }}>
                    <Textbox
                      value={k}
                      onChange={(newKey) => {
                        const next = { ...control.props }
                        delete next[k]
                        next[newKey] = v
                        setProps(next)
                      }}
                      placeholder="ключ"
                      style={{ width: '100%', minWidth: 0 }}
                    />
                  </td>
                  <td style={{ padding: '2px 6px', borderBottom: '1px solid #eee', verticalAlign: 'middle' }}>
                    <Textbox
                      value={v}
                      onChange={(newVal) => setProp(k, newVal)}
                      placeholder="значение"
                      style={{ width: '100%', minWidth: 0 }}
                    />
                  </td>
                  <td style={{ padding: '2px 6px', borderBottom: '1px solid #eee', verticalAlign: 'middle' }}>
                    <button
                      type="button"
                      onClick={() => removeProp(k)}
                      title="Удалить"
                      style={{ padding: 4, border: 'none', background: 'none', cursor: 'pointer', display: 'inline-flex' }}
                    >
                      <Delete />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Button
            mode="secondary"
            text="Добавить prop"
            iconBefore={<Add />}
            onClick={() => setProps({ ...control.props, '': '' })}
            style={{ marginTop: 8 }}
          />
        </div>
      </>
  )
}

export function createUiDescriptor(dslType: ExtraUiDslType): ControlDescriptor<ExtraUiControl> {
  const componentId = getComponentIdFromDslType(dslType) ?? 'Alert'
  const label = componentId === 'Heading' ? 'Заголовок' : componentId
  return {
    type: dslType,
    label,
    Icon: getHexaPaletteIcon(componentId),
    createDefault: () => ({ type: dslType, id: '', props: getHexaDefaultProps(componentId) }),
    CanvasPreview: ({ control }) => {
      const cid = getComponentIdFromDslType(control.type) ?? componentId
      return buildCanvasPreview(cid, control) as React.ReactElement
    },
    PropsEditor: ({ control, onUpdate, selectCloseKey, onSelectClose }) =>
      buildPropsEditor(
        getComponentIdFromDslType(control.type) ?? componentId,
        control,
        onUpdate,
        selectCloseKey,
        onSelectClose
      ) as React.ReactElement,
  }
}
