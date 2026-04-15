import type { FormSlice } from '@normalization/form-dsl'
import type { DemoFormControlIds } from './demo.config-hook'

const DEMO_GRID_INPUT_ID =
  'demo.grid.input' satisfies DemoFormControlIds
const DEMO_FAKE_LOAD_MS = 450

async function loadFakeDemoFormState(): Promise<Record<string, unknown>> {
  await new Promise((r) => setTimeout(r, DEMO_FAKE_LOAD_MS))
  return {
    [DEMO_GRID_INPUT_ID]: 'Текст с фейкового API (onFormInit)',
  }
}

export async function onFormInit(slice: FormSlice): Promise<void> {
  const fake = await loadFakeDemoFormState()
  slice.mergeState?.(fake)
  console.log('[demo.data] onFormInit: подставлены фейковые данные', fake)
}

export async function onFormSubmit(slice: FormSlice): Promise<void> {
  console.log('[demo.data] onFormSubmit: state формы', slice.state)
}
