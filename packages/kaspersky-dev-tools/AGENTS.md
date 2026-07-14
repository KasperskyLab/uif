# Package Agent Guide: @kaspersky/dev-tools

## Package Purpose
Shared development tools for KSC Web Console projects. Provides ESLint configurations, Node.js version compatibility utilities, and shared build tooling.

## Technical Architecture

### ESLint Configuration (v3.x+)
Provides pre-configured ESLint setups for:
- **Base**: JavaScript/TypeScript base rules
- **React**: React-specific linting rules
- **TypeScript**: TypeScript-specific rules

**Usage in projects:**
```js
import { defineConfig, globalIgnores } from 'eslint/config'
import { configs } from '@kaspersky/dev-tools'

export default defineConfig([
  configs.eslint.base,
  configs.eslint.react,
  configs.eslint.typescript,
  globalIgnores(['node_modules/**/*', '_build/**/*']),
  {
    files: ['client/**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parserOptions: { project: 'client/tsconfig.json' }
    }
  },
  {
    files: ['server/**/*.{js,ts}'],
    languageOptions: {
      parserOptions: { project: 'server/tsconfig.json' }
    }
  }
])
```

### Node.js Version Compatibility
Provides `utils/get-node-options.js` for handling different Node.js versions:
- Handles `--openssl-legacy-provider` for Node 17+
- Handles `--no-experimental-fetch` for Node < 23
- Returns appropriate `NODE_OPTIONS` based on version

**Usage in package.json:**
```json
{
  "scripts": {
    "set-env": "./node_modules/@kaspersky/dev-tools/node_modules/.bin/env-cmd -f ./node_modules/@kaspersky/dev-tools/lib/utils/get-node-options.js",
    "release": "yarn set-env gulp release"
  }
}
```

## Key Entrypoints
- `src/configs/eslint/` - ESLint configurations
- `src/utils/get-node-options.js` - Node version compatibility
- `lib/` - Built output

## Build System
- **Output**: `lib/` directory
- **Testing**: Jest
- **TypeScript**: tsconfig.json

## Local Commands
```bash
# TODO: verify commands from package.json
```

## ESLint Migration Guide (v2 → v3)

### Required Steps
1. Rename `.eslintrc` to `eslint.config.mjs`
2. Replace imports: `@kaspersky/dev-tools/src` → `@kaspersky/dev-tools/lib`
3. Delete `.eslintignore`, use `globalIgnores()` instead
4. Define `files` parameter and import base configs

### VSCode Auto-Fix Setup
Add to `.vscode/settings.json`:
```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## Adding New ESLint Configs
New configs go in `/src/configs/eslint/`:
- Add framework-specific configs (angular, vue, etc.)
- Add required plugins to `dependencies` in package.json
- Ensure all plugins are bundled in `node_modules`

## FAQ

### ESLint Not Working in IDE
1. Restart IDE after updating `@kaspersky/dev-tools`
2. Check for missing modules in ESLint output
3. Delete `node_modules` and reinstall
4. Verify `eslint.config.mjs` syntax
5. Ensure `parserOptions.project` is set for TypeScript

### NODE_OPTIONS Issues
For Node 17+ with webpack/TS:
```bash
NODE_OPTIONS="--openssl-legacy-provider --no-experimental-fetch"
```

For Node 23+, remove `--no-experimental-fetch`.

Use `get-node-options.js` script for automatic handling.

## Dependencies
See `package.json` for bundled ESLint plugins and configs.

## Consumers
- All KSC Web Console plugins
- Console application
- Shared packages requiring linting

## Do Not Change Without Spec
- ESLint rule configurations
- Node.js version detection logic
- Config export structure
- Migration utilities

## Checklist for New Features
- [ ] Update this AGENTS.md if architecture changes
- [ ] Add documentation for new ESLint configs
- [ ] Update migration guide if breaking changes
- [ ] Document new Node.js version handling
- [ ] Update bundled plugins list
