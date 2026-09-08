import { unwrapDisplayCode } from '@sb/components/Documentation/Editor/liveCodeWrap'

describe('unwrapDisplayCode', () => {
  it('removes the MDX indentation before scaling nested JSX', () => {
    const code = `
        <Accordion>
          <AccordionPanel key={1} title='Заголовок панели'>
            Содержимое
          </AccordionPanel>
        </Accordion>
      `

    expect(unwrapDisplayCode(code)).toBe(`
<Accordion>
  <AccordionPanel key={1} title='Заголовок панели'>
    Содержимое
  </AccordionPanel>
</Accordion>`.trim())
  })
})
