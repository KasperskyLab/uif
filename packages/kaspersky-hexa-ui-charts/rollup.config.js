import json from '@rollup/plugin-json'
import typescript from '@rollup/plugin-typescript'
import copy from 'rollup-plugin-copy'
import postcss from 'rollup-plugin-postcss'
import { exec } from 'child_process'

const resolveAlias = () => {
  return {
    name: 'tsAlias',
    writeBundle () {
      exec('tsc-alias', (error, stdout, stderr) => {
        if (stderr || error) {
          this.error(`Execution failed: ${stderr || error}`)
        }
      })
    }
  }
}

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
    resolveAlias(),
    typescript({
      tsconfig: 'tsconfig.build.json',
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
