import { transform } from 'sucrase'

/** Исходник .ts → JS для динамического import() в браузере (configHook). */
export function transpileConfigHookSource(source: string): string {
  return transform(source, {
    transforms: ['typescript'],
    filePath: 'config-hook.ts',
  }).code
}

export function isConfigHookPathTs(path: string): boolean {
  return path.toLowerCase().endsWith('.ts')
}
