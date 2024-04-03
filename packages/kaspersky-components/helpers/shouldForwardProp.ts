export function shouldForwardProp <T extends string | number> (
  prop: T,
  defaultValidatorFn: (prop: T) => boolean
): boolean {
  if (prop === 'kl-id') {
    return true
  }

  return defaultValidatorFn(prop)
}
