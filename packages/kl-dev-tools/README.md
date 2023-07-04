# KL Dev Tools

## ESLint

`@kl/dev-tools` contains a set of common configuration files, plugins and extensions for ESLint.

Additional installation of eslint plugins/configs is not required in your project.

### ESLint configuration

**1. Add `.eslintrc.js`**

To configure ESLint, you need to create a file `.eslintrc.js ` in the root of the project and connect the necessary set of configs:

```js
const { getConfigPath } = require('@kl/dev-tools/src/configs/eslint/patch')

module.exports = {
  extends: [
    getConfigPath('base'),
    getConfigPath('typescript'),
    getConfigPath('react'),
    getConfigPath('storybook'),
    getConfigPath('tags'),
  ],
  parserOptions: { tsconfigRootDir: __dirname } // for TS projects only
}
```

* Option `parserOptions: { tsconfigRootDir: __dirname }` it is only needed for projects where Typescript is used and there is `tsconfig.json`.

* Patch `require('@kl/dev-tools/src/configs/eslint/patch')`  is required for plugins and configs to resolve within this package (eslint by default searches for plugins relative to `.eslintrc.js` in project).

**2. Install dependencies **

For ESLint you need to add only 2 dependencies - `@kl/dev-tools` greater than 2.4.0 and `eslint` (6-8 ver), for example:

```json
{
  "devDependencies": {
    "@kl/dev-tools": "^2.4.0",
    "eslint": "7.14.0",
    ...
  }
}
```

### Adding new shared configs ESLint

New configs can be added to the folder `/src/configs/eslint`, for example, these can be configs for the framework (angular, vue, etc.).

At the same time, the necessary packages with eslint plugins and configs need to be added to `dependencies` in package.json, so that when installing the package `@kl/dev-tools` consists in `node_modules`.

### Config extension

If you need to add new rules or expand the current config, it is better to do it through this package `@kl/dev-tools`, by extending the current configuration or adding a new one, as described in the paragraph above. Exceptions may be rules that apply only to your project, but do not change the rules of general configs (rules), for ex:s `env`, `globals`, `ignorePatterns`

### FAQ

* *After installing the package Eslint does not work in IDE*
  
Restart the IDE after updating the package @kl/dev-tools. If in the console ESlint writes that he does not find any modules, then try to delete node_modules and do the installation of dependencies again. Check that there are no syntax errors in `.eslintrc.js` file, there is `parserOptions: { tsconfigRootDir: __dirname }` for TS project. It is mandatory to have a patch import `eslint/patch` and usage `getConfigPath` to specify the config name.

### Support for different Node.js versions

To support different versions of Node.js sometimes needs to be installed `NODE_OPTIONS`, for example, to run certain versions TS and Webpack > 17 version you may need to install options `NODE_OPTIONS=\"--openssl-legacy-provider --no-experimental-fetch\"`.

To make backward compatible with Node.js 16 (which does not support these options) you can use the script `utils/get-node-options.js`, which returns the desired `NODE_OPTIONS` depending on the installed version.

To set the env variable `NODE_OPTIONS` is used `env-cmd`.

#### Adding a script to a project

In your project, you will need to add to `package.json` next script:

```json
"set-env": "./node_modules/@kl/dev-tools/node_modules/.bin/env-cmd -f ./node_modules/@kl/dev-tools/src/utils/get-node-options.js"
```

and then into the scripts `build`, `release` and other add `yarn set-env` before the command, for ex.:

```json
"release": "yarn set-env gulp release",
```

This script will add to `gulp release` installation of the necessary `NODE_OPTIONS` depending on the Node version.js before launching it.
