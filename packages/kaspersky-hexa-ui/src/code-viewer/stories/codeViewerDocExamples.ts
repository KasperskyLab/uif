import { javascriptExample, jsonExample, yaraExample } from './examples'

/** setupCode для react-live в CodeViewer.documentation.mdx */
export const codeViewerLanguageExampleSetupCode = `
const javascriptSample = ${JSON.stringify(javascriptExample)};
const jsonSample = ${JSON.stringify(jsonExample)};
const yaraSample = ${JSON.stringify(yaraExample)};
`

export const codeViewerInitialValueExampleSetupCode = `
const javascriptSample = ${JSON.stringify(javascriptExample)};
`
