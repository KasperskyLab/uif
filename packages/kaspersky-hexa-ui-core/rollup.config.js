import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import copy from 'rollup-plugin-copy'
import css from 'rollup-plugin-css-only'
import typescript from 'rollup-plugin-typescript2'
import url from 'rollup-plugin-url'

export default {
  input: './src/index.ts',
  output: [
    {
      dir: '.',
      format: 'cjs',
      sourcemap: false,
      preserveModules: true
    },
    {
      dir: 'esm',
      format: 'esm',
      sourcemap: false,
      preserveModules: true
    }
  ],
  plugins: [
    css(),
    resolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json'
    }),
    url({
      include: ['**/*.woff2'],
      limit: Infinity
    }),
    copy({
      targets: [
        { src: './src/colors/tokens/tokens.css', dest: ['./colors', './esm/colors'] },
        { src: './src/typography/tokens/tokens.css', dest: ['./typography', './esm/typography'] },
        { src: './src/fonts/tokens/tokens.css', dest: ['./fonts', './esm/fonts'] }
      ]
    })
  ]
}
