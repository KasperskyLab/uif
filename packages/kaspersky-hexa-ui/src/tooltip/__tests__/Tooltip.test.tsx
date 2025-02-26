import { Button } from '@src/button'
import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'

import { Tooltip } from '../Tooltip'

describe('Tooltip', () => {
  it('should render visible tooltip by default', () => {
    render(
      <Tooltip text="Tooltip" visible>
        <Button>hover me to see Tooltip</Button>
      </Tooltip>
    )

    expect(screen.getByText('Tooltip')).toBeInTheDocument()
  })

  test('should render tooltip on hover', async () => {
    const baseDom = render(<Tooltip text="tooltip_unic_text">
      <Button klId="button-klid" >hover me to see Tooltip</Button>
    </Tooltip>)

    expect(
      baseDom.queryByText('tooltip_unic_text')
    ).toBeNull()

    fireEvent.mouseOver(baseDom.getByTestId('button-klid'))

    expect(
      await baseDom.findByText('tooltip_unic_text')
    ).toBeInTheDocument()
  })
})
