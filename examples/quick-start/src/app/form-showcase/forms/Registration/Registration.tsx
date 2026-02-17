import { Forma } from '../../../../shared/Forma'

import {
  registerResponseToFormMessage,
  useRegisterMutation
} from './Registration.api'
import {
  registrationFormConfig,
  type RegistrationFormValues
} from './Registration.forma-config'

export function RegistrationView() {
  const mutation = useRegisterMutation()

  const onSubmit = (data: RegistrationFormValues) => {
    mutation.mutate(data, {
      onSuccess: (res) => {
        alert(registerResponseToFormMessage(res))
      },
      onError: (err) => {
        alert(err instanceof Error ? err.message : String(err))
      }
    })
  }

  return (
    <Forma<RegistrationFormValues>
      config={registrationFormConfig}
      onSubmit={onSubmit}
      isLoading={mutation.isPending}
      title="Registration / Profile"
      description={
        <>
          Name, email, password confirmation, Select and required terms
          checkbox. (MSW mocks API.)
        </>
      }
    />
  )
}
