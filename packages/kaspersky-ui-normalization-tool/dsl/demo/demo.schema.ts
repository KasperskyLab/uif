import { defineFormSchema } from '@normalization/form-dsl'
import { configHook } from './demo.config-hook'
import { onInit, onSubmit } from './demo.data'

export default defineFormSchema({
  id: 'demo',
  configHook,
  handlers: {
    onInit,
    onSubmit,
  },
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
    },
  ] as const,
})
