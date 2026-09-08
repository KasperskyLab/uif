import { dedentMarkdownDescription } from '../dedentMarkdownDescription'

describe('dedentMarkdownDescription', () => {
  it('removes a shared indentation without joining paragraphs', () => {
    expect(dedentMarkdownDescription(`
      Первый абзац.

      Второй абзац.
    `)).toBe('Первый абзац.\n\nВторой абзац.')
  })

  it('leaves an unindented description unchanged', () => {
    expect(dedentMarkdownDescription('Первый абзац.\n\nВторой абзац.')).toBe('Первый абзац.\n\nВторой абзац.')
  })
})
