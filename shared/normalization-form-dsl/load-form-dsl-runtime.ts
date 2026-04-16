type FormDslBrowserRuntime = typeof import('./form-dsl-browser-runtime')

let cached: Promise<FormDslBrowserRuntime> | undefined

/**
 * Один раз загружает async-чанк с **`parseFormTs`**, **`formToTs`**, транспиляцией
 * configHook и зависимостью **Sucrase**. Повторные вызовы возвращают тот же
 * `Promise` (лениво, по требованию).
 */
export function loadFormDslBrowserRuntime(): Promise<FormDslBrowserRuntime> {
  if (!cached) {
    cached = import('./form-dsl-browser-runtime')
  }
  return cached
}
