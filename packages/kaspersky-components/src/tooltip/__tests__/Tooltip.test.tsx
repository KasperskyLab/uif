import React from 'react'
import { render, screen } from '@testing-library/react'
import { Button } from '@src/button'
import { Tooltip } from '../Tooltip'

describe('Tooltip', () => {
  it('should render', () => {
    render(
      <Tooltip text="Tooltip" visible>
        <Button>hover me to see Tooltip</Button>
      </Tooltip>
    )

    expect(screen.getByText('Tooltip')).toBeInTheDocument()
  })
})
