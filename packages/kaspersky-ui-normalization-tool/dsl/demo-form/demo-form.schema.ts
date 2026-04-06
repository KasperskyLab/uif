export default {
  name: 'Демо: сетка и таблица',
  id: 'demo-form',
  configHook: () => import('./demo-form.config-hook.ts'),
  elements: [
    {
      type: 'grid',
      id: 'grid-1774124980818-7sslddg',
      rows: 2,
      cols: 2,
      children: [
        {
          type: 'text',
          id: 'text-1774124983057-g88o6vy',
        },
        {
          type: 'input',
          id: 'demo-button-text-source',
          text: 'Текст кнопки (state)',
          value: 'Значение из формы',
          placeholder: 'Меняется подпись кнопки',
        },
        null,
        {
          type: 'button',
          id: 'button-1774124998740-k5kscyr',
        },
      ],
    },
    {
      type: 'table',
      id: 'table-demo-main',
      rows: 2,
      cols: 3,
      children: [
        null,
        {
          type: 'text',
          id: 'text-table-1',
        },
        {
          type: 'button',
          id: 'button-table-1',
        },
        {
          type: 'text',
          id: 'text-table-plain',
        },
        {
          type: 'button',
          id: 'button-table-2',
        },
        {
          type: 'text',
          id: 'text-table-2',
        },
      ],
      emptyText: 'Нет данных в ячейках',
      rowMode: 'standard',
      columnVerticalAlign: 'middle',
      toolbar: {
        left: [
          { type: 'button', key: 'add', label: 'Добавить' },
          { type: 'divider', key: 'd1' },
          { type: 'button', key: 'refresh', label: 'Обновить' },
        ],
        right: [{ type: 'button', key: 'export', label: 'Экспорт' }],
      },
    },
  ],
}
