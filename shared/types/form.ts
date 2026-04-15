/**
 * Модель корня формы в DSL (default export модуля формы).
 * Контролы и сериализация — в `shared/normalization-form-dsl/form-dsl-core`.
 */

/** Описание одного поля в схеме данных формы. */
export interface FieldSchema {
  type: 'string' | 'number' | 'boolean' | 'date' | 'array'
  label?: string
}

export interface FormData {
  /** Идентификатор формы (и имя каталога `dsl/{id}/`) */
  id: string
  /** Схема данных формы: имя поля -> тип и описание */
  schema?: Record<string, FieldSchema>
  /**
   * Форма: жизненный цикл и прочие обработчики.
   * **`onFormInit`** / **`onFormSubmit`** — прямые функции **`(slice) => …`** или ленивый
   * **`() => import('./module.ts')`** (из модуля читаются экспорты с теми же именами).
   */
  handlers?: Record<
    string,
    string | (() => Promise<unknown>) | ((...args: unknown[]) => unknown)
  >
  /**
   * Контракт данных формы: модуль **`{formId}.contract.ts`** (строка пути от
   * каталога формы, ленивый **`import()``** или функция — как у **`handlers`**).
   */
  modelContract?:
    | string
    | (() => Promise<unknown>)
    | ((...args: unknown[]) => unknown)
  elements: import('../normalization-form-dsl/form-dsl-core').FormControl[]
}
