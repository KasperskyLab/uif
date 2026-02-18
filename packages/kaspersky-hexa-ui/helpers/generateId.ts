import { v4 as uuidv4 } from 'uuid'

/**
 * @returns random a-z letter
 */
function getRandomLowercaseLetter () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

export function generateId (): string {
  return uuidv4().replace(/^\d/, getRandomLowercaseLetter())
}
