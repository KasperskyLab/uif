/**
 * Типы для форменного configHook: вывод id из `elements` и реестр по `control.id`.
 */
import type { FormData } from '../types/form'
import type { FormSlice } from './form-dsl-core'

declare const definedFormSchemaIdsBrand: unique symbol

/**
 * Результат `defineFormSchema`: обычный `FormData` плюс фантомный тип union `id`
 * для `FormControlIdsOf` без `as` и без дублирования алиаса в `*.schema.ts`.
 */
export type DefinedFormData<ControlIds extends string = string> = FormData & {
  readonly [definedFormSchemaIdsBrand]?: ControlIds
}

/** Один хук в реестре: пропсы узла или `null` (не рендерить). */
export type FormConfigHookFn = (slice: FormSlice) => unknown

/**
 * Реестр хуков; не у каждого контрола из схемы обязан быть ключ —
 * только у тех, кому нужен хук.
 */
export type FormConfigHookRegistry<ControlId extends string> = Partial<
  Record<ControlId, FormConfigHookFn>
>

/**
 * Колбэки жизненного цикла — на верхнем уровне возврата модуля рядом с **`elements`**.
 * Синхронные или **`async`** (**`Promise<void>`**); рендерер оборачивает вызов в
 * **`Promise.resolve`**.
 */
export type FormConfigHookLifecycleFn = (slice: FormSlice) => void | Promise<void>

export interface FormConfigHookLifecycle {
  onInit?: FormConfigHookLifecycleFn
  onSubmit?: FormConfigHookLifecycleFn
}

const FORM_CONFIG_HOOK_LIFECYCLE_KEYS = new Set<string>(['onInit', 'onSubmit'])

/** Зарезервированы на верхнем уровне возврата хука (не **`control.id`**). */
const FORM_CONFIG_HOOK_TOP_RESERVED_KEYS = new Set<string>([
  ...FORM_CONFIG_HOOK_LIFECYCLE_KEYS,
  'elements',
])

function mergeRegistryFromElementsObject(
  registry: Record<string, (slice: FormSlice) => unknown>,
  elements: unknown,
): void {
  if (!elements || typeof elements !== 'object' || Array.isArray(elements)) return
  for (const [key, val] of Object.entries(elements as Record<string, unknown>)) {
    if (typeof val === 'function') {
      registry[key] = val as (slice: FormSlice) => unknown
    }
  }
}

/**
 * Вызывает фабрику `configHook` и отделяет **`onInit`** / **`onSubmit`** от реестра.
 * Реестр: **`elements`** (`control.id` → хук), при отсутствии — плоские ключи верхнего уровня
 * (устаревший вид). Ключ **`elements`** на верхнем уровне зарезервирован.
 */
export function splitFormConfigHookFactoryResult(
  factory: unknown,
): {
  registry: Record<string, (slice: FormSlice) => unknown>
  lifecycle: FormConfigHookLifecycle
} | null {
  if (typeof factory !== 'function') return null
  try {
    const out = (factory as () => unknown)()
    if (!out || typeof out !== 'object' || Array.isArray(out)) return null
    const registry: Record<string, (slice: FormSlice) => unknown> = {}
    const lifecycle: FormConfigHookLifecycle = {}
    const top = out as Record<string, unknown>
    mergeRegistryFromElementsObject(registry, top.elements)
    for (const [key, val] of Object.entries(top)) {
      if (FORM_CONFIG_HOOK_LIFECYCLE_KEYS.has(key) && typeof val === 'function') {
        if (key === 'onInit') lifecycle.onInit = val as FormConfigHookLifecycleFn
        if (key === 'onSubmit') lifecycle.onSubmit = val as FormConfigHookLifecycleFn
        continue
      }
      if (FORM_CONFIG_HOOK_TOP_RESERVED_KEYS.has(key)) continue
      if (typeof val === 'function') {
        registry[key] = val as (slice: FormSlice) => unknown
      }
    }
    return { registry, lifecycle }
  } catch {
    return null
  }
}

/**
 * Возврат модуля `*.config-hook.ts`.
 * Поддерживаем оба формата:
 * - новый/явный: lifecycle + секция `elements`
 * - плоский: lifecycle и ключи `control.id` на верхнем уровне
 */
export type FormConfigHookModuleReturn<ControlId extends string> =
  | (FormConfigHookLifecycle & {
      elements: FormConfigHookRegistry<ControlId>
    })
  | (FormConfigHookLifecycle & FormConfigHookRegistry<ControlId>)

/** Тип фабрики именованного экспорта `configHook` модуля `*.config-hook.ts`. */
export type FormConfigHookFactory<ControlId extends string> =
  () => FormConfigHookModuleReturn<ControlId>

/**
 * Модель модуля `*.schema.ts` с сохранением литералов `elements` (`as const`).
 */
export type FormSchemaDefinition<Elements extends readonly unknown[]> = Pick<
  FormData,
  'id'
> & {
  configHook?:
    | FormData['configHook']
    | FormConfigHookFactory<ExtractFormControlIdsFromElements<Elements>>
  schema?: FormData['schema']
  handlers?: Record<
    string,
    string | (() => Promise<unknown>) | FormConfigHookLifecycleFn
  >
  elements: Elements
}

/** Одним объектом задаёт схему; `export default defineFormSchema(...)` — уже `FormData`. */
export function defineFormSchema<const Elements extends readonly unknown[]>(
  schema: FormSchemaDefinition<Elements>,
): DefinedFormData<ExtractFormControlIdsFromElements<Elements>> {
  return schema as unknown as DefinedFormData<
    ExtractFormControlIdsFromElements<Elements>
  >
}

// --- Вывод union `id` из `readonly [...] as const` дерева elements ---

type ExtractIdsFromNode<N> = N extends null | undefined
  ? never
  : N extends { id: infer I extends string }
    ? | I
      | (N extends { children?: infer C }
          ? C extends readonly unknown[]
            ? ExtractIdsFromArray<C>
            : never
          : never)
      | (N extends { items?: infer It }
          ? It extends readonly { children?: readonly unknown[] }[]
            ? ExtractIdsFromTabItems<It>
            : never
          : never)
    : never

type ExtractIdsFromArray<Arr extends readonly unknown[]> =
  Arr[number] extends infer Cell ? ExtractIdsFromNode<Cell> : never

type ExtractIdsFromTabItems<
  Items extends readonly { children?: readonly unknown[] }[],
> = Items[number] extends { children?: infer Ch }
  ? Ch extends readonly unknown[]
    ? ExtractIdsFromArray<Ch>
    : never
  : never

/** Все строковые `id` узлов в корневом массиве `elements` (вложенность —
 * grid / table / row / tabs). */
export type ExtractFormControlIdsFromElements<
  Elements extends readonly unknown[],
> = ExtractIdsFromArray<Elements>

/** Union `control.id` по результату `defineFormSchema` / дереву `elements`. */
export type FormControlIdsOf<Schema> = Schema extends DefinedFormData<infer I>
  ? I
  : Schema extends {
        elements: infer E extends readonly unknown[]
      }
    ? ExtractFormControlIdsFromElements<E>
    : never

/** Реестр по `control.id` для `typeof schema` (`defineFormSchema` / default export схемы). */
export type FormConfigHookRegistryFor<Schema extends FormData> =
  FormConfigHookRegistry<FormControlIdsOf<Schema>>

/** Фабрика для той же схемы (`default export` `*.config-hook.ts`). */
export type FormConfigHookFactoryFor<Schema extends FormData> =
  () => FormConfigHookModuleReturn<FormControlIdsOf<Schema>>

/**
 * Типизированная запись хука для элемента формы.
 * Нужна для сценариев, где реестр собирается не литералом объекта,
 * чтобы не потерять проверку `elementId`.
 */
export interface FormConfigHookElementEntry<ControlId extends string> {
  elementId: ControlId
  hook: FormConfigHookFn
}

/**
 * Создаёт типизированную запись `elementId -> hook` для конкретной схемы.
 * Пример: `defineFormConfigHookElement<DemoSchema>('demo.grid', useGrid)`.
 */
export function defineFormConfigHookElement<
  ControlId extends string,
>(
  elementId: ControlId,
  hook: FormConfigHookFn,
): FormConfigHookElementEntry<ControlId> {
  return { elementId, hook }
}

/**
 * Собирает реестр `elements` из массива типизированных записей.
 * Это сохраняет строгую проверку `elementId`, даже если реестр строится
 * программно (через map/reduce/fromEntries).
 */
export function buildFormConfigHookRegistryFor<ControlId extends string>(
  entries: readonly FormConfigHookElementEntry<ControlId>[],
): FormConfigHookRegistry<ControlId> {
  const registry: FormConfigHookRegistry<ControlId> = {}
  for (const entry of entries) {
    registry[entry.elementId] = entry.hook
  }
  return registry
}
