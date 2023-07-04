module.exports = ({ src, gulpFn, fs }) => {
  return src('./client/ui/**.json')
    .pipe(gulpFn(file => {
      // eslint-disable-next-line no-console
      console.log(`reading ${file.path}`)
      const json = require(file.path)
      const { elements: builderElements, json: { elements: productElements } } = json

      const builderElementsWithAliases = {}
      builderElements
        .filter(({ state: { alias: { input: alias } = {} } = {} }) => alias)
        .forEach(({ state: { alias: { input: alias } = {} } = {}, id }) => {
          builderElementsWithAliases[id] = alias
        })

      const updatedProductElements = productElements.map(element => {
        if (element.alias) {
          delete builderElementsWithAliases[element.id]
        }
        if (!element.alias && builderElementsWithAliases[element.id]) {
          element.alias = builderElementsWithAliases[element.id]
        }
        return element
      })

      json.json.elements = updatedProductElements

      if (Object.keys(builderElementsWithAliases).length) {
        fs.writeFileSync(file.path, JSON.stringify(json, null, 2), { encoding: 'utf-8' })
        // eslint-disable-next-line no-console
        console.log(`updated ${file.path}`)
      }
    }))
}
