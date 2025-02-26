import { Button } from '@src/button'
import { Icon } from '@src/icon'
import { Space } from '@src/space'
import { render, screen } from '@testing-library/react'
import React from 'react'

import { KeyValue } from '../KeyValue'
import { KeyValuePair, KeyValueProps } from '../types'

import '@testing-library/jest-dom'
import 'jest-styled-components'

const DefaultKeyValue = (props: KeyValueProps) => (
  <KeyValue
    klId="kl-id"
    testId="test-id"
    {...props}
  />
)

describe('KeyValue ', () => {
  const componentId = 'key-value-id'

  const data: KeyValuePair[] = [
    {
      pairKey: (
        <Space gap={8} direction="horizontal" width="max-content">
          <Icon name="Copy" size="small" />
          <span>Copy</span>
        </Space>
      ),
      pairValue: 'SideCopy'
    },
    {
      pairKey: (
        <Space gap={8} direction="horizontal" width="max-content">
          <Icon name="Web" size="small" />
          <span>URL</span>
        </Space>
      ),
      pairValue:
        'side.copy.google.com/user7773578ixh1092090.appspot.com/index.html'
    },
    {
      pairKey: 'Button',
      pairValue: (
        <Button size="medium">
          Button
        </Button>
      )
    }
  ]

  test('should render', () => {
    const { container } = render(<DefaultKeyValue data={data}/>)

    expect(container.querySelector('[kl-id="kl-id"]')).toBeInTheDocument()
    expect(container.querySelector('[data-testid="test-id"]')).toBeInTheDocument()
  })

  test('should recieve data prop', () => {
    render(
      <KeyValue componentId={componentId} data={data} />
    )
    const keyItem = screen.getByText('Copy')
    const valueItem = screen.getByText('SideCopy')
    expect(keyItem).toBeInTheDocument()
    expect(valueItem).toBeInTheDocument()
  })

  test('should handle custom components in key and value', () => {
    render(
      <KeyValue componentId={componentId} data={data} />
    )
    const button = screen.getByRole('button', { name: 'Button' })
    const url = screen.getByText(
      'side.copy.google.com/user7773578ixh1092090.appspot.com/index.html'
    )
    expect(button).toBeInTheDocument()
    expect(url).toBeInTheDocument()
  })

  // Codium AI
  it('should render correct number of KeyValueWrapper elements based on data length', () => {
    const data = [
      { pairKey: 'Key1', pairValue: 'Value1' },
      { pairKey: 'Key2', pairValue: 'Value2' }
    ]
    const { container } = render(<DefaultKeyValue data={data}/>)

    expect(container.querySelectorAll('div[data-testid="test-id"] > *').length).toBe(data.length)
  })

  it('should handle empty data array gracefully', () => {
    const { container } = render(<DefaultKeyValue data={[]}/>)

    expect(container.querySelectorAll('div[data-testid="test-id"] > *').length).toBe(0)
  })

  it('should handle undefined data prop', () => {
    const { container } = render(<DefaultKeyValue />)

    expect(container.querySelectorAll('div[data-testid="test-id"] > *').length).toBe(0)
  })

  it('should handle null pairKey or pairValue in data', () => {
    const data = [
      { pairKey: null, pairValue: 'Value1' },
      { pairKey: 'Key2', pairValue: null }
    ]
    const { container } = render(<DefaultKeyValue data={data}/>)

    expect(container.querySelectorAll('div[data-testid="test-id"] > *').length).toBe(data.length)
  })

  it('should handle non-string pairValue correctly', () => {
    const data = [
      { pairKey: 'Key1', pairValue: <Button>Click me</Button> }
    ]
    const { container } = render(<DefaultKeyValue data={data}/>)

    expect(container.querySelector('button')).toBeInTheDocument()
  })
})
