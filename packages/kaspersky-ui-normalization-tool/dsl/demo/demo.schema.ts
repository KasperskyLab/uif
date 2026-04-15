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
          /** Недоступно, пока в модели нет подписи первого пункта списка */
          disabledWhen: { modelPath: 'items.0.caption', operator: 'empty' },
          handlers: { useConfig: useDemoGridInput },
        },
        null,
        {
          type: 'button',
          id: 'demo.grid.button',
          disabledWhen: {
            modelPath: 'isButtonDisabled',
            operator: 'eq',
            value: 'true',
          },
          visibleWhen: {
            modelPath: 'isButtonVisible',
            operator: 'eq',
            value: 'true',
          },
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
          visibleWhen: { modelPath: 'model.headline', operator: 'notEmpty' },
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
