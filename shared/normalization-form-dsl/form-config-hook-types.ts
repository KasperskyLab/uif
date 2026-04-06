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

/** Тип фабрики `default export` модуля `*.config-hook.ts`. */
export type FormConfigHookFactory<ControlId extends string> = () => FormConfigHookRegistry<ControlId>

/**
 * Модель модуля `*.schema.ts` с сохранением литералов `elements` (`as const`).
 */
export type FormSchemaDefinition<Elements extends readonly unknown[]> = Pick<
  FormData,
  'name' | 'id'
> & {
  configHook?: FormData['configHook']
  schema?: FormData['schema']
  handlers?: FormData['handlers']
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

/** Фабрика реестра для той же схемы (`default export` `*.config-hook.ts`). */
export type FormConfigHookFactoryFor<Schema extends FormData> =
  () => FormConfigHookRegistryFor<Schema>
