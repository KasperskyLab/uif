import {
  Field,
  Textbox,
  Checkbox,
  Select,
  Toggle,
  Radio
} from '@kaspersky/hexa-ui'
import type { FormaFieldRendererProps } from './renderer.types'
import type { FormaCustomComponentId } from './field-config.types'
import { registerFormaFieldType } from './field-renderer-registry'
import { CUSTOM_COMPONENT_REGISTRY } from './custom-component-registry'

function commonProps(props: FormaFieldRendererProps) {
  return {
    label: props.fieldConfig.label,
    required: props.fieldConfig.required,
    message: props.error,
    messageMode: props.error ? ('error' as const) : undefined
  }
}

function TextFieldRenderer(props: FormaFieldRendererProps) {
  const { fieldConfig, value, onChange, onBlur, error } = props
  if (fieldConfig.type !== 'text') return null
  const { controlProps, placeholder } = fieldConfig
  return (
    <Field
      {...commonProps(props)}
      control={
        <Textbox
          {...controlProps}
          placeholder={placeholder}
          value={(value as string) ?? ''}
          onChange={onChange}
          onBlur={onBlur}
          validationStatus={error ? 'error' : undefined}
        />
      }
    />
  )
}

function EmailFieldRenderer(props: FormaFieldRendererProps) {
  const { fieldConfig, value, onChange, onBlur, error } = props
  if (fieldConfig.type !== 'email') return null
  const { controlProps, placeholder } = fieldConfig
  return (
    <Field
      {...commonProps(props)}
      control={
        <Textbox
          {...controlProps}
          placeholder={placeholder ?? 'you@example.com'}
          value={(value as string) ?? ''}
          onChange={onChange}
          onBlur={onBlur}
          validationStatus={error ? 'error' : undefined}
        />
      }
    />
  )
}

function PasswordFieldRenderer(props: FormaFieldRendererProps) {
  const { fieldConfig, value, onChange, error } = props
  if (fieldConfig.type !== 'password') return null
  const { controlProps, placeholder } = fieldConfig
  return (
    <Field
      {...commonProps(props)}
      control={
        <Textbox.Password
          {...controlProps}
          placeholder={placeholder ?? '••••••••'}
          value={(value as string) ?? ''}
          onChange={onChange}
          validationStatus={error ? 'error' : undefined}
        />
      }
    />
  )
}

function SelectFieldRenderer(props: FormaFieldRendererProps) {
  const { fieldConfig, value, onChange, onBlur, error } = props
  if (fieldConfig.type !== 'select') return null
  const { controlProps, placeholder, options } = fieldConfig
  return (
    <Field
      {...commonProps(props)}
      control={
        <Select
          {...controlProps}
          placeholder={placeholder}
          options={options}
          value={(value as string) || undefined}
          onChange={onChange}
          onBlur={onBlur}
          validationStatus={error ? 'error' : undefined}
        />
      }
    />
  )
}

function CheckboxFieldRenderer(props: FormaFieldRendererProps) {
  const { fieldConfig, value, onChange } = props
  if (fieldConfig.type !== 'checkbox') return null
  const { controlProps, children } = fieldConfig
  return (
    <Field
      label=""
      control={
        <Checkbox
          {...controlProps}
          checked={!!value}
          onChange={onChange}
        >
          {children ?? ''}
        </Checkbox>
      }
    />
  )
}

function ToggleFieldRenderer(props: FormaFieldRendererProps) {
  const { fieldConfig, value, onChange } = props
  if (fieldConfig.type !== 'toggle') return null
  const { controlProps } = fieldConfig
  return (
    <Field
      {...commonProps(props)}
      control={
        <Toggle
          {...controlProps}
          checked={!!value}
          onChange={onChange}
        />
      }
    />
  )
}

function RadioFieldRenderer(props: FormaFieldRendererProps) {
  const { fieldConfig, value, onChange } = props
  if (fieldConfig.type !== 'radio') return null
  const { controlProps, options } = fieldConfig
  return (
    <Field
      {...commonProps(props)}
      control={
        <Radio
          {...controlProps}
          options={options}
          value={value as string}
          onChange={(e) => onChange(e.target?.value)}
        />
      }
    />
  )
}

function TextareaFieldRenderer(props: FormaFieldRendererProps) {
  const { fieldConfig, value, onChange, onBlur, error } = props
  if (fieldConfig.type !== 'textarea') return null
  const { controlProps, placeholder } = fieldConfig
  return (
    <Field
      {...commonProps(props)}
      control={
        <Textbox.Textarea
          {...controlProps}
          placeholder={placeholder}
          value={(value as string) ?? ''}
          onChange={onChange}
          onBlur={onBlur}
          validationStatus={error ? 'error' : undefined}
        />
      }
    />
  )
}

function CustomFieldRenderer(props: FormaFieldRendererProps) {
  const { fieldConfig, value, onChange, onBlur, error } = props
  if (fieldConfig.type !== 'custom') return null
  const Component =
    CUSTOM_COMPONENT_REGISTRY[fieldConfig.component as FormaCustomComponentId]
  return (
    <Component
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      error={error}
      name={fieldConfig.name}
      label={fieldConfig.label}
      required={fieldConfig.required}
      props={fieldConfig.props}
    />
  )
}

function registerBuiltInFieldRenderers() {
  registerFormaFieldType('text', TextFieldRenderer)
  registerFormaFieldType('email', EmailFieldRenderer)
  registerFormaFieldType('password', PasswordFieldRenderer)
  registerFormaFieldType('select', SelectFieldRenderer)
  registerFormaFieldType('checkbox', CheckboxFieldRenderer)
  registerFormaFieldType('toggle', ToggleFieldRenderer)
  registerFormaFieldType('radio', RadioFieldRenderer)
  registerFormaFieldType('textarea', TextareaFieldRenderer)
  registerFormaFieldType('custom', CustomFieldRenderer)
}

registerBuiltInFieldRenderers()
