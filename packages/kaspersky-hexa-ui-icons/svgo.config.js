module.exports = {
  multipass: true,
  plugins: [
    {
      name: 'removeBackgroundPath',
      // Removes invisible full-canvas background paths like `M0 0h16v16H0z`
      // when they inherit `fill="none"` from the root <svg>.
      // This must run before `preset-default`, because `convertPathData` may
      // rewrite the `d` attribute and break the exact path match.
      fn: () => ({
        element: {
          enter: (node, parentNode) => {
            if (!parentNode || parentNode.name !== 'svg' || node.name !== 'path') return

            const d = node.attributes.d || ''
            const effectiveFill = node.attributes.fill ?? parentNode.attributes.fill
            const isBackgroundPath = /^M0 0h\d+(?:\.\d+)?v\d+(?:\.\d+)?H0z$/i.test(d)

            if (isBackgroundPath && effectiveFill === 'none') {
              parentNode.children = parentNode.children.filter(child => child !== node)
            }
          }
        }
      })
    },
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeViewBox: false,
          cleanupNumericValues: {
            floatPrecision: 0
          },
          convertViewBox: {
            floatPrecision: 0
          },
          convertPathData: {
            floatPrecision: 4
          }
        }
      }
    }
  ]
}