import { READONLY_COLUMNS } from './modules/constants'
import { ITableProps } from './types'

export const extractText = function (
  jsx: { props?: any, children?: any} | string,
  joinPattern = ''): string {
  const resultText = []

  const removeTags = (html: string): string => {
    const regex = /(<([^>]+)>)/ig
    return html.replace(regex, '')
  }

  if (!jsx) {
    return ''
  }

  if (typeof (jsx) === 'string') {
    resultText.push(jsx)
  } else if (jsx.props && jsx.props.dangerouslySetInnerHTML) {
    const html = jsx.props.dangerouslySetInnerHTML.__html
    resultText.push(html ? removeTags(html) : '')
  } else {
    if (Array.isArray(jsx)) {
      jsx.forEach((children: any) => resultText.push(extractText(children)))
    } else {
      resultText.push(extractText(jsx.props.children))
    }
  }

  return resultText.join(joinPattern)
}

export const isColumnReadonly = (column: Required<ITableProps>['columns'][number]) => READONLY_COLUMNS.includes(column)
