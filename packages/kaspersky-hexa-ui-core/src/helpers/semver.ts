function parseSemver (value: `${string}.${string}.${string}`) {
  return value
    .split('.')
    .map((part) => {
      const numberMatch = /^\d+/.exec(part)
      return numberMatch ? Number(numberMatch[0]) : 0
    })
}

function compareVersions (current: string, target: string): number {
  const currentParts = parseSemver(current as any)
  const targetParts = parseSemver(target as any)

  for (let i = 0; i < Math.max(currentParts.length, targetParts.length); i++) {
    const currentPart = currentParts[i] ?? 0
    const targetPart = targetParts[i] ?? 0

    if (currentPart !== targetPart) {
      return currentPart > targetPart ? 1 : -1
    }
  }

  return 0
}

export function isGreater (current: string, target: string) {
  return compareVersions(current, target) > 0
}

export const pkgVersion: string = '__VERSION__'