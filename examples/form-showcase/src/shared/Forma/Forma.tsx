import {
  useForm,
  type FieldValues,
  type DefaultValues
} from 'react-hook-form'
import { Button, Text } from '@kaspersky/hexa-ui'
import styled from 'styled-components'

import { FormaFieldController } from './field-control/FormaFieldController'
import type { FormaFormContext, FormaProps } from './Forma.types'
import { createFormaResolver } from './field-control/resolver'

const Form = styled.form`
  max-width: 560px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export function Forma<T extends FieldValues>({
  config,
  onSubmit,
  isLoading = false,
  title,
  description,
  renderActions
}: FormaProps<T>) {
  const {
    control,
    handleSubmit,
    trigger,
    getValues,
    formState: { errors }
  } = useForm<T>({
    resolver: createFormaResolver(config.schema),
    defaultValues: config.defaultValues as DefaultValues<T>
  })

  const handleSubmitWrap = handleSubmit((data) => onSubmit(data as T))

  const ctx: FormaFormContext<T> & { handleSubmit: () => void } = {
    control: control as FormaFormContext<T>['control'],
    errors,
    trigger: trigger as FormaFormContext<T>['trigger'],
    getValues: getValues as FormaFormContext<T>['getValues'],
    handleSubmit: handleSubmitWrap
  }

  return (
    <>
      {title && <Text type="H3">{title}</Text>}
      {description && (
        <Text type="BTR3" style={{ marginBottom: 16 }}>
          {description}
        </Text>
      )}
      <Form onSubmit={handleSubmitWrap}>
        {config.fields.map((field) => (
          <FormaFieldController
            key={field.name}
            field={field}
            control={control as FormaFormContext<T>['control']}
            errors={errors}
          />
        ))}
        {renderActions
          ? renderActions(ctx)
          : (
            <Button
              mode="primary"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? '…' : config.submitLabel ?? 'Submit'}
            </Button>
          )}
      </Form>
    </>
  )
}
