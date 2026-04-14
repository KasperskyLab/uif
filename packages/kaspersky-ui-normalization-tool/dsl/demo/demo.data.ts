import type { FormSlice } from '@normalization/form-dsl'
type DemoElementId =
  | 'demo.grid'
  | 'demo.grid.text'
  | 'demo.grid.input'
  | 'demo.grid.button'
  | 'demo.table'
  | 'demo.table.text1'
  | 'demo.table.button1'
  | 'demo.table.textPlain'
  | 'demo.table.button2'
  | 'demo.table.text2'

const DEMO_GRID_INPUT_ID =
  'demo.grid.input' satisfies DemoElementId
const DEMO_FAKE_LOAD_MS = 450

async function loadFakeDemoFormState(): Promise<Record<string, unknown>> {
  await new Promise((r) => setTimeout(r, DEMO_FAKE_LOAD_MS))
  return {
    [DEMO_GRID_INPUT_ID]: 'Текст с фейкового API (onInit)',
  }
}

export async function onInit(slice: FormSlice): Promise<void> {
  const fake = await loadFakeDemoFormState()
  slice.mergeState?.(fake)
  console.log('[demo.data] onInit: подставлены фейковые данные', fake)
}

export async function onSubmit(slice: FormSlice): Promise<void> {
  console.log('[demo.data] onSubmit: state формы', slice.state)
}
