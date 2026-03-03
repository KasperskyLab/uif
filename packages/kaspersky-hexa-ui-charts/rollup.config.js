import json from '@rollup/plugin-json'
import typescript from '@rollup/plugin-typescript'
import copy from 'rollup-plugin-copy'
import postcss from 'rollup-plugin-postcss'

export default {
  preserveModules: true,
  input: './src/index.ts',
  output: [
    {
      dir: 'dist',
      format: 'esm',
      sourcemap: false,
      preserveModules: true
    }
  ],
  plugins: [
    typescript({
      tsconfig: 'tsconfig.json',
      compilerOptions: {
        declaration: true,
        emitDeclarationOnly: true
      }
    }),
    json(),
    postcss({
      inject: true,
      modules: true,
      extensions: ['.css']
    }),
    copy({
      targets: [
        {
          src: './package.json',
          dest: './dist'
        }
      ]
    })
  ]
}
