/**
 * Регистр типов контролов. В DSL у каждого элемента свой семантический тип (button, tabs, alert и т.д.).
 */
import type React from 'react'
import type { FormControl, FormControlType } from '../types/form-dsl'
import { COMPONENT_ID_TO_DSL_TYPE, EXTRA_UI_DSL_TYPES } from '../types/form-dsl'
import type { ControlDescriptor } from './types'
import { buttonDescriptor } from './descriptors/button'
import { textDescriptor } from './descriptors/text'
import { inputDescriptor } from './descriptors/input'
import { checkboxDescriptor } from './descriptors/checkbox'
import { radioDescriptor } from './descriptors/radio'
import { selectDescriptor } from './descriptors/select'
import { toggleDescriptor } from './descriptors/toggle'
import { markdownDescriptor } from './descriptors/markdown'
import { createUiDescriptor, getHexaPaletteIcon, HEXA_PALETTE_GROUPS } from './descriptors/hexa'
import { tabsDescriptor } from './descriptors/tabs'
import { toolbarDescriptor } from './descriptors/toolbar'
import { iconDescriptor } from './descriptors/icon'
import { rowDescriptor } from './descriptors/row'
import { ArrangeGrid, Table, WindowLayout } from '@kaspersky/hexa-ui-icons/16'

const DESCRIPTORS: ControlDescriptor<FormControl>[] = [
  buttonDescriptor as ControlDescriptor<FormControl>,
  textDescriptor as ControlDescriptor<FormControl>,
  inputDescriptor as ControlDescriptor<FormControl>,
  checkboxDescriptor as ControlDescriptor<FormControl>,
  radioDescriptor as ControlDescriptor<FormControl>,
  selectDescriptor as ControlDescriptor<FormControl>,
  toggleDescriptor as ControlDescriptor<FormControl>,
  markdownDescriptor as ControlDescriptor<FormControl>,
  ...EXTRA_UI_DSL_TYPES.map((t) => createUiDescriptor(t) as ControlDescriptor<FormControl>),
  tabsDescriptor as ControlDescriptor<FormControl>,
  toolbarDescriptor as ControlDescriptor<FormControl>,
  iconDescriptor as ControlDescriptor<FormControl>,
  rowDescriptor as ControlDescriptor<FormControl>,
]

const BY_TYPE = new Map<FormControlType, ControlDescriptor>(
  DESCRIPTORS.map((d) => [d.type as FormControlType, d])
)

/** Список типов для палитры и drag/drop (без контейнеров — они добавляются отдельно в палитру). */
export const CONTROL_TYPES: readonly FormControlType[] = DESCRIPTORS.filter(
  (d) => d.type !== 'grid' && d.type !== 'row' && d.type !== 'table' && d.type !== 'tabs'
).map((d) => d.type) as readonly FormControlType[]

/** Все типы, включая контейнеры (для валидации при drop). */
export const ALL_CONTROL_TYPES: readonly FormControlType[] = [
  ...CONTROL_TYPES,
  'grid',
  'row',
  'table',
  'tabs',
] as const

/** Элементы палитры: тип, label, Icon (без контейнеров — они в PALETTE_WITH_LAYOUT). */
export const PALETTE_ITEMS = DESCRIPTORS.filter(
  (d) => d.type !== 'grid' && d.type !== 'row' && d.type !== 'table' && d.type !== 'tabs'
).map((d) => ({
  type: d.type as FormControlType,
  label: d.label,
  Icon: d.Icon,
}))

/** Элемент палитры: тип, label, Icon; для hexa — componentId. */
export interface PaletteItem {
  type: FormControlType
  label: string
  Icon: React.ComponentType
  componentId?: string
}

/** Группы палитры по семантике: разметка, затем Hexa UI по группам, затем «Прочее» (иконка). Блока «Контролы формы» нет — все элементы в семантических группах Hexa. */
export function getPaletteGroups(): { group: string; items: PaletteItem[] }[] {
  const layoutItems: PaletteItem[] = [
    { type: 'row', label: 'Ряд', Icon: rowDescriptor.Icon },
    { type: 'grid', label: 'Сетка', Icon: ArrangeGrid },
    { type: 'table', label: 'Таблица', Icon: Table },
    { type: 'tabs', label: 'Табы', Icon: WindowLayout },
  ]
  const hexaGroups = HEXA_PALETTE_GROUPS.map((g) => ({
    group: g.group,
    items: g.componentIds.map((componentId): PaletteItem => {
      const dslType = COMPONENT_ID_TO_DSL_TYPE[componentId] as FormControlType
      return {
        type: dslType,
        label: componentId === 'Heading' ? 'Заголовок' : componentId,
        Icon: getHexaPaletteIcon(componentId),
      }
    }),
  }))
  const otherItems: PaletteItem[] = DESCRIPTORS.filter(
    (d) => d.type === 'toolbar' || d.type === 'icon'
  ).map((d) => ({
    type: d.type as FormControlType,
    label: d.label,
    Icon: d.Icon,
  }))
  const rest = otherItems.length > 0 ? [{ group: 'Прочее', items: otherItems }] : []
  return [{ group: 'Разметка', items: layoutItems }, ...hexaGroups, ...rest]
}

export function getDescriptor(type: FormControlType): ControlDescriptor | undefined {
  return BY_TYPE.get(type)
}

/** Создаёт новый контрол заданного типа с уникальным id. */
export function createControl(type: FormControlType, _options?: { componentId?: string }): FormControl {
  const descriptor = BY_TYPE.get(type)
  if (!descriptor) {
    const id = `${type}-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`
    if (type === 'grid') {
      return { type: 'grid', id, rows: 2, cols: 2, children: Array(4).fill(null) } as FormControl
    }
    if (type === 'table') {
      return { type: 'table', id, rows: 2, cols: 2, children: Array(4).fill(null) } as FormControl
    }
    if (type === 'tabs') {
      return {
        type: 'tabs',
        id,
        items: [
          { key: 'tab1', label: 'Вкладка 1', children: [] },
          { key: 'tab2', label: 'Вкладка 2', children: [] },
        ],
        activeKey: 'tab1',
      } as FormControl
    }
    if (type === 'toolbar') {
      return {
        type: 'toolbar',
        id,
        left: [
          { type: 'button', key: '1', label: 'Изменить' },
          { type: 'divider', key: 'd1' },
          { type: 'button', key: '2', label: 'Обновить' },
        ],
        right: [{ type: 'button', key: 'r1', label: 'Действие' }],
        leftLimit: 0,
        sticky: 0,
        autoDropdown: false,
      } as FormControl
    }
    return { type, id } as FormControl
  }
  const base = descriptor.createDefault()
  const id = `${type}-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`
  return { ...base, id } as FormControl
}
