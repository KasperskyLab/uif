import { office1FullBase64 } from './mocks/office1FullBase64'
import { office1PreviewBase64 } from './mocks/office1PreviewBase64'
import { office2FullBase64 } from './mocks/office2FullBase64'
import { office2PreviewBase64 } from './mocks/office2PreviewBase64'

const MIN_TIMEOUT = 300
const MAX_TIMEOUT = 1200

export const api = {
  loadImage: async (imageId: string) => {
    await delay(random(MIN_TIMEOUT, MAX_TIMEOUT))

    const randomChanceOfFail = Math.random() < 0.05

    if (randomChanceOfFail) throw new Error('screen loading fake failure')

    const [type, number] = imageId.split('_')
    const isPreview = type === 'preview'
    const isOdd = +number % 2 !== 0

    if (isPreview) {
      return isOdd
        ? office1PreviewBase64
        : office2PreviewBase64
    }

    return isOdd
      ? office1FullBase64
      : office2FullBase64
  }
}

async function delay (ms: number) {
  await new Promise((resolve) => setTimeout(resolve, ms))
}

function random (min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function repeatArray<T> ({ array, times }: { array: T[], times: number }): T[] {
  return [].concat(...new Array(times).fill(array))
}
