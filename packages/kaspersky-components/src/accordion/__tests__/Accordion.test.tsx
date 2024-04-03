import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Accordion, AccordionPanel } from '../Accordion'
import { Text } from '@src/typography'
import { AccordionProps, AccordionPanelProps, AccordionTitleSize } from '../types'

const defaultProps = {
  klId: 'test-accordion'
}
const defaultPanelProps = {
  title: 'Header text content',
  titleSize: 'medium' as AccordionTitleSize,
  key: '1'
}

const getAccordionFirstPanel = () => screen.getByRole('button')

const DefaultAccordion = (props: Partial<AccordionProps>, panelProps: Partial<AccordionPanelProps>) =>
  <Accordion
    {...props}
  >
    <AccordionPanel
      { ...defaultPanelProps}
      { ...panelProps }
    >
      <Text>Text for test</Text>
    </AccordionPanel>
  </Accordion>

describe('Accordion', () => {
  test('should render', () => {
    render(<DefaultAccordion />)
    screen.getByText('Header text content')
  })

  test('should receive qa props', () => {
    const { container } = render(<DefaultAccordion klId="kl-id" testId="test-id" />)

    expect(container.querySelector('[kl-id="kl-id"]')).toBeInTheDocument()
    expect(container.querySelector('[data-testid="test-id"]')).toBeInTheDocument()
  })

  test('should call onChange when clicked', () => {
    const handleClick = jest.fn()
    render(
      <Accordion
        {...defaultProps}
        onChange={handleClick}
      >
        <AccordionPanel { ...defaultPanelProps}>
          <Text>Text for test</Text>
        </AccordionPanel>
      </Accordion>
    )
    userEvent.click(getAccordionFirstPanel())
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  test('disabled accordion should not opened', () => {
    const handleClick = jest.fn()
    render(
      <Accordion
        {...defaultProps}
        onChange={handleClick}
      >
        <AccordionPanel disabled={true} { ...defaultPanelProps}>
          <Text>Text should not displayed</Text>
        </AccordionPanel>
      </Accordion>
    )
    userEvent.click(getAccordionFirstPanel())
    expect(() => (screen.getByText('Text should not displayed'))).toThrow('Unable to find an element')
  })
})
