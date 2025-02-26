const migrationList = {
  v6: 'v6',
  offsets: 'offsets'
}

const extractArgValue = argName => {
  const index = process.argv.findIndex(arg => arg === argName) + 1
  return index
    ? process.argv[index]
        .replace(', ', ',')
        .split(',')
        .map(formName => formName.replace('.json', ''))
    : null
}

const isFromAlreadyMigrated = (json, migrationName) => {
  return json && Array.isArray(json.state.migrationInfo) && json.state.migrationInfo.includes(migrationName)
}

const isFormExcludet = ({ file, excludeArray }) => {
  return (excludeArray || []).some(exclusion => {
    return file.endsWith(`${exclusion}.json`)
  })
}
const message = {
  reading: '\t reading: ',
  skipped: '\t skipped: ',
  updated: '\t updated: ',
  alreadyMigrated: '\t already migrated, skipped: ',
  startingPatchV6: '\n Starting patch Library in dir:',
  startingPatchOffsets: '\n Starting patch Offsets in dir:',
  donePatchV6: '\n Patching Library is Done \n',
  donePatchOffsets: '\n Patching Offsets is Done \n'
}

module.exports = { extractArgValue, isFormExcludet, isFromAlreadyMigrated, migrationList, message }
