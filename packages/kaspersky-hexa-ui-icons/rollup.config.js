import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import typescript from 'rollup-plugin-typescript2'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import filesize from 'rollup-plugin-filesize'
import terser from '@rollup/plugin-terser'

const packageJson = require('./package.json')
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
      dir: packageJson.module,
      format: 'esm',
      sourcemap: false,
      preserveModules: true
    }
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json'
    }),
    terser(),
    filesize()
  ]
}
