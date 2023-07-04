import { toMatchImageSnapshot } from 'jest-image-snapshot'
import { Browser } from 'puppeteer'
import { ComponentType } from './types'

interface MatchParams {
  url: string,
  browser: Browser | undefined,
  story: string,
  type: ComponentType,
}

const snapshotConfig = {
  failureThreshold: 0,
  failureThresholdType: 'percent'
}

export async function toMatchComponentSnapshot ({ browser, story, type }: MatchParams) {
  if (!browser) return { pass: false, message: 'browser is undefined' }

  const page = await browser.newPage()

  await page.goto(`http://localhost:6006/iframe.html?id=${story}&viewMode=story`)
  await page.content()

  await page.waitForSelector('#root')
  const image = await page.screenshot({ fullPage: true })
  await page.close()

  // @ts-ignore
  return toMatchImageSnapshot.call(this, image, {
    ...snapshotConfig,
    customSnapshotIdentifier: `${type}/${story}`
  })
}
