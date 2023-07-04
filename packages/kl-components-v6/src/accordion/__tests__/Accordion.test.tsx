import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Accordion, AccordionPanel } from '../Accordion'
import { Text } from '../../typography'
import { IAccordionProps, IAccordionPanelProps } from '../types'

const defaultProps = {
  klId: 'test-accordion'
}
const defaultPanelProps = {
  header: <Text>Header text content</Text>,
  key: '1'
}

const getAccordionFirstPanel = () => screen.getByRole('button')

const DefaultAccordion = (props: Partial<IAccordionProps>, panelProps: Partial<IAccordionPanelProps>) =>
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

  test('should receive kl-id prop', () => {
    render(<DefaultAccordion klId={'some-kl-id'} />)
    expect(screen.getByTestId('some-kl-id')).toBeInTheDocument()
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
