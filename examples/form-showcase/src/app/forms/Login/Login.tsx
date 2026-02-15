import { Forma } from '../../../shared/Forma'

import { loginResponseToFormMessage, useLoginMutation } from './Login.api'
import { loginFormConfig, type LoginFormValues } from './Login.forma-config'

export function LoginView() {
  const mutation = useLoginMutation()

  const onSubmit = (data: LoginFormValues) => {
    mutation.mutate(data, {
      onSuccess: (res) => {
        alert(loginResponseToFormMessage(res))
      },
      onError: (err) => {
        alert(err instanceof Error ? err.message : String(err))
      }
    })
  }

  return (
    <Forma<LoginFormValues>
      config={loginFormConfig}
      onSubmit={onSubmit}
      isLoading={mutation.isPending}
      title="Login"
      description={
        <>
          Email, password and optional &quot;Remember me&quot; with validation.
          Demo custom field is allowed only via Forma registry. (MSW mocks API.)
        </>
      }
    />
  )
}
