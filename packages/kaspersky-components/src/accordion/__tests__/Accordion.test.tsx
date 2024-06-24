import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Accordion, AccordionPanel } from '../Accordion'
import { Tag } from '@src/tag'
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
      <Accordion {...defaultProps} onChange={handleClick}>
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
      <Accordion {...defaultProps} onChange={handleClick}>
        <AccordionPanel disabled={true} {...defaultPanelProps}>
          <Text>Text should not displayed</Text>
        </AccordionPanel>
      </Accordion>
    )
    userEvent.click(getAccordionFirstPanel())
    expect(() => (screen.getByText('Text should not displayed'))).toThrow('Unable to find an element')
  })

  // Codium AI
  test('accordion panel should open when clicked', () => {
    const handleClick = jest.fn()
    render(
      <Accordion {...defaultProps} onChange={handleClick}>
        <AccordionPanel {...defaultPanelProps}>
          <Text>Text should be displayed</Text>
        </AccordionPanel>
      </Accordion>
    )
    userEvent.click(getAccordionFirstPanel())
    expect(screen.getByText('Text should be displayed')).toBeInTheDocument()
  })

  test('accordion panel with custom title size should render', () => {
    render(
      <Accordion {...defaultProps}>
        <AccordionPanel { ...defaultPanelProps} titleSize="large">
          <Text>Text with large title size</Text>
        </AccordionPanel>
      </Accordion>
    )
    expect(screen.getByText('Header text content')).toBeInTheDocument()
  })

  // Tabnine
  test('should render multiple accordion panels', () => {
    render(
      <Accordion klId="test-accordion">
        <AccordionPanel title="Panel 1" key="1">
          <Text>Content 1</Text>
        </AccordionPanel>
        <AccordionPanel title="Panel 2" key="2">
          <Text>Content 2</Text>
        </AccordionPanel>
        <AccordionPanel title="Panel 3" key="3">
          <Text>Content 3</Text>
        </AccordionPanel>
      </Accordion>
    )

    expect(screen.getAllByRole('button')).toHaveLength(3)
  })

  test('should render accordion panel with tag before', () => {
    render(
      <Accordion klId="test-accordion">
        <AccordionPanel
          title="Panel with Tag"
          key="1"
          tagBefore={<Tag>Tag</Tag>}
        >
          <Text>Content</Text>
        </AccordionPanel>
      </Accordion>
    )
    expect(screen.getByText('Tag')).toBeInTheDocument()
  })

  test('should render accordion panel with tag after', () => {
    render(
      <Accordion klId="test-accordion">
        <AccordionPanel
          title="Panel with Tag"
          key="1"
          tagAfter={<Tag>Tag</Tag>}
        >
          <Text>Content</Text>
        </AccordionPanel>
      </Accordion>
    )
    expect(screen.getByText('Tag')).toBeInTheDocument()
  })
})
