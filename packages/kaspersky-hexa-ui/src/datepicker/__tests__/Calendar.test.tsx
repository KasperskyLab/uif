import { ConfigProvider } from '@design-system/context'
import { DATE_FORMATS, locales } from '@design-system/tokens'
import { fireEvent, render, waitFor } from '@testing-library/react'
import React from 'react'

import { Calendar } from '../Calendar'
import { CalendarProps } from '../types'

describe('Calendar', () => {
  const DefaultCalender = (props: CalendarProps) => (
    <ConfigProvider>
      <Calendar {...props} />
    </ConfigProvider>
  )

  it('should receive qa props', () => {
    const { container } = render(<DefaultCalender testId="test-id" />)

    expect(container.querySelector('[data-testid="test-id"]')).toBeInTheDocument()
  })

  it('should receive value prop', () => {
    const { container } = render(<DefaultCalender value={new Date()} />)

    expect(container?.querySelector('input')).toHaveValue()
  })

  it('should call onchange', async () => {
    const onChangeHandler = jest.fn()
    const baseDom = render(<DefaultCalender value={null} placeholder="onChange" onChange={onChangeHandler} />)
    const input = baseDom.getByPlaceholderText('onChange')

    // DatePicer
    fireEvent.click(input)
    expect(onChangeHandler).toBeCalledTimes(0)
    fireEvent.click(baseDom.queryAllByText('4')[0])
    expect(onChangeHandler).toBeCalledTimes(1)
    fireEvent.click(input)
    fireEvent.click(baseDom.queryAllByText('1')[0])
    expect(onChangeHandler).toBeCalledTimes(2)
  })

  // ToDo: remove skip. In storubook works fine but test not work
  it.skip('should call onchange with time', async () => {
    const onChangeHandler = jest.fn()
    const baseDom = render(<DefaultCalender showTime value={null} placeholder="onChangeWithTime" onChange={onChangeHandler} />)
    const inputWithTime = baseDom.getByPlaceholderText('onChangeWithTime')

    fireEvent.click(inputWithTime)
    expect(onChangeHandler).toBeCalledTimes(0)
    fireEvent.click(baseDom.queryAllByText('4')[0])
    expect(onChangeHandler).toBeCalledTimes(1)
    fireEvent.click(baseDom.queryAllByText('00')[0])
    expect(onChangeHandler).toBeCalledTimes(2)
    fireEvent.click(baseDom.queryAllByText('00')[1])
    expect(onChangeHandler).toBeCalledTimes(3)
    fireEvent.click(baseDom.queryAllByText('00')[2])
    expect(onChangeHandler).toBeCalledTimes(4)
    fireEvent.click(inputWithTime)
    expect(onChangeHandler).toBeCalledTimes(4)
    fireEvent.click(baseDom.queryAllByText('1')[0])
    expect(onChangeHandler).toBeCalledTimes(5)
  })

  it('should render placeholder', () => {
    const placeholder = 'My placeholder'
    const { getByPlaceholderText } = render(<DefaultCalender placeholder={placeholder} />)

    expect(getByPlaceholderText(placeholder)).toBeInTheDocument()
  })

  it('should render format correct', () => {
    const baseDom = render(<DefaultCalender
      value={new Date('Fri Oct 01 1965')}
      placeholder="format"
      format={DATE_FORMATS.SLASH_YYYYMMDD}
    />)
    const input = baseDom.getByPlaceholderText('format')
    fireEvent.click(input)
    fireEvent.click(baseDom.queryAllByText('4')[0])

    expect(baseDom.getByPlaceholderText('format')).toHaveValue('1965/10/04')
  })

  it('should change month and year by controls', async () => {
    const baseDom = render(<DefaultCalender
      value={new Date('Fri Sep 04 1964')}
      placeholder="change"
      format={DATE_FORMATS.DOT_DDMMYYYY}
    />)
    const input = baseDom.getByPlaceholderText('change')
    fireEvent.click(input)
    const prevYear = baseDom.getByRole('calendar-super-prev-icon')
    const prevMonth = baseDom.getByRole('calendar-prev-icon')
    const nextMonth = baseDom.getByRole('calendar-next-icon')
    const nextYear = baseDom.getByRole('calendar-super-next-icon')

    expect(baseDom.queryByText('Sep')).toBeInTheDocument()
    fireEvent.click(nextMonth)
    expect(baseDom.queryByText('Oct')).toBeInTheDocument()

    expect(baseDom.queryByText('1964')).toBeInTheDocument()
    fireEvent.click(nextYear)
    expect(baseDom.queryByText('1965')).toBeInTheDocument()

    fireEvent.click(baseDom.queryAllByText('4')[0])

    expect(baseDom.queryByText('Oct')).toBeInTheDocument()
    fireEvent.click(prevMonth)
    expect(baseDom.queryByText('Sep')).toBeInTheDocument()

    expect(baseDom.queryByText('1965')).toBeInTheDocument()
    fireEvent.click(prevYear)
    expect(baseDom.queryByText('1964')).toBeInTheDocument()

    expect(baseDom.getByPlaceholderText('change')).toHaveValue('04.10.1965')
  })

  it('should render time controls when showTime prop path', () => {
    const baseDom = render(<DefaultCalender showTime placeholder="showTime" />)
    const input = baseDom.getByPlaceholderText('showTime')
    fireEvent.click(input)

    expect(baseDom.queryAllByText('00')).toHaveLength(3)
    expect(baseDom.queryAllByText('59')).toHaveLength(2)
  })

  it('should use the start of the day as a default time', async () => {
    const baseDom = render(<DefaultCalender format="YYYY-MM-DD HH:mm" placeholder="showTime" showTime />)
    const input = baseDom.getByPlaceholderText('showTime') as HTMLInputElement

    fireEvent.click(input)
    fireEvent.click(baseDom.queryAllByText('4')[0])

    await waitFor(() => expect(input.value).toContain('-04 00:00'))
  })

  it('should not console warn on clear', async () => {
    const { container } = render(<DefaultCalender testId="calendar-test-id" value={new Date()} />)

    const dateInput = container.querySelector('input')

    jest.spyOn(console, 'warn')
    console.error = () => undefined

    expect(dateInput).toHaveValue()

    const clearButton = container.querySelector('[data-testid="calendar-test-id-calendar-clear-icon"]') as HTMLElement

    clearButton?.click()

    await waitFor(() => { expect(dateInput).not.toHaveValue() })

    dateInput?.click()

    await waitFor(() => {
      expect(document.querySelector('.ant-picker-dropdown-hidden')).not.toBeInTheDocument()
      expect(document.querySelector('.ant-picker-dropdown')).toBeInTheDocument()
    })

    expect(console.warn).not.toBeCalled()
  })

  // Codium AI
  it('should close calendar when date is selected', () => {
    const { getByPlaceholderText, container } = render(<DefaultCalender />)
    const input = getByPlaceholderText(locales.en.placeholder)
    fireEvent.focus(input)
    fireEvent.change(input, { target: { value: '08.30.2024' } })
    fireEvent.blur(input)

    expect(container.querySelector('.ant-picker-open')).not.toBeInTheDocument()
  })

  it('should handle empty presets array without errors', () => {
    const { container } = render(<DefaultCalender presets={[]} />)

    expect(container).toBeInTheDocument()
  })

  it('should handle disabled state correctly', () => {
    const { getByPlaceholderText } = render(<Calendar disabled />)
    const input = getByPlaceholderText(locales.en.placeholder)

    expect(input).toBeDisabled()
  })

  it('should handle readonly state correctly', () => {
    const { getByPlaceholderText } = render(<DefaultCalender readonly />)
    const input = getByPlaceholderText(locales.en.placeholder)

    expect(input).toHaveAttribute('readonly')
  })

  it('should close when clicking outside', () => {
    const { getByPlaceholderText, container } = render(<Calendar />)
    const input = getByPlaceholderText(locales.en.placeholder)
    fireEvent.click(input)
    fireEvent.mouseDown(document)

    expect(container.querySelector('.ant-picker-open')).not.toBeInTheDocument()
  })

  it('should handle rapid open/close actions', () => {
    const { getByPlaceholderText, container } = render(<Calendar />)
    const input = getByPlaceholderText(locales.en.placeholder)
    fireEvent.click(input)
    fireEvent.mouseDown(document)
    fireEvent.click(input)
    fireEvent.mouseDown(document)

    expect(container.querySelector('.ant-picker-open')).not.toBeInTheDocument()
  })
})
