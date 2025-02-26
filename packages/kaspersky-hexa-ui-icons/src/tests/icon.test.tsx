import * as React from 'react'
import { renderToString } from 'react-dom/server'
import { act, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Icons8 from '../8'
import {
  TypeIcons8,
  TypeIcons12,
  TypeIcons16,
  TypeIcons24,
  TypeIcons32,
  TypeIcons40,
  TypeIcons48
} from '../index'
import { Icons } from '../types'

describe('Icons', () => {
  type IconSize = 8 | 12 | 16 | 24 | 32 | 40 | 48
  type IconKey<Size extends IconSize> = Size extends 8 ? TypeIcons8
    : Size extends 12 ? TypeIcons12
      : Size extends 16 ? TypeIcons16
        : Size extends 24 ? TypeIcons24
          : Size extends 32 ? TypeIcons32
            : Size extends 40 ? TypeIcons40 : TypeIcons48

  function getIconKey<T extends IconSize> (size: T): IconKey<T> {
    return Icons.find(x => x.startsWith(`${size}/`))!.split('/')[1] as IconKey<T>
  }

  async function getIcon (size: IconSize) {
    return import(`../${size}`).then(x => x[getIconKey(size)])
  }

  it.each<IconSize>([
    8, 12, 16, 24, 32, 40, 48
  ])('should render icons size %d', async (size) => {
    const Icon = await getIcon(size)
    const testId = 'MyId'

    const { container } = render(<Icon klId={testId} testId={testId} />)

    expect(container.querySelector('svg')).toBeInTheDocument()
    expect(container.querySelector(`[kl-id="${testId}"]`)).toBeInTheDocument()
    expect(screen.getByTestId(testId)).toBeInTheDocument()
  })

  it('should support ssr', async () => {
    function App () {
      const [toggle, setToggle] = React.useState(false)

      return (
        <div>
          <button onClick={() => setToggle(prev => !prev)} data-testid="switch-button"/>
          <div>
            {toggle
              ? <Icons8.ArrowUp testId="arrow-up" />
              : <Icons8.ArrowDown testId="arrow-down" />
            }
          </div>
        </div>
      )
    }

    const container = document.createElement('div')
    container.innerHTML = renderToString(<App />)
    document.body.appendChild(container)

    expect(screen.queryByTestId('arrow-down')).toBeInTheDocument()
    expect(screen.queryByTestId('arrow-up')).not.toBeInTheDocument()

    render(<App />, { container, hydrate: true })

    act(() => {
      screen.getByTestId('switch-button').click()
    })

    expect(screen.queryByTestId('arrow-down')).not.toBeInTheDocument()
    expect(screen.queryByTestId('arrow-up')).toBeInTheDocument()
  })
})
