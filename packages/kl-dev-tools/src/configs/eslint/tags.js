const tags = {
  overrides: [
    {
      files: ['*.tag.js'],
      globals: {
        _: 'readonly',
        kl: 'readonly',
        riot: 'readonly',
        runtime: 'readonly',
        d3: 'readonly',
        $: 'readonly'
      }
    }
  ]
}

module.exports = tags
