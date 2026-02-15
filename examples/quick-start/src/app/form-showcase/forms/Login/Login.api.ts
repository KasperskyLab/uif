import type { MutateOptions } from '@tanstack/react-query'
import { useFormaPost } from '../../../../shared/Forma'
import type { LoginFormValues } from './Login.forma-config'

const LOGIN_PATH = '/auth/login'

/** Backend DTO: request body for POST /api/auth/login */
export type LoginRequestDto = {
  email: string
  password: string
  remember_me?: boolean
}

/** Backend DTO: response from POST /api/auth/login */
export type LoginResponseDto = {
  token: string
  user: { email: string; name?: string }
}

export function formValuesToLoginRequest(
  values: LoginFormValues
): LoginRequestDto {
  return {
    email: values.email,
    password: values.password,
    remember_me: values.remember ?? false
  }
}

export function loginResponseToFormMessage(dto: LoginResponseDto): string {
  return `Logged in as ${dto.user.email}`
}

export function useLoginMutation() {
  const mutation = useFormaPost<LoginResponseDto, LoginRequestDto>(LOGIN_PATH, {
    onSuccess: (data) => {
      console.log('Login success', data)
    }
  })
  return {
    ...mutation,
    mutate: (
      values: LoginFormValues,
      options?: MutateOptions<LoginResponseDto, Error, LoginRequestDto>
    ) => mutation.mutate(formValuesToLoginRequest(values), options),
    mutateAsync: (values: LoginFormValues) =>
      mutation.mutateAsync(formValuesToLoginRequest(values))
  }
}
