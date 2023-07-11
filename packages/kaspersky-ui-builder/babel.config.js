module.exports = {
  presets: [
    ['@babel/react']],
  plugins: [
    ['@babel/plugin-transform-runtime', { regenerator: true }],
    ['@babel/plugin-transform-modules-commonjs']
  ]
}
