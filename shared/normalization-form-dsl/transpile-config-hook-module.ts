import { transform } from 'sucrase'

/** Исходник `.ts` configHook → JS для `import(blobUrl)` в браузере. */
export function transpileConfigHookSource(source: string): string {
  return transform(source, {
    transforms: ['typescript'],
    filePath: 'config-hook.ts',
  }).code
}

export function isConfigHookPathTs(path: string): boolean {
  return path.toLowerCase().endsWith('.ts')
}
