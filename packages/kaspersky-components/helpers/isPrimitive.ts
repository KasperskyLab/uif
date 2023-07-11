export const isPrimitive = (test: unknown): boolean => {
  return test !== Object(test)
}
