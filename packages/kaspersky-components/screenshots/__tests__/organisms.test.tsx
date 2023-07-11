import puppeteer from 'puppeteer'
import { getBrowser } from '../browser'
import { getStories, Stories } from '../stories'
import { ComponentType } from '../types'

const type: ComponentType = 'organisms'

describe('organisms', () => {
  let stories: Stories = {}
  let browser: puppeteer.Browser | undefined

  beforeAll(async () => {
    stories = await getStories(type)
    browser = await getBrowser()
  })

  afterAll(async () => {
    if (!browser) return

    await browser.close()
  })

  test('shoud match screenshots', async () => {
    for (const story of Object.keys(stories)) {
      await expect({ browser, story, type }).toMatchSnapshot()
    }
  }, 1_000_000)
})
