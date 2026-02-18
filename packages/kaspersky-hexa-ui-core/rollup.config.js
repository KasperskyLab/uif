import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import copy from 'rollup-plugin-copy'
import css from 'rollup-plugin-css-only'
import typescript from 'rollup-plugin-typescript2'
import url from 'rollup-plugin-url'

require('dotenv').config()

const OUTPUT_DIR = process.env.release ? process.env.deployPath ?? '.' : '.'

export default {
  input: './src/index.ts',
  output: [
    {
      dir: OUTPUT_DIR,
      format: 'cjs',
      sourcemap: false,
      preserveModules: true
    },
    {
      dir: `${OUTPUT_DIR}/esm`,
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
        { src: './src/colors/tokens/tokens.css', dest: [`${OUTPUT_DIR}/colors`, `${OUTPUT_DIR}/esm/colors`] },
        { src: './src/typography/tokens/tokens.css', dest: [`${OUTPUT_DIR}/typography`, `${OUTPUT_DIR}/esm/typography`] },
        { src: './src/fonts/tokens/tokens.css', dest: [`${OUTPUT_DIR}/fonts`, `${OUTPUT_DIR}/esm/fonts`] }
      ]
    })
  ]
}
