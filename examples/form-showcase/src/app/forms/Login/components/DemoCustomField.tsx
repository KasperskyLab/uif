import type { FormaCustomFieldProps } from '../../../../shared/Forma'

/**
 * Demo custom field: defined at the entity of usage (Login).
 * Registered in shared/Forma registry so it can be used as type: 'custom'.
 */
export function DemoCustomField({
  value,
  onChange,
  error,
  label,
  required
}: FormaCustomFieldProps) {
  return (
    <div style={{ marginBottom: 16 }}>
      {label && (
        <label style={{ display: 'block', marginBottom: 4 }}>
          {label}
          {required && ' *'}
        </label>
      )}
      <input
        type="text"
        value={(value as string) ?? ''}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Custom field (registered in Forma)"
        style={{
          padding: '8px 12px',
          border: error ? '1px solid #ff4d4f' : '1px solid #d9d9d9',
          borderRadius: 4,
          width: '100%',
          maxWidth: 400
        }}
      />
      {error && (
        <span style={{ color: '#ff4d4f', fontSize: 12, marginTop: 4 }}>
          {error}
        </span>
      )}
    </div>
  )
}
