// The `use-sync-external-store` package ships no type declarations for its
// subpath entry points. We only use the shim's selector-aware variant, which
// works on React 17 and forwards to the native `useSyncExternalStore` on 18/19.
declare module 'use-sync-external-store/shim/with-selector' {
  export function useSyncExternalStoreWithSelector<Snapshot, Selection> (
    subscribe: (onStoreChange: () => void) => () => void,
    getSnapshot: () => Snapshot,
    getServerSnapshot: undefined | null | (() => Snapshot),
    selector: (snapshot: Snapshot) => Selection,
    isEqual?: (a: Selection, b: Selection) => boolean
  ): Selection
}
