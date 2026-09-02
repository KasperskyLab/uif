const LIVE_APP_WRAPPER_RE =
  /^export\s+default\s+App\s*=\s*\(\)\s*=>\s*\(\s*\n?([\s\S]*?)\n?\s*\)\s*;?\s*$/

const DISPLAY_INDENT_SIZE = 2

const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b))

const removeSharedIndent = (code: string): string => {
  const lines = code.split('\n')
  while (lines[0]?.trim() === '') lines.shift()
  while (lines[lines.length - 1]?.trim() === '') lines.pop()

  const indents = lines
    .filter(line => line.trim())
    .map(line => /^ */.exec(line)?.[0].length ?? 0)
  const sharedIndent = Math.min(...indents)

  if (!Number.isFinite(sharedIndent) || sharedIndent === 0) return lines.join('\n')

  return lines
    .map(line => line.trim() ? line.slice(sharedIndent) : '')
    .join('\n')
}

/**
 * The MDX build pipeline and react-live (tabSize: 2) often reduce indentation steps to 2 spaces.
 * Scale leading spaces to DISPLAY_INDENT_SIZE while preserving the hierarchy.
 */
export const normalizeDisplayIndent = (code: string, indentSize = DISPLAY_INDENT_SIZE): string => {
  const lines = code.split('\n')
  const leadingSpaces = lines
    .filter((line) => line.trim().length > 0)
    .map((line) => /^ */.exec(line)?.[0].length ?? 0)

  if (leadingSpaces.length === 0) return code

  const minIndent = Math.min(...leadingSpaces)
  const relativeIndents = [
    ...new Set(leadingSpaces.filter((n) => n > minIndent).map((n) => n - minIndent))
  ]

  if (relativeIndents.length === 0) return code

  let step = relativeIndents[0]
  for (let i = 1; i < relativeIndents.length; i++) {
    step = gcd(step, relativeIndents[i])
  }

  if (step >= indentSize) return code

  const scale = indentSize / step

  return lines
    .map((line) => {
      if (!line.trim()) return line
      const leading = /^ */.exec(line)?.[0].length ?? 0
      const scaledLeading = Math.round((leading - minIndent) * scale)
      return `${' '.repeat(scaledLeading)}${line.slice(leading)}`
    })
    .join('\n')
}

/** JSX snippet shown in the live editor (without react-live App wrapper). */
export const unwrapDisplayCode = (code: string): string => {
  const dedented = removeSharedIndent(code)
  const match = dedented.match(LIVE_APP_WRAPPER_RE)
  const unwrapped = match ? match[1].trimEnd() : dedented
  return normalizeDisplayIndent(unwrapped)
}

/**
 * Full source passed to react-live (noInline App component).
 * A fragment allows multiple root JSX nodes without a wrapper (Space, div), which would otherwise
 * cause a SyntaxError in `() => (...)`.
 */
export const wrapForLive = (displayCode: string): string =>
  `export default App = () => (\n<>\n${displayCode}\n</>\n);`
