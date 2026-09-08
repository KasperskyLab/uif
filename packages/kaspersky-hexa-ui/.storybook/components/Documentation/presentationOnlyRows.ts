const presentationOnlyRows = new WeakSet<object>()

export const markPresentationOnlyRows = <Rows extends object>(rows: Rows): Rows => {
  presentationOnlyRows.add(rows)

  return rows
}

export const isPresentationOnlyRows = (rows: unknown): boolean => (
  typeof rows === 'object' && rows !== null && presentationOnlyRows.has(rows)
)
