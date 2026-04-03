const fs = require('fs')
const path = require('path')

const componentsRoot = path.join(__dirname, 'uxpin/components')

const includeAllComponents = fs
  .readdirSync(componentsRoot, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => {
    const componentPath = `uxpin/components/${entry.name}/${entry.name}.tsx`
    const absoluteComponentPath = path.join(__dirname, componentPath)

    return fs.existsSync(absoluteComponentPath) ? componentPath : null
  })
  .filter(Boolean)
  .sort()

module.exports = {
  name: 'Kaspersky Hexa UI',
  components: {
    categories: [
      {
        name: 'Hexa UI (stable)',
        include: includeAllComponents
      }
    ],
    wrapper: 'uxpin/UXPinWrapper.tsx',
    webpackConfig: 'uxpin.webpack.config.js'
  }
}
