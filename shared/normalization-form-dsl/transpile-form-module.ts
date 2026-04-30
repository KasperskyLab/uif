import { transform } from 'sucrase'

/** Исходник формы (.ts) → JS для динамического import() в браузере. */
export function transpileFormModuleSource(source: string): string {
  return transform(source, {
    transforms: ['typescript'],
    filePath: 'form.ts',
  }).code
}
