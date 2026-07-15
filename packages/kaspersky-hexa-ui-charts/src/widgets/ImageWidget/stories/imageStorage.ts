export const IMG_STORAGE_KEY = 'image-widget-demo'

export const saveImageToStorage = (base64: string): void => {
  sessionStorage.setItem(IMG_STORAGE_KEY, base64)
}

export const loadImageFromStorage = (): string | null => {
  return sessionStorage.getItem(IMG_STORAGE_KEY)
}
