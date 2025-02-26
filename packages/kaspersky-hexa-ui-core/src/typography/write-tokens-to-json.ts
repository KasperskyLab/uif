import * as fs from 'fs'

import { typography } from './js'

export const writeToJSONFile = (filename: string, object: any) => {
  fs.writeFile(
    filename,
    JSON.stringify(object, null, 2),
    (error) => {
      if (error) {
        console.log('\x1b[31;1m', '\n\nError writing file\n', error)
      } else {
        console.log('\x1b[32;1m', '\n\nSuccessfully wrote file\n')
      }
    }
  )
}

writeToJSONFile('./src/typography/tokens/typography-tokens.json', typography)
