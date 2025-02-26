export function splitFileNameForTruncation (name: string): [string, string] {
  const match = name.match(/(.){5}(\.[^.]*)?$/)

  if (match) {
    const part2 = match[0]
    const part1 = name.slice(0, -part2.length)

    return [part1, part2]
  }

  return [name, '']
}
