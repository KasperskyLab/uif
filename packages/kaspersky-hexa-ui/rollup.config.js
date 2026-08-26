import json from '@rollup/plugin-json'
import replace from '@rollup/plugin-replace'
import typescript from '@rollup/plugin-typescript'
import fg from 'fast-glob'
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

const componentEntries = fg.sync('src/*/index.ts', {
  absolute: false
})

const removeMdxFormatterScripts = contents => {
  const manifest = JSON.parse(contents.toString())

  delete manifest.scripts['test:format:mdx']
  delete manifest.scripts['format:mdx']
  delete manifest.scripts['format:mdx:check']

  return `${JSON.stringify(manifest, null, 2)}\n`
}

export default defineConfig([
  {
    input: [
      'src/index.ts',
      'helpers/index.ts',
      'design-system/index.ts',
      ...componentEntries
    ],
    output: [
      {
        dir: 'esm',
        format: 'esm',
        sourcemap: false,
        preserveModules: true
      }
    ],
    // Keep style-inject as a bare import instead of bundling it into
    // esm/node_modules. A bundled nested node_modules only survives under
    // hoisting linkers (npm/Yarn 1); Yarn Berry/PnP and pnpm relocate or
    // omit it, breaking the hardcoded relative path in generated *.scss.js.
    external: ['style-inject'],
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
        // Emit a bare `import styleInject from 'style-inject'` so resolution
        // is handled by the consumer's package manager (works with npm, any
        // Yarn including Berry/PnP, and pnpm) instead of a hardcoded relative
        // path into a bundled node_modules.
        inject: (cssVariableName) => `\nimport styleInject from 'style-inject';\nstyleInject(${cssVariableName});`,
        modules: {
          generateScopedName: `[name]__[local]___[hash:base64:5]${pkg.version}`
        },
        extensions: ['.css'],
        use: {
          sass: { silenceDeprecations: ['legacy-js-api'] }
        }
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
            dest: './esm',
            transform: removeMdxFormatterScripts
          }
        ]
      })
    ]
  }
])
