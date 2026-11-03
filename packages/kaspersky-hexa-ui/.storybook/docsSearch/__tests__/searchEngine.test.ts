import { snippetAround } from '../plainText'
import { createDocsSearch } from '../searchEngine'

const documents = [
  {
    id: 'card--docs',
    title: 'Card',
    text: 'Цветовой вариант карточки для страницы компонента.'
  },
  {
    id: 'button--docs',
    title: 'Button',
    text: 'Кнопка запускает действие и не описывает карточку.'
  }
]

const matchedText = (text: string, query: string, indices: readonly (readonly [number, number])[]) => (
  snippetAround(text, query, indices).find((part) => part.match)?.text
)

describe('createDocsSearch', () => {
  const search = createDocsSearch(documents)

  it('finds a document by a word in its text', () => {
    expect(search.search('кнопка').map((hit) => hit.item.id)).toEqual(['button--docs'])
  })

  it('matches a prefix and highlights the whole word', () => {
    const [hit] = search.search('цвет')

    expect(hit.item.id).toBe('card--docs')
    expect(matchedText(hit.item.text, 'цвет', hit.indices)).toBe('Цветовой')
  })

  it('matches a typo in a long word', () => {
    const [hit] = search.search('карточка')

    expect(hit.item.id).toBe('card--docs')
    expect(matchedText(hit.item.text, 'карточка', hit.indices)).toBe('карточки')
  })
})
