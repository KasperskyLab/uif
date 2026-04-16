import type { FormSlice, FormValidationResult } from '@normalization/form-dsl'
import type { DemoFormControlIds } from '../demo.config-hook'
import type { DemoFormModelState } from './demo.contract'

const DEMO_GRID_INPUT_ID =
  'demo.grid.input' satisfies DemoFormControlIds
const DEMO_FAKE_LOAD_MS = 450

async function loadFakeDemoFormState(): Promise<
  DemoFormModelState & Record<string, unknown>
> {
  await new Promise((r) => setTimeout(r, DEMO_FAKE_LOAD_MS))
  const modelSlice: DemoFormModelState = {
    model: { headline: 'Заголовок модели (onFormInit)' },
    items: [{ caption: 'Пункт списка (items.0)' }],
    isButtonVisible: true,
    isButtonDisabled: false,
  }
  return {
    [DEMO_GRID_INPUT_ID]: 'Текст с фейкового API (onFormInit)',
    ...modelSlice,
  }
}

export async function onFormInit(slice: FormSlice): Promise<void> {
  const fake = await loadFakeDemoFormState()
  slice.mergeState?.(fake)
  console.log('[model/demo.data] onFormInit: подставлены фейковые данные', fake)
}

export async function onFormSubmit(slice: FormSlice): Promise<void> {
  console.log('[model/demo.data] onFormSubmit: state формы', slice.state)
}

/** Демо: поле сетки не должно быть пустым (ошибка под контролом в превью). */
export function onFormValidate(slice: FormSlice): FormValidationResult {
  const raw = slice.state[DEMO_GRID_INPUT_ID]
  const v = typeof raw === 'string' ? raw.trim() : ''
  if (v.length === 0) {
    return {
      valid: false,
      errorsByControlId: {
        [DEMO_GRID_INPUT_ID]: {
          message: 'Заполните поле (onFormValidate)',
        },
      },
    }
  }
  return { valid: true }
}
