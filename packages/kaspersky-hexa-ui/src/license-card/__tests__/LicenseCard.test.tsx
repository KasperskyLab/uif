import { ConfigProvider } from '@design-system/context'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'

import { LicenseCard } from '../LicenseCard'
import styles from '../LicenseCard.module.scss'
import { LicenseCardMode, LicenseCardProps } from '../types'

const defaultProps = {
  title: 'Test License',
  number: 'LIC-123456',
  testId: 'license-card-test'
}

const DefaultLicenseCard = (props: Omit<LicenseCardProps, 'number'>) => (
  <ConfigProvider>
    <LicenseCard {...defaultProps} {...props} />
  </ConfigProvider>
)

describe('License Card', () => {

  test('should render', () => {
    const { container } = render(<DefaultLicenseCard testId="test-id"  />)
    
    expect(container.querySelector('[data-testid="test-id"]')).toBeInTheDocument()
  })

  test('should render title', () => {
    const title = 'Title'
    render(<DefaultLicenseCard title={title} />)
    expect(screen.getByText(title)).toBeInTheDocument()
  })

  test('should render iconBefore', () => {
    const iconBefore = 'test-iconBefore'
    render(<DefaultLicenseCard iconBefore={iconBefore} />)
    expect(screen.getByText(iconBefore)).toBeInTheDocument()
  })

  test('should render status icon in all modes', () => {
    const modes: LicenseCardMode[] = ['valid', 'warning', 'expiresSoon', 'expired', 'finished']

    modes.forEach(mode => {
      const { container } = render(<DefaultLicenseCard mode={mode} />)
      const licenseCard = container.querySelector(`.${styles.licenseCard}`) as HTMLElement
      expect(licenseCard).toHaveClass(styles[mode])
      const statusIcon = container.querySelector('svg') as SVGElement
      expect(statusIcon).toBeInTheDocument()
    })
  })

  test('should call copyLicenseKey when copy button is clicked', async () => {
    const originalClipboard = window.navigator.clipboard
    const writeTextMock = jest.fn().mockImplementation(() => Promise.resolve())
    Object.defineProperty(window.navigator, 'clipboard', {
      value: {
        writeText: writeTextMock
      },
      writable: true
    })
    render(<DefaultLicenseCard />)
    const copyButton = screen.getByRole('button')
    await userEvent.click(copyButton)
    expect(writeTextMock).toHaveBeenCalledWith(defaultProps.number)
    Object.defineProperty(window.navigator, 'clipboard', {
      value: originalClipboard,
      writable: true
    })
  })

  test('should render compact mode correctly', () => {
    const { container } = render(<DefaultLicenseCard compact />)
  
    const content = container.querySelector(`.${styles['licenseCardContent--compact']}`) as HTMLElement
    expect(content).toBeInTheDocument()

    const row = container.querySelector(`.${styles['licenseRow--compact']}`) as HTMLElement
    expect(row).toBeInTheDocument()
  })

  test('should render actions when provided', () => {
    const actions = <button>Replace license</button>
    render(<DefaultLicenseCard actions={actions} />)
    expect(screen.getByText('Replace license')).toBeInTheDocument()
  })
})