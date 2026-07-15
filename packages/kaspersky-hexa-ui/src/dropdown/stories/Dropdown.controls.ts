import { PropPresentationMap } from '@sb/components/Documentation'

import { dropdownPlacements } from './dropdownStoryFixtures'
import type { Trigger } from '../types'

const dropdownTriggers: Trigger[] = ['click', 'hover', 'contextMenu']

export const dropdownPropPresentation: PropPresentationMap = {
  overlay: {
    control: 'object',
    description: 'Содержимое меню: массив объектов пунктов, JSX-элемент или функция, возвращающая JSX.'
  },
  children: {
    control: 'text',
    description: 'Подпись кнопки-триггера в Playground.'
  },
  trigger: {
    control: 'select',
    description: 'Событие, которое открывает меню.',
    options: [...dropdownTriggers]
  },
  placement: {
    control: 'select',
    description: 'Позиция меню относительно триггера.',
    options: [...dropdownPlacements]
  },
  disabled: {
    control: 'boolean',
    description: 'Отключает открытие меню и передаёт состояние disabled дочернему элементу.'
  },
  loading: {
    control: 'boolean',
    description: 'Показывает Loader вместо пунктов меню, когда overlay передан массивом.'
  },
  visible: {
    control: 'boolean',
    description: 'Управляет видимостью меню извне.'
  },
  header: {
    control: 'object',
    description: 'Фиксированный блок в начале меню. Работает для overlay в виде массива.'
  },
  footer: {
    control: 'object',
    description: 'Фиксированный блок в конце меню. Работает для overlay в виде массива.'
  },
  selectedItemsKeys: {
    control: 'object',
    description: 'Ключи выделенных пунктов меню для корневого меню.'
  },
  popupMaxHeight: {
    control: { type: 'number', min: 100, step: 1 },
    description: 'Максимальная высота меню в пикселях.'
  },
  usePortal: {
    control: 'boolean',
    description: 'Монтирует overlay в document.body.'
  },
  theme: {
    control: 'radio',
    description: 'Тема оформления меню.',
    options: ['light', 'dark']
  }
}
