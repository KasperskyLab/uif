import { unwrapDisplayCode, wrapForLive } from './liveCodeWrap'

const stripImports = (code: string): string => code.replace(/import\s+[^\n]*\n/g, '')

const isAppComponentDefinition = (code: string): boolean =>
  /^\s*function\s+App\s*\(/m.test(code) || /^\s*const\s+App\s*=/m.test(code)

/**
 * Prepares story example code for react-live (sucrase CJS transform).
 * Based on https://github.com/nlmk-group/ds-2.0/blob/main/src/components/_storybook/Stories/components/Editor.tsx
 *
 * @param setupCode — служебный код на уровне модуля (const, хелперы). Не показывается в редакторе,
 * но выполняется вместе с примером и доступен внутри App.
 */
export const transformCode = (code: string, setupCode?: string): string => {
  const unwrappedCode = stripImports(unwrapDisplayCode(code))

  if (isAppComponentDefinition(unwrappedCode)) {
    const setup = setupCode?.trim()
    const cleanCode = setup ? `${stripImports(setup)}\n\n${unwrappedCode}` : unwrappedCode

    return `${cleanCode};\nrender(<App />);`
  }

  let cleanCode = wrapForLive(unwrappedCode)
  cleanCode = stripImports(cleanCode)

  cleanCode = cleanCode.replace(/export\s+default\s+App\s*;?\s*$/gm, '')
  cleanCode = cleanCode.replace(/export\s+default\s+App\s*=\s*/g, 'const App = ')
  cleanCode = cleanCode.replace(/export\s+default\s+function\s+App/g, 'function App')
  cleanCode = cleanCode.replace(/export\s+default\s+(?!App\b)/g, 'const App = ')

  const setup = setupCode?.trim()
  if (setup) {
    cleanCode = `${stripImports(setup)}\n\n${cleanCode}`
  }

  return `${cleanCode};\nrender(<App />);`
}
