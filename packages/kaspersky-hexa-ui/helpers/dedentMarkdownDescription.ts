export const dedentMarkdownDescription = (value: string): string => {
  const lines = value
    .replace(/^\r?\n/, '')
    .replace(/\r?\n[\t ]*$/, '')
    .split(/\r?\n/)
  const indents = lines
    .filter(line => line.trim())
    .map(line => line.match(/^[\t ]*/)?.[0].length ?? 0)
  const sharedIndent = Math.min(...indents)

  if (!Number.isFinite(sharedIndent) || sharedIndent === 0) return lines.join('\n')

  return lines
    .map(line => line.trim() ? line.slice(sharedIndent) : '')
    .join('\n')
}
