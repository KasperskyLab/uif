#!/usr/bin/env node
/**
 * Creates a Changesets .md file from a conventional commit message.
 * Used by CI (or commit-msg hook) to bridge conventional commits and Changesets.
 * Usage: node scripts/create-changeset-from-commit.js [commit-ref]
 *   commit-ref defaults to HEAD. Pass a commit SHA or leave empty for HEAD.
 * Skips (exit 0) when: commit message contains [NO_CI], or type is not fix/feat.
 */

const { execSync } = require('child_process')
const crypto = require('crypto')
const fs = require('fs')
const path = require('path')

const FIXED_PACKAGES = [
  '@kaspersky/hexa-ui-core',
  '@kaspersky/hexa-ui-icons',
  '@kaspersky/hexa-ui',
  '@kaspersky/hexa-ui-charts'
]

function getCommitMessage(ref = 'HEAD') {
  return execSync(`git log -1 --format=%B ${ref}`, { encoding: 'utf-8' }).trim()
}

function parseBumpType(message) {
  const firstLine = message.split('\n')[0]
  if (firstLine.includes('[NO_CI]')) return null
  const match = firstLine.match(/^(fix|feat)(!)?\s*:/)
  if (!match) return null
  const [, type, breaking] = match
  if (breaking === '!') return 'major'
  if (type === 'feat') return 'minor'
  if (type === 'fix') return 'patch'
  return null
}

function createChangeset(bumpType, summary) {
  const dir = path.join(process.cwd(), '.changeset')
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
  const id = crypto.randomBytes(4).toString('hex')
  const lines = [
    '---',
    ...FIXED_PACKAGES.map((pkg) => `"${pkg}": ${bumpType}`),
    '---',
    summary || 'Release'
  ]
  const filePath = path.join(dir, `${id}.md`)
  fs.writeFileSync(filePath, lines.join('\n') + '\n', 'utf-8')
  return filePath
}

function main() {
  const ref = process.argv[2] || 'HEAD'
  const message = getCommitMessage(ref)
  const bumpType = parseBumpType(message)
  if (!bumpType) process.exit(0)
  const summary = message
    .split('\n')[0]
    .replace(/^(fix|feat)(!)?\s*:\s*/i, '')
    .slice(0, 100)
  const filePath = createChangeset(bumpType, summary)
  console.log(`Created ${filePath} (${bumpType})`)
}

main()
