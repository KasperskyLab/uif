const fs = require('fs')

module.exports = function initFeatureRegistry (featureFlagConfigMapPath = '') {
  const isFeatureEnabled = featureName => {
    try {
      const flagName = `FEATURE_${featureName}`
      const featureFlags = JSON.parse(
        fs.readFileSync(featureFlagConfigMapPath)
      )
      const isEnabled = Boolean(parseInt(featureFlags[flagName]))
      runtime.logger.log('featureRegistry::check::result', {
        featureName,
        flagName,
        isEnabled
      })
      return isEnabled
    } catch (error) {
      runtime.logger.error('featureRegistry::check::error', {
        error
      })
      return false
    }
  }
  return {
    isPluginServerFeatureEnabled: ({ featureName }) => {
      return isFeatureEnabled(featureName)
    },
    isPluginUserFeatureEnabled: ({ featureName }, connection) => {
      const {
        kscUserId: userId = '-',
        hostedInstanceId: securityCenterId = '-',
        wsId: workspaceId = '-'
      } = connection
      return isFeatureEnabled(`USER_${securityCenterId}_${workspaceId}_${userId}_${featureName}`)
    }
  }
}
