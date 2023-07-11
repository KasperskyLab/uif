import { DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components'

export namespace StyleHelpers {
  export type KeyValueMap<T, V> = {
    [Key in T as string | number | symbol]: V;
  };

  export type CssStylesMap<T extends string | number | symbol | object> =
    KeyValueMap<T, FlattenInterpolation<ThemeProps<DefaultTheme>>>;

  export type CssStylesRecordMap<T, U> =
    KeyValueMap<T, Record<U, FlattenInterpolation<ThemeProps<DefaultTheme>>>>;
}
