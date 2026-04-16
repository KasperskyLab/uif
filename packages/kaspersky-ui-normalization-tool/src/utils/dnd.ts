import React from 'react'
import type {
  FormControl,
  FormControlType,
  GridControl,
  RowControl,
  TableControl,
  TabsControl,
} from '../types/form-dsl'
import {
  setGridChildrenInTree,
  setTableChildrenInTree,
  findControlInTree,
} from '../types/form-dsl'
import { createControl, ALL_CONTROL_TYPES } from '../controls/registry'

export const DATA_ID_KEY = 'application/x-form-control-id'
export const DATA_TYPE_KEY = 'application/x-form-control-type'

export function getDropTypeAndOptions(
  e: React.DragEvent | DragEvent,
): { type: FormControlType; options?: { componentId?: string } } | null {
  const dt = e.dataTransfer as DataTransfer
  const raw = dt.getData(DATA_TYPE_KEY) || dt.getData('text/plain')
  if (!raw) return null
  const type = raw.includes(':') ? raw.split(':')[0] : raw
  if (!type || !ALL_CONTROL_TYPES.includes(type as FormControl['type'])) return null
  return { type: type as FormControlType }
}

/** Перемещает контрол с fromId на позицию toIndex в корневом списке. */
export function applyRootReorder(
  controls: FormControl[],
  fromId: string,
  toIndex: number,
): FormControl[] {
  const fromIndex = controls.findIndex((c) => c.id === fromId)
  if (fromIndex === -1) return controls
  const to = fromIndex < toIndex ? toIndex - 1 : toIndex
  if (to === fromIndex) return controls
  const next = [...controls]
  const [removed] = next.splice(fromIndex, 1)
  next.splice(to, 0, removed)
  return next
}

/** Вставляет новый контрол type на позицию index в корневом списке. */
export function applyRootInsert(
  controls: FormControl[],
  type: FormControlType,
  index: number,
): FormControl[] {
  const next = [...controls]
  next.splice(index, 0, createControl(type))
  return next
}

/**
 * Перемещает контрол fromId внутри grid-ячеек — меняет его ячейку с целевой toCellIndex.
 * Если fromId не найден в children контейнера — no-op.
 */
export function applyGridCellMove(
  controls: FormControl[],
  gridId: string,
  fromId: string,
  toCellIndex: number,
): FormControl[] {
  const grid = findControlInTree(controls as FormControl[], gridId) as GridControl | null
  if (!grid || grid.type !== 'grid') return controls
  const fromIdx = grid.children.findIndex((ch) => ch?.id === fromId)
  if (fromIdx === -1 || fromIdx === toCellIndex) return controls
  const children = [...grid.children]
  const a = children[fromIdx]
  const b = children[toCellIndex]
  children[fromIdx] = b ?? null
  children[toCellIndex] = a ?? null
  return setGridChildrenInTree(
    controls as (FormControl | null)[],
    gridId,
    children,
  ) as FormControl[]
}

/**
 * Вставляет новый контрол type в ячейку toCellIndex грида.
 * Существующий контрол в этой ячейке заменяется.
 */
export function applyGridCellInsert(
  controls: FormControl[],
  gridId: string,
  type: FormControlType,
  toCellIndex: number,
): FormControl[] {
  const grid = findControlInTree(controls as FormControl[], gridId) as GridControl | null
  if (!grid || grid.type !== 'grid') return controls
  const children = [...grid.children]
  children[toCellIndex] = createControl(type)
  return setGridChildrenInTree(
    controls as (FormControl | null)[],
    gridId,
    children,
  ) as FormControl[]
}

/**
 * Перемещает контрол fromId внутри table-ячеек — меняет его ячейку с целевой toCellIndex.
 * Если fromId не найден в children контейнера — no-op.
 */
export function applyTableCellMove(
  controls: FormControl[],
  tableId: string,
  fromId: string,
  toCellIndex: number,
): FormControl[] {
  const table = findControlInTree(controls as FormControl[], tableId) as TableControl | null
  if (!table || table.type !== 'table') return controls
  const fromIdx = table.children.findIndex((ch) => ch?.id === fromId)
  if (fromIdx === -1 || fromIdx === toCellIndex) return controls
  const children = [...table.children]
  const a = children[fromIdx]
  const b = children[toCellIndex]
  children[fromIdx] = b ?? null
  children[toCellIndex] = a ?? null
  return setTableChildrenInTree(
    controls as (FormControl | null)[],
    tableId,
    children,
  ) as FormControl[]
}

/**
 * Удаляет контрол с id из дерева.
 * Корневые контролы удаляются из массива.
 * Дочерние в Grid/Table — заменяются на null (пустая ячейка).
 * Дочерние в Row/Tabs — удаляются из массива.
 */
export function removeControlFromTree(
  controls: FormControl[],
  id: string,
): FormControl[] {
  // Корневой контрол
  const rootFiltered = controls.filter((c) => c.id !== id)
  if (rootFiltered.length !== controls.length) return rootFiltered

  return controls.map((c): FormControl => {
    if (c.type === 'grid') {
      const g = c as GridControl
      const newChildren = g.children.map((ch) => (ch?.id === id ? null : ch))
      if (newChildren.some((ch, i) => ch !== g.children[i])) {
        return { ...g, children: newChildren }
      }
      const deeper = removeControlFromTree(
        g.children.filter((x): x is FormControl => x != null),
        id,
      )
      if (deeper.length !== g.children.filter(Boolean).length) {
        return { ...g, children: deeper }
      }
    }
    if (c.type === 'table') {
      const t = c as TableControl
      const newChildren = t.children.map((ch) => (ch?.id === id ? null : ch))
      if (newChildren.some((ch, i) => ch !== t.children[i])) {
        return { ...t, children: newChildren }
      }
    }
    if (c.type === 'row') {
      const r = c as RowControl
      const newChildren = r.children.filter((ch) => ch.id !== id)
      if (newChildren.length !== r.children.length) {
        return { ...r, children: newChildren }
      }
    }
    if (c.type === 'tabs') {
      const t = c as TabsControl
      const newItems = t.items.map((item) => ({
        ...item,
        children: item.children.filter((ch) => ch?.id !== id),
      }))
      if (newItems.some((item, i) => item.children.length !== t.items[i].children.length)) {
        return { ...t, items: newItems }
      }
    }
    return c
  })
}

/**
 * Вставляет новый контрол type в ячейку toCellIndex таблицы.
 * Существующий контрол в этой ячейке заменяется.
 */
export function applyTableCellInsert(
  controls: FormControl[],
  tableId: string,
  type: FormControlType,
  toCellIndex: number,
): FormControl[] {
  const table = findControlInTree(controls as FormControl[], tableId) as TableControl | null
  if (!table || table.type !== 'table') return controls
  const children = [...table.children]
  children[toCellIndex] = createControl(type)
  return setTableChildrenInTree(
    controls as (FormControl | null)[],
    tableId,
    children,
  ) as FormControl[]
}
