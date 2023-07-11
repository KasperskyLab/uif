type PropValue = string | number
type Key = string | number | symbol

export type GenericObject = {
  [key: Key]: GenericObject | PropValue,
}

type Join<
  Left extends Key | undefined,
  Right extends Key | undefined,
> = Left extends string | number
  ? Right extends string | number
    ? `${Left}.${Right}`
    : Left
  : Right extends string | number
    ? Right
    : undefined

export type NestedPaths<
  T extends GenericObject,
  Path extends Key | undefined = undefined,
> = {
  [K in keyof T]: T[K] extends Key | undefined
    ? Join<Path, K>
    : Required<T[K]> extends infer U
      ? U extends GenericObject
        ? NestedPaths<U, Join<Path, K>>
        : never
      : never
}[keyof T]

export function getFromProps<
  Config extends GenericObject,
  Themed extends { cssConfig: Config } = { cssConfig: Config }
> () {
  return (path: NestedPaths<Required<Config>>) => {
    return ({ cssConfig }: Themed) =>
      path?.toString()
        .split('.')
        .reduce((depth: GenericObject | PropValue, value: string) =>
          isPropValue(depth) ? depth : depth[value]
        , cssConfig)
  }
}

export function getFromInnerProps<
  Config extends Record<Key, GenericObject>,
  Themed extends { cssConfig: Config } = { cssConfig: Config }
> (key: keyof Config) {
  return (path: string) => {
    return ({ cssConfig }: Themed) =>
      path
        .split('.')
        .reduce((depth: GenericObject | PropValue, value: string) =>
          isPropValue(depth) ? depth : depth[value]
        , cssConfig[key])
  }
}

function isPropValue (val: unknown): val is PropValue {
  return typeof val !== 'object'
}
