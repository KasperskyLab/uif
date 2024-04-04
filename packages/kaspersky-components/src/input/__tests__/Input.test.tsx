import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { ThemeKey } from '@design-system/types'
import { ThemeProvider } from '@design-system/theme'
import '@testing-library/jest-dom'
import 'jest-styled-components'
import { Textbox } from '../Textbox'
import userEvent from '@testing-library/user-event'

describe('Input - Textbox - Basic ', () => {
  const klId = 'input-id'

  test('should receive qa props', () => {
    const { container } = render(<Textbox klId={klId} testId="test-id" />)

    expect(container.querySelector(`[kl-id="${klId}"]`)).toBeInTheDocument()
    expect(container.querySelector('[data-testid="test-id"]')).toBeInTheDocument()
  })

  test('should render with mask Date', async () => {
    const { getByTestId } = render(
      <ThemeProvider theme={ThemeKey.Light}>
        <Textbox
          klId={klId}
          maskOptions={ {
            mask: Date,
            lazy: false,
            overwrite: true,
            autofix: true
          }}
        />
      </ThemeProvider>
    )
    const inputDate = getByTestId(klId)
    await userEvent.clear(inputDate)
    await userEvent.type(inputDate, '21111993')
    expect(inputDate).toHaveValue('21.11.1993')
  })

  test('should not render any text when input mask is Number', async () => {
    const { getByTestId } = render(
      <ThemeProvider theme={ThemeKey.Light}>
        <Textbox
          klId={klId}
          maskOptions={ {
            mask: Number,
            lazy: false,
            overwrite: true,
            autofix: true
          }}
        />
      </ThemeProvider>
    )
    const inputNumber = getByTestId(klId)
    await userEvent.clear(inputNumber)
    await userEvent.type(inputNumber, 'aaa')
    expect(inputNumber).toHaveValue('')
  })

  test('should render any text when input mask is None', async () => {
    const { getByTestId } = render(
      <ThemeProvider theme={ThemeKey.Light}>
        <Textbox
          klId={klId}
          maskOptions={ undefined }
        />
      </ThemeProvider>
    )
    const inputNone = getByTestId(klId)
    await userEvent.clear(inputNone)
    await userEvent.type(inputNone, 'test')
    expect(inputNone).toHaveValue('test')
    await userEvent.type(inputNone, '5')
    expect(inputNone).toHaveValue('test5')
  })

  test('should render with mask Phone', async () => {
    const { getByTestId } = render(
      <ThemeProvider theme={ThemeKey.Light}>
        <Textbox
          klId={klId}
          maskOptions={ {
            mask: '+7 (000) 000-00-00',
            lazy: false,
            overwrite: true,
            autofix: true
          }}
        />
      </ThemeProvider>
    )
    const inputPhone = getByTestId(klId)
    await userEvent.clear(inputPhone)
    await userEvent.type(inputPhone, '9998887755')
    expect(inputPhone).toHaveValue('+7 (999) 888-77-55')
  })

  test('should render with mask Pattern', async () => {
    const { getByTestId } = render(
      <ThemeProvider theme={ThemeKey.Light}>
        <Textbox
          klId={klId}
          maskOptions={ {
            mask: '{#}000[aaa]/NIC-`*[**]',
            lazy: false,
            overwrite: true,
            autofix: true
          }}
        />
      </ThemeProvider>
    )
    const inputPattern = getByTestId(klId)
    await userEvent.clear(inputPattern)
    await userEvent.type(inputPattern, '555555')
    expect(inputPattern).toHaveValue('#555/NIC-555')
  })

  test('should render with mask IP', async () => {
    const { getByTestId } = render(
      <ThemeProvider theme={ThemeKey.Light}>
        <Textbox
          klId={klId}
          maskOptions={ {
            mask: 'NUM.NUM.NUM.NUM',
            blocks: {
              NUM: {
                mask: /^[0-9]{1,3}$/
              }
            }
          }}
        />
      </ThemeProvider>
    )
    const inputIP = getByTestId(klId)
    await userEvent.clear(inputIP)
    await userEvent.type(inputIP, '111111111111')
    expect(inputIP).toHaveValue('111.111.111.111')
  })

  test('should render with mask MAC', async () => {
    const { getByTestId } = render(
      <ThemeProvider theme={ThemeKey.Light}>
        <Textbox
          klId={klId}
          maskOptions={ {
            mask: 'MACAD:MACAD:MACAD:MACAD',
            blocks: {
              MACAD: { mask: /^[0-9a-f]{1,2}$/ }
            },
            lazy: true,
            overwrite: true,
            autofix: true
          }}
        />
      </ThemeProvider>
    )
    const inputMAC = getByTestId(klId)
    await userEvent.type(inputMAC, '11111111')
    expect(inputMAC).toHaveValue('11:11:11:11')
  })
})

describe('Input - Textbox - Number ', () => {
  const klId = 'input-id'
  test('should recieve kl-id prop', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={ThemeKey.Light}>
        <Textbox.Number
          klId={klId}
        />
      </ThemeProvider>
    )
    expect(getByTestId(klId)).toBeInTheDocument()
  })

  test('should not render text value', async () => {
    const { getByTestId } = render(
      <ThemeProvider theme={ThemeKey.Light}>
        <Textbox.Number
          klId={klId}
        />
      </ThemeProvider>
    )
    const textboxNumber = getByTestId(klId)
    await userEvent.clear(textboxNumber)
    await userEvent.type(textboxNumber, 'aaa')
    await userEvent.click(document.body)
    expect(textboxNumber).toHaveValue('')
  })

  test('should render only numeric value', async () => {
    const { getByTestId } = render(
      <ThemeProvider theme={ThemeKey.Light}>
        <Textbox.Number
          klId={klId}
        />
      </ThemeProvider>
    )
    const textboxNumber = getByTestId(klId)
    await userEvent.clear(textboxNumber)
    await userEvent.type(textboxNumber, '444')
    await userEvent.click(document.body)
    expect(textboxNumber).toHaveValue('444')
  })
})

describe('Input - Textbox - Textarea ', () => {
  const klId = 'input-id'
  test('should recieve kl-id prop', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={ThemeKey.Light}>
        <Textbox.Textarea
          klId={klId}
        />
      </ThemeProvider>
    )
    expect(getByTestId(klId)).toBeInTheDocument()
  })
})

describe('Input - Textbox - Password ', () => {
  const klId = 'input-id'
  test('should recieve kl-id prop', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={ThemeKey.Light}>
        <Textbox.Password
          klId={klId}
        />
      </ThemeProvider>
    )
    expect(getByTestId(klId)).toBeInTheDocument()
  })
})

describe('Input - Textbox - Url ', () => {
  const klId = 'url-input-id'
  test('should recieve kl-id prop', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={ThemeKey.Light}>
        <Textbox.Url
          klId={klId}
        />
      </ThemeProvider>
    )
    expect(getByTestId(klId)).toBeInTheDocument()
  })

  test('changes the input value for path and port', () => {
    const onPathChange = jest.fn()
    const onPortChange = jest.fn()
    const { getByTestId } = render(
      <Textbox.Url onPathChange={onPathChange} onPortChange={onPortChange} />
    )
    const pathInput = getByTestId('kl-v6-path-input')
    const portInput = getByTestId('kl-v6-port-input')
    fireEvent.change(pathInput, { target: { value: '/example' } })
    fireEvent.change(portInput, { target: { value: '3000' } })
    expect(pathInput).toHaveValue('/example')
    expect(portInput).toHaveValue('3000')
  })

  test('displays an error when error prop is passed', () => {
    const klId = 'url-input-id'
    const { getByTestId } = render(<Textbox.Url klId={klId} error={true} />)
    const pathInput = getByTestId('kl-v6-path-input')
    const portInput = getByTestId('kl-v6-port-input')
    expect(pathInput).toHaveClass('error')
    expect(portInput).toHaveClass('error')
  })
  test('disables the input when disabled prop is passed', () => {
    const klId = 'url-input-id'
    const { getByTestId } = render(<Textbox.Url klId={klId} disabled />)
    const pathInput = getByTestId('kl-v6-path-input')
    const portInput = getByTestId('kl-v6-port-input')
    expect(pathInput).toBeDisabled()
    expect(portInput).toBeDisabled()
  })
})
