const extractArgValue = argName => {
  const index = process.argv.findIndex(arg => arg === argName) + 1
  return index
    ? process.argv[index]
        .replace(', ', ',')
        .split(',')
        .map(formName => formName.replace('.json', ''))
    : null
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
  startingPatchV6: '\n Starting patch Library in dir:',
  startingPatchOffsets: '\n Starting patch Offsets in dir:',
  donePatchV6: '\n Patching Library is Done \n',
  donePatchOffsets: '\n Patching Offsets is Done \n'
}

module.exports = { extractArgValue, isFormExcludet, message }
