/**
 * Type definitions for File System Access API
 */
interface FileSystemHandle {
  readonly kind: 'file' | 'directory'
  readonly name: string
  isSameEntry(other: FileSystemHandle): Promise<boolean>
  queryPermission(descriptor?: FileSystemHandlePermissionDescriptor): Promise<PermissionState>
  requestPermission(descriptor?: FileSystemHandlePermissionDescriptor): Promise<PermissionState>
}

interface FileSystemHandlePermissionDescriptor {
  mode?: 'read' | 'readwrite'
}

interface FileSystemFileHandle extends FileSystemHandle {
  readonly kind: 'file'
  getFile(): Promise<File>
}

interface FileSystemDirectoryHandle extends FileSystemHandle {
  readonly kind: 'directory'
  getDirectoryHandle(name: string, options?: { create?: boolean }): Promise<FileSystemDirectoryHandle>
  getFileHandle(name: string, options?: { create?: boolean }): Promise<FileSystemFileHandle>
  entries(): AsyncIterableIterator<[string, FileSystemFileHandle | FileSystemDirectoryHandle]>
}

interface Window {
  showDirectoryPicker?(options?: { mode?: 'read' | 'readwrite' }): Promise<FileSystemDirectoryHandle>
}
