import { useMutation } from '@tanstack/react-query'
import { apiPost } from '../../../../shared/Forma'
import type { WizardFormValues } from './Wizard.forma-config'

/** Backend DTO: POST /api/wizard request body */
export type WizardRequestDto = {
  full_name: string
  email: string
  company: string
  role: string
}

/** Backend DTO: POST /api/wizard response */
export type WizardResponseDto = {
  id: string
  full_name: string
  email: string
  company: string
  role: string
}

export function formValuesToWizardRequest(
  values: WizardFormValues
): WizardRequestDto {
  return {
    full_name: values.fullName,
    email: values.email,
    company: values.company,
    role: values.role
  }
}

export function wizardResponseToFormMessage(
  dto: WizardResponseDto
): string {
  return `Wizard completed: ${dto.full_name} at ${dto.company}`
}

export const wizardApi = {
  submit: (body: WizardRequestDto) =>
    apiPost<WizardResponseDto>('/wizard', body)
}

export function useWizardMutation() {
  return useMutation({
    mutationFn: (values: WizardFormValues) =>
      wizardApi.submit(formValuesToWizardRequest(values)),
    onSuccess: (data) => {
      console.log('Wizard success', data)
    }
  })
}
