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
  /**
   * Единый модуль `configHook` на форму (только `.ts`).
   * В исходнике — строка пути или `() => import('...')`; после нормализации — строка.
   */
  configHook?: string | (() => Promise<unknown>)
  /** Схема данных формы: имя поля -> тип и описание */
  schema?: Record<string, FieldSchema>
  /** Обработчики событий формы: имя события → путь к файлу-обработчику */
  handlers?: Record<string, string>
  elements: import('../normalization-form-dsl/form-dsl-core').FormControl[]
}
