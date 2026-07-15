const iterateSemanticTokens = (data, callback) => {
  const semanticTokens = data?.['semantic-tokens'] ?? []

  semanticTokens.forEach(entry => {
    const themes = entry?.['Semantic tokens'] ?? []

    themes
      .filter(theme => {
        const [modeName] = Object.entries(theme)[0] ?? []
        return modeName?.includes('B2B')
      })
      .forEach(theme => {
        const [modeName, tokens] = Object.entries(theme)[0] ?? []
        if (modeName && tokens) callback(modeName, tokens)
      })
  })
}

const iterateModes = (data, callback) => {
  const semanticTokens = data?.['semantic-tokens'] ?? []

  semanticTokens.forEach(entry => {
    const modes = entry?.Modes ?? []

    modes.forEach(mode => {
      const [modeName, tokens] = Object.entries(mode)[0] ?? []
      if (modeName && tokens) callback(modeName, tokens)
    })
  })
}

const iterateAliasTokensList = (list, callback) => {
  if (!Array.isArray(list)) return

  list.forEach(section => {
    Object.values(section).forEach(modes => {
      if (!Array.isArray(modes)) return

      modes.forEach(mode => {
        Object.entries(mode).forEach(([modeName, tokens]) => {
          callback(modeName, tokens)
        })
      })
    })
  })
}

const pickProductColorSections = (rawProductTokens) => {
  if (!Array.isArray(rawProductTokens)) return []

  return rawProductTokens.filter(section =>
    section && typeof section === 'object' && (
      Object.hasOwn(section, 'product_colors') ||
      Object.hasOwn(section, 'components_colors')
    ))
}

module.exports = {
  iterateAliasTokensList,
  iterateModes,
  iterateSemanticTokens,
  pickProductColorSections
}
