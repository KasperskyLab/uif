import styles from './clipping.module.scss'

export const EXPANDER_CLASS = 'hexa-ui-expander'

/**
 * The clipping classes, re-exported from here rather than imported as a stylesheet.
 *
 * The build rewrites the `@helpers` alias in TypeScript imports and leaves it alone in stylesheet
 * ones, so `@helpers/.../clipping.module.scss` survives into the published package as a literal
 * path to a file that is not there — the sheet is compiled into a sibling `.module.scss.js` and the
 * raw `.scss` never ships. A consumer bundling the package then fails to resolve it. Importing the
 * sheet relatively, here beside it, and handing the classes out as an ordinary binding keeps both
 * halves right: the path is rewritten, and the sheet is still referenced by something that is used,
 * which is what stops a bundler from dropping it.
 */
export const clippingStyles = styles
