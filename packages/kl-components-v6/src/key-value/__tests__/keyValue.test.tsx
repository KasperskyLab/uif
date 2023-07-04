import React from 'react'
import { render, screen } from '@testing-library/react'
import { ThemeKey } from '../../../design-system/types'
import { ThemeProvider } from '../../../design-system/theme'
import { KeyValue } from '../KeyValue'
import { Icon } from '../../icon'
import { KeyValuePair } from '../types'
import { Space } from '../../space'
import { Button } from '../../button'
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

  test('should recieve componentId prop', () => {
    const { container } = render(
      <ThemeProvider theme={ThemeKey.Light} >
        <KeyValue componentId={componentId} data={data}/>
      </ThemeProvider>
    )
    const keyValue = container.querySelector(
      `[data-component-id="${componentId}"]`
    )
    expect(keyValue).toBeInTheDocument()
  })
  test('should recieve data prop', () => {
    render(
      <ThemeProvider theme={ThemeKey.Light} >
        <KeyValue componentId={componentId} data={data}/>
      </ThemeProvider>
    )
    const keyItem = screen.getByText('Copy')
    expect(keyItem).toBeInTheDocument()
  })
})
