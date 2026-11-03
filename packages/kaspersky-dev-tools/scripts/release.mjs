import fs from 'fs'
import path from 'path'

const deployPath = process.env.deployPath

if (!deployPath) {
  throw new Error('deployPath is not defined')
}

const libPath = path.resolve('lib')

console.log('Deploying to', deployPath)

fs.mkdirSync(deployPath, { recursive:true })

for (const entry of fs.readdirSync(libPath)) {
  fs.cpSync(
    path.join(libPath, entry),
    path.join(deployPath, entry),
    {
      recursive:true,
      force:true
    }
  )
}