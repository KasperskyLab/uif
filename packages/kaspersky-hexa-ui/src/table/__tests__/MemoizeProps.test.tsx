import { fireEvent, render, screen } from '@testing-library/react'
import React, { useMemo, useRef, useState } from 'react'

import { MemoizeProps } from '../modules/MemoizeProps'

describe('Table MemoizeProps module', () => {
  function getProps () {
    return {
      prop1: {},
      prop2: {},
      prop3: [
        { key1: 'value', key2: [{ key3: 12 }, { key4: [1, 2, 3] }] },
        { key1: 'anothe-value' }
      ]
    }
  }

  let consoleSpy: jest.SpyInstance

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {})
  })

  afterEach(() => {
    consoleSpy.mockRestore()
  })

  it('should memoize props', () => {
    const Component = (props: any) => {
      const prop1ChangeCounter = useRef(0)
      const prop2ChangeCounter = useRef(0)
      const prop3ChangeCounter = useRef(0)

      useMemo(() => prop1ChangeCounter.current++, [props.prop1])
      useMemo(() => prop2ChangeCounter.current++, [props.prop2])
      useMemo(() => prop3ChangeCounter.current++, [props.prop3])

      return (
        <div>
          <div>{`prop1 ${prop1ChangeCounter.current}`}</div>
          <div>{`prop2 ${prop2ChangeCounter.current}`}</div>
          <div>{`prop3 ${prop3ChangeCounter.current}`}</div>
        </div>
      )
    }

    const Wrapper = MemoizeProps(
      'prop1' as any,
      'prop3' as any
    )(Component)

    const TestComponent = () => {
      const [props, setProps] = useState<any>(getProps())

      return (
        <div>
          <button type="button" onClick={() => setProps(getProps())}>
            update props
          </button>

          return <Wrapper {...props} />
        </div>
      )
    }

    render(<TestComponent />)

    fireEvent.click(screen.getByText('update props'))

    expect(screen.getByText('prop1 1')).toBeInTheDocument()
    expect(screen.getByText('prop2 2')).toBeInTheDocument()
    expect(screen.getByText('prop3 1')).toBeInTheDocument()
  })
})
