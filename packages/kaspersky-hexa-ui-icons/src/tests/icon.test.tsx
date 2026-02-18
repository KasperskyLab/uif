import * as React from 'react'
import { renderToString } from 'react-dom/server'
import { act, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ArrowUp from '../8/ArrowUp'
import ArrowDown from '../8/ArrowDown'
import { Icons } from '../types'

function getRandomIcons (originalArr: readonly string[], count: number) {
  const shuffled = [...originalArr]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }

  return shuffled.slice(0, count)
}

async function getIcon (iconFullname: string) {
  return import(`../${iconFullname}`).then(module => module.default)
}

function getIconInfo (iconFullname: string) {
  const [size, name] = iconFullname.split('/')
  return { size, name }
}

function getIconDimensions (iconFullName: string) {
  const { size } = getIconInfo(iconFullName)
  const isRectangle = size.includes('x')
  const [width, height] = isRectangle ? size.split('x') : [size, size]
  return {
    width,
    height,
    viewBox: `0 0 ${width} ${height}`
  }
}

const DEPRECATED_ICONS_WITH_INCORRECT_DIMENSIONS = [
  '16/Change11',
  '16/Color',
  '24/CloudSync1',
  '24/Color',
  '24/Einit1',
  '24/SubNod1',
  '24/ToolSolid1'
]

const ICONS_NUMBER_TO_TEST = 100

describe('Icons', () => {
  it.each<string>(getRandomIcons(Icons, ICONS_NUMBER_TO_TEST))('should render random icon with correct dimensions: %s', async (iconFullname) => {
    const Icon = await getIcon(iconFullname)
    const { width, height, viewBox } = getIconDimensions(iconFullname)
    const testId = 'MyId'

    const { container } = render(<Icon klId={testId} testId={testId} />)
    const svg = container.querySelector('svg')

    expect(svg).toBeInTheDocument()
    expect(container.querySelector(`[kl-id="${testId}"]`)).toBeInTheDocument()
    expect(screen.getByTestId(testId)).toBeInTheDocument()

    if (DEPRECATED_ICONS_WITH_INCORRECT_DIMENSIONS.includes(iconFullname)) return

    expect(svg).toHaveAttribute('width', width)
    expect(svg).toHaveAttribute('height', height)
    expect(svg).toHaveAttribute('viewBox', viewBox)
  })

  it('should support ssr', async () => {
    function App () {
      const [toggle, setToggle] = React.useState(false)

      return (
        <div>
          <button onClick={() => setToggle(prev => !prev)} data-testid="switch-button"/>
          <div>
            {toggle
              ? <ArrowUp testId="arrow-up" />
              : <ArrowDown testId="arrow-down" />
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
