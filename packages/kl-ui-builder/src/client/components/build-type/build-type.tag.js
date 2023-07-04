const self = this
self.defaultState = 'any'

runtime.on('right-side:buttons:save:click', () => {
  self.buildType = self.getBuildType() || self.buildType || self.defaultState
  self.update()
})

self.setBuildType = (buildType) => {
  self.buildType = buildType || self.defaultState
  self.update()
}

self.getBuildType = () =>
  self.opts.label

self.buildType = self.getBuildType() || self.defaultState
