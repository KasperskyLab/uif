const self = this
self.setupList = []

self.on('mount', function () {
  self.on('dependency-removed', onDependencyRemoved)
  self.setupList = self.opts.dependencies || []
  self.update()
})

function onDependencyRemoved (index) {
  self.setupList.splice(index, 1)
  self.update()
}

self.addDependency = function () {
  self.setupList.push({})
  self.update()
}

self.removeDependency = function () {
  self.setupList = []
  self.update()
}

self.getDependencySetupList = function () {
  let tags = self.tags['dependency-setup']
  if (!tags) return []
  if (!Array.isArray(tags)) { tags = [tags] }
  return tags
}

self.serializeState = function () {
  const deps = []
  let tags = self.tags['dependency-setup']
  if (!tags) return
  if (!Array.isArray(tags)) { tags = [tags] }

  tags.forEach(function (tag) {
    deps.push(tag.serializeState())
  })
  return {
    dependencies: deps
  }
}
