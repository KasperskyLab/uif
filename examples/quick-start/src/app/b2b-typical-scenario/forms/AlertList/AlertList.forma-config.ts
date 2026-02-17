import { z } from 'zod'

import { createFormaConfig } from '../../../../shared/Forma'

/** List params contract (pagination). Used by API layer; no visible form fields. */
const alertListParamsSchema = z.object({
  page: z.number(),
  pageSize: z.number()
})

const alertList = createFormaConfig({
  data: {
    schema: alertListParamsSchema,
    defaultValues: {
      page: 1,
      pageSize: 10
    }
  },
  ui: {
    fields: []
  }
})

export const alertListParamsSchemaExport = alertList.schema
export type AlertListParams = z.infer<typeof alertListParamsSchemaExport>
export const alertListDefaultParams = alertList.defaultValues
export const alertListFormConfig = alertList.config
