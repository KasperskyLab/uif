declare module '*.woff';
declare module '*.woff2';
declare module '*.ttf';
declare module '*.md?raw' {
  const content: string
  export default content
}
