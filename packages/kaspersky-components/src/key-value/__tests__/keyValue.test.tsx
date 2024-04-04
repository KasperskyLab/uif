import React from 'react'
import { render, screen } from '@testing-library/react'
import { ThemeKey } from '@design-system/types'
import { ThemeProvider } from '@design-system/theme'
import { KeyValue } from '../KeyValue'
import { Icon } from '@src/icon'
import { KeyValuePair } from '../types'
import { Space } from '@src/space'
import { Button } from '@src/button'
import '@testing-library/jest-dom'
import 'jest-styled-components'

describe('KeyValue ', () => {
  const componentId = 'key-value-id'

  const data: KeyValuePair[] = [
    {
      pairKey: (
        <Space size={8} direction='horizontal' width='max-content'>
          <Icon name='Copy' size='small' />
          <span>Copy</span>
        </Space>
      ),
      pairValue: 'SideCopy'
    },
    {
      pairKey: (
        <Space size={8} direction='horizontal' width='max-content'>
          <Icon name='Web' size='small' />
          <span>URL</span>
        </Space>
      ),
      pairValue:
        'side.copy.google.com/user7773578ixh1092090.appspot.com/index.html'
    },
    {
      pairKey: 'Button',
      pairValue: (
        <Button size='medium' mode='primaryBlack'>
          Button
        </Button>
      )
    }
  ]

  test('should render', () => {
    const { container } = render(
      <KeyValue
        data={data}
        klId="kl-id"
        testId="test-id"
      />
    )

    expect(container.querySelector('[kl-id="kl-id"]')).toBeInTheDocument()
    expect(container.querySelector('[data-testid="test-id"]')).toBeInTheDocument()
  })

  test('should recieve data prop', () => {
    render(
      <ThemeProvider theme={ThemeKey.Light}>
        <KeyValue componentId={componentId} data={data} />
      </ThemeProvider>
    )
    const keyItem = screen.getByText('Copy')
    const valueItem = screen.getByText('SideCopy')
    expect(keyItem).toBeInTheDocument()
    expect(valueItem).toBeInTheDocument()
  })

  test('should handle custom components in key and value', () => {
    render(
      <ThemeProvider theme={ThemeKey.Light}>
        <KeyValue componentId={componentId} data={data} />
      </ThemeProvider>
    )
    const button = screen.getByRole('button', { name: 'Button' })
    const url = screen.getByText(
      'side.copy.google.com/user7773578ixh1092090.appspot.com/index.html'
    )
    expect(button).toBeInTheDocument()
    expect(url).toBeInTheDocument()
  })
})
