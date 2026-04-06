import { defineFormSchema } from '@normalization/form-dsl'

export default defineFormSchema({
  name: 'Демо: сетка и таблица',
  id: 'demo',
  configHook: './demo.config-hook.ts',
  elements: [
    {
      type: 'grid',
      id: 'demo.grid',
      children: [
        {
          type: 'text',
          id: 'demo.grid.text',
        },
        {
          type: 'input',
          id: 'demo.grid.input',
          text: 'Текст кнопки (state)',
          value: 'Значение из формы',
          placeholder: 'Меняется подпись кнопки',
        },
        null,
        {
          type: 'button',
          id: 'demo.grid.button',
        },
      ],
    },
    {
      type: 'table',
      id: 'demo.table',
      rows: 2,
      cols: 3,
      children: [
        null,
        {
          type: 'text',
          id: 'demo.table.text1',
        },
        {
          type: 'button',
          id: 'demo.table.button1',
        },
        {
          type: 'text',
          id: 'demo.table.textPlain',
        },
        {
          type: 'button',
          id: 'demo.table.button2',
        },
        {
          type: 'text',
          id: 'demo.table.text2',
        },
      ],
      emptyText: 'Нет данных в ячейках',
      rowMode: 'standard',
      columnVerticalAlign: 'middle',
      toolbar: {
        left: [
          {
            type: 'button',
            key: 'add',
            label: 'Добавить',
          },
          {
            type: 'divider',
            key: 'd1',
          },
          {
            type: 'button',
            key: 'refresh',
            label: 'Обновить',
          },
        ],
        right: [
          {
            type: 'button',
            key: 'export',
            label: 'Экспорт',
          },
        ],
      },
    },
  ] as const,
})
