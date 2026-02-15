import { useMutation } from '@tanstack/react-query'
import { apiPost } from '../../../shared/Forma'
import type { RegistrationFormValues } from './Registration.forma-config'

/** Backend DTO: request body for POST /api/auth/register */
export type RegisterRequestDto = {
  full_name: string
  email: string
  password: string
  country_code: string
}

/** Backend DTO: response from POST /api/auth/register */
export type RegisterResponseDto = {
  id: string
  email: string
  full_name: string
}

export function formValuesToRegisterRequest(
  values: RegistrationFormValues
): RegisterRequestDto {
  return {
    full_name: values.name,
    email: values.email,
    password: values.password,
    country_code: values.country
  }
}

export function registerResponseToFormMessage(
  dto: RegisterResponseDto
): string {
  return `Registered: ${dto.full_name} (${dto.email})`
}

export const registrationApi = {
  register: (body: RegisterRequestDto) =>
    apiPost<RegisterResponseDto>('/auth/register', body)
}

export function useRegisterMutation() {
  return useMutation({
    mutationFn: (values: RegistrationFormValues) =>
      registrationApi.register(formValuesToRegisterRequest(values)),
    onSuccess: (data) => {
      console.log('Registration success', data)
    }
  })
}
