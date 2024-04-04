import * as React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Icons8 from '../8'
import Icons12 from '../12'
import Icons16 from '../16'
import Icons24 from '../24'
import Icons32 from '../32'
import Icons40 from '../40'
import Icons48 from '../48'
import {
  TypeIcons8,
  TypeIcons12,
  TypeIcons16,
  TypeIcons24,
  TypeIcons32,
  TypeIcons40,
  TypeIcons48
} from '../index'
import {Icons} from "../types";

describe('Icons', () => {
  const SeparatedIcons = Icons.map(el => {
    const separatedIcon = el.split('/')
    return {
      size: separatedIcon[0],
      name: separatedIcon[1]
    }
  })
  test('should render icons size 8', () => {
    const key = SeparatedIcons.find(({ size }) => size == '8')?.name
    const Icon = Icons8[key as TypeIcons8]
    const { container } = render(
      <Icon />
    )
    const icon = container.querySelector('svg')
    expect(icon).toBeInTheDocument()
  })
  test('should render icons size 12', () => {
    const key = SeparatedIcons.find(({ size }) => size == '12')?.name
    const Icon = Icons12[key as TypeIcons12]
    const { container } = render(
      <Icon />
    )
    const icon = container.querySelector('svg')
    expect(icon).toBeInTheDocument()
  })
  test('should render icons size 16', () => {
    const key = SeparatedIcons.find(({ size }) => size == '16')?.name
    const Icon = Icons16[key as TypeIcons16]
    const { container } = render(
      <Icon />
    )
    const icon = container.querySelector('svg')
    expect(icon).toBeInTheDocument()
  })
  test('should render icons size 24', () => {
    const key = SeparatedIcons.find(({ size }) => size == '24')?.name
    const Icon = Icons24[key as TypeIcons24]
    const { container } = render(
      <Icon />
    )
    const icon = container.querySelector('svg')
    expect(icon).toBeInTheDocument()
  })
  test('should render icons size 32', () => {
    const key = SeparatedIcons.find(({ size }) => size == '32')?.name
    const Icon = Icons32[key as TypeIcons32]
    const { container } = render(
      <Icon />
    )
    const icon = container.querySelector('svg')
    expect(icon).toBeInTheDocument()
  })
  test('should render icons size 40', () => {
    const key = SeparatedIcons.find(({ size }) => size == '40')?.name
    const Icon = Icons40[key as TypeIcons40]
    const { container } = render(
      <Icon />
    )
    const icon = container.querySelector('svg')
    expect(icon).toBeInTheDocument()
  })
  test('should render icons size 48', () => {
    const key = SeparatedIcons.find(({ size }) => size == '48')?.name
    const Icon = Icons48[key as TypeIcons48]
    const { container } = render(
      <Icon />
    )
    const icon = container.querySelector('svg')
    expect(icon).toBeInTheDocument()
  })
  test('should render icon with kl-id', () => {
    const key = SeparatedIcons.find(({ size }) => size == '16')?.name
    const Icon = Icons16[key as TypeIcons16]
    const klId = 'MyId'
    const { container } = render(<>
      <Icon klId={klId} />
    </>)
    const icon = container.querySelector('[kl-id]')
    expect(icon).toBeInTheDocument()
  })
  test('should render icon with data attribute', () => {
    const key = SeparatedIcons.find(({ size }) => size == '16')?.name
    const Icon = Icons16[key as TypeIcons16]
    const klId = 'MyId'
    render(
      <Icon testId={klId} />
    )
    const icon = screen.getByTestId(klId)
    expect(icon).toBeInTheDocument()
  })
})
