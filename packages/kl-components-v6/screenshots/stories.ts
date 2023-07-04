import http from 'http'
import { ComponentType } from './types'

export type Stories = Record<string, Record<string, string>>

let stories: Stories | undefined

export async function getStories (filter: ComponentType) {
  if (!stories) {
    stories = await fetchStories()
  }

  return filterStories(stories, filter)
}

function fetchStories () {
  return new Promise<Stories>((resolve, reject) => {
    const options = {
      host: 'localhost',
      path: '/stories.json',
      port: 6006,
      method: 'GET'
    }
    const req = http.request(options, (res) => {
      if (!res || !res.statusCode) {
        return
      }

      if (res.statusCode < 200 || res.statusCode >= 300) {
        return reject(new Error('statusCode=' + res.statusCode))
      }

      const body: Uint8Array[] = []

      res.on('data', function (chunk) {
        body.push(chunk)
      })

      res.on('end', function () {
        let result: { stories?: Stories } = {}
        try {
          result = JSON.parse(Buffer.concat(body).toString())
        } catch (e) {
          reject(e)
        }
        resolve(result.stories || {})
      })
    })

    req.on('error', (e) => {
      reject(e.message)
    })

    req.end()
  })
}

function filterStories (stories: Stories, filter: ComponentType) {
  const filtered: Stories = {}

  for (const story of Object.keys(stories)) {
    if (story.startsWith(filter) && !story.includes('animation')) {
      filtered[story] = stories[story]
    }
  }

  return filtered
}
