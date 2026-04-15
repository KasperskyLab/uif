/**
 * Вспомогательные операции с **FileSystemDirectoryHandle** для каталога формы
 * (рядом со **`.schema.ts`**).
 */

/** Каталог, в котором лежит файл схемы (родитель по пути от корня рабочего каталога). */
export async function getFormDirectoryForSchemaPath(
  workspaceRoot: FileSystemDirectoryHandle,
  schemaRelativePath: string,
): Promise<FileSystemDirectoryHandle> {
  const parts = schemaRelativePath.replace(/\\/g, '/').split('/').filter(Boolean)
  if (parts.length <= 1) return workspaceRoot
  let current: FileSystemDirectoryHandle = workspaceRoot
  for (let i = 0; i < parts.length - 1; i++) {
    current = await current.getDirectoryHandle(parts[i])
  }
  return current
}

/** Имя файла схемы (последний сегмент пути), напр. **`demo.schema.ts`**. */
export function schemaFileNameFromPath(schemaRelativePath: string): string {
  const parts = schemaRelativePath.replace(/\\/g, '/').split('/').filter(Boolean)
  const last = parts[parts.length - 1]
  return last && last.length > 0 ? last : 'form.schema.ts'
}
