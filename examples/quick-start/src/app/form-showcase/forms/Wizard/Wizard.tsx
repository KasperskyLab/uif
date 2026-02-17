import React from 'react'
import { Button, Text } from '@kaspersky/hexa-ui'
import styled from 'styled-components'

import { Forma } from '../../../../shared/Forma'
import {
  useWizardMutation,
  wizardResponseToFormMessage
} from './Wizard.api'
import {
  getWizardStepFields,
  type WizardFormValues,
  wizardFormConfigBase,
  WIZARD_STEPS
} from './Wizard.forma-config'

const StepIndicator = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
`

const StepDot = styled.div<{ $active: boolean; $done?: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${(p: { $active: boolean; $done?: boolean }) =>
    p.$done ? '#52c41a' : p.$active ? '#1890ff' : '#d9d9d9'};
`

const ButtonRow = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 8px;
`

export function WizardView() {
  const mutation = useWizardMutation()
  const [step, setStep] = React.useState(0)
  const currentStep = WIZARD_STEPS[step]
  const isLastStep = step === WIZARD_STEPS.length - 1

  const onSubmit = (data: WizardFormValues) => {
    mutation.mutate(data, {
      onSuccess: (res) => {
        alert(wizardResponseToFormMessage(res))
      },
      onError: (err) => {
        alert(err instanceof Error ? err.message : String(err))
      }
    })
  }

  const config = {
    ...wizardFormConfigBase,
    fields: getWizardStepFields(step)
  }

  return (
    <>
      <Text type="H3">Multi-step Wizard</Text>
      <Text type="BTR3" style={{ marginBottom: 16 }}>
        Two steps: contact info then company/role. Next validates current step.
        (MSW mocks POST /api/wizard.)
      </Text>
      <StepIndicator>
        {WIZARD_STEPS.map((s, i) => (
          <StepDot
            key={s.key}
            $active={i === step}
            $done={i < step}
          />
        ))}
      </StepIndicator>
      <Forma<WizardFormValues>
        config={config}
        onSubmit={onSubmit}
        isLoading={mutation.isPending}
        renderActions={({ trigger }) => (
          <ButtonRow>
            {step > 0 && (
              <Button
                mode="secondary"
                type="button"
                onClick={() => setStep((s) => s - 1)}
              >
                Back
              </Button>
            )}
            {!isLastStep ? (
              <Button
                mode="primary"
                type="button"
                onClick={async () => {
                  const valid = await trigger([...currentStep.fields])
                  if (valid) setStep((s) => s + 1)
                }}
              >
                Next
              </Button>
            ) : (
              <Button
                mode="primary"
                type="submit"
                disabled={mutation.isPending}
              >
                {mutation.isPending ? 'Submitting…' : 'Submit'}
              </Button>
            )}
          </ButtonRow>
        )}
      />
    </>
  )
}
