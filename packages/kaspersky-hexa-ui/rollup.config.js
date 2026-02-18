import json from '@rollup/plugin-json'
import replace from '@rollup/plugin-replace'
import typescript from '@rollup/plugin-typescript'
import less from 'less'
import { defineConfig } from 'rollup'
import cleaner from 'rollup-plugin-cleaner'
import copy from 'rollup-plugin-copy'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'

import { exec } from 'child_process'
import fs from 'fs'

import pkg from './package.json' with { type: 'json' }

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

const resolveStyles = (options) => {
  return {
    name: 'resolveStyles',
    writeBundle () {
      less.render(
        fs.readFileSync(options.input).toString(),
        options.option,
        (e, output) => {
          fs.writeFileSync(options.output, output.css)
        }
      )
    }
  }
}

export default defineConfig([
  {
    input: [
      'src/index.ts',
      'helpers/index.ts',
      'design-system/index.ts'
    ],
    output: [
      {
        dir: 'esm',
        format: 'esm',
        sourcemap: false,
        preserveModules: true
      }
    ],
    plugins: [
      cleaner({
        targets: [
          'esm'
        ]
      }),
      replace({
        __VERSION__: pkg.version,
        preventAssignment: true
      }),
      copy({
        flatten: false,
        targets: [
          {
            src: 'design-system/assets/fonts/**/*.woff2',
            dest: 'esm/design-system'
          },
          {
            src: 'design-system/tokens/*.css',
            dest: 'esm/design-system'
          }
        ]
      }),
      resolveStyles({
        input: 'style/styles.less',
        output: 'esm/design-system/global-style/styles.css',
        option: {
          math: 'always',
          javascriptEnabled: true,
          paths: [
            'node_modules'
          ]
        }
      }),
      json(),
      postcss({
        inject: true,
        modules: true,
        extensions: ['.css']
      }),
      peerDepsExternal(),
      resolveAlias(),
      typescript({
        tsconfig: 'tsconfig.build.json'
      }),
      copy({
        targets: [
          {
            src: './package.json',
            dest: './esm'
          }
        ]
      })
    ]
  }
])
