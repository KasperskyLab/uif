import { openNotification } from '@src/notification'
import React from 'react'

import {
  FilterOperation,
  FilterType,
  TableColumn,
  TablePreset,
  TablePresetsProp
} from '../../..'
import { generatedData, MockRow, tableColumns } from '../../../__mocks__/filtersMockData'

export const ids = {
  team: 'tour-team',
  budget: 'tour-budget',
  teamDefault: 'tour-team-default',
  developers: 'tour-developers',
  budgetDefault: 'tour-budget-default',
  budgetPersonal: 'tour-budget-personal',
  created: 'tour-created'
}

const labels: Record<string, string> = {
  fullname: 'Сотрудник',
  group: 'Команда',
  salary: 'Зарплата',
  isTrainee: 'Стажёр'
}
const widths: Record<string, number> = { fullname: 260, group: 180, salary: 160, isTrainee: 140 }

export const columns: TableColumn<MockRow>[] = tableColumns
  .filter(column => column.key in labels)
  .map(column => ({
    ...column,
    title: labels[column.key],
    width: widths[column.key],
    hideColumnAvailable: true,
    show: true
  }))

export const dataSource = generatedData.slice(0, 60).map((row, index) => ({
  ...row,
  key: `tour-row-${index}`,
  group: index % 2 ? 'Developers' : 'Managers',
  salary: 100000 + index * 5000
}))

const columnSettings = () => Object.fromEntries(columns.map((column, sortIndex) => [
  column.key,
  { show: true, sortIndex, width: widths[column.key] }
]))

const settings = (): TablePreset<MockRow>['settings'] => ({
  columns: columnSettings(),
  filters: [],
  sorting: {},
  groupBy: '',
  pageSize: 20
})

export type DemoBackend = {
  created?: TablePreset<MockRow>,
  createdCount?: number,
  lastSaved?: TablePreset<MockRow>,
  deleted: boolean,
  deletedId?: string,
  selectedPresetId?: string,
  beforeDeleteState?: string,
  customActionCount: number
}

// The table owns its working copy. Callbacks imitate a product API; the tour never
// writes table context to fabricate a dirty indicator or a successful operation.
export const makePresets = (backend: DemoBackend): TablePresetsProp<MockRow> => {
  const delay = () => new Promise(resolve => setTimeout(resolve, 180))
  const inspect = (preset: TablePreset<MockRow>) => {
    backend.customActionCount++
    openNotification({
      mode: 'success',
      description: `«${preset.name}»: в пресете сохранены колонки, фильтры, сортировка, группировка и размер страницы. Ширина «Сотрудник»: ${preset.settings.columns?.fullname?.width} px.`
    })
  }

  return {
    views: [
      {
        id: ids.team,
        name: 'Команда',
        description: 'Состав команд, сотрудники и повседневная работа с персоналом.',
        default: true,
        presets: [
          {
            id: ids.teamDefault,
            name: 'Все сотрудники',
            default: true,
            system: true,
            settings: settings()
          },
          {
            id: ids.developers,
            name: 'Разработчики',
            settings: {
              ...settings(),
              filters: [{ name: 'group', condition: FilterOperation.eq, type: FilterType.Enum, value: 'Developers' }],
              groupBy: 'group',
              sorting: { field: 'fullname', direction: 'asc' },
              pageSize: 50
            }
          }
        ],
        settings: {
          toolbarActions: () => [{
            type: 'button',
            key: 'team-action',
            label: 'Добавить сотрудника',
            testId: 'tour-team-action',
            onClick: () => openNotification({ mode: 'success', description: 'Действие view «Команда»: добавление сотрудника.' })
          }],
          presetActions: [{ key: 'tour-inspect-preset', name: 'Посмотреть сохранённую конфигурацию', onClick: inspect }]
        }
      },
      {
        id: ids.budget,
        name: 'Бюджет',
        description: 'Зарплаты и планирование бюджета. Собственные пресеты и финансовые действия.',
        presets: [
          {
            id: ids.budgetDefault,
            name: 'Обзор бюджета',
            default: true,
            system: true,
            settings: {
              ...settings(),
              columns: { ...columnSettings(), isTrainee: { show: false, sortIndex: 3, width: 140 } }
            }
          },
          { id: ids.budgetPersonal, name: 'Мой бюджет', settings: { ...settings(), pageSize: 50 } }
        ],
        settings: {
          toolbarActions: () => [{
            type: 'button',
            key: 'budget-action',
            label: 'Подготовить бюджет',
            testId: 'tour-budget-action',
            onClick: () => openNotification({ mode: 'success', description: 'Действие view «Бюджет»: подготовка бюджета.' })
          }],
          presetActions: [{ key: 'tour-budget-preset-action', name: 'Проверить бюджет', onClick: inspect }]
        }
      }
    ],
    onCreatePreset: async preset => {
      await delay()
      backend.createdCount = (backend.createdCount ?? 0) + 1
      const id = backend.createdCount === 1 ? ids.created : `${ids.created}-${backend.createdCount}`
      const created = { ...preset, id }
      backend.created = created
      backend.lastSaved = created
      backend.deleted = false
      return created
    },
    onUpdatePreset: async preset => {
      await delay()
      backend.lastSaved = preset
      if (preset.id === ids.created) backend.created = preset
      return preset
    },
    onDeletePreset: async preset => {
      await delay()
      if (preset.id === ids.created) backend.deleted = true
    },
    onPresetSelected: async () => {},
    onViewSelected: async () => {}
  }
}
