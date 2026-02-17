import { useNavigate } from 'react-router-dom'

import { Forma } from '../../../../shared/Forma'

import { useAddAlertMutation } from './AddAlert.api'
import { addAlertFormConfig, type AddAlertFormValues } from './AddAlert.forma-config'

export function AddAlertView() {
  const navigate = useNavigate()
  const mutation = useAddAlertMutation()

  const onSubmit = (data: AddAlertFormValues) => {
    mutation.mutate(data, {
      onSuccess: () => navigate('/b2b-typical-scenario'),
      onError: (err) => {
        alert(err instanceof Error ? err.message : String(err))
      }
    })
  }

  return (
    <Forma<AddAlertFormValues>
      config={addAlertFormConfig}
      onSubmit={onSubmit}
      isLoading={mutation.isPending}
    />
  )
}
