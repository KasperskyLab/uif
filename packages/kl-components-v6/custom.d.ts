import { Theme } from './design-system/types'

declare module 'foo' {
  export function getRandomNumber(): number
}
declare global {
  interface Window { theme: Theme }
}
