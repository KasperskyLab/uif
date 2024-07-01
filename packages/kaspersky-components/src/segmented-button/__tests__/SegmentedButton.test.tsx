import React, { FC, useState } from 'react'
import userEvent from '@testing-library/user-event'
import { render } from '@testing-library/react'
import { SegmentedButtonOption, SegmentedButtonProps } from '../types'
import { SegmentedButton } from '../SegmentedButton'
import { Placeholder } from '@kaspersky/icons/16'
import { Icon } from '@src/icon'

type SegmentedButtonTestProps = Omit<SegmentedButtonProps, 'value' | 'onChange' | 'items'>

const defaultItems: SegmentedButtonOption[] = [
  {
    text: 'default',
    value: 'default'
  },
  {
    text: 'custom color',
    value: 'emerald',
    mode: 'emerald'
  },
  {
    text: 'disabled',
    value: 'disabled',
    disabled: true
  },
  {
    text: 'red & componentsBefore',
    value: 'red',
    mode: 'red',
    componentsBefore: [
      <Icon
        name='Placeholder'
        size='medium'
        key='icon'
        klId='test-icon-before'
      />
    ]
  },
  {
    text: 'orange & componentsAfter',
    value: 'orange',
    mode: 'orange',
    componentsAfter: [
      <Icon
        name='Placeholder'
        size='medium'
        key='icon'
        klId='test-icon-after'
      />
    ]
  },
  {
    text: 'purple & both',
    value: 'purple',
    mode: 'purple',
    componentsBefore: [<Placeholder key='icon' />],
    componentsAfter: [<Placeholder key='icon' />]
  }
]

const DefaultSegmentedButton: FC<SegmentedButtonTestProps> = (props: SegmentedButtonTestProps) => {
  const [value, setValue] = useState<string[]>([])
  return (
    <SegmentedButton
      {...props}
      items={defaultItems}
      value={value}
      onChange={setValue}
    />
  )
}

describe('SegmentedButton', () => {
  const klId = 'test-segmented-button'

  test('should receive kl-id prop', () => {
    const { container, getByTestId } = render(
      <DefaultSegmentedButton klId={klId} testId="test-id" />
    )

    expect(getByTestId(klId)).toBeInTheDocument()
    expect(container.querySelector('[data-testid="test-id"]')).toBeInTheDocument()
  })

  test('should render componentsBefore and componentsAfter', () => {
    const { getByTestId } = render(
      <DefaultSegmentedButton klId={klId} />
    )
    expect(getByTestId('test-icon-before')).toBeInTheDocument()
    expect(getByTestId('test-icon-after')).toBeInTheDocument()
  })

  test('should pass className prop', () => {
    const className = 'segmented-button-test-class'
    const { getByTestId } = render(
      <DefaultSegmentedButton klId={klId} className='segmented-button-test-class' />
    )
    expect(getByTestId(klId)).toHaveClass(className)
  })

  test('should call onChange callback after click on button', () => {
    const handleOnChange = jest.fn()
    const { getByText } = render(<SegmentedButton klId={klId} items={defaultItems} value={[]} onChange={handleOnChange} />)

    const btn = getByText('default')
    userEvent.click(btn)

    expect(handleOnChange).toHaveBeenCalledWith(['default'])
  })

  // Codium AI
  test('should handle empty items array gracefully', () => {
    const handleOnChange = jest.fn()
    const { container } = render(<SegmentedButton items={[]} value={[]} onChange={handleOnChange} />)
    expect(container.querySelectorAll('.kl6-segmented-button-item')).toHaveLength(0)
  })

  test('should handle rapid sequential clicks on items', async () => {
    const handleOnChange = jest.fn()
    const items = [{ text: 'Item 1', value: 'item1' }, { text: 'Item 2', value: 'item2' }]
    const { getByText } = render(<SegmentedButton items={items} value={[]} onChange={handleOnChange} />)

    const item1 = getByText('Item 1')
    const item2 = getByText('Item 2')

    await userEvent.click(item1)
    await userEvent.click(item2)

    expect(handleOnChange).toHaveBeenCalledTimes(2)
    expect(handleOnChange).toHaveBeenCalledWith(['item1'])
    expect(handleOnChange).toHaveBeenCalledWith(['item2'])
  })
})
