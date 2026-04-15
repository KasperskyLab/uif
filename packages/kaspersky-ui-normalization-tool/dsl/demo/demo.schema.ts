import { defineFormSchema } from '@normalization/form-dsl'
import { onFormInit, onFormSubmit } from './model/demo.data'
import {
  useDemoButton,
  useDemoGrid,
  useDemoGridInput,
  useDemoGridSubmitButton,
  useDemoTable,
  useDemoText,
} from './demo.config-hook'

export default defineFormSchema({
  id: 'demo',
  modelContract: './model/demo.contract.ts',
  handlers: {
    onFormInit,
    onFormSubmit,
  },
  elements: [
    {
      type: 'grid',
      id: 'demo.grid',
      handlers: { useConfig: useDemoGrid },
      children: [
        {
          type: 'text',
          id: 'demo.grid.text',
          dataBindPath: 'model.headline',
          handlers: { useConfig: useDemoText },
        },
        {
          type: 'input',
          id: 'demo.grid.input',
          handlers: { useConfig: useDemoGridInput },
        },
        null,
        {
          type: 'button',
          id: 'demo.grid.button',
          handlers: { useConfig: useDemoGridSubmitButton },
        },
      ],
    },
    {
      type: 'table',
      id: 'demo.table',
      handlers: { useConfig: useDemoTable },
      children: [
        null,
        {
          type: 'text',
          id: 'demo.table.text1',
          handlers: { useConfig: useDemoText },
        },
        {
          type: 'button',
          id: 'demo.table.button1',
          handlers: { useConfig: useDemoButton },
        },
        {
          type: 'text',
          id: 'demo.table.textPlain',
          handlers: { useConfig: useDemoText },
        },
        {
          type: 'button',
          id: 'demo.table.button2',
          handlers: { useConfig: useDemoButton },
        },
        {
          type: 'text',
          id: 'demo.table.text2',
          handlers: { useConfig: useDemoText },
        },
      ],
    },
  ] as const,
})
