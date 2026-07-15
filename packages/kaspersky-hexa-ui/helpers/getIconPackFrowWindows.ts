// // For backward compatibility and centralized icon delivery via the New Web Console.
export const getIconPackFromWindows = (size: number) => {

  if (typeof window === 'undefined') {
    return {}
  }

  const globalKey = `klIcons${size}` as keyof Window
  return window[globalKey] || {}
}