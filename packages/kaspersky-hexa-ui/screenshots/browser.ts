import puppeteer, { Browser } from 'puppeteer'

const browserConfig = {
  headless: true,
  // Required for Docker version of Puppeteer
  args: [
    '--disable-gpu',
    '--disable-dev-shm-usage',
    '--disable-setuid-sandbox',
    '--no-first-run',
    '--no-sandbox',
    '--no-zygote',
    '--single-process'
  ],
  slowMo: 100
}

let browser: Browser | undefined

export async function getBrowser () {
  if (!browser) {
    browser = await puppeteer.launch(browserConfig)
  }

  return browser
}
