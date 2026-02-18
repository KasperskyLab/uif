import { ConfigProvider } from '@design-system/context'
import { fireEvent, render, waitFor } from '@testing-library/react'
import React from 'react'

import { WizardProps } from '../types'
import { Wizard } from '../Wizard'

const DefaultWizard = (props: WizardProps) =>
  <ConfigProvider>
    <Wizard {...props} />
  </ConfigProvider>

describe('WizardModal', () => {
  const steps = [
    {
      name: 'Step 1',
      Component: () => <div>Step 1 Content</div>
    },
    {
      name: 'Step 2',
      Component: () => <div>Step 2 Content</div>
    }
  ]

  it('should render modal with steps', () => {
    const { getByText } = render(
      <DefaultWizard
        view="modal"
        steps={steps}
        modal={{ visible: true }}
      />
    )
    expect(getByText('Step 1 Content')).toBeInTheDocument()
  })

  it('should navigate through steps', async () => {
    const { getByText, getByRole } = render(
      <DefaultWizard
        view="modal"
        steps={steps}
        modal={{ visible: true }}
      />
    )

    fireEvent.click(getByRole('button', { name: /next/i }))
    await waitFor(() => {
      expect(getByText('Step 2 Content')).toBeInTheDocument()
    })
  })
})

describe('WizardPage', () => {
  const steps = [
    {
      name: 'Step 1',
      Component: () => <div>Step 1 Content</div>
    },
    {
      name: 'Step 2',
      Component: () => <div>Step 2 Content</div>
    }
  ]
  const klId = 'test-wizard-page'
  const testId = 'test-wizard-page'

  it('should have test attributes', () => {
    const { container } = render(
      <DefaultWizard
        view="page"
        steps={steps}
        klId={klId}
        testId={testId}
      />
    )

    expect(container.querySelector(`[kl-id="${klId}"]`)).toBeInTheDocument()
    expect(container.querySelector(`[data-testid="${testId}"]`)).toBeInTheDocument()
  })

  it('should render the first step', () => {
    const { getByText } = render(<DefaultWizard view="page" steps={steps} />)
    expect(getByText('Step 1 Content')).toBeInTheDocument()
  })

  it('should navigate to next step', async () => {
    const { getByText, getByRole } = render(<Wizard view="page" steps={steps} />)

    fireEvent.click(getByRole('button', { name: /next/i }))
    await waitFor(() => {
      expect(getByText('Step 2 Content')).toBeInTheDocument()
    })
  })

  it('should allow going back to previous step', async () => {
    const { getByText, getByRole } = render(<DefaultWizard view="page" steps={steps} />)

    fireEvent.click(getByRole('button', { name: /next/i }))
    await waitFor(() => {
      expect(getByText('Step 2 Content')).toBeInTheDocument()
    })

    fireEvent.click(getByRole('button', { name: /back/i }))
    await waitFor(() => {
      expect(getByText('Step 1 Content')).toBeInTheDocument()
    })
  })

  it('should call onFinish when last step is submitted', async () => {
    const onFinish = jest.fn()
    const { getByRole } = render(<DefaultWizard view="page" steps={steps} onFinish={onFinish} />)

    fireEvent.click(getByRole('button', { name: /next/i }))
    await waitFor(() => {
      fireEvent.click(getByRole('button', { name: /finish/i }))
    })

    expect(onFinish).toHaveBeenCalled()
  })
})

describe('WizardSidebar', () => {
  const steps = [
    {
      name: 'Step 1',
      Component: () => <div>Step 1 Content</div>
    },
    {
      name: 'Step 2',
      Component: () => <div>Step 2 Content</div>
    }
  ]

  it('should render sidebar with steps', () => {
    const { getByText } = render(
      <DefaultWizard
        view="sidebar"
        steps={steps}
        sidebar={{ visible: true }}
      />
    )
    expect(getByText('Step 1 Content')).toBeInTheDocument()
  })

  it('should navigate through steps', async () => {
    const { getByText, getByRole } = render(
      <DefaultWizard
        view="sidebar"
        steps={steps}
        sidebar={{ visible: true }}
      />
    )

    fireEvent.click(getByRole('button', { name: /next/i }))
    await waitFor(() => {
      expect(getByText('Step 2 Content')).toBeInTheDocument()
    })
  })
})
