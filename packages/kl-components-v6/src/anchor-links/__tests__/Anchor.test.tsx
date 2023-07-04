import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Anchor, AnchorLink } from '../Anchor'
import { IAnchorProps, AnchorLinkProps } from '../types'

const defaultProps: IAnchorProps = {
  klId: 'test-anchor'
}
const defaultPanelProps:AnchorLinkProps = {
  href: '#test',
  title: 'test-title'
}

const DefaultAnchor = (props: Partial<IAnchorProps>, panelProps: Partial<AnchorLinkProps>) =>
  <Anchor
    {...props}
  >
    <AnchorLink
      { ...defaultPanelProps}
      { ...panelProps }
    />
  </Anchor>

describe('Anchor', () => {
  test('should render', () => {
    render(<DefaultAnchor />)
    screen.getByText('test-title')
  })

  test('should receive kl-id prop', () => {
    render(<DefaultAnchor {...defaultProps} />)
    expect(screen.getByTestId('test-anchor')).toBeInTheDocument()
  })

  test('should call onChange when clicked', () => {
    const handleClick = jest.fn()
    render(
      <Anchor
        {...defaultProps}
        onChange={handleClick}
      >
        <AnchorLink { ...defaultPanelProps}/>
      </Anchor>
    )
    userEvent.click(screen.getByText('test-title'))
    expect(handleClick).toHaveBeenCalled()
  })
})
