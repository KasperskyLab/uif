import { marked } from 'marked'

const self = this

self.render = render

self.on('mount', onMount)

function render (content) {
  self.refs.content.innerHTML = marked.parse(content)
  // eslint-disable-next-line
  $(self.refs.content).find('pre code').each(function (i, block) {
    hljs.highlightBlock(block)
  })
}

function onMount () {
}
let hljs
if (!hljs) {
  hljs = require('highlight.js/lib//highlight')
  hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'))
  require('highlight.js/styles/atom-one-light.css')
}
