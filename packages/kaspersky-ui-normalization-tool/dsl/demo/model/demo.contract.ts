/**
 * Контракт модели демо-формы: **тип** фрагмента **`state`** для **data.ts**;
 * **`MODEL_INITIAL`** — тот же контур данных с начальными значениями, по нему
 * **normalization-tool** строит списки путей (**dataSource.modelPath**, **modelPath** в условиях).
 * В схеме — **`modelContract`** → этот файл.
 */
export type DemoFormModelState = {
  model: { headline: string }
  items: Array<{ caption: string }>
  isButtonVisible: boolean
  isButtonDisabled: boolean
}

export const MODEL_INITIAL = {
  model: { headline: '' },
  items: [{ caption: '' }],
  isButtonVisible: true,
  isButtonDisabled: false,
} satisfies DemoFormModelState
